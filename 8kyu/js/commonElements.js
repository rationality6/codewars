let array0 = [1, 2, 'a', 5, 6]
let array1 = [1, 5, 6, 8, 9]

const commonElements = (arr0, arr1) => {
  let result = []
  arr0.concat(arr1).sort().map((elem, index, self) => {
    if (elem === self[index + 1]) {
      result = result.concat(elem)
    }
  })
  return result
}

console.log(commonElements(array0, array1));
