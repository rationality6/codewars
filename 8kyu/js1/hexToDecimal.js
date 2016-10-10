const hexToDec = s => parseInt(s,16)

hexToDec("1")
// , 1);

console.log(hexToDec("a"));
// , 10);

hexToDec("10")
// , 16);

hexToDec("FF")
// , 255);

hexToDec("-C")
// , -12);
