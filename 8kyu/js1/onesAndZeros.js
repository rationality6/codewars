const binaryArrayToNumber = arr => {
  let numStr = ''
  arr.map(a=>String(a)).forEach(a=>{
    numStr += a
  })
  return parseInt(+(numStr),2)
};


const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);

// console.log(binaryArrayToNumber([0,0,0,1]));

// console.log(binaryArrayToNumber([0,0,1,0]));
// , 2);

console.log(binaryArrayToNumber([1,1,1,1]));
// , 15);

// binaryArrayToNumber([0,1,1,0])
// , 6);
