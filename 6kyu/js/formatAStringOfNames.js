// function list(names){
//   return names.reduce(function(prev, current, index, array){
//     if (index === 0){
//       return current.name;
//     }
//     else if (index === array.length - 1){
//       return prev + ' & ' + current.name;
//     }
//     else {
//       return prev + ', ' + current.name;
//     }
//   }, '');
//  }


var list = (names) =>  names.map(x => x.name).join(', ').replace(/(.*),(.*)$/, "$1 &$2")


console.log(list([{name: 'Bart'}]));
console.log(list([]));

// console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]));
// , 'Bart, Lisa, Maggie, Homer & Marge',
