describe('Regex wednesday test',function(){
  it('should be able to produce object wednesday',function(){
         var result =  splitWordWithPlusSign("วัน พุธ 8 โมง ")              
         expect("2017-04-05 08:00").toEqual(result.output[0].format("YYYY-MM-DD HH:mm")) 

         result =  splitWordWithPlusSign(" ไปโรบินสัน  ")
         expect(undefined).toEqual(result.output)
  })
})

describe('xx โมง xx นาที test',function(){
  it("should be able to make correct time", function(){
      var result =  splitWordWithPlusSign("วัน พุธ 9 โมง 5 นาที ") 
      expect("09:05").toEqual(result.output[0].format("HH:mm"))

      result2 = splitWordWithPlusSign("วันอาทิตย์ ไปกินข้าวตอน 10.45 11 โมง 45 นาที โรบินสัน วันจันทร์ 8 โมง เรียนสัมนา ม.เกษตร ศรีราชา ไปเที่ยวทะเลพัทยา,ไหว้พระ พุทธมน 18:00")
      expect("2017-04-02 11:45").toEqual(result2[0].output[0].format("YYYY-MM-DD HH:mm"))
      expect("2017-04-02 10:45").toEqual(result2[0].output[1].format("YYYY-MM-DD HH:mm"))
      expect("2017-04-03 08:00").toEqual(result2[1].output[0].format("YYYY-MM-DD HH:mm"))
      expect("2017-04-03 18:00").toEqual(result2[1].output[1].format("YYYY-MM-DD HH:mm"))

  })
})