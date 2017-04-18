Array.prototype.flatMap = function(lambda) { 
    return Array.prototype.concat.apply([], this.map(lambda)); 
}
// var text3 = [ '31 เมษายน','10 ไป10','7 โมงเช้า 6โมงเจอกัน ','10.00 บ่าย 3 บ่าย 4 โมง 3 ทุ่ม 9.56 น. ตี 2  6 โมงเย็น ','จันทร์ นี้ ไป โร 9 โมง  11:00 น.' ,'7 โมงงง','ธันวา',
// 'มีนา 29 ไป สอบ 9 โมง ','วัน จันทร์ 10 โมง ไปโรบินสัน ไปตลาด วันอังคาร ไป 9โมง วันเสาร์','เมษา จ่ายค่าบ้าน ','วันที่  5มีนาคม  ',' ตอนเย็นวันจะไปกินข้าว',' พุทธ นี้ ไป แมคโคร ตอนตี 3',' ของวันมะรืน ','ในวันแรกของเดือนมกราจะไป ดูหนัง ','อีก 15 นาทีไป โร','อีก 15 นาทีหลังเที่ยงคืนของวันศุกร์จะนอน ','วันที่ 29 กุมภาพันธ์ เป็นวันเกิด','วันจันทร์ ที่ 12 เดือน กุมภา ไปนอก','วันศุกร์ 24 มีนา ','วันที่ 2  ธันวา','9:00 น. วันจันทร์คืนหนังสือนะ','วันที่ 12  11:00 นาฬิกา','15 เมษา','วัน อังคาร  24 พฤษภา']
const cutNull = function (s){  
  return s!==null && s!==undefined 
}
const isSpace = function(v){ 
             
       return (v!=="")&&(v!==" ")&&(v!=="   ")&&(!(/^\s+$/.test(v)))
}
const cutNumber = function(v) {
  return !(/^[0-9]*$/.test(v))
}


function timeRegex(s) {
    
    s= s.replace(/[6-9][0-9](:|\.)([0-9][0-9]|[0-9])/g,'')
    s= s.replace(/\d\d\d\d/g,'')
    console.log(s)
     const regexTime2 = /(ตี|บ่าย)(   |  | |)([1-5])/gi
     const regexTime22 = /(ตี|บ่าย)(   |  | |)([1-5])(   |  | |)([0-5][0-9]|[0-9]|)(   |  | |)นาที/gi
     

    
     const regexTime33 = /([1-9]|[0-1][0-2])(   |  | |)(โมง|ทุ่ม)(   |  | |)(เย็น|เช้า|)(   |  | |)([0-5][0-9]|[0-9])(   |  | |)นาที/gi    
     const regexTime3 =  /([1-9]|[0-1][0-2])(   |  | |)(โมง|ทุ่ม)(เย็น|เช้า|)/gi 

     const regexTime5 = /(1?[0-9]|2[0-3])(:|\.)[0-5][0-9](   |  | |)(นาฬิกา|น.|)/gi
     const regexTime55= /(1?[0-9]|2[0-3])(   |  | |)นาฬิกา(   |  | |)([0-5][0-9]|[0-9])(   |  | |)นาที/gi 

     const regexTime4 = [ regexTime2,regexTime22,regexTime33, regexTime3, regexTime5 ,regexTime55 ]
    
     const resultTimeRegex = regexTime4.map((v)=>{                  
        const a = s.match(v)         
          if(a!==null)
          a.map((ss)=>{           
            s=s.replace(ss,"")
          })         
        console.log(s)
        return a
      }).filter(cutNull).flatMap( (v) => v )
       
   
   console.log('resulttime',resultTimeRegex)   
     return  resultTimeRegex
}
 
//for extract date from sentense parameter is array of sentense 
function splitDate (s) { 
   // s=" วันอาทิตย์ ไปกินข้าวตอน 10.45 11 โมง 45 นาที โรบินสัน  จันทร์ 8 โมง เรียนสัมนา ม.เกษตร ศรีราชา ไปเที่ยวทะเลพัทยา,ไหว้พระ พุทธมน 18:00"    
     console.log(s)
    //  var b = s.replace(/([1-2][0-9]|[0-9])(   |  | |)(โมง|นาฬิกา)(   |  | |)([0-5][0-9]|[0-9])(   |  | |)(นาที)/gi,'')
    //  var c = b.replace(/([1-2][0-9]|[0-9])(   |  | |)โมง/g,'') 
    //  var d= c.replace(/[6-9][0-9](:|\.)([0-9][0-9]|[0-9])/g,'')
    //  var a = d.replace(/(1?[0-9]|2[0-3])(:|\.)[0-5][0-9]/gi,'')   
  //   a= "9 โมง เสาร์หน้า เดือนหน้า ปีหน้า 12-05-17   าาสกดาาสดก 23 ธ.ค 60 สดก่าดก31/01/60 31 ม.ค 60 12-5-17 31/1/60 17 มิถุนายน ไป จันทร์ อีก 2 สัปดาห์ ไป เกาหลี พัทยา ธันวาคม 25 คริสมาส เดือน สิงหาคม กลับ ม. 30 เดือน 4   31 ธันวาคม 2560 ไปเที่ยวนะ อีก 10 วัน ไปดรีมเวิล อีก 2 เดือน ไป สอบ อีก 1 ปี อย่าลืม 29 เดือน 4  วันมะรืน ะเเเกเหกดเ  มะรืน เหกดเด พรุ่งนี้ ดกดกดฟด วันพรุ่งนี้ดฟหด   วันนี้ดเกะั ดดกด 7-  10 พฤษภาคม"
    let a = s
     if( /เดือน(   |  | |)([1-3][0-9]|[0-9])/g.test(a))
     {      
       a= a.replace(/เดือน(   |  | |)12/g,'ธันวาคม')
       a= a.replace(/เดือน(   |  | |)11/g,'พฤษจิกายน')
       a= a.replace(/เดือน(   |  | |)10/g,'ตุลาคม')
       a= a.replace(/เดือน(   |  | |)9/g,'กันยายน')
       a= a.replace(/เดือน(   |  | |)8/g,'สิงหาคม')
       a= a.replace(/เดือน(   |  | |)7/g,'กรกฏาคม')
       a= a.replace(/เดือน(   |  | |)6/g,'มิถุนายน')
       a= a.replace(/เดือน(   |  | |)5/g,'พฤษภาคม')
       a= a.replace(/เดือน(   |  | |)4/g,'เมษายน')
       a= a.replace(/เดือน(   |  | |)3/g,'มีนาคม')
       a= a.replace(/เดือน(   |  | |)2/g,'กุมภา')
       a= a.replace(/เดือน(   |  | |)1/g,'มกราคม')
     }
     if(/(ม\.ค|ก\.พ|มี\.น|เม\.ย|พ\.ค|มิ\.ย|ก\.ค|ส\.ค|ก\.ย|ต\.ค|พ\.ย|ธ\.ค)(\.|)/g.test(a))
     {
       a= a.replace(/ธ.ค(\.|)/g,'ธันวาคม')
       a= a.replace(/พ.ย(\.|)/g,'พฤษจิกายน')
       a= a.replace(/ต.ค(\.|)/g,'ตุลาคม')
       a= a.replace(/ก.ย(\.|)/g,'กันยายน')
       a= a.replace(/ส.ค(\.|)/g,'สิงหาคม')
       a= a.replace(/ก.ค(\.|)/g,'กรกฏาคม')
       a= a.replace(/มิ.ย(\.|)/g,'มิถุนายน')
       a= a.replace(/พ.ค(\.|)/g,'พฤษภาคม')
       a= a.replace(/เม.ย(\.|)/g,'เมษายน')
       a= a.replace(/มี.ค(\.|)/g,'มีนาคม')
       a= a.replace(/ก.พ(\.|)/g,'กุมภา')
       a= a.replace(/ม.ค(\.|)/g,'มกราคม')
     }

     console.log(a)
  
     const answer = {}
     const regexPattern = [ /^(เดือน|)(   |  | |)(มกราคม|กุมภา|มีนาคม|เมษายน|พฤษภาคม|มิถุนายน|กรกฎาคม|สิงหาคม|กันยายน|ตุลาคม|พฤศจิกายน|ธันวาคม)(   |  | |)(\d\d\d\d|)(   |  | |)(วัน|)(   |  | |)(จันทร์|อังคาร|พุธ|พฤหัส|ศุกร์|เสาร์|อาทิตย์|)(   |  | |)(3[0-1]|[1-2][0-9]|[0-9]|)/gi     
     ,/^(เดือน|)(   |  | |)(มกราคม|กุมภา|มีนาคม|เมษายน|พฤษภาคม|มิถุนายน|กรกฎาคม|สิงหาคม|กันยายน|ตุลาคม|พฤศจิกายน|ธันวาคม)(   |  | |)(\d\d\d\d|)(   |  | |)(3[0-1]|[1-2][0-9]|[0-9]|)(   |  | |)(วัน|)(   |  | |)(จันทร์|อังคาร|พุธ|พฤหัส|ศุกร์|เสาร์|อาทิตย์|)(   |  | |)/gi
     ,/^(วันที่|)(   |  | |)(3[0-1]|[1-2][0-9]|[0-9]|)(   |  | |)(วัน|)(   |  | |)(จันทร์|อังคาร|พุธ|พฤหัส|ศุกร์|เสาร์|อาทิตย์|)(   |  | |)(เดือน|)(   |  | |)(มกราคม|กุมภา|มีนาคม|เมษายน|พฤษภาคม|มิถุนายน|กรกฎาคม|สิงหาคม|กันยายน|ตุลาคม|พฤศจิกายน|ธันวาคม)(   |  | |)(\d\d\d\d|)/gi
     ,/^(3[0-1]|[1-2][0-9]|[0-9]|)(   |  | |)(เดือน|)(   |  | |)(มกราคม|กุมภา|มีนาคม|เมษายน|พฤษภาคม|มิถุนายน|กรกฎาคม|สิงหาคม|กันยายน|ตุลาคม|พฤศจิกายน|ธันวาคม)(   |  | |)(\d\d\d\d|)(   |  | |)(วัน|)(   |  | |)(จันทร์|อังคาร|พุธ|พฤหัส|ศุกร์|เสาร์|อาทิตย์|)(   |  | |)/gi
     ,/^(วัน|)(   |  | |)(จันทร์|อังคาร|พุธ|พฤหัส|ศุกร์|เสาร์|อาทิตย์)(   |  | |)(3[0-1]|[1-2][0-9]|[0-9]|)(   |  | |)(เดือน|)(   |  | |)(มกราคม|กุมภา|มีนาคม|เมษายน|พฤษภาคม|มิถุนายน|กรกฎาคม|สิงหาคม|กันยายน|ตุลาคม|พฤศจิกายน|ธันวาคม)(   |  | |)(\d\d\d\d|)/gi 
     ,/^(วัน|)(   |  | |)(จันทร์|อังคาร|พุธ|พฤหัส|ศุกร์|เสาร์|อาทิตย์)(   |  | |)(เดือน|)(   |  | |)(มกราคม|กุมภา|มีนาคม|เมษายน|พฤษภาคม|มิถุนายน|กรกฎาคม|สิงหาคม|กันยายน|ตุลาคม|พฤศจิกายน|ธันวาคม)(   |  | |)(\d\d\d\d|)(   |  | |)(3[0-1]|[1-2][0-9]|[0-9]|)/gi 
     ,/^(\d\d|\d)\/(\d\d|\d)\/(\d\d|\d)/gi
     ,/^(\d\d|\d)-(\d\d|\d)-(\d\d|\d)/gi
     ,/^วัน(จันทร์|อังคาร|พุธ|พฤหัส|ศุกร์|เสาร์|อาทิตย์)/gi
     ,/^(จันทร์|อังคาร|พุธ|พฤหัส|ศุกร์|เสาร์|อาทิตย์)/gi
     ,/^(วันนี้|วันพรุ่งนี้|วันมะรืน)/gi
     ,/^(\d\d|\d)(   |  | |)-(   |  | |)(\d\d|\d)(   |  | |)(มกราคม|กุมภา|มีนาคม|เมษายน|พฤษภาคม|มิถุนายน|กรกฎาคม|สิงหาคม|กันยายน|ตุลาคม|พฤศจิกายน|ธันวาคม)/gi
     ,/^อีก(   |  | |)(\d\d\d|\d\d|\d)(   |  | |)(วัน|สัปดาห์|เดือน|ปี)/gi     
     ]      
    let temp = a.substr(0)
    let anss = []
    let st=""
    let stss = []
    while(temp.length>0)
    {      
      const resulRegex = regexPattern.map((v)=> {
      return v.exec(temp)
      }).filter((v)=> v!= null)
      //console.log(resulRegex)
      let tempb = resulRegex.map((v)=>v[0])      
      let mxi = -1
      let mxv = 0
      //console.log(temp)
      //console.log(tempb)
      tempb.forEach((v,i)=>{           
            if(v.trim().length>mxv)
            {               
              mxv=v.trim().length
              mxi=i
            }
      })      
      if(tempb[mxi]!==undefined){
        
        if(tempb.length>0){
          stss.push(st)
          anss.push(tempb[mxi]) 
          st=tempb[mxi]        
          temp=temp.substr(tempb[mxi].length)          
        }
        else{
          st+=temp[0]
          temp=temp.substr(1)
        }
     }
     else
     { 
       st+=temp[0]
       temp=temp.substr(1)
     }
  } 
  stss.push(st)
 stss= stss.filter((v)=>{
    return v!==" "
  })
   console.log(a)
   console.log(anss)
   console.log(stss)
   
   //-----ตัดคำ
   let senti = []
   let sent = []
   anss.map((v)=>{
     senti.push(a.search(v))
   })
   console.log(senti)
   for(let i=0;i<senti.length-1;i++)
   {
     //console.log(senti[i])
     //console.log(stss[i])
     if(i==0 && senti[i]!==0){
       console.log(a)
     }
     sent.push(a.substr(senti[i],senti[i+1]-senti[i]))
   }
  
 return stss
}

function convertTimeToNumber( s ) {
     console.log(s)
     const timeNumber =   /(\d\d|\d)/gi     
     const mong = /โมง/  
     const naliga = /นาฬิกา/ 
     const natee = /นาที/
     const bai = /บ่าย/
     const tee = /ตี/
     const toom = /ทุ่ม/
     const shao = /เช้า/
     const yen = /เย็น/       
     const ac= s.map( (v) =>{
     
           
     const timeR= v.match(timeNumber)    
     //console.log(timeR)
     
     if( bai.test(v) || yen.test(v) ) {
        
        return createTimeWithCheck(timeR,12)           
     }else if(tee.test(v)) {
        
        return createTimeWithCheck(timeR,0)    
     }else if(toom.test(v)) {       
       
        return createTimeWithCheck(timeR,18)    
     }else if( mong.test(v)) {            
        if(timeR[0]<6){
           if(shao.test(v)){
              return createTimeWithCheck(timeR,6) 
           }
           
          return createTimeWithCheck(timeR,12) 
        }else if(timeR[0]!=6 ){
                  
                   return createTimeWithCheck(timeR,0)    
              }else{
                    if(timeR.length==2){
                      return { 'H':timeR[0] , 'm':timeR[1] , 'o' : 'chao or yen' }
                    }else {
                      return { 'H':timeR[0], 'm': 0 , 'o' : 'chao or yen'  }
                    }
             }             
    }else if(naliga.test(v)){
       return createTimeWithCheck(timeR,0)

    }else{
        
       return createTimeWithCheck(timeR,0)    
     }      
  })   
   const result = {'input': s, 'result': ac}
 console.log('ttt',result)
  return result
}

function convertDateToNumber( s ) {   //return {input,[]result }
    if(s[0]!==undefined)
    s[0]=s[0].replace(/\d\d\d\d/g,'')

    const date = [/(จันทร์)/,/(อังคาร)/,/(พุ(ท|)ธ)/,/พฤหัส/,/ศุกร์/,/เสาร์/,/อาทิตย์/]
    const datespec = [/วันนี้/,/พรุ่งนี้/,/มะรืน/]
   
  
     
    const dateNumbers = /(\d\d|\d)/
    const month = [/มกรา/,/กุมภา/,/มีนา/,/เมษา/,/พฤษภา/,/มิถุนา/,/กรกฎา/,/สิงหา/,/กันยา/,/ตุลา/,/พฤศจิกา/,/ธันวา/]
    const dateEng = ['monday','tuesday','wednes','thursday','friday','saturday','sunday']
   //check วันนี้ 
    const datespec2 = datespec.map((v , j)=> {
     
      if(v.test(s)!=false)
      {
        return j
      }
    }).filter(cutNull)
   //console.log(s, datespec2 )
   
     const dateresult= date.map( (v , j)=> {
      if(v.test(s) !== false )
      {
        return j+1
      }    
    }).filter(cutNull)
    const monthresult = month.map( (v , j)=>{
     if(  v.test(s) !== false )
      {
        return j
      }
  }).filter(cutNull)
    
    const dateNumberresult = s.map((v)=>{     
      const cv= v.match(dateNumbers) 
       
      if(cv !== null) 
      return  cv[0]      
     else return '' } ).filter(isSpace)     
    
  
  const result= { 'datenumber':  parseInt( dateNumberresult[0]) , 'date': dateresult[0] ,  'month': monthresult[0] ,'option': datespec2[0]  }
  console.log(result)
  const timeObj=  { 'time': result  , 'strDate': s }
  return timeObj 
}


function convertTime( s ) {
    if (s===[] ) return 

     const regexTime =  /([1-2][0-9]|[0-9])(   |  | |)โมง/gi 

     if(regexTime.test(s) !== false )
     {

       const result = /(\d\d|\d)/
       const resultMatch = s.match(result)
      // console.log(resultMatch[0])
      
     }
     const regexTime2 = /(ตี|บ่าย)(   |  | |)([1-2][0-9]|[0-9])/gi
     const regexTime3 = /(1?[0-9]|2[0-3]):[0-5][0-9](   |  | |)(นาฬิกา|น.|)/gi
}
  
 function createTimeObject(date,h,m)
 {      
   console.log(date)
     
        // วันที่ 12  or  วัน จันทร์ ที่ 15  ==> เดือนนี้
      if( ( !isNaN(date.datenumber) && date.date === undefined && date.month === undefined ) || ( !isNaN(date.datenumber) && date.date !== undefined && date.month === undefined ) ) {         

         // console.log('Match Date number ',dateR)
          const dateR = moment().date(date.datenumber).hour(parseInt(h)).minute(parseInt(m))
          return dateR
      } else if ( isNaN(date.datenumber) && date.date !== undefined && date.month === undefined) {  // วัน อังคาร   ==> เดือนนี้   
        //
            if(moment().isoWeekday() == date.date){  // วันอังคาร แบบ ไม่ระบุ เวลา เท่ากับ วันนี้ รึป่าว
                console.log('Yep')
                 
                if( moment().isoWeekday(date.date).hour(parseInt(h)).minute(parseInt(m)) > moment().isoWeekday(date.date)  ) {   //เชคเวลาว่า ผ่านไปรึยัง 
                  //console.log('Match day of week',dateR)       
                         
                    const dateR = moment().isoWeekday(date.date).hour(parseInt(h)).minute(parseInt(m))
                    return dateR
                }
                else {
            
                  const dateR = moment().isoWeekday(date.date).add(1,'week').hour(parseInt(h)).minute(parseInt(m))
                  return dateR
                }
            }              
           else  { // วันไม่เท่าวันนี้ จะ บวก 1 อาทิตย์

                 if(moment().isoWeekday(date.date)< moment()) //เช็คว่า วันนั้นๆในสัปดาห์ ผ่านมาแล้วหรือยัง ถ้าผ่านมาแล้ว จะ+1 week
                 {
                         
                         const dateR = moment().isoWeekday(date.date).add(1,'week').hour(parseInt(h)).minute(parseInt(m))
                          return dateR

                 }else  if(moment().isoWeekday(date.date)> moment()) {
                        const dateR = moment().isoWeekday(date.date).hour(parseInt(h)).minute(parseInt(m))
                         return dateR
                 }
                //console.log('Match day of week 2',dateR)
                               
          }           
    } else  if( isNaN(date.datenumber) && date.date === undefined && date.month !== undefined)     {            // มีนาคม ==> วันแรก ของ เดือนนั้นๆ
            const dateR = moment().month(date.month).date(1).hour(parseInt(h)).minute(parseInt(m))
            console.log('Match Month  ',dateR)
            return dateR
    } else if( !isNaN(date.datenumber) && date.date !== undefined && date.month === undefined)   {          
          const dateR = moment().date(date.datenumber).hour(parseInt(h)).minute(parseInt(m))
          console.log('Match Date number ',dateR)
          return dateR
    } else if( ( !isNaN(date.datenumber) && date.date !== undefined && date.month !== undefined ) || (!isNaN(date.datenumber) && date.date === undefined && date.month !== undefined) )  {  //วัน จันทร์ 14 มีนา or 15 เมษา  => มีวันที่แล้ว
          const dateR = moment().date(date.datenumber).month(date.month).hour(parseInt(h)).minute(parseInt(m))
          console.log('datenumber date month',dateR)
          return dateR
    } else if(  isNaN(date.datenumber) && date.date === undefined && date.month === undefined ) { //ไม่ระบุ วันที่  
           let DateR
           if(date.option!=undefined){
               //console.log('match case today')
               switch(date.option)
               {
                 case 0: dateR = moment().hour(parseInt(h)).minute(parseInt(m))  
                        break
                 case 1: dateR = moment().add(1,'day').hour(parseInt(h)).minute(parseInt(m))  
                        break 
                 case 2: dateR = moment().add(2,'day').hour(parseInt(h)).minute(parseInt(m))  
                        break       
               }              
           }
           else {
           
            dateR = moment().hour(parseInt(h)).minute(parseInt(m))   
           }                  
               
        return dateR
      }
}
function mergeAndCreateDateAndTime ( time, date) 
{
     console.log(date, time)
     if(time.result.length!=0){
        return time.result.map( (v) => {         
          if(v !== undefined )                 
          return createTimeObject(date.time,v.H,v.m)
        })
     } else {        
       if( date.strDate.length!=0)
       console.log(date)
          return  date.strDate.map((v) => {
              if( v ==='วันนี้'){
                
                 return createTimeObject(date.time,moment().hour(),moment().minute())
              }
              else 
              {
                 return createTimeObject(date.time,7,0)
              }
           })
       
     }

}
function thaiRegexTime( v ) {           
          const resultTime  = convertTimeToNumber(timeRegex(v))
          const resultDate =  convertDateToNumber(dateRegex(v))
          //console.log("-----------------------------------------")
          //console.log('input ',v)         
          const a = mergeAndCreateDateAndTime(resultTime,resultDate)
          // console.log('output',a)
          //console.log("-----------------------------------------")

          const result =  {'input': v , 'output': a ,'resultdate':resultDate.strDate,'resultTime':resultTime.input }
          //console.log(result) 
         return   result
}

function splitWordWithPlusSign(s){          
     
    const input =  splitDate(s).filter(isSpace)
    console.log(input)

  //   if(input === undefined) {
  //       const ans = thaiRegexTime(s)
  //       console.log(ans)
  //       if(ans === undefined) return
  //       else 
  //       { 
  //         //console.log(ans)
  //         var aa=[]
  //         aa.push(ans)  
  //        //  console.log(aa)    
  //       return aa
  //       }
  //   }        
  //  const anss=  input.map( v =>  thaiRegexTime(v) )  
  //  console.log(anss)  
  //  return anss
}


console.log(splitWordWithPlusSign(" อังคาร ไป 10 โมง  โรบินสันนะครับ   พุธ ไป พัทยา  เสาร์ วันอังคาร วันเสาร์  วันนี้ 9โมง 10 โมง อังคาร จันทร์นี้ 10 โมง 9 โมง 11:00  วันพรุ่งนี้ พรุ่งนี้ วันมะรืน  วันนี้ 5 ทุ่ม วันนี้ จะไปดูหนัง"))
console.log(splitWordWithPlusSign(" ไปโรบินสัน 19.00 19:00"))
console.log(splitWordWithPlusSign(" ไปโรบินสัน  "))
console.log(splitWordWithPlusSign("วันอาทิตย์ ไปกินข้าวตอน 10.45  11 โมง    11 โมง 45 นาที  12 โมง 45 นาที  โรบินสัน วันจันทร์ 8 โมง เรียนสัมนา ม.เกษตร ศรีราชา ไปเที่ยวทะเลพัทยา,ไหว้พระ พุทธมน 18:00"))
console.log(splitWordWithPlusSign("วัน พุธ 8 โมง "))
console.log(splitWordWithPlusSign("วัน พุธ 9 โมง 5 นาที "))
console.log(splitWordWithPlusSign("วันนี้"))
console.log(splitWordWithPlusSign("วันนี้ 9 โมง 50 นาที "))
console.log(splitWordWithPlusSign("มะรืน "))
console.log(splitWordWithPlusSign("มะรืน 14.25"))
console.log(splitWordWithPlusSign("พรุ่งนี้"))
console.log(splitWordWithPlusSign("พรุ่งนี้  13.22"))
console.log(splitWordWithPlusSign("จันทร์ ไปโรบินสัน จัน ")) 
console.log(splitWordWithPlusSign("จ.  "))
console.log(splitWordWithPlusSign("อังคาร"))  //
console.log(splitWordWithPlusSign("อ"))
console.log(splitWordWithPlusSign("พุทธ"))
console.log(splitWordWithPlusSign("พุท"))
console.log(splitWordWithPlusSign("พุทธ"))
console.log(splitWordWithPlusSign("วันอังคาร 11.00 "))
console.log(splitWordWithPlusSign("วันอังคาร 17.00 "))
console.log(splitWordWithPlusSign("จ. 11.55 13.00 21.00 15.00  19.25  อ. 10.20   พุธ 14.00 วันพุธ 16.00  พ. 12.00  พฤ. 13.00  ศ. 6.30  ส. 11.50  อ. 14.23  อาทิตย์ 14.20 อังคาร 22.30 อาทิตย์ 15.00  พรุ่งนี้  มะรืน วันพรุ่งนี้ วันมะรืน"))//ไม่ใช่วันนี้เป็น 7.00 
console.log(splitWordWithPlusSign("  ากาด่วห่กด"))
console.log(splitWordWithPlusSign("วันที่ 24 ไป วันจันทร์ จตุจักร  จันทร์ ไปโรบินสัน "))
console.log(splitWordWithPlusSign("พฤษภาคม"))

console.log(splitWordWithPlusSign("วันจันทร์ ไปซื้อของ 17 มกราคม โรบินสัน พัทยา วันอังคารไปเที่ยว นะ"))
console.log(splitWordWithPlusSign("วันจันทร์ 22.30  วันอังคาร 11.25  วันศุกร์ 13.00 วันอาทิตย์ ไปกินข้าวตอน 10.45 11 โมง 45 นาที วันเสาร์ 13.20"))
console.log(splitWordWithPlusSign("วันจันทร์ ไปซื้อของ 17 มกราคม โรบินสัน พัทยา วันอังคารไปเที่ยว นะ จันทร์1 พฤษภา 11.00 "))
console.log( splitWordWithPlusSign("อา. 10.25 7 โมง 50 นาที 23 นาฬิกา 9 นาที "))
console.log(splitWordWithPlusSign("17 มกราคม โรบินสัน พัทยา"))
console.log(splitWordWithPlusSign("วัน พุธ 8 โมง  99.99 88:89 77:87  8896"))
console.log(splitWordWithPlusSign("วันอาทิตย์  ไปโรบินสัน และ วัน อังคาร ไป พัทยา วันอาทิตย์   "))

console.log(splitWordWithPlusSign("เลย์ ห่อใหญ่ นมกล่องใหญ่ วันอังคาร 8 โมง กาแฟ 1 กล่อง  วันศุกร์  9 โมง "))
console.log(splitWordWithPlusSign("เลย์ ห่อใหญ่ นมกล่องใหญ่ tuesday 8 am.  กาแฟ 1 กล่อง friday 9 am. "))
console.log(splitWordWithPlusSign("วันเสาร์ ไปโรบินสัน และ วัน อังคาร ไป พัทยา"))

console.log(splitWordWithPlusSign('31 เมษายน 10 ไป10 7 โมงเช้า 6 โมงเจอกัน  10.00 บ่าย 3 บ่าย 4 โมง 3 ทุ่ม 9.56 น. ตี 2  6 โมงเย็น  จันทร์ นี้ ไป โร 9 โมง  11:00 น. 7 โมงงง '))

console.log(splitWordWithPlusSign("กาลครั้งหนี่งนานมาแล้ววันที่19 มิถุนา 4856 ฉันไปกินข้าวกับเพื่อน"))
console.log(splitWordWithPlusSign("วันนี้มีนัดให้ไปหาเพื่อน วันพรุ่งนี้"))
console.log(splitWordWithPlusSign("12:00 13:30 23:34 ไป พัทยา"))
console.log(splitWordWithPlusSign("วันจันทร์ ไปพัทยา วันจันทร์ ไปเชียงราย"))
console.log(splitWordWithPlusSign(""))
console.log(splitWordWithPlusSign("วันจันทร์ 4 โมงเย็น 4 โมงเช้า 15 นาที 10 โมง 25 "))
console.log(splitWordWithPlusSign("3 ทุ่ม ซ้อมทีม"))
console.log(splitWordWithPlusSign("วันจันทร์ 9 ไปเที่ยวกับแม่ ที่ จันทบุรี"))
console.log(splitWordWithPlusSign("30 เดือน 4"))
// console.log(splitWordWithPlusSign("31 ธ.ค 60"))