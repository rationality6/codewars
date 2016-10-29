const gcd = (a, b) => {
  if (!b) {
    return a
  } else {
    return gcd(b, a % b)
  }
}

const lcm = (a, b) => {
  if (b == 0) return 0;
  let gcdv = gcd(a, b)
  let times = a * b
  return times / gcdv
}

const sum = arr => {
  let result = 0
  for(){

  }
}

const sumDifferencesBetweenProductsAndLCMs = pairs => {
  let products = pairs.map(a => a[0] * a[1])
  let productsSum = products.reduce((a, b) => a + b)
  console.log(productsSum);
  let lcmv = pairs.map(a => {
    return lcm(a[0], a[1])
  })
  console.log(lcmv);
  let lcmvSum = lcmv.reduce((a, b) => a + b)
  return productsSum - lcmvSum
}

// console.log(sumDifferencesBetweenProductsAndLCMs([[15,18], [4,5], [12,60]]));
// ,840);

// console.log(sumDifferencesBetweenProductsAndLCMs([[0,0]]));
console.log(sumDifferencesBetweenProductsAndLCMs([[1,1], [0,0], [13,91]]))
// ,1092);

// sumDifferencesBetweenProductsAndLCMs([[15,7], [4,5], [19,60]])
// ,0);

// sumDifferencesBetweenProductsAndLCMs([[20,50], [10,10], [50,20]])
// ,1890);

// sumDifferencesBetweenProductsAndLCMs([])
// ,0);
