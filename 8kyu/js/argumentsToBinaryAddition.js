// const arr2bin = arr => {
//   let r = /\d/
//   let arrStr = [...arr].map(a=>String(a))
//   console.log(arrStr);
//   let arrFilterd = arrStr.filter(a=>{
//     return a.match(r)
//   })
//   console.log(arrFilterd);
//   if (arrFilterd.length===0) return '0'
//   return arrFilterd.reduce((a,b)=>a+b).toString(2)
// }


// const arr2bin = arr => {
//   return arr.reduce((x,y)=>x+(typeof y==="number"?y:0),0).toString(2);
// }

const arr2bin = arr => {
  return arr.reduce((x, y) => {
    if (typeof y === "number") {
      console.log(x,y);
      return x + y
    } else {
      console.log(x,y);
      return x + 0
    }
  }, 0).toString(2);
}

// console.log(arr2bin([1,2]));
// , "11")

// console.log(arr2bin([1,2,3,4,5]));
// , "1111")

// console.log(arr2bin([1,10,100,1000]));
// , "10001010111")

// console.log(arr2bin([null]));
// , "0")

console.log(arr2bin([true,true,false,15]));
// ,"1111")



console.log(true+0);
