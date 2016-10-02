// const betterThanAverage = (classPoints, yourPoints) => {
//   let totalPoint = 0
//   for (let i = 0, len = classPoints.length; i < len; i++) {
//     totalPoint += classPoints[i]
//   }
//   let average = Math.floor(totalPoint / classPoints.length)
//   return average < yourPoints ? "True" : "False"
// }




// ES6 way

const betterThanAverage = (classPoints, yourPoints) => {
  return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
}




//ES5 way

// function betterThanAverage(classPoints, yourPoints) {
//   return yourPoints > classPoints.reduce(function(a, b) {
//     return a + b
//   }) / classPoints.length;
// }

//
// const bta = (data, score) => {
//   return score > data.reduce((a, b) => {
//     return a + b
//   }) / data.length
// }

// console.log(bta([100, 40, 34, 57, 29, 72, 57, 88], 75));

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
