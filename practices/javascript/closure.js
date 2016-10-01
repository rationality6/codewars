function outter() {
  var greeting = "Hello wolrd"

  return function() {
    console.log(greeting);
  }
}

inner = outter()
// inner()
  // console.log(greeting);


function addOne() {
  var a = 0
  return function() {
    a++
    return a
  }
}

adding = addOne()
  // console.log(adding() + 3);



function factory_movie(title) {
  return {
    get_title: function() {
      return title;
    },
    set_title: function(_title){
      title = _title
    }
  }
}

// ghost = factory_movie('Ghost in the shell')
// console.log(ghost.get_title());
// console.log(ghost.title);
// ghost.set_title('foo')
// console.log(ghost.get_title());


var arr = []
for(var i = 0; i < 5; i++){
    arr[i] = function(){
        return i;
    }
}
for(var index in arr) {
    console.log(arr[index]());
}


var arr = []
for(var i = 0; i < 5; i++){
    arr[i] = function(id) {
        return function(){
            return id;
        }
    }(i);
}
for(var index in arr) {
    console.log(arr[index]());
}
