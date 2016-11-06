// Return the nth triangular number
const triangular = n => {
  for (let i = 0; i < n; i += 1) {
    console.log(i);
  }
  return [...Array(n)].map((_,i)=>{
    return i
  })
}

// console.log(triangular(2));
  // , 3

// triangular(4)
  // , 10
