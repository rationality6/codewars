array0 = ['hyun', 'kim', 'john'];
array1 = ['Hyun', 'Kim', 'John'];

const search = (data, key) => {
  return data.filter((x) => {
    return x.toString().toLowerCase()
    .indexOf(key.toLowerCase()) > -1;
  })
}

var result0 = search(array0, 'hyun')
var result1 = search(array1, 'saucony')
var result2 = search(array1, 'Kim')

console.log(result0);
console.log(result1);
console.log(result2);
