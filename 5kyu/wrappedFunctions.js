function speak(name){
   return "Hello " + name;
}

Function.prototype.wrap = function(fn){
    let that = this;
    console.log(that);
    return function(arg2,arg3){
      return fn(that,arg2,arg3);
  };
};

speak = speak.wrap(function(original, yourName, myName){
   greeting = original(yourName);
   return greeting + ", my name is " + myName;
});


let greeting = speak("Mary", "Kate");
console.log(greeting);

console.log();
