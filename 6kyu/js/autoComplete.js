const autocomplete = (input, dictionary) => {
  // let r = new RegExp('^' + input.replace(/[^a-z]/gi,''), 'i');
  let r = new RegExp('^' + input.replace(/[^a-z]/gi,''), 'i');
  return dictionary.filter(w => r.test(w)).slice(0, 5);
}

console.log(autocomplete('ai', ['airplane', 'airport', 'apple', 'ball']));
console.log(autocomplete('ai', ['airplane', 'airport', 'airport', 'airport', 'airport', 'airport', 'airport', 'airport', 'airport', 'airport', 'airport', 'apple', 'ball']));
// ['airplane','airport']


const r = new RegExp('i')
console.log(r.test('asdf ge'));
