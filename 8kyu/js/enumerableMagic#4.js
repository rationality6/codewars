const none = (arr, fun) => {!arr.some(fun)}


console.log(none([1,2,3,4,5],function(item){ console.log(item);return item > 5 }));
// , true)

none([1,2,3,4,5],function(item){ return item > 4 })
// , false)
