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
var text3 = [ '31 เมษายน','10 ไป10','7 โมงเช้า 6โมงเจอกัน ','10.00 บ่าย 3 บ่าย 4 โมง 3 ทุ่ม 9.56 น. ตี 2  6 โมงเย็น ','จันทร์ นี้ ไป โร 9 โมง  11:00 น.' ,'7 โมงงง','ธันวา',
'มีนา 29 ไป สอบ 9 โมง ','วัน จันทร์ 10 โมง ไปโรบินสัน ไปตลาด วันอังคาร ไป 9โมง วันเสาร์','เมษา จ่ายค่าบ้าน ','วันที่  5มีนาคม  ',' ตอนเย็นวันจะไปกินข้าว',' พุทธ นี้ ไป แมคโคร ตอนตี 3',' ของวันมะรืน ','ในวันแรกของเดือนมกราจะไป ดูหนัง ','อีก 15 นาทีไป โร','อีก 15 นาทีหลังเที่ยงคืนของวันศุกร์จะนอน ','วันที่ 29 กุมภาพันธ์ เป็นวันเกิด','วันจันทร์ ที่ 12 เดือน กุมภา ไปนอก','วันศุกร์ 24 มีนา ','วันที่ 2  ธันวา','9:00 น. วันจันทร์คืนหนังสือนะ','วันที่ 12  11:00 นาฬิกา','15 เมษา','วัน อังคาร  24 พฤษภา']
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

     //console.log('resulttime',resultTimeRegex)   
     return  resultTimeRegex
}
 
//for extract date from sentense parameter is array of sentense 
function dateRegex (s) { 
     var a = s.replace(/(\d\d|\d)(   |  | |)(โมง)(   |  | |)(\d\d|\d|)(   |  | |)(นาที|)/gi,'');
     console.log(a)

     const answer = {}
     const regexPattern = [ /(เดือน|ของเดือน|)(   |  | |)(มกรา|กุมภา|มีนา|เมษา|พฤษภา|มิถุนา|กรกฎา|สิงหา|กันยา|ตุลา|พฤศจิกา|ธันวา|)(   |  | |)(คม|ยน|)(   |  | |)(วัน|)(   |  | |)(จันทร์|อังคาร|พุทธ|พุธ|พฤหัส|ศุกร์|เสาร์|อาทิตย์|)(   |  | |)(แรก|พรุ่งนี้|มะรืน|)(   |  | |)(ที่|)(   |  | |)([1-3][0-9]|[0-9]|)/gi     
     ,/(เดือน|ของเดือน|)(   |  | |)(มกรา|กุมภา|กุมภาพันธ์|มีนา|เมษา|พฤษภา|มิถุนา|กรกฎา|สิงหา|กันยา|ตุลา|พฤศจิกา|ธันวา|)(   |  | |)(คม|ยน|)(   |  | |)(ที่|)(   |  | |)([1-3][0-9]|[0-9]|)(   |  | |)(วัน|)(   |  | |)(จันทร์|อังคาร|พุทธ|พุธ|พฤหัส|ศุกร์|เสาร์|อาทิตย์|)(   |  | |)(แรก|พรุ่งนี้|มะรืน|)/gi
     ,/(วันที่|)(   |  | |)([1-3][0-9]|[0-9]|)(   |  | |)(วัน|)(   |  | |)(จันทร์|อังคาร|พุทธ|พุธ|พฤหัส|ศุกร์|เสาร์|อาทิตย์|)(   |  | |)(แรก|พรุ่งนี้|มะรืน|)(   |  | |)(เดือน|ของเดือน|)(   |  | |)(มกรา|กุมภา|มีนา|เมษา|พฤษภา|มิถุนา|กรกฎา|สิงหา|กันยา|ตุลา|พฤศจิกา|ธันวา|)(   |  | |)(คม|ยน|)/gi
     ,/(วันที่|)(   |  | |)([1-3][0-9]|[0-9]|)(   |  | |)(เดือน|ของเดือน|)(   |  | |)(มกรา|กุมภา|มีนา|เมษา|พฤษภา|มิถุนา|กรกฎา|สิงหา|กันยา|ตุลา|พฤศจิกา|ธันวา|)(   |  | |)(คม|ยน|)(   |  | |)(วัน|)(   |  | |)(จันทร์|อังคาร|พุทธ|พุธ|พฤหัส|ศุกร์|เสาร์|อาทิตย์|)(   |  | |)(แรก|พรุ่งนี้|มะรืน|)/gi
     ,/(วัน|)(   |  | |)(จันทร์|อังคาร|พุทธ|พุธ|พฤหัส|ศุกร์|เสาร์|อาทิตย์|แรก|พรุ่งนี้|มะรืน|)(   |  | |)(ที่|)(   |  | |)([1-3][0-9]|[0-9]|)(   |  | |)(เดือน|ของเดือน|)(   |  | |)(มกรา|กุมภา|มีนา|เมษา|พฤษภา|มิถุนา|กรกฎา|สิงหา|กันยา|ตุลา|พฤศจิกา|ธันวา|)(   |  | |)(คม|ยน|)/gi 
     ,/(วัน|)(   |  | |)(จันทร์|อังคาร|พุทธ|พุธ|พฤหัส|ศุกร์|เสาร์|อาทิตย์|แรก|พรุ่งนี้|มะรืน|)(   |  | |)(เดือน|ของเดือน|)(   |  | |)(มกรา|กุมภา|มีนา|เมษา|พฤษภา|มิถุนา|กรกฎา|สิงหา|กันยา|ตุลา|พฤศจิกา|ธันวา|)(   |  | |)(คม|ยน|)(   |  | |)(ที่|)(   |  | |)([1-3][0-9]|[0-9]|)/gi 
     ,]      
    const resulRegex = regexPattern.map((v)=> a.match(v).filter(isSpace))      
    //console.log(resulRegex)
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
  // console.log('ttt',result)
  return result
}

function convertDateToNumber( s ) {   //return {input,[]result }
  //console.log(s)
    const date = [/จันทร์/,/อังคาร/,/พุ(ท|)ธ/,/(พฤหัส|พฤ)/,/ศุกร์/,/เสาร์/,/อาทิตย์/]
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
   // console.log(s, datespec2 )
   //
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
  // console.log(result)
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
          const dateR = moment().date(date.datenumber).hour(parseInt(h)).minute(parseInt(m))
          return dateR
          //console.log('Match Date number ',dateR)
      } else if ( isNaN(date.datenumber) && date.date !== undefined && date.month === undefined) {  // วัน อังคาร   ==> เดือนนี้        
              if( moment().isoWeekday() >= date.date ) {        
                  const dateR = moment().add(1,'week').isoWeekday(date.date).hour(parseInt(h)).minute(parseInt(m))
                  return dateR
              } else  {
                const dateR = moment().isoWeekday(date.date).hour(parseInt(h)).minute(parseInt(m))
                return dateR
              }           
                //console.log('Match day of week',dateR)
    } else  if( isNaN(date.datenumber) && date.date === undefined && date.month !== undefined)     {            // มีนาคม ==> วันแรก ของ เดือนนั้นๆ
            const dateR = moment().month(date.month).date(1).hour(parseInt(h)).minute(parseInt(m))
            return dateR
            //console.log('Match Month  ',dateR)
    } else if( !isNaN(date.datenumber) && date.date !== undefined && date.month === undefined)   {          
          const dateR = moment().date(date.datenumber).hour(parseInt(h)).minute(parseInt(m))
          return dateR
          //console.log('Match Date number ',dateR)
    } else if( ( !isNaN(date.datenumber) && date.date !== undefined && date.month !== undefined ) || (!isNaN(date.datenumber) && date.date === undefined && date.month !== undefined) )  {  //วัน จันทร์ 14 มีนา or 15 เมษา  => มีวันที่แล้ว
          const dateR = moment().date(date.datenumber).month(date.month).hour(parseInt(h)).minute(parseInt(m))
          return dateR
          //console.log('datenumber date month',dateR)
    } else if(  isNaN(date.datenumber) && date.date === undefined && date.month === undefined ) { //ไม่ระบุ วันที่  
           let DateR
           if(date.option!=undefined){
               dateR = moment().day(date.option).hour(parseInt(h)).minute(parseInt(m))      
           }
           else {
            dateR = moment().hour(parseInt(h)).minute(parseInt(m))   
           }                  
               
        return dateR
      }
}
function mergeAndCreateDateAndTime ( time, date) 
{
     if(time.result.length!=0){
        return time.result.map( (v) => {         
          if(v !== undefined )                 
          return createTimeObject(date.time,v.H,v.m)
        })
     } else {        
       if( date.strDate.length!=0)
          return  date.strDate.map((v) => {
              return createTimeObject(date.time,7,0)
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

function splitWordWithPlusSign( s){
  
   

    const input =  spliteDate(s)
     
    if(input === undefined) {
        const ans = thaiRegexTime(s)
        if(ans === undefined) return
        else return ans
       
    }

    return  input.map( v =>  thaiRegexTime(v) )
    
}

const testSet1 = text3.map( (v) =>  thaiRegexTime(v)  )

console.log(...testSet1)

testSet1.forEach( (v) => {
  if(v.output!==undefined){
      v.output.forEach( (f) => {
        if(f!= undefined)
        console.log(f.locale('th').format("dddd, MMMM Do YYYY, h:mm:ss "))         
      })   
    }
}) 

function spliteDate(s)
{
  let input = s
  console.log('print input',s)
  const dateregex3 = /(วันนี้|พรุ่งนี้|มะรืน|)(   |  | |)(จันทร์|อังคาร|พุธ|พฤหัส|ศุกร์|เสาร์|อาทิตย์|)/gi
  const dateregex4 = /(วันนี้|วันพรุ่งนี้|วันมะรืน|)(   |  | |)(วันจันทร์|วันอังคาร|วันพุธ|วันพฤหัส|วันศุกร์|วันเสาร์|วันอาทิตย์|)/gi
  const regexes = [dateregex3,dateregex4]
   
   var valueA=[],valueB =[] 
   var tempA=["จันทร์","พรุ่งนี้","พฤหัส","พุธ","มะรืน","วันนี้","ศุกร์","อังคาร","อาทิตย์","เสาร์"]
   tempA.sort()
   for(let i =0;i<tempA.length;i++)
   {
     valueA[tempA[i]] = i+1
   }  
  valueB["วันจันทร์"]= 1
  valueB["วันพรุ่งนี้"]=2
  valueB["วันพฤหัส"]=3
  valueB["วันพุธ"]=4
  valueB["วันมะรืน"]=5
  valueB["วันนี้"]=6
  valueB["วันศุกร์"]=7
  valueB["วันอังคาร"]=8
  valueB["วันอาทิตย์"]=9
  valueB["วันเสาร์"]=10 
 const output = regexes.map((v)=>{
     const sa = s.match(v)
          .filter(isSpace)

   const removespace=sa.map((v)=> v.trim())
 
   var removeDub=removespace.filter( function(item,pos,self){
            return self.indexOf(item) == pos
          })

  var removeDub = removeDub.sort()
    console.log(removeDub)
  if(removeDub.length===0){return}
 
  const temp= removeDub.map((v)=>{
     console.log(v)
     //const index = s.indexOf(v)
      index = [] 
       let i =0
       let output =0    
      while(true)
      {                    
          i=s.indexOf(v,i)  
          if(i==-1)break
          index.push(i)
          ++i      
        }      
      console.log(index)
      
     return index })

    
    return { 'data': removeDub ,  'output': temp }
 })
console.log(output)
const a = output[0]
const b = output[1]
if(a === undefined || b === undefined) return
 
console.log( a) 
console.log( b)
let i =0 ,j=0;
let anss=[]
let ansNum=[]

while(i<a.data.length || j<b.data.length)
{
   if(i===a.data.length)
   {
     i=a.data.length
   }
   if(b===b.data.length)
   {
     j=b.data.length
   }

 // console.log(a.data[i],valueA[a.data[i]] ,"----",b.data[j],valueB[b.data[j]] )   
 // console.log(i,"==",j,"==", valueB[b.data[j]])
  if( valueA[a.data[i]] === valueB[b.data[j]] )
  {
    
    anss.push(b.data[j])
        console.log(a.output[i] ,"--",b.output[j])
    let h=0,k=0
    let ss=[]
    var d = a.output[i].concat(b.output[j])
    var e = d.filter(function (item, pos) {return d.indexOf(item) == pos});
    e=e.sort((a,b)=>( a-b))
    let at=e
    e.forEach((v)=>{     
      if(at.indexOf((v+3))!== -1)
        {e.splice(at.indexOf((v+3)),1)}
    }) 
    ansNum.push(e)
    i++
    j++
  }else if(valueA[a.data[i]] < valueB[b.data[j]] ) //A<
  {
     anss.push(a.data[i])
     ansNum.push(a.output[i])  
     i++
  } 
  else{  //B<
     anss.push(b.data[j])
     ansNum.push(b.output[j])
     j++
  }
}
console.log(anss)
console.log(ansNum) 
console.log(a)
let ansNum2 = ansNum.flatMap((v)=> v)
ansNum2 = ansNum2.sort((a,b)=> a - b)
console.log(ansNum2)
  let aaa = ansNum2
  let ans =[]  
  const bb = aaa.reduce((ac,va)=>{  
     //console.log(ac , va)
    // console.log(s.substring(ac , va))
     ans.push(s.substring(ac , va))
     return  ac=va })   

  ans.push(s.substring(aaa[aaa.length-1]))
  let ans2=ans.filter((v) =>{
    return v!="วัน" })
  console.log(ans2)
  return ans2;
}
console.log(splitWordWithPlusSign(" อังคาร ไป 10 โมง  โรบินสันนะครับ   พุธ ไป พัทยา  เสาร์ วันอังคาร วันเสาร์  วันนี้ 9โมง 10 โมง อังคาร จันทร์นี้ 10 โมง 9 โมง 11:00  วันพรุ่งนี้ พรุ่งนี้ วันมะรืน  วันนี้ 5 ทุ่ม วันนี้ จะไปดูหนัง"))

console.log(splitWordWithPlusSign(" ไปโรบินสัน 19.00 19:00"))
console.log(splitWordWithPlusSign(" ไปโรบินสัน  "))

console.log(splitWordWithPlusSign("วันอาทิตย์ ไปกินข้าวตอน 10.45 11 โมง 45 นาที โรบินสัน วันจันทร์ 8 โมง เรียนสัมนา ม.เกษตร ศรีราชา ไปเที่ยวทะเลพัทยา,ไหว้พระ พุทธมน 18:00"))
console.log(splitWordWithPlusSign("วัน พุธ 8 โมง "))
 
console.log(splitWordWithPlusSign("วัน พุธ 9 โมง 5 นาที "))
