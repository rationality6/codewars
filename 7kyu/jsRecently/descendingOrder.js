const descendingOrder = n => {
  return +(String(n).split('').map(a => +a).sort((a, b) => {
    return (a - b) * -1
  }).join(''))
}

const descendingOrder = n => {
  return parseInt(String(n).split('').sort().reverse().join(''))
}

console.log(descendingOrder(0));
  // , 0)

console.log(descendingOrder(1));
  // , 1)

console.log(descendingOrder(123456789));
// , 987654321)
