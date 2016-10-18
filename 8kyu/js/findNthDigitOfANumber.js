const findDigit = (num, nth) => nth <= 0 ? -1 : +([...(''+Math.abs(num))].reverse()[nth-1] || 0);

// console.log(findDigit(5673,4));

// console.log(findDigit(129, 2));
// , 2);

// console.log(findDigit(-2825, 3));
// , 8);

console.log(findDigit(-456, 4));
// , 0);

findDigit(0, 20)
// , 0);

findDigit(65, 0)
// , -1);

findDigit(24, -8)
// , -1);
