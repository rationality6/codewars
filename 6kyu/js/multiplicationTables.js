// const multiplicationTable = (row, col) => {
//   let out = []
//   for (let i = 1; i <= row; i++) {
//     let temp = []
//     for (let j = 1; j <= col; j++) {
//       temp.push(i * j)
//     }
//     out.push(temp)
//   }
//   return out
// }

const multiplicationTable = (row, col) => {
  return [...Array(row)].map((_, i) => {
    return [...Array(col)].map((_, j) => {
      return (i + 1) * (j + 1);
    })
  })
}

console.log(multiplicationTable(3, 3));
