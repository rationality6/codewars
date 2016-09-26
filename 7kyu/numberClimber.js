function climb(n) {
  var res = [n];
  while (n > 1) {
    n = Math.floor(n / 2);
    console.log(n);
    res.push(n)
  }
  return res.reverse();
}
console.log(climb(10));
console.log(climb(4));


function climb(n){
  for( var i = n, temp = []; i > 0; i = Math.floor(i/2) ) {
    temp.unshift(i);
  }
  return temp;
}
console.log(climb(10));
console.log(climb(4));
