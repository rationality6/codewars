const outter = () => {
  let greeting = "Hello wolrd"
  return () => {
    return greeting;
  }
}

const inner = outter()
console.log(inner());

// undefined
console.log(greeting);




const addOne = () => {
  let a = 0
  return () => {
    return ++a
  }
}

adding = addOne()
console.log(adding());
console.log(adding());
console.log(adding() + 3);
console.log(adding());



const factory_movie = title => {
  return {
    get_title() {
      return title;
    },
    set_title(_title) {
      title = _title
    }
  }
}

ghost = factory_movie('Ghost in the shell')
console.log(ghost.get_title());
console.log(ghost.title);
ghost.set_title('foo')
console.log(ghost.get_title());




let arr = []
for (let i = 0; i < 5; i++) {
  arr[i] = function() {
    return i;
  }
}
console.log(arr);

for (let index in arr) {
  console.log(arr[index]());
}




let arr = []
for (let i = 0; i < 5; i++) {
  arr[i] = function(id) {
    return function() {
      return id;
    }
  }(i);
}
for (let index in arr) {
  console.log(arr[index]());
}
