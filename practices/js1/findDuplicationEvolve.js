var arr0 = [12, 9, 9, 111, 2, 3, 4, 4, 5, 7, 12];

function findDuplication(arr) {
  var sorted_arr = arr.slice().sort();

  console.log(sorted_arr);
  // [ 111, 12, 12, 2, 3, 4, 4, 5, 7, 9, 9]

  var results = [];
  for (var i = 0; i < arr.length - 1; i++) {
    if (sorted_arr[i + 1] == sorted_arr[i]) {
      results.push(sorted_arr[i]);
    }
  }

  console.log(results);
  //[ 12, 4, 9]
}

findDuplication(arr0)





const arr0 = [12, 9, 9, 111, 2, 3, 4, 4, 5, 7, 12];

const findDuplication = arr => {
  let results = [];
  [...arr].sort((a, b) => a - b).forEach((c, i, a) => {
    if (a[i + 1] === c) {
      results = results.concat(c);
    }
  })
  return results
}

console.log(findDuplication(arr0));
// [ 4, 9, 12]





const arr0 = [12, 9, 9, 111, 2, 3, 4, 4, 5, 7, 12];

const findDuplication = arr => {
  return [...arr].sort((a, b) => a - b).filter((elem, index, arr) => {
    return arr[index + 1] === elem
  })
}

console.log(findDuplication(arr0));
// [ 4, 9, 12]
