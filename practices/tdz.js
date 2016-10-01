// TDZ example
let foo = 'bar1'
console.log(foo);

if(true){
  console.log(foo);
  let foo = 'bar2'
}

console.log(foo);
