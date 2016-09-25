// let a = { b: {c:4} , d: { e: {f:1}} }
// let g = Object.assign({},a)
// let h = JSON.parse(JSON.stringify(a));
// console.log(g.d) // { e: { f: 1 } }
// g.d.e = 32
// console.log('g.d.e set to 32.') // g.d.e set to 32.
// console.log(g) // { b: { c: 4 }, d: { e: 32 } }
// console.log(a) // { b: { c: 4 }, d: { e: 32 } }
// console.log(h) // { b: { c: 4 }, d: { e: { f: 1 } } }
// h.d.e = 54
// console.log('h.d.e set to 54.') // h.d.e set to 54.
// console.log(g) // { b: { c: 4 }, d: { e: 32 } }
// console.log(a) // { b: { c: 4 }, d: { e: 32 } }
// console.log(h) // { b: { c: 4 }, d: { e: 54 } }


// let a = { b: {c:4} , d: { e: {f:1}} }
// let g = Object.assign({},a)
// console.log(a);
// console.log(g);
// g.d.e = 1
// console.log(a);
// console.log(g);

var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { c: 3 };

var obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 2, c: 3 }, target object itself is changed.
console.log(o2);  // { a: 1, b: 2, c: 3 }, target object itself is changed.
console.log(o3);  // { a: 1, b: 2, c: 3 }, target object itself is changed.
