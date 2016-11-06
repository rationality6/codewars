const foo = (function() {
  return {
    bar: function() {
      console.log('bar');
    },
    baz: function(){
      console.log('baz');
    }
  }
})()

foo.bar()
foo.baz()
