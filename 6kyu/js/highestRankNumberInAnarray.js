const highestRank = arr => {
  return arr.sort((a, b) => a - b).map((elem, index, self) => {
    if (elem === self[index + 1]) {
      console.log(elem);
    }
  })
}

const arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];

console.log(highestRank(arr));
// , 12);
