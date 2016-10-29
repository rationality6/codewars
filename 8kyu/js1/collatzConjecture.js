const hotpo = (n, acc = 0) => {
  if (n <= 1) {
    return acc;
  } else {
    return hotpo(n%2==0 ? n/2 : 3*n+1, acc+1);
  }
}

console.log(hotpo(1));
// , 0);

console.log(hotpo(5));
// , 5);

console.log(hotpo(6));
// , 8);

console.log(hotpo(23));
// , 15);
