// const correctTail = (body, tail) => {
//   let sub = body.substr(body.length - tail.length)
//   if (sub === tail) {
//     return true
//   } else {
//     return false
//   }
// };

const correctTail = (body, tail) => body.slice(-1) === tail[0]

correctTail("Fox", "x")
  // true
correctTail("Rhino", "o")
  // true
correctTail("Meerkat", "t")
  // true
