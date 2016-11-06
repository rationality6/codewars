const climb = n => {
  var res = [n];
  while (n > 1) {
    n = Math.floor(n / 2);
    res.push(n)
  }
  return res.reverse();
}

console.log(climb(40));

const climb = (n, acc = []) => n ? climb(~~(n/2), [n].concat(acc)) : acc;
