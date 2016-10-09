const array_diff = (a, b) => a.filter(x => b.indexOf(x) < 0)

console.log(typeof array_diff([1, 2], [1]));
// == [2]
console.log(array_diff([1, 2, 2, 2, 3], [2]));
// == [1,3]

// describe("Solution", function(){
//   it("should test for something", function(){
//     Test.assertEquals(difference([1, 2], [1]), [2]);
//     Test.assertEquals(difference([1, 2, 2, 2, 3], [2]),[1,3];
//   });
// });
