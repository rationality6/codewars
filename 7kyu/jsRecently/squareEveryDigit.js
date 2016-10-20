const squareDigits = num => +(String(num).split('').map(a=>a*a).join(''))

console.log(squareDigits(9119));
// , 811181);
