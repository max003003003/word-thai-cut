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


function replaceabbreviation (s)
{
   console.log(s)
   const word = [/จ\./,/อ\./,/พ\./,/พฤ\./,/ศ\./,/ส\./,/อ\./]
   const fullword = ['จันทร์','อังคาร','พุธ','พฤหัส','ศุกร์','เสาร์','อาทิตย์']
   word.forEach((v,i)=>{
        if(v.test(s)){
          s = s.replace(v,fullword[i])
        }
   })  
  return s
}

function splitWordWithPlusSign(s){     
    s= replaceabbreviation(s)
    const input =  spliteDate(s)
    console.log(input)
     
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

  //console.log(a.data[i],valueA[a.data[i]] ,"----",b.data[j],valueB[b.data[j]] )   
 // console.log(i,"==",j,"==", valueB[b.data[j]])
  if( valueA[a.data[i]] === valueB[b.data[j]] )
  {
    
    anss.push(b.data[j])
    //console.log(a.output[i] ,"--",b.output[j])
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
// console.log(anss)
// console.log(ansNum) 
// console.log(a)
let ansNum2 = ansNum.flatMap((v)=> v)
ansNum2 = ansNum2.sort((a,b)=> a - b)
// console.log(ansNum2)
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
// console.log(splitWordWithPlusSign("อังคาร"))
// console.log(splitWordWithPlusSign("อ"))
// console.log(splitWordWithPlusSign("พุทธ"))
// console.log(splitWordWithPlusSign("พุท"))
// console.log(splitWordWithPlusSign("พุทธ"))
// console.log(splitWordWithPlusSign("วันอังคาร 11.00 "))
// console.log(splitWordWithPlusSign("วันอังคาร 17.00 "))

console.log(splitWordWithPlusSign("จ. 11.55   อ. 10 โมง 20 นาที  พ. 12.00  พฤ. 13.00  ศ. ส. อ. "))