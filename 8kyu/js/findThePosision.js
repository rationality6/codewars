const position = letter => {
  table = "abcdefghijklmnopqrstuvwxyz".split('')
  for(let i in table){
    if(table[i] === letter){
      return `Position of alphabet: ${+(i)+1}`
    }
  }
}

const position = l => `Position of alphabet: ${l.charCodeAt() - 96}`;

console.log(position("a"));
  // ,"Position of alphabet: 1");

position("z")
  // ,"Position of alphabet: 26");

position("e")
  // ,"Position of alphabet: 5");
