const GetSum = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}


console.log(GetSum(0, -1));
// ,-1);

console.log(GetSum(0, 1));
// ,1);
