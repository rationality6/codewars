const toBinaryString = number => {
  if (number === 0) return '0';
  let tmp = '';
  while (number) {
    tmp += number & 1 ? 1 : 0;
    number >>= 1;
  }
  return tmp.split('').reverse().join('');
}

function toBinaryString(number){
  var r = '';
  do {
    r = (number & 1) + r;
    number >>= 1;
  } while(number);
  return r;
}

// describe("Solution", function(){
//   it("should test for something", function(){
//     Test.assertEquals(toBinaryString(6), '110', "This is just an example of how you can write your own TDD tests");
//   });
// });

console.log((6).toString(2));

console.log(number);
let tmp = ''
tmp += number & 1 ? 1 : 0;
