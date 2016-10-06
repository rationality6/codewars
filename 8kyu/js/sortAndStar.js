// const twoSort = s => {
//   s.sort()
//   return s[0].split('').map(a=> s[0][s[0].length-1] === a ? `${a}` : `${a}***`  ).join('')
// }

const twoSort = s => s.sort()[0].split('').join('***');

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]));
// , 'b***i***t***c***o***i***n' );

// console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]));
// , 'a***r***e');
