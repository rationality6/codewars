const solution = (a, b) => {
  return a.length > b.length ? `${b}${a}${b}` : `${a}${b}${a}`
}

function solution(a, b) {
  return a.length < b.length ? a + b + a : b + a + b
}

console.log(solution("1","22"));
console.log(solution("33","2"));
