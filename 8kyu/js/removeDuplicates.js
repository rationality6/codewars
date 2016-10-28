const distinct = a => {
  let result = []
  for (let i = 0, len = a.length; i < len; i += 1) {
    if (a[i]===a[i+1]){
    }else{
      result = result.concat(a[i])
    };
  }
  return result
}

const distinct = a => [...new Set(a)];

console.log(distinct([1]));
// , [1]);

console.log(distinct([1,2]));
// , [1,2]);

console.log(distinct([1,1,2]));
// , [1,2]);
