describe('Regex wednesday test',function(){
  it('should be able to produce object wednesday',function(){
         var result =  splitWordWithPlusSign("วัน พุธ 8 โมง ")              
         expect("2017-03-29 08:00").toEqual(result.output[0].format("YYYY-MM-DD HH:mm")) 

         result =  splitWordWithPlusSign(" ไปโรบินสัน  ")
         expect(undefined).toEqual(result.output)
  })
})

describe('xx โมง xx นาที test',function(){
  it("should be able to make correct time", function(){
      var result =  splitWordWithPlusSign("วัน พุธ 9 โมง 5 นาที ") 
    expect("09:05").toEqual(result.output[0].format("HH:mm"))
  })
})