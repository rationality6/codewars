const isIsogram = str => {
  return !/(\w).*\1/i.test(str)
}

const isIsogram = str => {
  return !str.match(/([a-z]).*\1/i);
}

// const isIsogram = str => {
//   let alphabet = 'abcdefghijklmn'
//   let alphabetSplited = alphabet.split('')
//
//   for (let i = 0; i < alphabetSplited.length; i += 1) {
//     if ( (str.split(`${alphabetSplited[i]}`).length) > 2 ) {
//       return false
//     }
//   }
//   return true
// }


// const isIsogram = str => {
//   let sorted = str.toLowerCase().split('').sort()
//   for (let i = 0, len = sorted.length; i < len; i += 1) {
//     if (sorted[i] === sorted[i + 1]) {
//       return false
//     }
//   }
//   return true
// }

console.log(isIsogram('fof'));
console.log(isIsogram('foF'));
console.log(isIsogram('foui'));
console.log(isIsogram('foa'));
console.log(isIsogram('asdf'));
