const regexDay = /(|วัน)(| |  |   |)(จันทร์|อังคาร|พุทธ|พฤหัส|ศุกร์|เสาร์|อาทิตย์)/gi
const regexDay2 = /(วัน|)(| |  |   |)(จันทร์|อังคาร|พุทธ|พฤหัส|ศุกร์|เสาร์|อาทิตย์)(   |  | |)(ที่|)(   |  | |)([0-9]|[0-9][0-9]|)/gi
const regexTime =  /([0-9]|[0-9][0-9])(| |  |   |)โมง/gi
const regexTime2 = /(ตี|บ่าย)(| |  |   |)([0-9]|[0-9][0-9])/gi
const regexTime3 = /([0-9]|[0-9][0-9])(|  |   )(.|:)(|  |   )([0-9][0-9])(| |  |   )(น|น.|นาฬิกา|)/gi
const regexDate = /วันที่(| |  |   )([1-9]|[0-9][0-9])/gi
const regexMonth = /(|เดือน)(| |  |   )(มกรา|กุมภา|มีนา|เมษา|พฤษภา|มิถุนา|กรกฎา|สิงหา|กันยา|ตุลา|พฤศจิกา|ธันวา)(คม|ยน|)/gi
const regexDay3 = /(วัน|วันที่|)(   |  | |)(จันทร์|อังคาร|พุทธ|พฤหัส|ศุกร์|เสาร์|อาทิตย์)(   |  | |)(ที่)(   |  | |)([0-9]|[0-9][0-9]|)/gi
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
    
     const regexTime =  /([1-2][0-9]|[0-9])(   |  | |)(โมง|ทุ่ม)(   |  | |)(เย็น|เช้า|)(   |  | |)([0-5][0-9]|[0-9]|)(   |  | |)(นาที|)/gi
     const regexTime2 = /(ตี|บ่าย)(   |  | |)([1-2][0-9]|[0-9])(   |  | |)(โมง|ทุ่ม|)/gi
     const regexTime3 = /(1?[0-9]|2[0-3])(:|\.)[0-5][0-9](   |  | |)(นาฬิกา|น.|)/gi
     const regexTime5 = /(1?[0-9]|2[0-3])(   |  | |)นาฬิกา(   |  | |)([0-5][0-9]|[0-9])(   |  | |)นาที/gi
  
     const regexTime4 = [ regexTime, regexTime2, regexTime3 ,regexTime5 ]
     const resultTimeRegex = regexTime4.map((v)=> s.match(v)).filter(cutNull).flatMap( (v) => v )  

   // console.log('resulttime',resultTimeRegex)   
     return  resultTimeRegex
}
 
//for extract date from sentense parameter is array of sentense 
function dateRegex (s) { 
      
     var b = s.replace(/([1-2][0-9]|[0-9])(   |  | |)(โมง|นาฬิกา)(   |  | |)([0-5][0-9]|[0-9])(   |  | |)(นาที)/gi,'')
     var c = b.replace(/([1-2][0-9]|[0-9])(   |  | |)โมง/g,'') 
     var d= c.replace(/[6-9][0-9](:|\.)([0-9][0-9]|[0-9])/g,'')
     var a = d.replace(/(1?[0-9]|2[0-3])(:|\.)[0-5][0-9]/gi,'')   
     
     console.log(a)
     //cut year //


     const answer = {}
     const regexPattern = [ /(เดือน|ของเดือน|)(   |  | |)(มกรา|กุมภา|มีนา|เมษา|พฤษภา|มิถุนา|กรกฎา|สิงหา|กันยา|ตุลา|พฤศจิกา|ธันวา|)(   |  | |)(คม|ยน|)(   |  | |)(\d\d\d\d|)(   |  | |)(วันนี้|วัน|)(   |  | |)(จันทร์|อังคาร|พุทธ|พุธ|พฤหัส|ศุกร์|เสาร์|อาทิตย์|)(   |  | |)(แรก|พรุ่งนี้|มะรืน|)(   |  | |)(ที่|)(   |  | |)([1-3][0-9]|[0-9]|)/gi     
     ,/(เดือน|ของเดือน|)(   |  | |)(มกรา|กุมภา|กุมภาพันธ์|มีนา|เมษา|พฤษภา|มิถุนา|กรกฎา|สิงหา|กันยา|ตุลา|พฤศจิกา|ธันวา|)(   |  | |)(คม|ยน|)(   |  | |)(\d\d\d\d|)(   |  | |)(ที่|)(   |  | |)([1-3][0-9]|[0-9]|)(   |  | |)(วันนี้|วัน|)(   |  | |)(จันทร์|อังคาร|พุทธ|พุธ|พฤหัส|ศุกร์|เสาร์|อาทิตย์|)(   |  | |)(แรก|พรุ่งนี้|มะรืน|)/gi
     ,/(วันที่|)(   |  | |)([1-3][0-9]|[0-9]|)(   |  | |)(วันนี้|วัน|)(   |  | |)(จันทร์|อังคาร|พุทธ|พุธ|พฤหัส|ศุกร์|เสาร์|อาทิตย์|)(   |  | |)(แรก|พรุ่งนี้|มะรืน|)(   |  | |)(เดือน|ของเดือน|)(   |  | |)(มกรา|กุมภา|มีนา|เมษา|พฤษภา|มิถุนา|กรกฎา|สิงหา|กันยา|ตุลา|พฤศจิกา|ธันวา|)(   |  | |)(คม|ยน|)(   |  | |)(\d\d\d\d|)/gi
     ,/(วันที่|)(   |  | |)([1-3][0-9]|[0-9]|)(   |  | |)(เดือน|ของเดือน|)(   |  | |)(มกรา|กุมภา|มีนา|เมษา|พฤษภา|มิถุนา|กรกฎา|สิงหา|กันยา|ตุลา|พฤศจิกา|ธันวา|)(   |  | |)(คม|ยน|)(   |  | |)(\d\d\d\d|)(   |  | |)(วันนี้|วัน|)(   |  | |)(จันทร์|อังคาร|พุทธ|พุธ|พฤหัส|ศุกร์|เสาร์|อาทิตย์|)(   |  | |)(แรก|พรุ่งนี้|มะรืน|)/gi
     ,/(วันนี้|วัน|)(   |  | |)(จันทร์|อังคาร|พุทธ|พุธ|พฤหัส|ศุกร์|เสาร์|อาทิตย์|แรก|พรุ่งนี้|มะรืน|)(   |  | |)(ที่|)(   |  | |)([1-3][0-9]|[0-9]|)(   |  | |)(เดือน|ของเดือน|)(   |  | |)(มกรา|กุมภา|มีนา|เมษา|พฤษภา|มิถุนา|กรกฎา|สิงหา|กันยา|ตุลา|พฤศจิกา|ธันวา|)(   |  | |)(คม|ยน|)(   |  | |)(\d\d\d\d|)/gi 
     ,/(วันนี้|วัน|)(   |  | |)(จันทร์|อังคาร|พุทธ|พุธ|พฤหัส|ศุกร์|เสาร์|อาทิตย์|แรก|พรุ่งนี้|มะรืน|)(   |  | |)(เดือน|ของเดือน|)(   |  | |)(มกรา|กุมภา|มีนา|เมษา|พฤษภา|มิถุนา|กรกฎา|สิงหา|กันยา|ตุลา|พฤศจิกา|ธันวา|)(   |  | |)(คม|ยน|)(   |  | |)(\d\d\d\d|)(   |  | |)(ที่|)(   |  | |)([1-3][0-9]|[0-9]|)/gi 
     ,]      
    const resulRegex = regexPattern.map((v)=> a.match(v).filter(isSpace))      
    console.log(resulRegex)
    const size = resulRegex.map((v)=> v.length )   
    return resulRegex[size.indexOf(Math.min(...size))].map((c) => c.trim()).filter(cutNumber) 
}
function createTimeWithCheck( timeR, hr   ){
   
    if(timeR.length==2){
              return { 'H':(parseInt( timeR[0])+hr).toString() , 'm':timeR[1] }
    }else {
              return { 'H':(parseInt( timeR[0])+hr).toString(), 'm': 0 }
    } 
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
        console.log(v)
           
     const timeR= v.match(timeNumber)    
     
     if( bai.test(v) || yen.test(v) ) {
        
        return createTimeWithCheck(timeR,12)           
     }else if(tee.test(v)) {
        
        return createTimeWithCheck(timeR,0)    
     }else if(toom.test(v)) {       
       
        return createTimeWithCheck(timeR,18)    
     }else if( mong.test(v)) {            
        if(timeR[0]<6){
           
           
          return createTimeWithCheck(timeR,6) 
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
   
  
     
    const dateNumbers = /([0-2][0-9]|[0-9]|[3][0-1])/
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
              // console.log('Yep')
                 
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
function replaceabbreviation (s)
{
   console.log(s)
   
   const word = [/จ\./g,/อ\./g,/พ\./g,/พฤ\./g,/ศ\./g,/ส\./g,/อา\./g,/วนน\./g,/วพนน\./g,/วมรร\./g,/วทท\./g]
  //  const word2 =[/จันทร์/gi,/อังคาร/gi,/พุธ/gi,/พฤหัส/gi,/ศุกร์/gi,/เสาร์/gi,/อาทิตย์/gi,/พรุ่งนี้/gi,/มะรืน/gi]
   const word2 =[/จันทร์/g,/อังคาร/g,/พุธ/g,/พฤหัส/g,/ศุกร์/g,/เสาร์/g,/อาทิตย์/g,/วันนี้/gi,/พรุ่งนี้/g,/มะรืน/g,/วันที่/g ]
   const fullword = ['จันทร์','อังคาร','พุธ','พฤหัสบดี','ศุกร์','เสาร์','อาทิตย์','วันนี้','วันพรุ่งนี้','วันมะรืน','วันที่']  
   const fullword3 =[ 'วันจันทร์','วันอังคาร','วันพุธ','วันพฤหัสบดี','วันศุกร์','วันเสาร์','วันอาทิตย์','วันนี้','วันพรุ่งนี้','วันมะรืน','วันที่']
   const strword = ['จ.','อ.','พ.','พฤ.','ศ.','ส.','อา.','วนน.','วพนน.','วมรร.','วทท.'] 
   const strword2=['จันทร์','อังคาร','พุธ','พฤหัสบดี','ศุกร์','เสาร์','อาทิตย์','นนี้','พรุ่งนี้','มะรืน','วันที่']   
         
  s = s.replace(/วันนี้/g,'วนน.')
  s = s.replace(/วันที่/g,'วทท.')
  s = s.replace(/วัน/g,'') 
                  console.log(s);    
 
   word.forEach((v,i)=>{ 
          while ((match = v.exec(s)) != null) {
            // console.log( v ,"match found at " + match.index);
              s = s.replace(strword[i],fullword[i])               
           //console.log(s)
          }      
   })  
  // console.log(s)
    word2.forEach((v,i)=>{ 
          while ((match = v.exec(s)) != null) {
           //  console.log( v ,"match found at " + match.index);
             s = s.replace( word2[i] , strword[i])         
         //  console.log(s)
          }      
   }) 
    word.forEach((v,i)=>{ 
          while ((match = v.exec(s)) != null) {
            //console.log( v ,"match found at " + match.index);
              s = s.replace(strword[i],fullword3[i])               
           // console.log(s)
          }      
   })  
 // console.log(s)
  return s
}

function splitWordWithPlusSign(s){     
    s= replaceabbreviation(s)
     
    const input =  spliteDate(s)
    // input.map((v)=>{
    //   v.replace('นี้','' )
    // })
    console.log(input)
    if(input === undefined) {
        const ans = thaiRegexTime(s)
        console.log(ans)
        if(ans === undefined) return
        else 
        { 
          //console.log(ans)
          var aa=[]
          aa.push(ans)  
         //  console.log(aa)    
        return aa
        }
    }        
   const anss=  input.map( v =>  thaiRegexTime(v) )  
   console.log(anss)  
   return anss
}

function spliteDate(s) {
   //const dateregex4 = /(วันนี้|วันพรุ่งนี้|วันมะรืน|วันที่)/g
   let original = s.substr(0)
    

   let resultposition  = []
   let resultOfOriginal = []
   const dateregexall =  [/วันจันทร์/gi,/วันอังคาร/gi,/วันพุธ/gi,/วันพฤหัส/gi,/วันศุกร์/gi,/วันเสาร์/gi,/วันอาทิตย์/gi,/วันนี้/gi,
   /วันพรุ่งนี้/gi,/วันมะรืน/gi,/วันที่/gi,
   /([1-2][0-9]|[0-9])(   |  | |)(มกรา|กุมภา|มีนา|เมษา|พฤษภา|มิถุนา|กรกฎา|สิงหา|กันยา|ตุลา|พฤศจิกา|ธันวา)/gi]
   s=s.replace(/\s/gi,'')    //เอาช่องว่างระหว่างคำออก 
   dateregexall.map((v)=>{     
      while ((match = v.exec(s)) != null) {       
           console.log(match)   
           resultposition.push(match.index)                      
        }   
   }) 
   dateregexall.map((v) =>{
     while ((match2 = v.exec(original)) != null) {       
           console.log(match2)   
           resultOfOriginal.push(match2.index)                      
        }
   })
   
   resultposition= resultposition.sort();
   temparray = resultposition.slice()
 
   resultOfOriginal = resultOfOriginal.sort()
   tempForOriginal = resultOfOriginal.slice()

   console.log(temparray)
   console.log(tempForOriginal)
   // กำจัด index ของคำที่ เป็นประโยคเดียวกัน วันจันทร์ 17 มกราคม =>['วันจันทร์','17 มกราคม' ] เป็นประโยคเดียวกัน  

   for(let i=0;i<resultposition.length-1;i++)
   {
        if(resultposition[i+1]-resultposition[i]<=10) //ในกรณีของวันจันทร์ นั้น จำนวนตัวอักษร เท่ากับ 9  วันอาทิตย์ เท่ากับ 10
        {
           console.log(resultposition[i+1],"++",resultposition[i])
           var index = resultposition.indexOf(resultposition[i+1])
           console.log("Match position:",index)
           temparray.splice(index,1)
           console.log(temparray)
           tempForOriginal.splice(index,1)
           console.log(tempForOriginal)
            
        }
   }
   //-------------------resultpostition=[0,18] เอาไปตัดคำ
  //  console.log(temparray)
  //  console.log(tempForOriginal)
     
   answer = []
   answerForOriginal = []

  if(temparray.length>1){
    for(let i=0;i<temparray.length;i++) 
   {
     if(i==0)
     {
      console.log(i)
      answer.push(s.substr(0, temparray[i]))
      answerForOriginal.push(original.substr(0, tempForOriginal[i]))
     }

     if(i==temparray.length-1)
     {
       
       answer.push(s.substr(temparray[i]))
       answerForOriginal.push(original.substr(tempForOriginal[i]))
       break;
     }
     // console.log(temparray[i],temparray[i+1])
     answer.push(s.substr(temparray[i],temparray[i+1]-temparray[i]))
     answerForOriginal.push(original.substr(tempForOriginal[i],tempForOriginal[i+1]-tempForOriginal[i]))
     
   }
  } else
  {
     answerForOriginal.push(original)
  }

  //  console.log(answer)
  //  console.log(answerForOriginal)
   //------------------------- 
   

 return answerForOriginal
}



// console.log(splitWordWithPlusSign(" อังคาร ไป 10 โมง  โรบินสันนะครับ   พุธ ไป พัทยา  เสาร์ วันอังคาร วันเสาร์  วันนี้ 9โมง 10 โมง อังคาร จันทร์นี้ 10 โมง 9 โมง 11:00  วันพรุ่งนี้ พรุ่งนี้ วันมะรืน  วันนี้ 5 ทุ่ม วันนี้ จะไปดูหนัง"))
// console.log(splitWordWithPlusSign(" ไปโรบินสัน 19.00 19:00"))
// console.log(splitWordWithPlusSign(" ไปโรบินสัน  "))
// console.log(splitWordWithPlusSign("วันอาทิตย์ ไปกินข้าวตอน 10.45 11 โมง 45 นาที โรบินสัน วันจันทร์ 8 โมง เรียนสัมนา ม.เกษตร ศรีราชา ไปเที่ยวทะเลพัทยา,ไหว้พระ พุทธมน 18:00"))
// console.log(splitWordWithPlusSign("วัน พุธ 8 โมง "))
// console.log(splitWordWithPlusSign("วัน พุธ 9 โมง 5 นาที "))
// console.log(splitWordWithPlusSign("วันนี้"))
// console.log(splitWordWithPlusSign("วันนี้ 9 โมง 50 นาที "))
// console.log(splitWordWithPlusSign("มะรืน "))
// console.log(splitWordWithPlusSign("มะรืน 14.25"))
// console.log(splitWordWithPlusSign("พรุ่งนี้"))
// console.log(splitWordWithPlusSign("พรุ่งนี้  13.22"))
// console.log(splitWordWithPlusSign("จันทร์ ไปโรบินสัน จัน ")) 
// console.log(splitWordWithPlusSign("จ.  "))
// console.log(splitWordWithPlusSign("อังคาร"))  //
// console.l og(splitWordWithPlusSign("อ"))
//console.log(splitWordWithPlusSign("พุทธ"))
// console.log(splitWordWithPlusSign("พุท"))
// console.log(splitWordWithPlusSign("พุทธ"))
// console.log(splitWordWithPlusSign("วันอังคาร 11.00 "))
// console.log(splitWordWithPlusSign("วันอังคาร 17.00 "))
// console.log(splitWordWithPlusSign("จ. 11.55 13.00 21.00 15.00  19.25  อ. 10.20   พุธ 14.00 วันพุธ 16.00  พ. 12.00  พฤ. 13.00  ศ. 6.30  ส. 11.50  อ. 14.23  อาทิตย์ 14.20 อังคาร 22.30 อาทิตย์ 15.00  พรุ่งนี้  มะรืน วันพรุ่งนี้ วันมะรืน"))//ไม่ใช่วันนี้เป็น 7.00 
// console.log(splitWordWithPlusSign("  ากาด่วห่กด"))
 // console.log(splitWordWithPlusSign("วันที่ 24 ไป วันจันทร์ จตุจักร  จันทร์ ไปโรบินสัน "))
//console.log(splitWordWithPlusSign("พฤษภาคม"))
// 15 เมษา ไปโร วันพรุ่งนี้ ไป พัทยา  
//console.log(splitWordWithPlusSign("วันจันทร์ ไปซื้อของ 17 มกราคม โรบินสัน พัทยา วันอังคารไปเที่ยว นะ"))
//console.log(splitWordWithPlusSign("วันจันทร์ 22.30  วันอังคาร 11.25  วันศุกร์ 13.00 วันอาทิตย์ ไปกินข้าวตอน 10.45 11 โมง 45 นาที วันเสาร์ 13.20"))
// console.log(splitWordWithPlusSign("วันจันทร์ ไปซื้อของ 17 มกราคม โรบินสัน พัทยา วันอังคารไปเที่ยว นะ จันทร์1 พฤษภา 11.00 "))
// console.log( splitWordWithPlusSign("อา. 10.25 7 โมง 50 นาที 23 นาฬิกา 9 นาที "))
// console.log(splitWordWithPlusSign("17 มกราคม โรบินสัน พัทยา"))
//console.log(splitWordWithPlusSign("วัน พุธ 8 โมง  99.99 88:89 77:87  8896"))
// console.log(splitWordWithPlusSign("วันอาทิตย์  ไปโรบินสัน และ วัน อังคาร ไป พัทยา วันอาทิตย์   "))

 // console.log(splitWordWithPlusSign("เลย์ ห่อใหญ่ นมกล่องใหญ่ วันอังคาร 8 โมง กาแฟ 1 กล่อง  วันศุกร์  9 โมง "))
 //   console.log(splitWordWithPlusSign("เลย์ ห่อใหญ่ นมกล่องใหญ่ tuesday 8 am.  กาแฟ 1 กล่อง friday 9 am. "))
//console.log(splitWordWithPlusSign("วันเสาร์ ไปโรบินสัน และ วัน อังคาร ไป พัทยา"))

//console.log(splitWordWithPlusSign('31 เมษายน 10 ไป10 7 โมงเช้า 6โมงเจอกัน  10.00 บ่าย 3 บ่าย 4 โมง 3 ทุ่ม 9.56 น. ตี 2  6 โมงเย็น  จันทร์ นี้ ไป โร 9 โมง  11:00 น. 7 โมงงง '))

//console.log(splitWordWithPlusSign("กาลครั้งหนี่งนานมาแล้ววันที่19 มิถุนา 4856 ฉันไปกินข้าวกับเพื่อน"))
//console.log(splitWordWithPlusSign("วันนี้มีนัดให้ไปหาเพื่อน วันพรุ่งนี้"))
// console.log(splitWordWithPlusSign("12:00 13:30 23:34 ไป พัทยา"))
//console.log(splitWordWithPlusSign("วันจันทร์ ไปพัทยา วันจันทร์ ไปเชียงราย"))
//  console.log(splitWordWithPlusSign(""))