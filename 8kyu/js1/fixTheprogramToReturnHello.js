// function squaresOnly(array) {
//   let result = []
//   let isSquare;
//   for (let i = 0; i < array.length; i++) {
//     isSquare = false
//     for (let k = 0; k <= 10; k++) {
//       if (Math.pow(k,2) === array[i]) {
//         isSquare = true;
//       }
//     }
//     if (isSquare) {
//       result[result.length] = array[i];
//     }
//   }
//   return result;
// }

const squaresOnly = arr => {
  return arr.filter(a => {
    for (let i = 0; i <= 10; i += 1) {
      if (a === Math.pow(i, 2)) {
        if(a===0) return true
        return a
          // result.push(a)
      }
    }
  }).slice(0,128)
}


const squaresOnly = a => {
  return a.filter(x => Math.pow(x,0.5) % 1 === 0);
}


console.log(squaresOnly([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// , [0,1,4,9]);

// squaresOnly([31,33,35,37,39,38,36,34,32])
// , [36]);

// squaresOnly([0,10,20,30,40,50,60,70,80,90,100])
// , [0,100]);

// squaresOnly([20,19,18,17,16,15,13,11,9,1,5,4])
// , [16,9,1,4]);

// squaresOnly([45,36,75,64,9,9,4,1,4,1,1,16,16,18,17,35,25,35])
// , [36,64,9,9,4,1,4,1,1,16,16,25]);
