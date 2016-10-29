const isSortedAndHow = arr => {
  let ascendArray = arr.concat().sort((a, b) => (a - b))
  let ascendArrayStr = JSON.stringify(ascendArray)
  console.log(ascendArrayStr);

  let descendArray = arr.concat().sort((a, b) => ((a - b) * -1))
  let descendArrayStr = JSON.stringify(descendArray)
  console.log(descendArrayStr);

  let arrStr = JSON.stringify(arr)
  console.log(arrStr);

  if (ascendArrayStr === arrStr) {
    return 'yes, ascending'
  } else if (descendArrayStr === arrStr) {
    return 'yes, descending'
  } else {
    return 'no'
  }
}

const isSortedAndHow = (arr) => {
  return arr.every((x, i) => i == 0 || arr[i] >= arr[i - 1]) ? 'yes, ascending' :
    arr.every((x, i) => i == 0 || arr[i] <= arr[i - 1]) ? 'yes, descending' : 'no'
}

console.log(isSortedAndHow([1, 2]));
// , 'yes, ascending');

console.log(isSortedAndHow([15, 7, 3, -8]));
// , 'yes, descending');

// isSortedAndHow([4, 2, 30])
// , 'no');
// });

// console.log(JSON.stringify([1,2,3])===JSON.stringify([1,2,3]));
// console.log([1,2,3]===[1,2,3]);
