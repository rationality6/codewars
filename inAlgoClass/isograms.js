// const isIsogram = str => {
//   return !/(\w).*\1/i.test(str)
// }

const is_isogram = str => {
  let alphabet = 'abcdefghijklmn'
  let alphabetSplited = alphabet.split('')

  for (let i = 0; i < alphabetSplited.length; i += 1) {
    if ( (str.split(`${alphabetSplited[i]}`).length) > 2 ) {
      return false
    }
  }
  return true
}

console.log(is_isogram('fof'));
console.log(is_isogram('foui'));
console.log(is_isogram('foa'));
console.log(is_isogram('asdf'));
