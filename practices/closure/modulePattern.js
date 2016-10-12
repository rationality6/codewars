const Module = (function(){
  return {
    myMethod: function(){
      console.log('myMethod');
    },
    someOtherMethod: function(){
      console.log('SomeOtherMethod');
    }
  }
})()

Module.myMethod()
Module.someOtherMethod()
