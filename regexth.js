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
    console.log(s)
     const regexTime =  /([1-2][0-9]|[0-9])(   |  | |)(โมง|ทุ่ม)(   |  | |)(เย็น|เช้า|)(   |  | |)([0-5][0-9]|[0-9]|)(   |  | |)(นาที|)/gi
     const regexTime2 = /(ตี|บ่าย)(   |  | |)([1-2][0-9]|[0-9])(   |  | |)(โมง|ทุ่ม|)/gi
     const regexTime3 = /(1?[0-9]|2[0-3])(:|.)[0-5][0-9](   |  | |)(นาฬิกา|น.|)/gi
     const regexTime4 = [ regexTime, regexTime2, regexTime3 ]
     const resultTimeRegex = regexTime4.map((v)=> s.match(v)).filter(cutNull).flatMap( (v) => v )  

   // console.log('resulttime',resultTimeRegex)   
     return  resultTimeRegex
}
 
//for extract date from sentense parameter is array of sentense 
function dateRegex (s) { 
     var b = s.replace(/(\d\d|\d)(   |  | |)(โมง)(   |  | |)(\d\d|\d|)(   |  | |)(นาที|)/gi,'');
     var a = b.replace(/(1?[0-9]|2[0-3])(:|.)[0-5][0-9]/gi,'');
     console.log(a)

     const answer = {}
     const regexPattern = [ /(เดือน|ของเดือน|)(   |  | |)(มกรา|กุมภา|มีนา|เมษา|พฤษภา|มิถุนา|กรกฎา|สิงหา|กันยา|ตุลา|พฤศจิกา|ธันวา|)(   |  | |)(คม|ยน|)(   |  | |)(วันนี้|วัน|)(   |  | |)(จันทร์|อังคาร|พุทธ|พุธ|พฤหัส|ศุกร์|เสาร์|อาทิตย์|)(   |  | |)(แรก|พรุ่งนี้|มะรืน|)(   |  | |)(ที่|)(   |  | |)([1-3][0-9]|[0-9]|)/gi     
     ,/(เดือน|ของเดือน|)(   |  | |)(มกรา|กุมภา|กุมภาพันธ์|มีนา|เมษา|พฤษภา|มิถุนา|กรกฎา|สิงหา|กันยา|ตุลา|พฤศจิกา|ธันวา|)(   |  | |)(คม|ยน|)(   |  | |)(ที่|)(   |  | |)([1-3][0-9]|[0-9]|)(   |  | |)(วันนี้|วัน|)(   |  | |)(จันทร์|อังคาร|พุทธ|พุธ|พฤหัส|ศุกร์|เสาร์|อาทิตย์|)(   |  | |)(แรก|พรุ่งนี้|มะรืน|)/gi
     ,/(วันที่|)(   |  | |)([1-3][0-9]|[0-9]|)(   |  | |)(วันนี้|วัน|)(   |  | |)(จันทร์|อังคาร|พุทธ|พุธ|พฤหัส|ศุกร์|เสาร์|อาทิตย์|)(   |  | |)(แรก|พรุ่งนี้|มะรืน|)(   |  | |)(เดือน|ของเดือน|)(   |  | |)(มกรา|กุมภา|มีนา|เมษา|พฤษภา|มิถุนา|กรกฎา|สิงหา|กันยา|ตุลา|พฤศจิกา|ธันวา|)(   |  | |)(คม|ยน|)/gi
     ,/(วันที่|)(   |  | |)([1-3][0-9]|[0-9]|)(   |  | |)(เดือน|ของเดือน|)(   |  | |)(มกรา|กุมภา|มีนา|เมษา|พฤษภา|มิถุนา|กรกฎา|สิงหา|กันยา|ตุลา|พฤศจิกา|ธันวา|)(   |  | |)(คม|ยน|)(   |  | |)(วันนี้|วัน|)(   |  | |)(จันทร์|อังคาร|พุทธ|พุธ|พฤหัส|ศุกร์|เสาร์|อาทิตย์|)(   |  | |)(แรก|พรุ่งนี้|มะรืน|)/gi
     ,/(วันนี้|วัน|)(   |  | |)(จันทร์|อังคาร|พุทธ|พุธ|พฤหัส|ศุกร์|เสาร์|อาทิตย์|แรก|พรุ่งนี้|มะรืน|)(   |  | |)(ที่|)(   |  | |)([1-3][0-9]|[0-9]|)(   |  | |)(เดือน|ของเดือน|)(   |  | |)(มกรา|กุมภา|มีนา|เมษา|พฤษภา|มิถุนา|กรกฎา|สิงหา|กันยา|ตุลา|พฤศจิกา|ธันวา|)(   |  | |)(คม|ยน|)/gi 
     ,/(วันนี้|วัน|)(   |  | |)(จันทร์|อังคาร|พุทธ|พุธ|พฤหัส|ศุกร์|เสาร์|อาทิตย์|แรก|พรุ่งนี้|มะรืน|)(   |  | |)(เดือน|ของเดือน|)(   |  | |)(มกรา|กุมภา|มีนา|เมษา|พฤษภา|มิถุนา|กรกฎา|สิงหา|กันยา|ตุลา|พฤศจิกา|ธันวา|)(   |  | |)(คม|ยน|)(   |  | |)(ที่|)(   |  | |)([1-3][0-9]|[0-9]|)/gi 
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
     const natee = /นาที/
     const bai = /บ่าย/
     const tee = /ตี/
     const toom = /ทุ่ม/
     const shao = /เช้า/
     const yen = /เย็น/       
     const ac= s.map( (v) =>{    
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
    }else{
        
       return createTimeWithCheck(timeR,0)    
     }      
  })   
   const result = {'input': s, 'result': ac}
 console.log('ttt',result)
  return result
}

function convertDateToNumber( s ) {   //return {input,[]result }
    //console.log(s)
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
     
        // วันที่ 12  or  วัน จันทร์ ที่ 15  ==> เดือนนี้
      if( ( !isNaN(date.datenumber) && date.date === undefined && date.month === undefined ) || ( !isNaN(date.datenumber) && date.date !== undefined && date.month === undefined ) ) {         

         // console.log('Match Date number ',dateR)
          const dateR = moment().date(date.datenumber).hour(parseInt(h)).minute(parseInt(m))
          return dateR
      } else if ( isNaN(date.datenumber) && date.date !== undefined && date.month === undefined) {  // วัน อังคาร   ==> เดือนนี้        
              if( moment().isoWeekday(date.date).hour(parseInt(h)).minute(parseInt(m)) <= moment().isoWeekday(date.date)  ) {    
                //console.log('Match day of week',dateR)
                  const dateR = moment().isoWeekday(date.date).hour(parseInt(h)).minute(parseInt(m))
                  return dateR
              } else  {
               // console.log('Match day of week',dateR)
                const dateR = moment().isoWeekday(date.date).hour(parseInt(h)).minute(parseInt(m))
                return dateR
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
               console.log('match case today')
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
   const fullword = ['จันทร์','อังคาร','พุธ','พฤหัส','ศุกร์','เสาร์','อาทิตย์','วันนี้','วันพรุ่งนี้','วันมะรืน','วันที่']  
   const fullword3 =[ 'วันจันทร์','วันอังคาร','วันพุธ','วันพฤหัส','วันศุกร์','วันเสาร์','วันอาทิตย์','วันนี้','วันพรุ่งนี้','วันมะรืน','วันที่']
   const strword = ['จ.','อ.','พ.','พฤ.','ศ.','ส.','อา.','วนน.','วพนน.','วมรร.','วทท.'] 
   const strword2=['จันทร์','อังคาร','พุธ','พฤหัส','ศุกร์','เสาร์','อาทิตย์','นนี้','พรุ่งนี้','มะรืน','วันที่']   
         
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
          
   return  input.map( v =>  thaiRegexTime(v) )    
}

// const testSet1 = text3.map( (v) =>  thaiRegexTime(v)  )

// console.log(...testSet1)

// testSet1.forEach( (v) => {
//   if(v.output!==undefined){
//       v.output.forEach( (f) => {
//         if(f!= undefined)
//         console.log(f.locale('th').format("dddd, MMMM Do YYYY, h:mm:ss "))         
//       })   
//     }
// }) 
//cutstring with date keyword
// function spliteDate(s) 
// {   
//   let input = s
//   console.log('print input',s)
 
//   const dateregex4 = /(วันนี้|วันพรุ่งนี้|วันมะรืน|วันที่)(   |  | |)(วันจันทร์|วันอังคาร|วันพุธ|วันพฤหัส|วันศุกร์|วันเสาร์|วันอาทิตย์|)/gi
//   const dateregex5 = /(วันจันทร์|วันอังคาร|วันพุธ|วันพฤหัส|วันศุกร์|วันเสาร์|วันอาทิตย์|)/gi
//   const regexes = [dateregex4]
   
//    var valueA=[],valueB =[] 
//    var tempA=["จันทร์","พรุ่งนี้","พฤหัส","พุธ","มะรืน","วันนี้","ศุกร์","อังคาร","อาทิตย์","เสาร์","วันที่"]
//    tempA.sort()
//    for(let i =0;i<tempA.length;i++)
//    {
//      valueA[tempA[i]] = i+1
//    }  
//   valueB["วันจันทร์"]= 1
//   valueB["วันพรุ่งนี้"]=2
//   valueB["วันพฤหัส"]=3
//   valueB["วันพุธ"]=4
//   valueB["วันมะรืน"]=5
//   valueB["วันที่"]=6
//   valueB["วันนี้"]=7
//   valueB["วันศุกร์"]=8
//   valueB["วันอังคาร"]=9
//   valueB["วันอาทิตย์"]=10
//   valueB["วันเสาร์"]=11
 

//  const output = regexes.map((v)=>{      
//    const sa = s.match(v)
//           .filter(isSpace)
// console.log(s)
//  console.log(s.match(v))
//    const removespace=sa.map((v)=> v.trim())
//   //  console.log(removespace)
//    var removeDub=removespace.filter( function(item,pos,self){
            
//             return self.indexOf(item) == pos
//       })

//   var removeDub = removeDub.sort()
//     console.log(removeDub)
//   if(removeDub.length===0){return} 
//   const temp= removeDub.map((v)=>{
//      console.log(v)
//      //const index = s.indexOf(v)
//       index = [] 
//        let i =0
//        let output =0    
//       while(true)
//       {                    
//           i=s.indexOf(v,i)  
//           if(i==-1)break
//           index.push(i)
//           ++i      
//         }      
//       console.log(index)
      
//      return index })

    
//     return { 'data': removeDub ,  'output': temp }
//  })
// console.log(output)
// const a = output[0]
// const b = output[1]
// if(a === undefined || b === undefined) return
 
// // console.log( a) 
// // console.log( b)

// let i =0 ,j=0;
// let anss=[]
// let ansNum=[]

// while(i<a.data.length || j<b.data.length)
// {
//    if(i===a.data.length)
//    {
//      i=a.data.length
//    }
//    if(b===b.data.length)
//    {
//      j=b.data.length
//    }

//  // console.log(a.data[i],valueA[a.data[i]] ,"----",b.data[j],valueB[b.data[j]] )   
//  // console.log(i,"==",j,"==", valueB[b.data[j]])
//   if( valueA[a.data[i]] === valueB[b.data[j]] )
//   {
    
//     anss.push(b.data[j])
//         console.log(a.output[i] ,"--",b.output[j])
//     let h=0,k=0
//     let ss=[]
//     var d = a.output[i].concat(b.output[j])
//     var e = d.filter(function (item, pos) {return d.indexOf(item) == pos});
//     e=e.sort((a,b)=>( a-b))
//     let at=e
//     e.forEach((v)=>{     
//       if(at.indexOf((v+3))!== -1)
//         {e.splice(at.indexOf((v+3)),1)}
//     }) 
//     ansNum.push(e)
//     i++
//     j++
//   }else if(valueA[a.data[i]] < valueB[b.data[j]] ) //A<
//   {
//      anss.push(a.data[i])
//      ansNum.push(a.output[i])  
//      i++
//   } 
//   else{  //B<
//      anss.push(b.data[j])
//      ansNum.push(b.output[j])
//      j++
//   }
// }
// console.log(anss)
// console.log(ansNum) 
// console.log(a)
// let ansNum2 = ansNum.flatMap((v)=> v)
// ansNum2 = ansNum2.sort((a,b)=> a - b)
// console.log(ansNum2)
//   let aaa = ansNum2
//   let ans =[]  
//   const bb = aaa.reduce((ac,va)=>{  
//      //console.log(ac , va)
//     // console.log(s.substring(ac , va))
//      ans.push(s.substring(ac , va))
//      return  ac=va })   

//   ans.push(s.substring(aaa[aaa.length-1]))
//   let ans2=ans.filter((v) =>{
//     return v!="วัน" })
//   console.log(ans2)
//   return ans2;
// }

function spliteDate(s) {
   //const dateregex4 = /(วันนี้|วันพรุ่งนี้|วันมะรืน|วันที่)/g
   let resultposition  = []
   const dateregexall =  [/วันจันทร์/gi,/วันอังคาร/gi,/วันพุธ/gi,/วันพฤหัส/gi,/วันศุกร์/gi,/วันเสาร์/gi,/วันอาทิตย์/gi,/วันนี้/gi,/วันพรุ่งนี้/gi,/วันมะรืน/gi,/วันที่/gi,/([1-2][0-9]|[0-9])(มกรา|กุมภา)/gi ]
   s=s.replace(/\s/gi,'')    //เอาช่องว่างระหว่างคำออก 
   dateregexall.map((v)=>{     
      while ((match = v.exec(s)) != null) {       
           console.log(match)   
           resultposition.push(match.index)
        }
   })
   resultposition= resultposition.sort();
   temparray = resultposition.slice()
   // กำจัด index ของคำที่ เป็นประโยคเดียวกัน วันจันทร์ 17 มกราคม =>['วันจันทร์','17 มกราคม' ] เป็นประโยคเดียวกัน
   for(let i=0;i<resultposition.length-1;i++)
   {
        if(resultposition[i+1]-resultposition[i]<=10) //ในกรณีของวันจันทร์ นั้น จำนวนตัวอักษร เท่ากับ 9  วันอาทิตย์ เท่ากับ 10
        {
           var index = resultposition.indexOf(resultposition[i+1])
           temparray.splice(index,1)
        }
   }
   resultposition=temparray 
   let result = resultposition.map((v)=>{
       
        s= s.substring(0, v) + "," + s.substring(v)       
    
   })
   
  console.log(s)
    
   const resultall = s.split(",").filter((v)=>{
     return v!==""
   })
   console.log(s.split(","))
   return resultall
}



// console.log(splitWordWithPlusSign(" อังคาร ไป 10 โมง  โรบินสันนะครับ   พุธ ไป พัทยา  เสาร์ วันอังคาร วันเสาร์  วันนี้ 9โมง 10 โมง อังคาร จันทร์นี้ 10 โมง 9 โมง 11:00  วันพรุ่งนี้ พรุ่งนี้ วันมะรืน  วันนี้ 5 ทุ่ม วันนี้ จะไปดูหนัง"))
// console.log(splitWordWithPlusSign(" ไปโรบินสัน 19.00 19:00"))
// console.log(splitWordWithPlusSign(" ไปโรบินสัน  "))
//console.log(splitWordWithPlusSign("วันอาทิตย์ ไปกินข้าวตอน 10.45 11 โมง 45 นาที โรบินสัน วันจันทร์ 8 โมง เรียนสัมนา ม.เกษตร ศรีราชา ไปเที่ยวทะเลพัทยา,ไหว้พระ พุทธมน 18:00"))
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
// console.log(splitWordWithPlusSign("พุทธ"))
// console.log(splitWordWithPlusSign("พุท"))
// console.log(splitWordWithPlusSign("พุทธ"))
// console.log(splitWordWithPlusSign("วันอังคาร 11.00 "))
// console.log(splitWordWithPlusSign("วันอังคาร 17.00 "))
// console.log(splitWordWithPlusSign("จ. 11.55 13.00 21.00 15.00  19.25  อ. 10.20   พุธ 14.00 วันพุธ 16.00  พ. 12.00  พฤ. 13.00  ศ. 6.30  ส. 11.50  อ. 14.23  อาทิตย์ 14.20 อังคาร 22.30 อาทิตย์ 15.00  พรุ่งนี้  มะรืน วันพรุ่งนี้ วันมะรืน"))//ไม่ใช่วันนี้เป็น 7.00 
// console.log(splitWordWithPlusSign("  ากาด่วห่กด"))
 // console.log(splitWordWithPlusSign("วันที่ 24 ไป วันจันทร์ จตุจักร  จันทร์ ไปโรบินสัน "))
//console.log(splitWordWithPlusSign("พฤษภาคม"))
// 15 เมษา ไปโร วันพรุ่งนี้ ไป พัทยา  
console.log(splitWordWithPlusSign("วันจันทร์ ไปซื้อของ 17 มกราคม โรบินสัน พัทยา วัน "))
 