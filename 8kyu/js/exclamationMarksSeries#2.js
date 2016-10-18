const remove = s => s.replace(/!+$/, '');

console.log(remove("Hi!"));
 // , "Hi")

console.log(remove("Hi!!!"));
 // ,"Hi")

console.log(remove("!Hi"));
 // , "!Hi")

console.log(remove("!Hi!"));
 // , "!Hi")

console.log(remove("Hi! Hi!"));
 // , "Hi! Hi")

console.log(remove("Hi"));
 // , "Hi")
