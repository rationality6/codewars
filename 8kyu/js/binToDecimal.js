const binToDec = bin => parseInt(bin, 2)

binToDec('1001001')

Test.describe("Example Tests", _ => {
  [ ["1",1], ["0",0], ["1001001", 73] ].forEach( ([inp, exp]) => Test.assertEquals( binToDec(inp), exp ) )
});

console.log(parseInt('1001001',2));
