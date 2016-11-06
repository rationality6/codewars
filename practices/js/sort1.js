let fruit = ['cherries', 'apples', 'bananas']
fruit.sort()
// console.log(fruit);


let scores = [1, 10, 21, 2]
scores.sort()
// console.log(scores);
scores.sort((a,b)=>a-b)


const items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic' },
  { name: 'Zeros', value: 37 }
];

items.sort(function (a, b) {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  return 0;
});

// console.log(items);

const list = ['Delta','alpha','CHARLIE','bravo'];

const mapped = list.map((el, i) => {
  return {index:i,value:el.toLowerCase()}
})

console.log(mapped);

mapped.sort((a,b) =>{
  return +(a.value > b.value) || +(a.value === b.value) -1
})

console.log(mapped);

var result = mapped.map((el)=>{
  return list[el.index]
})
console.log(result);
