// https://www.codewars.com/kata/enumerable-magic-number-1-true-for-all

// const all = (arr,fun) => {
//   let afterFilter = arr.filter(fun)
//   let afterFilterS = JSON.stringify(afterFilter)
//   let arrS = JSON.stringify(arr)
//   return afterFilterS === arrS
// }

const all = (arr,fun) => {
  console.log(arr.every(fun));
  return arr.every(fun)
}

console.log(all( [1,2,3,4,5], (v)=>v<9 ));
// , true)

// console.log(all( [1,2,3,4,5], (v)=>v>9 ));
// , false)
