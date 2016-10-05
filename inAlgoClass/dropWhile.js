const isEven = num => {
  return num % 2 === 0
}

let seq = [2, 4, 6, 8, 1, 2, 5, 4, 3, 2];

const dropWhile = (seq, isEven) => {
  let newSeq = [...seq]
  for (let i in seq) {
    if (isEven(seq[i])) {
      newSeq.shift()
    } else {
      return newSeq
    }
  }
}

console.log(dropWhile(seq, isEven));
