const Module = (function(){
  const myModule = {}

  const privateMethod = function(){

  }

  myModule.publicMethod = function(){
    console.log('myModule.publicMethod');
  }

  myModule.anotherPublicMethod = function(){
    console.log('moModule.anotherPublicMethod');
  }

  return myModule
})()

Module.publicMethod()
Module.anotherPublicMethod()
