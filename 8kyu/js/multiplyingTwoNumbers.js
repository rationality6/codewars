const multiply = (x,y) => {
  return x * y
}

function multiply(a, b){
  if(typeof a == 'number' && typeof b == 'number')
    return a * b;
}

//
// describe("Solution", function(){
//   it("should test for something", function(){
//     Test.assertEquals("actual", "expected", "This is just an example of how you can write your own TDD tests");
//   });
// });
