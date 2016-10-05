const unsortedArr = [88, 6, 7, 12, 45, 112, 5, 9];

const insertionSort = arr => {
  let held, finger;
  for (let i = 1; i < arr.length; i += 1) {
    held = arr[i];
    finger = i - 1
    while(finger>=0 && arr[finger]>held){
      arr[finger +1 ] = arr[finger]
      finger -=1
    }
    arr[finger+1]=held
  }
  return arr
}

console.log(insertionSort(unsortedArr));
