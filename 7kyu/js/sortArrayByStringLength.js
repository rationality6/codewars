const sortByLength = array => array.sort((a, b) => a.length - b.length)

let a = sortByLength(["Beg", "Life", "I", "To"])
console.log(a);
// ["I", "To", "Beg", "Life"]
let b = sortByLength(["", "Moderately", "Brains", "Pizza"])
  // ["", "Pizza", "Brains", "Moderately"]
console.log(b);
sortByLength(["Longer", "Longest", "Short"])
  // ["Short", "Longer", "Longest"]
