String.prototype.toAlternatingCase = function () {
  return this.split('').map(a=>{
    if(a===a.toUpperCase()){
      return a.toLowerCase()
    }else{
      return a.toUpperCase()
    }
  }).join('')
}


String.prototype.toAlternatingCase = function () {
    return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
}


console.log("hello world".toAlternatingCase());
// , "HELLO WORLD");
// "HELLO WORLD".toAlternatingCase()
// , "hello world");
// "hello WORLD".toAlternatingCase()
// , "HELLO world");
// "HeLLo WoRLD".toAlternatingCase()
// , "hEllO wOrld");
// "12345".toAlternatingCase()
// , "12345");
// "1a2b3c4d5e".toAlternatingCase()
// , "1A2B3C4D5E");
// "String.prototype.toAlternatingCase".toAlternatingCase()
// , "sTRING.PROTOTYPE.TOaLTERNATINGcASE");
// "Hello World".toAlternatingCase().toAlternatingCase()
// , "Hello World");
