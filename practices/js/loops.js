console.time("benchmark")
const loopingEach = n => [...Array(n)].forEach((_,i) => console.log(i))
loopingEach(100000)
console.timeEnd('benchmark')




console.time("benchmark")
var loopingFor = function(n){
  for(let i = 0; i < n; i+=1){
    console.log(i);
  }
}
loopingFor(100000)
console.timeEnd('benchmark')
