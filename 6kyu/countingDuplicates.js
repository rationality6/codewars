// const duplicateCount = str => {
//   const processed = str.toLowerCase().split('').sort()
//   let result = []
//   processed.map((a, i) => {
//     if (a === processed[i + 1] && !result.includes(a)) {
//       result = result.concat(a)
//     }
//   })
//   return result.length
// }

const duplicateCount = str => {
  return (str.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}

duplicateCount("")
  // , 0);
console.log(duplicateCount("abcde"));
// , 0);
console.log(duplicateCount("aabbcde"));
// , 2);
console.log(duplicateCount("aabBcde"));
  // , 2,"should ignore case");
console.log(duplicateCount("Indivisibility"));
  // , 1)
duplicateCount("Indivisibilities")
  // , 2, "characters may not be adjacent")
