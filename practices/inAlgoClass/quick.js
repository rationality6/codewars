function isDefined (obj) {
  return typeof obj != 'undefined';
}

/** Swaps in place two values in an array
 *  @param {array} arr: the array to mutate
 *  @param {number} i: the first position to swap
 *  @param {number} j: the second position to swap
 */

function swap(arr, i, j) {
  var cachedVal = arr[i];
  arr[i] = arr[j];
  arr[j] = cachedVal;

  return arr;
}

/** Merges elements from two sorted arrays in order in a new array
 *  @param {array} a: first sorted array
 *  @param {array} b: second sorted array
 *  @param {array}: new sorted merged array
 */
function quickSort(items, left, right) {
  var index;

  if (items.length > 1) {
    // Set default left and right values
    left = typeof left != "number" ? 0 : left;
    right = typeof right != "number" ? items.length - 1 : right;

    // Business end
    index = partition(items, left, right);

    if (left < index - 1) quickSort(items, left, index - 1);
    if (index < right) quickSort(items, index, right);
  }

  return items;
}


function partition (arr, left, right) {
  let pivot = arr[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;

  while (i <= j) {
    // Find first value that is larger than pivot from left
    while (arr[i] < pivot) i += 1;
    // Find first value that is smaller than pivot from right
    while (arr[j] > pivot) j -= 1;

    if (i <= j) {
      swap(arr, i, j);
      i += 1;
      j -= 1;
    }
  }

  return i;
}

var unsortedArr = [88, 6, 7, 9, 12, 45, 32, 22, 99, 112, 56, 89, 45, 90];
console.log("Unsorted Array:", unsortedArr);
quickSort(unsortedArr);
console.log("Sorted Array:", unsortedArr);
