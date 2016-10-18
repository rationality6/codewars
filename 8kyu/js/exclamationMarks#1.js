const remove = s => s.replace(/!$/,'')

console.log(remove("Hi!"));
 // , "Hi")

console.log(remove("Hi!!!"));
 // ,"Hi!!")

console.log(remove("!Hi"));
 // , "!Hi")

remove("!Hi!")
 // , "!Hi")

remove("Hi! Hi!")
 // , "Hi! Hi")

remove("Hi")
 // , "Hi")
