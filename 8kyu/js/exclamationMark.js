const replace = s => {
  return s.replace(/[aeoiu]/ig,'!')
}

console.log(replace("Hi!"));
 // , "H!!")

// replace("!Hi! Hi!")
 // , "!H!! H!!")

// replace("aeiou")
 // , "!!!!!")

// replace("ABCDE")
 // , "!BCD!")
