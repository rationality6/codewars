const obj0 = {
  a: 1,
  b: 2,
  c: {
    d: 3
  }
}

console.log(JSON.stringify(obj0,null,4));


const obj2 = JSON.parse(JSON.stringify(obj0))


console.log(obj2);
