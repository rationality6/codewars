const reverseWords = str => {
  let splitedStr = str.split(' ')
  return splitedStr.map((a)=>{
    return a.split('').reverse().join('')
  }).join(' ')
}


let result = reverseWords("This is an example!");
console.log(result);
// returns  "sihT si na !elpmaxe"
