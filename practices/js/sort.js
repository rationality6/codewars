const sorting = array => {
  return array.sort((a, b) => a - b)
}

console.log(sorting([3, 2, 6]));

//desc order.

const sorting = array => {
  return array.sort((a, b) => (a - b) * -1)
}

console.log(sorting([3, 2, 6]));
