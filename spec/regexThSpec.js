function dayNeed(dayINeed)
{
    if (moment().isoWeekday() <= dayINeed) { 
    // then just give me this week's instance of that day
    return moment().isoWeekday(dayINeed);
  } else {
    // otherwise, give me next week's instance of that day
    return moment().add(1, 'weeks').isoWeekday(dayINeed);
  }
}
describe('xx โมง xx นาที และ ระบบ ตัดคำ',function(){
  it("should be able to make correct time", function(){     

      result2 = splitWordWithPlusSign("วันอาทิตย์ ไปกินข้าวตอน 10.45 11 โมง 45 นาที โรบินสัน วันจันทร์ 8 โมง เรียนสัมนา ม.เกษตร ศรีราชา ไปเที่ยวทะเลพัทยา,ไหว้พระ พุทธมน 18:00")
   
      expect(dayNeed(7).hours(11).minute(45).format("YYYY-MM-DD HH:mm")).toEqual(result2[0].output[0].format("YYYY-MM-DD HH:mm"))
      expect(dayNeed(7).hours(10).minute(45).format("YYYY-MM-DD HH:mm")).toEqual(result2[0].output[1].format("YYYY-MM-DD HH:mm"))
      expect(dayNeed(1).hours(8).minute(00).format("YYYY-MM-DD HH:mm")).toEqual(result2[1].output[0].format("YYYY-MM-DD HH:mm"))
      expect(dayNeed(1).hours(18).minute(00).format("YYYY-MM-DD HH:mm")).toEqual(result2[1].output[1].format("YYYY-MM-DD HH:mm"))
      
      result3 = splitWordWithPlusSign("วันจันทร์ 22.30  วันอังคาร 11.25  วันศุกร์ 13.00 วันอาทิตย์ ไปกินข้าวตอน 10.45 11 โมง 45 นาที วันเสาร์ 13.20")
      expect(dayNeed(1).hours(22).minute(30).format("YYYY-MM-DD HH:mm")).toEqual(result3[0].output[0].format("YYYY-MM-DD HH:mm"))
      expect(dayNeed(2).hours(11).minute(25).format("YYYY-MM-DD HH:mm")).toEqual(result3[1].output[0].format("YYYY-MM-DD HH:mm"))
      expect(dayNeed(5).hours(13).minute(00).format("YYYY-MM-DD HH:mm")).toEqual(result3[2].output[0].format("YYYY-MM-DD HH:mm"))
      expect(dayNeed(7).hours(11).minute(45).format("YYYY-MM-DD HH:mm")).toEqual(result3[3].output[0].format("YYYY-MM-DD HH:mm"))
      expect(dayNeed(7).hours(10).minute(45).format("YYYY-MM-DD HH:mm")).toEqual(result3[3].output[1].format("YYYY-MM-DD HH:mm"))
      expect(dayNeed(6).hours(13).minute(20).format("YYYY-MM-DD HH:mm")).toEqual(result3[4].output[0].format("YYYY-MM-DD HH:mm"))
  })
})

describe('ระบบตัดคำติดกัน ',function(){
  it('ควรจะตัดคำได้ แม่นยำ',function(){
    //console.log)
    result =  splitWordWithPlusSign("วันจันทร์ ไปซื้อของ 17 มกราคม โรบินสัน พัทยา วันอังคารไปเที่ยว นะ จันทร์1 พฤษภา 11.00 ")
     expect(dayNeed(1).hours(7).minute(0).format("YYYY-MM-DD HH:mm")).toEqual(result[0].output[0].format("YYYY-MM-DD HH:mm"))
     expect(moment().date(17).month("January").hours(7).minute(0).format("YYYY-MM-DD HH:mm")).toEqual(result[1].output[0].format("YYYY-MM-DD HH:mm"))
     expect(dayNeed(2).hours(7).minute(0).format("YYYY-MM-DD HH:mm")).toEqual(result[2].output[0].format("YYYY-MM-DD HH:mm"))
     expect(moment().date(1).month("May").hours(11).minute(0).format("YYYY-MM-DD HH:mm")).toEqual(result[3].output[0].format("YYYY-MM-DD HH:mm"))
 
 })
})
describe('คำย่อ ไม่มีเวลา ',function(){
  it('คำย่อของ วัน',function(){
    let result12 = splitWordWithPlusSign("อา.")
    expect(dayNeed(7).hours(7).minute(00).format("YYYY-MM-DD HH:mm")).toEqual(result12[0].output[0].format("YYYY-MM-DD HH:mm"))

    let result10 = splitWordWithPlusSign("จ.  ")
    expect(dayNeed(1).hours(7).minute(00).format("YYYY-MM-DD HH:mm")).toEqual(result10[0].output[0].format("YYYY-MM-DD HH:mm"))

    let result18 = splitWordWithPlusSign("อ.  ")
    expect(dayNeed(2).hours(7).minute(00).format("YYYY-MM-DD HH:mm")).toEqual(result18[0].output[0].format("YYYY-MM-DD HH:mm"))

    let result19 = splitWordWithPlusSign("พ.  ")
    expect(dayNeed(3).hours(7).minute(00).format("YYYY-MM-DD HH:mm")).toEqual(result19[0].output[0].format("YYYY-MM-DD HH:mm"))

    let result20 = splitWordWithPlusSign("พฤ.  ")
    expect(dayNeed(4).hours(7).minute(00).format("YYYY-MM-DD HH:mm")).toEqual(result20[0].output[0].format("YYYY-MM-DD HH:mm"))

    let result21 = splitWordWithPlusSign("ศ.  ")
    expect(dayNeed(5).hours(7).minute(00).format("YYYY-MM-DD HH:mm")).toEqual(result21[0].output[0].format("YYYY-MM-DD HH:mm"))

    let result22 = splitWordWithPlusSign("ส.  ")
    expect(dayNeed(6).hours(7).minute(00).format("YYYY-MM-DD HH:mm")).toEqual(result22[0].output[0].format("YYYY-MM-DD HH:mm"))
  })
  
  it('คำย่อของ วัน แบบมีเวลา',function(){
    let result12 = splitWordWithPlusSign("อา. 10.25 7 โมง 50 นาที 23 นาฬิกา 9 นาที ")
    expect(dayNeed(7).hours(7).minute(50).format("YYYY-MM-DD HH:mm")).toEqual(result12[0].output[0].format("YYYY-MM-DD HH:mm"))
    expect(dayNeed(7).hours(10).minute(25).format("YYYY-MM-DD HH:mm")).toEqual(result12[0].output[1].format("YYYY-MM-DD HH:mm"))
    expect(dayNeed(7).hours(23).minute(9).format("YYYY-MM-DD HH:mm")).toEqual(result12[0].output[2].format("YYYY-MM-DD HH:mm"))

    let result10 = splitWordWithPlusSign("จ. 11 โมง 20 นาที ")
    expect(dayNeed(1).hours(11).minute(20).format("YYYY-MM-DD HH:mm")).toEqual(result10[0].output[0].format("YYYY-MM-DD HH:mm"))

    let result18 = splitWordWithPlusSign("อ.  ")
    expect(dayNeed(2).hours(7).minute(00).format("YYYY-MM-DD HH:mm")).toEqual(result18[0].output[0].format("YYYY-MM-DD HH:mm"))

    let result19 = splitWordWithPlusSign("พ.  ")
    expect(dayNeed(3).hours(7).minute(00).format("YYYY-MM-DD HH:mm")).toEqual(result19[0].output[0].format("YYYY-MM-DD HH:mm"))

    let result20 = splitWordWithPlusSign("พฤ.  ")
    expect(dayNeed(4).hours(7).minute(00).format("YYYY-MM-DD HH:mm")).toEqual(result20[0].output[0].format("YYYY-MM-DD HH:mm"))

    let result21 = splitWordWithPlusSign("ศ.  ")
    expect(dayNeed(5).hours(7).minute(00).format("YYYY-MM-DD HH:mm")).toEqual(result21[0].output[0].format("YYYY-MM-DD HH:mm"))

    let result22 = splitWordWithPlusSign("ส.  ")
    expect(dayNeed(6).hours(7).minute(00).format("YYYY-MM-DD HH:mm")).toEqual(result22[0].output[0].format("YYYY-MM-DD HH:mm"))
    })
 
})


describe('วันนี้ มะรืน จ. อ.',function(){
  it('วันที่มีคำย่อ และ วันนี้ พรุ่งนี้ มะรืน',function(){
let result1 = splitWordWithPlusSign("วัน พุธ 8 โมง ")
expect(dayNeed(3).hours(8).minute(00).format("YYYY-MM-DD HH:mm")).toEqual(result1[0].output[0].format("YYYY-MM-DD HH:mm"))    


let result2 = splitWordWithPlusSign("วัน พุธ 9 โมง 5 นาที ")
expect(dayNeed(3).hours(9).minute(5).format("YYYY-MM-DD HH:mm")).toEqual(result2[0].output[0].format("YYYY-MM-DD HH:mm"))

let result3 = splitWordWithPlusSign("วันนี้")
expect(moment().format("YYYY-MM-DD HH:mm")).toEqual(result3[0].output[0].format("YYYY-MM-DD HH:mm"))

let result4 = splitWordWithPlusSign("วันนี้ 9 โมง 50 นาที ")
expect(moment().hours(9).minute(50).format("YYYY-MM-DD HH:mm")).toEqual(result4[0].output[0].format("YYYY-MM-DD HH:mm"))

let result5 = splitWordWithPlusSign("มะรืน ")
expect(moment().add(2,'day').hours(7).minute(00).format("YYYY-MM-DD HH:mm")).toEqual(result5[0].output[0].format("YYYY-MM-DD HH:mm"))

let result6 = splitWordWithPlusSign("มะรืน 14.25")
expect(moment().add(2,'day').hours(14).minute(25).format("YYYY-MM-DD HH:mm")).toEqual(result6[0].output[0].format("YYYY-MM-DD HH:mm"))

let result7 = splitWordWithPlusSign("พรุ่งนี้")
expect(moment().add(1,'day').hours(7).minute(00).format("YYYY-MM-DD HH:mm")).toEqual(result7[0].output[0].format("YYYY-MM-DD HH:mm"))

let result8 = splitWordWithPlusSign("พรุ่งนี้  13.22")
expect(moment().add(1,'day').hours(13).minute(22).format("YYYY-MM-DD HH:mm")).toEqual(result8[0].output[0].format("YYYY-MM-DD HH:mm"))

let result9 = splitWordWithPlusSign("จันทร์ ไปโรบินสัน ")
expect(dayNeed(1).hours(7).minute(00).format("YYYY-MM-DD HH:mm")).toEqual(result9[0].output[0].format("YYYY-MM-DD HH:mm")) 

let result11 = splitWordWithPlusSign("อังคาร")
expect(dayNeed(2).hours(7).minute(00).format("YYYY-MM-DD HH:mm")).toEqual(result11[0].output[0].format("YYYY-MM-DD HH:mm"))  

let result23 = splitWordWithPlusSign("พฤหัส  ")
expect(dayNeed(4).hours(7).minute(00).format("YYYY-MM-DD HH:mm")).toEqual(result23[0].output[0].format("YYYY-MM-DD HH:mm"))

let result24 = splitWordWithPlusSign("พฤหัสบดี  ")
expect(dayNeed(4).hours(7).minute(00).format("YYYY-MM-DD HH:mm")).toEqual(result24[0].output[0].format("YYYY-MM-DD HH:mm"))

let result13 = splitWordWithPlusSign("พุธ")
expect(dayNeed(3).hours(7).minute(0).format("YYYY-MM-DD HH:mm")).toEqual(result13[0].output[0].format("YYYY-MM-DD HH:mm"))

let result14 = splitWordWithPlusSign("พุท")
expect(undefined).toEqual(result14[0])

let result15 = splitWordWithPlusSign("พุทธ")
expect(undefined).toEqual(result14[0])

let result16 = splitWordWithPlusSign("วันอังคาร 11.00 ")
expect(dayNeed(2).hours(11).minute(00).format("YYYY-MM-DD HH:mm")).toEqual(result16[0].output[0].format("YYYY-MM-DD HH:mm"))

let result17 = splitWordWithPlusSign("วันอังคาร 17.00 ")
expect(dayNeed(2).hours(17).minute(00).format("YYYY-MM-DD HH:mm")).toEqual(result17[0].output[0].format("YYYY-MM-DD HH:mm"))

  })
})