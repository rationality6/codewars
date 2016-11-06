var mystery = function(a, b) {
  var r = [];
  for (var i = 0; i < a.length; i += 1) {
    r.push(b(a[i]));
  }
  return r;
}

var result = mystery([1, 2, 3, 4, 5], function(x) {
  return x * x;
});

console.log(result);
