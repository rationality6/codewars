const getConsecutive = arr => {
  sorted = arr.sort((a, b) => a - b)
  // Math.min()

  total = sorted[sorted.length - 1] - sorted[0]+1
  if(!total){return 0}
  return total - sorted.length
}

console.log(getConsecutive([4,8,6]));
