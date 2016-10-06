// const well = x => {
//   const good_count = x.filter(x => x === 'good').length;
//   return good_count < 1 ? 'Fail!' :
//          good_count < 3 ? 'Publish!' : 'I smell a series!';
// }


// function well(arr){
//   let count = 0
//   for (let i = 0, len = arr.length; i < len; i += 1) {
//     if (arr[i] === 'good') {
//       count = count + 1
//     }
//   }
//   console.log(count);
//   if (count > 2) {
//     return 'I smell a series!'
//   } else if (count > 0) {
//     return "Publish!"
//   } else {
//     return 'Fail!'
//   }
// }


const well = str => {
  const count = str.filter(x => x === 'good').length;
  console.log(count);
  return count<1 ? 'Fail!' :
  count<3?'Publish!':'I smell a series!'
}

console.log(well(['bad', 'bad', 'bad']));
// 'Fail!'
console.log(well(['good', 'bad', 'bad', 'bad', 'bad']));
// 'Publish!'
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']));
// 'I smell a series!'
