const list0 = [5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const list1 = [3, 1, 2, 7, 4, 5, 6, 7, 8, 9, 10]


const list0 = [5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const list1 = [3, 1, 2, 7, 4, 5, 6, 7, 8, 9, 10]

const findFirstDuplication = list => {
  for (let i = 0, len = list.length; i < len; i += 1) {
    for (let n = 0, len1 = list.length; n < len1; n += 1) {
      if (i !== n && list[i] === list[n]) {
        return `Index: ${i}, Value: ${list[i]} `
      }
    }
  }
  return 'No duplications.'
}

console.log(findFirstDuplication(list0));
console.log(findFirstDuplication(list1));
