const isVow = numbers => {
  return numbers.map((a,i)=>{
    let char = String.fromCharCode(a)
    // console.log(char);
    if ('aeiou'.indexOf(char) !== -1){
      return char
    }
    return a
  })
}

const isVow = a => a.map(x=>'aeiou'.includes(y=String.fromCharCode(x)) ? y : x)

console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]));
// [118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]);

// isVow([101,121,110,113,113,103,121,121,101,107,103])
// ["e",121,110,113,113,103,121,121,"e",107,103]);
