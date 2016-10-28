const range = (...args) => {
  const [start, stop = start * 2, step = 1] = args
  console.log(start,stop);
  // for (let i = start; i < end; i += step) {
  //   console.log(i);
  // }
}

range(3)


const range = (...args) => {
  const [start, stop = start * 2, step = 1] = args;
  return Array.from({ length: stop / (step || 1) - start })
              .map((__, i) => (args.length === 1 ? i : i * step + start));
};


console.log(range(5));

function range (start, end, step) {

  let result = [],
    a = arguments.length == 1 ? 0 : start,
    b = arguments.length == 1 ? start : end,
    c = step != void(0) ? step : 1;
  if( b < a ) return result;

  for (let i = a; (step == 0 ? result.length + a : i) < b; i = i + c) {
    result.push(i);
  }
  return result;
}

console.log(range(5));


let s = new Set([3,4,3,'foo','foo',3,9])
let g = Array.from(s)
g.push(3)
console.log(g);
