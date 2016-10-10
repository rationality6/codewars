const isPrime = num => {
  for (let i = 2; i < num; i++) if (num % 2 === 0) return false
  return 2 <= num
}

console.log(isPrime(0));
// '0 is not prime'
console.log(isPrime(1));
// '1 is not prime'
console.log(isPrime(2));
// '2 is prime'
console.log(isPrime(10));
//false
