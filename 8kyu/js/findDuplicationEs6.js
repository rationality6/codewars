const arr0 = [12, 9, 9, 111, 2, 3, 4, 4, 5, 7, 12];

const findDuplication = arr => {
  return [...arr].sort((a, b) => a - b).filter((elem, index, arr) => {
    return arr[index + 1] === elem
  })
}

console.log(findDuplication(arr0));
// [ 4, 9, 12]
