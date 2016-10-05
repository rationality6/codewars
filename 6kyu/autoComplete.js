function autocomplete(input, dictionary){
  var r = new RegExp('^' + input.replace(/[^a-z]/gi,''), 'i');
  return dictionary.filter(function(w){ return r.test(w); }).slice(0, 5);
}

autocomplete('ai', ['airplane', 'airport', 'apple', 'ball'])
console.log(autocomplete('ai', ['airplane', 'airport', 'airport', 'airport', 'airport', 'airport', 'airport', 'airport', 'airport', 'airport', 'airport', 'apple', 'ball']));
// ['airplane','airport']
