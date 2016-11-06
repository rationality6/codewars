const Module = (function(){

  const _publicMethod = function(){
    console.log('myModule.publicMethod');
  }

  const anotherPublicMethod = function(){
    console.log('moModule.anotherPublicMethod');
  }

  return {
    publicMethod: _publicMethod,
    anotherPublicMethod: anotherPublicMethod
  }
})()

Module.publicMethod()
Module.anotherPublicMethod()
