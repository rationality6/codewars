const summation = num => [...Array(num)].map((_,i)=>i+1).reduce((a,b)=>a+b)

const summation = n => n * (n + 1) / 2;

console.log(summation(5));
