// const isPangram = str => {
//   let regex = /([a-z])(?!.*\1)/ig;
//   return (str.match(regex) || []).length === 26;
// }

const isPangram = str => {
  let strLow = str.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(x => {
    return strLow.indexOf(x) !== -1;
  });
}

// const isPangram = str => {
//   let regex = /([a-z])(?!.*\1)/ig;
//   return (str.match(regex) || []).length === 26;
// }

let string = "The quick brown fox jumps over the lazy dog."
console.log(isPangram(string));
// , true)

let string0 = "This is not a pangram."
console.log(isPangram(string0));
// , false)
