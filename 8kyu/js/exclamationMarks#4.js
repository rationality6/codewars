const remove = s => `${s.replace(/!+/g,'')}!`


console.log(remove("Hi!"));
 // , "Hi!")

console.log(remove("Hi!!!"));
 // ,"Hi!")

console.log(remove("!Hi"));
 // , "Hi!")

console.log(remove("!Hi!"));
 // , "Hi!")

console.log(remove("Hi! Hi!"));
 // , "Hi Hi!")

console.log(remove("Hi"));
 // , "Hi!")
