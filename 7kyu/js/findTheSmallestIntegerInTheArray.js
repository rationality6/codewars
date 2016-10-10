class SmallestIntegerFinder {
  findSmallestInt(args) {
    let min = args[0]
    for (let i = 0, len = args.length; i < len; i++) {
      if (args[i] < min) {
        min = args[i]
      }
    }
    return min
  }
}


// const findSmallestInt = args => {
//   let min = args[0]
//   for (let i = 0, len = args.length; i < len; i++) {
//     if (args[i] < min) {
//       min = args[i]
//     }
//   }
//   return min
// }
//
// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     return Math.min(...args)
//   }
// }

const a  = new SmallestIntegerFinder

console.log(a.findSmallestInt([1, 2, 3, 4, 5]));
console.log(a.findSmallestInt([2, 3, 4, 5]));
