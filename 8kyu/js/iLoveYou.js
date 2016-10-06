const phrases = [
  "I love you",
  "a little",
  "a lot",
  "passionately",
  "madly",
  "not at all",
]

const howMuchILoveYou = n => {
  return phrases[(n - 1) % phrases.length]
}

console.log(howMuchILoveYou(7));
console.log(howMuchILoveYou(3));
