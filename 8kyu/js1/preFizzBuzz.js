const preFizz = n => {
  let result = []
  for (let i = 1; i <= n; i += 1) {
    result = result.concat(i)
  }
  return result
}

let preFizz = n => [...Array(n)].map((x, i) => i+1);

console.log(preFizz(2));
