const getAverage = marks => Math.floor((marks.reduce((a,b)=>a+b))/marks.length)

console.log(getAverage([2,2,2,2]));
// ,2);

// Test.assertEquals(getAverage([1,2,3,4,5,]),3);
// Test.assertEquals(getAverage([1,1,1,1,1,1,1,2]),1);
