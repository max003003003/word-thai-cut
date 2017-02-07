const regexDay = /(|วัน)(| |  |   |)(จันทร์|อังคาร|พุทธ|พฤหัส|ศุกร์|เสาร์|อาทิตย์)/gi
const regexDay2 = /(วัน|)(| |  |   |)(จันทร์|อังคาร|พุทธ|พฤหัส|ศุกร์|เสาร์|อาทิตย์)(   |  | |)(ที่|)(   |  | |)([0-9]|[0-9][0-9]|)/gi
const regexTime =  /([0-9]|[0-9][0-9])(| |  |   |)โมง/gi
const regexTime2 = /(ตี|บ่าย)(| |  |   |)([0-9]|[0-9][0-9])/gi
const regexTime3 = /([0-9]|[0-9][0-9])(|  |   )(.|:)(|  |   )([0-9][0-9])(| |  |   )(น|น.|นาฬิกา|)/gi
const regexDate = /วันที่(| |  |   )([1-9]|[0-9][0-9])/gi
const regexMonth = /(|เดือน)(| |  |   )(มกรา|กุมภา|มีนา|เมษา|พฤษภา|มิถุนา|กรกฎา|สิงหา|กันยา|ตุลา|พฤศจิกา|ธันวา)(คม|ยน|)/gi
const regexDay3 = /(วัน|วันที่|)(   |  | |)(จันทร์|อังคาร|พุทธ|พฤหัส|ศุกร์|เสาร์|อาทิตย์)(   |  | |)(ที่)(   |  | |)([0-9]|[0-9][0-9]|)/gi

//var text3 = ['จันทร์ นี้ ไป โร','มีนา 29 ไป สอบ',' เมษา จ่ายค่าบ้าน '] 
//var text3 = ['จันทร์ นี้ ไป โร มีนา 29 ไป สอบ  เมษา จ่ายค่าบ้าน '] 

var text3 = ['10 ไป10','10.00','จันทร์ นี้ ไป โร' ,'7 โมงงง','ธันวา','มีนา 29 ไป สอบ 9 โมง ','เมษา จ่ายค่าบ้าน ','วันที่  5มีนาคม  ',' ตอนเย็นวันจะไปกินข้าว',' พุทธ นี้ ไป แมคโคร ตอนตี 3',' ของวันมะรืน ','ในวันแรกของเดือนมกราจะไป ดูหนัง ','อีก 15 นาทีไป โร','อีก 15 นาทีหลังเที่ยงคืนของวันศุกร์จะนอน ','วันที่ 29 กุมภาพันธ์ เป็นวันเกิด','วันจันทร์ ที่ 12 เดือน กุมภา ไปนอก','วันศุกร์ 24 มีนา ','วันที่ 2  ธันวา','9:00 น. วันจันทร์คืนหนังสือนะ','วันที่ 12  11:00 นาฬิกา']
const cutNull = function (s){
  
  return s!==null && s!==undefined 
}
const isSpace = function(v){ 
             
       return (v!=="")&&(v!==" ")&&(v!=="   ")
}
const cutNumber = function(v) {
  return !(/^([0-9]|[0-9][0-9])/.test(v)) 
}

function timeRegex(s) {
     const regexTime =  /([1-2][0-9]|[0-9])(   |  | |)โมง/gi
     const regexTime2 = /(ตี|บ่าย)(   |  | |)([1-2][0-9]|[0-9])/gi
     const regexTime3 = /(1?[0-9]|2[0-3]):[0-5][0-9](   |  | |)(นาฬิกา|น.|)/gi
     const regexTime4 = [ regexTime, regexTime2, regexTime3 ]
     const resultTimeRegex = regexTime4.map((v)=> s.match(v)).filter(cutNull) 
     console.log('resulttime',resultTimeRegex)
     return  resultTimeRegex[0]
}
 
//for extract date from sentense parameter is array of sentense 
function dateRegex (s) { 
     const answer = {}
     const regexPattern = [ /(เดือน|ของเดือน|)(   |  | |)(มกรา|กุมภา|มีนา|เมษา|พฤษภา|มิถุนา|กรกฎา|สิงหา|กันยา|ตุลา|พฤศจิกา|ธันวา|)(   |  | |)(คม|ยน|)(   |  | |)(วัน|)(   |  | |)(จันทร์|อังคาร|พุทธ|พฤหัส|ศุกร์|เสาร์|อาทิตย์|)(   |  | |)(แรก|พรุ่งนี้|มะรืน|)(   |  | |)(ที่|)(   |  | |)([1-3][0-9]|[0-9]|)/gi     
     ,/(เดือน|ของเดือน|)(   |  | |)(มกรา|กุมภา|กุมภาพันธ์|มีนา|เมษา|พฤษภา|มิถุนา|กรกฎา|สิงหา|กันยา|ตุลา|พฤศจิกา|ธันวา|)(   |  | |)(คม|ยน|)(   |  | |)(ที่|)(   |  | |)([1-3][0-9]|[0-9]|)(   |  | |)(วัน|)(   |  | |)(จันทร์|อังคาร|พุทธ|พฤหัส|ศุกร์|เสาร์|อาทิตย์|)(   |  | |)(แรก|พรุ่งนี้|มะรืน|)/gi
     ,/(วันที่|)(   |  | |)([1-3][0-9]|[0-9]|)(   |  | |)(วัน|)(   |  | |)(จันทร์|อังคาร|พุทธ|พฤหัส|ศุกร์|เสาร์|อาทิตย์|)(   |  | |)(แรก|พรุ่งนี้|มะรืน|)(   |  | |)(เดือน|ของเดือน|)(   |  | |)(มกรา|กุมภา|มีนา|เมษา|พฤษภา|มิถุนา|กรกฎา|สิงหา|กันยา|ตุลา|พฤศจิกา|ธันวา|)(   |  | |)(คม|ยน|)/gi
     ,/(วันที่|)(   |  | |)([1-3][0-9]|[0-9]|)(   |  | |)(เดือน|ของเดือน|)(   |  | |)(มกรา|กุมภา|มีนา|เมษา|พฤษภา|มิถุนา|กรกฎา|สิงหา|กันยา|ตุลา|พฤศจิกา|ธันวา|)(   |  | |)(คม|ยน|)(   |  | |)(วัน|)(   |  | |)(จันทร์|อังคาร|พุทธ|พฤหัส|ศุกร์|เสาร์|อาทิตย์|)(   |  | |)(แรก|พรุ่งนี้|มะรืน|)/gi
     ,/(วัน|)(   |  | |)(จันทร์|อังคาร|พุทธ|พฤหัส|ศุกร์|เสาร์|อาทิตย์|)(   |  | |)(แรก|พรุ่งนี้|มะรืน|)(   |  | |)(ที่|)(   |  | |)([1-3][0-9]|[0-9]|)(   |  | |)(เดือน|ของเดือน|)(   |  | |)(มกรา|กุมภา|มีนา|เมษา|พฤษภา|มิถุนา|กรกฎา|สิงหา|กันยา|ตุลา|พฤศจิกา|ธันวา|)(   |  | |)(คม|ยน|)/gi 
     ,/(วัน|)(   |  | |)(จันทร์|อังคาร|พุทธ|พฤหัส|ศุกร์|เสาร์|อาทิตย์|แรก|พรุ่งนี้|มะรืน|)(   |  | |)(เดือน|ของเดือน|)(   |  | |)(มกรา|กุมภา|มีนา|เมษา|พฤษภา|มิถุนา|กรกฎา|สิงหา|กันยา|ตุลา|พฤศจิกา|ธันวา|)(   |  | |)(คม|ยน|)(   |  | |)(ที่|)(   |  | |)([1-3][0-9]|[0-9]|)/gi 
     ,]
      
    const resulRegex = regexPattern.map((v)=> s.match(v).filter(isSpace))      
    console.log(resulRegex)
    const size = resulRegex.map((v)=> v.length )   
    return resulRegex[size.indexOf(Math.min(...size))].map((c) => c.trim()).filter(cutNumber) 
}


const ab=text3.map( dateRegex )
const ac=text3.map( timeRegex )

console.log('=========================Date===================================')
ab.forEach((v)=>{
  console.log(v)
})

console.log("===========================Time================================")
ac.forEach((v) =>{
  console.log(v)
})

console.log("========start test =================")
console.log(ab.map((v) => convertDateToNumber(v)) )

//console.log(ac.map((v) => convertTime(v)) )

function convertDateToNumber( s ) { 
    console.log(s)
    const date = [/จันทร์/,/อังคาร/,/พุทธ/,/พฤหัส/,/ศุกร์/,/เสาร์/,/อาทิตย์/]
    const dateNumbers = /(\d\d|\d)/
    const month = [/มกรา/,/กุมภา/,/มีนา/,/เมษา/,/พฤษภา/,/มิถุนา/,/กรกฎา/,/สิงหา/,/กันยา/,/ตุลา/,/พฤศจิกา/,/ธันวา/]
    const dateEng = ['monday','tuesday','wednes','thursday','friday','saturday','sunday']
   
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

      



    
   const result= { 'datenumber':  parseInt( dateNumberresult[0]) , 'date': dateresult[0] ,  'month': monthresult[0]  }
   console.log(result)

   
   createTimeObject( result )
  
 
 
}


function convertTime( s ) {
    if (s===[] ) return 
     const regexTime =  /([1-2][0-9]|[0-9])(   |  | |)โมง/gi


     if(regexTime.test(s) !== false )
     {
       const result = /(\d\d|\d)/
       const resultMatch = s.match(result)
       console.log(resultMatch[0])
     }

     const regexTime2 = /(ตี|บ่าย)(   |  | |)([1-2][0-9]|[0-9])/gi

     const regexTime3 = /(1?[0-9]|2[0-3]):[0-5][0-9](   |  | |)(นาฬิกา|น.|)/gi

}
  
 function createTimeObject(result)
 {
   
   let  dateR = moment()
   if( !isNaN(result.datenumber) && result.date === undefined && result.month === undefined)
     {          
       dateR = moment().date(result.datenumber)
       console.log('Match Date number ',dateR)
    }
    else  if( isNaN(result.datenumber) && result.date !== undefined && result.month === undefined)
     {          
      if( moment().isoWeekday() >= result.date )
      {
          dateR = moment().add(1,'week').isoWeekday(result.date)
      }
      else
      {
         dateR = moment().isoWeekday(result.date)
      }
        console.log('Match day of week',dateR)
    }
    else if( isNaN(result.datenumber) && result.date === undefined && result.month !== undefined)
     {          
         dateR = moment().month(result.month).date(1)
         console.log('Match Month  ',dateR)
     }

  
 }