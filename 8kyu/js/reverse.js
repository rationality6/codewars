const reverse = str => str.split(' ').reverse().join(' ')

console.log(reverse('Hello World'));

reverse = s => s.split(' ').reverse().join(' ')

//
// // TODO: Replace examples and use TDD development by writing your own tests
//
// // These are some of the methods available:
// //    Test.expect(boolean, [optional] message)
// //    Test.assertEquals(actual, expected, [optional] message)
// //    Test.assertSimilar(actual, expected, [optional] message)
// //    Test.assertNotEquals(actual, expected, [optional] message)
//
// // You can also use Chai (http://chaijs.com/)
// // var expect = require("chai").expect;
// // var assert = require("chai").assert;
// // require("chai").should();
//
// describe("Solution", function(){
//   it("should test for something", function(){
//     Test.assertEquals("actual", "expected", "This is just an example of how you can write your own TDD tests");
//   });
// });
