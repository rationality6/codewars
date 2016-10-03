// const vowel2index = (str) => {
//   let splited = str.split('')
//   let array = ""
//   splited.map((value, index, self) => {
//     if (value === 'i' || value === 'e' || value === 'o' || value === 'a' || value === 'U' || value === 'I' || value === 'E' || value === 'O' || value === 'A' || value === 'U') {
//       array += index + 1
//     } else {
//       array += value
//     }
//   })
//   return array
// }
//

// const vowel2index = (str) => str.replace(/[aeiou]/ig,(m,i)=>i+1)

const vowel2index = str => str.replace(/[aeoiu]/ig,(m,i)=>i+1)

console.log(vowel2index('this is my string'));
console.log(vowel2index('Codewars is the best site in the world'));
console.log(vowel2index('Tomorrow is going to be raining'));
console.log(vowel2index(''));

// vowel2index('Codewars is the best site in the world'), 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld');
// vowel2index('Tomorrow is going to be raining'), 'T2m4rr7w 10s g1415ng t20 b23 r2627n29ng');
// vowel2index(''), '');
