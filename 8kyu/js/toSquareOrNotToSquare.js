const squareOrSquareRoot = array => {
  return array.map(a => {
    if (Math.sqrt(a) % 1 === 0) {
      return ~~(Math.sqrt(a))
    } else {
      return a * a
    }
  });
}

// const squareOrSquareRoot = array => array.map(a => Math.sqrt(a) % 1 == 0 ? Math.sqrt(a) : (a * a));

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));

console.log(squareOrSquareRoot([1, 2, 3, 4, 5, 6]));
