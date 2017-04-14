// describe('Regex wednesday test',function(){
//   it('should be able to produce object wednesday',function(){
//          var result =  splitWordWithPlusSign("วัน พุธ 8 โมง ")              
//          expect("2017-04-05 08:00").toEqual(result.output[0].format("YYYY-MM-DD HH:mm")) 

//          result =  splitWordWithPlusSign(" ไปโรบินสัน  ")
//          expect(undefined).toEqual(result.output)
//   })
// })

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
describe('xx โมง xx นาที test',function(){
  it("should be able to make correct time", function(){
      // var result =  splitWordWithPlusSign("วัน พุธ 9 โมง 5 นาที ") 
      // expect("09:05").toEqual(result.output[0].format("HH:mm"))

      result2 = splitWordWithPlusSign("วันอาทิตย์ ไปกินข้าวตอน 10.45 11 โมง 45 นาที โรบินสัน วันจันทร์ 8 โมง เรียนสัมนา ม.เกษตร ศรีราชา ไปเที่ยวทะเลพัทยา,ไหว้พระ พุทธมน 18:00")
      console.log(result2)
      expect(moment().day(7).hours(11).minute(45).format("YYYY-MM-DD HH:mm")).toEqual(result2[0].output[0].format("YYYY-MM-DD HH:mm"))
      
      result3 = splitWordWithPlusSign("วันจันทร์ 22.30  วันอังคาร 11.25  วันศุกร์ 13.00 วันอาทิตย์ ไปกินข้าวตอน 10.45 11 โมง 45 นาที วันเสาร์ 13.20")
      expect(dayNeed(1).hours(22).minute(30).format("YYYY-MM-DD HH:mm")).toEqual(result3[0].output[0].format("YYYY-MM-DD HH:mm"))
      

  })
})