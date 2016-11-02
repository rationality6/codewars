const flatten = array => {
  let result = []
  for (let i = 0, len = array.length; i < len; i++) {
    if(array[0].length > 1){
      for (let b = 0, len = array[i].length; b < len; b++) {
        result.push(array[i][b]);
      }
    }else{
      result.push(array[i])
    }
  }
  return result
}


// const flatten = array => [].concat.apply([], array)

const result = flatten([
  [1, 2, 3],
  ["a", "b", "c"],
  [1, 2, [3,4]]
])
const result1 = flatten([1, 2, 3])
const result2 = flatten([])
console.log(result);
console.log(result1);
console.log(result2);


// flatten([]), []);
// flatten([1, 2, 3]), [1, 2, 3]);
// flatten([[1, 2, 3], ["a", "b", "c"], [1, 2, 3]]), [1, 2, 3, "a", "b", "c", 1, 2, 3]);
// flatten([[3, 4, 5], [[9, 9, 9]], ["a,b,c"]]), [3, 4, 5, [9, 9, 9], "a,b,c"]);
// flatten([[[3], [4], [5]], [9], [9], [8], [[1, 2, 3]]]), [[3], [4], [5], 9, 9, 8, [1, 2, 3]]);




구글 소프트웨어 엔지니어가 되기위한 데일리 연습 플랜.
A complete daily plan for studying to become a Google software engineer.
