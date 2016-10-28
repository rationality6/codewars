const remove = (s,n) => {
  return s.replace(/!/,s=> --n >= 0 ? '' : s)
}

console.log(remove("Hi!",1));
 // , "Hi")

console.log(remove("Hi!",100));
// , "Hi")

console.log(remove("Hi!!!",1));
 // , "Hi!!")

console.log(remove("Hi!!!",100));
// , "Hi")

console.log(remove("!Hi",1));
 // , "Hi")

// remove("!Hi!",1)
 // , "Hi!")

// remove("!Hi!",100)
// , "Hi")

// remove("!!!Hi !!hi!!! !hi",1)
// , "!!Hi !!hi!!! !hi")

// remove("!!!Hi !!hi!!! !hi",3)
// , "Hi !!hi!!! !hi")

// remove("!!!Hi !!hi!!! !hi",5)
// , "Hi hi!!! !hi")

// remove("!!!Hi !!hi!!! !hi",100)
// , "Hi hi hi")
