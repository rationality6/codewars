function switchCase(n) {
  switch (n) {
    case 1:
      return `1`
    case 2:
      return '2'
    default:
      return '3'
  }
}

console.log(switchCase());
console.log(switchCase(2));
