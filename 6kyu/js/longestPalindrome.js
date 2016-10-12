const longestPalindrome = s => {
  let longest = 0;
  let length = s.length;

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j <= length; j++) {
      let str = s.slice(i, j);
      console.log(str);
      let l = str.length
      if (isPalindrome(str) && longest < l) {
        longest = l;
      }
    }
  }
  return longest;
}

const isPalindrome = s => {
  let arr = s.split("");
  return s == arr.reverse().join("");
}

console.log(longestPalindrome('asdffdsa'));
