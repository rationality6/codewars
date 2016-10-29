
console.log(15%3);

console.log(jsLcm(15,18));

const gcd = (a,b) =>{
  return !b ? a : gcd(b,a%b)
}

console.log(gcd(15,18));

const gcd = (a,b) =>{
  if (!b) {
    return a
  } else {
    return gcd(b,a%b)
  }
}

console.log(gcd(18,14));

const lcm = (a, b) => {
  return (a * b) / gcd(a, b);
}

console.log(lcm(15,18));

const gcd = (a,b) =>{
  if (!b) {
    return a
  } else {
    return gcd(b,a%b)
  }
}

const lcm = (a, b) => {
  return (a * b) / gcd(a, b);
}

console.log(lcm(15,18));
