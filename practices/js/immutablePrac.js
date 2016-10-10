const arg = [0,1];
const obj = {foo:'bar'};

const newArg = [...arg]
const newObj = Object.assign({},obj)

newArg[0] = 10
newObj.foo = 'baz'

console.log(arg, newArg);
console.log(obj, newObj);
