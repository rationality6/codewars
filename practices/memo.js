var A = function() {
  this.x = function() {
    console.log('hello');
  };
};

A.x=function() {
    console.log('world');
};

A.prototype.g=function() {
    console.log('world');
};

var B = new A();
var C = new A();
B.x();
C.x();
A.x

var A= function() {this.x='hello'};
var B = new A();
A.prototype.x='hello';
console.log(B);
