Array.prototype.even = function() {
  return this.filter(x =>{
      return x % 2 === 0 && typeof x === 'number' && x % 1 === 0
  })
}

Array.prototype.odd = function() {
  return this.filter(x =>{
      return x % 2 === 1 && typeof x === 'number' && x % 1 === 0
  })
}

Array.prototype.under = function(y){
  return this.filter(x => {
    return x < y && typeof x === 'number' && x % 1 === 0
  })
}

Array.prototype.over = function(y){
  return this.filter(x => {
    return x > y && typeof x === 'number' && x % 1 === 0
  })
}

Array.prototype.inRange = function(min,max){
  return this.filter(x => {
    return min <= x && x <= max && typeof x === 'number' && x % 1 === 0
  })
}


// Array.prototype.int = function (){
//   return this.filter(function (x) { return typeof x == 'number' && x == ~~x });
// }
// Array.prototype.even = function(){
//   return this.int().filter(function (x) { return ~x & 1 });
// }
//
// Array.prototype.odd = function(){
//   return this.int().filter(function (x) { return x & 1 });
// }
//
// Array.prototype.under = function(x){
//   return this.int().filter(function (y) { return y < x });
// }
//
// Array.prototype.over = function(x){
//   return this.int().filter(function (y) { return y > x });
// }
//
// Array.prototype.inRange = function(min,max){
//   return this.int().filter(function (x) { return x >= min && x <= max });
// }
//




// console.log([1,2,3,4,5].even());
// ,[2,4])

// console.log([1,2,3,4,5].odd());
// ,[1,3,5])

// console.log([1,2,3,4,5].under(4));
// ,[1,2,3])

// console.log([1,2,3,4,5].over(4));
 // ,[5])

// console.log([1,2,3,4,5].inRange(1,3));
// ,[1,2,3])


// console.log([1,2,18,19,20,21,22,30,40,50,100].even().inRange(18,30))
// , [18, 20, 22, 30]));

// console.log(["a", 1, "b", 300, "x", "q", 63, 122, 181, "z", 0.83, 0.11].even());
// ,[300, 122])

// console.log(["a", 1, "b", 300, "x", "q", 63, 122, 181, "z", 0.83, 0.11].odd());

// console.log([1,5,"9",12,"a","0","1","c",3,8,14,2,123.2,1.2,0.1,12.01,"b",7,10,6,4,9].even());
// console.log([1,5,"9",12,"a","0","1","c",3,8,14,2,123.2,1.2,0.1,12.01,"b",7,10,6,4,9].odd());
