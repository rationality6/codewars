function findShort(s) {
  var splited_words = s.split(' ');
  var min_result =splited_words[0].length;
  for (var i = 0, len = splited_words.length; i < len; i++) {
    if (min_result > splited_words[i].length){
      min_result = splited_words[i].length;
    }
  }
  return min_result;
}

function findShort(s){
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}


// var a = [1,2,3,4,5].map(w=>w*2)
// console.log(a);
//
// var a = Math.min(null,[9,9,3,4,5])
// console.log(a);

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
console.log(findShort("turns out random test cases are easier than writing out basic ones"));
