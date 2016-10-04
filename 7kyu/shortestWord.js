// const findShort = s => {
//   let splited_words = s.split(' ');
//   let min_result = splited_words[0].length;
//   for (let i = 0, len = splited_words.length; i < len; i++) {
//     if (min_result > splited_words[i].length) {
//       min_result = splited_words[i].length;
//     }
//   }
//   return min_result;
// }

const findShort = str => {
  return Math.min.apply(null, str.split(' ').map(w => w.length));
}

const findLong = str => {
  return Math.max.apply(null, str.split(' ').map(x => x.length));
}

let a = Math.min.apply(null, [9, 9, 3, 4, 5])
console.log(a);

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
console.log(findShort("n take over the world maybe who knows perhaps"));
console.log(findLong("bitcoin take over the world maybe who knows perhaps"));
console.log(findLong("bitcoinwoefijoweij take over the world maybe who knows perhaps"));
console.log(findShort("turns out random test cases are easier than writing out basic ones"));
console.log(findLong("turns out random test cases are easier than writing out basic ones"));
