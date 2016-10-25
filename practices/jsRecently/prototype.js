function foo(x) {
    this.x = x;
};

var A = new foo('hello');
console.log(A.x);
// > hello

foo.prototype.x = 'foo'
// console.log(A.prototype.x)
// > syntax error
