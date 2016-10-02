// const caffeineBuzz = n => {
//   if (n % 2 === 0) {
//     if (n % 3 === 0 && n % 4 === 0) {
//       return "CoffeeScript"
//     } else if (n % 3 === 0) {
//       return "JavaScript"
//     }
//   } else {
//     if (n % 3 === 0 && n % 4 === 0) {
//       return "Coffee"
//     } else if (n % 3 === 0) {
//       return "Java"
//     } else{
//       return "mocha_missing!"
//     }
//   }
// }


function caffeineBuzz(n){
  if (n % 12 === 0) return "CoffeeScript";
  if (n % 6 === 0) return "JavaScript";
  if (n % 3 === 0)  return "Java";
  return "mocha_missing!";
}



let a = caffeineBuzz(1)
// let b = caffeineBuzz(3)
// let c = caffeineBuzz(6)
// let d = caffeineBuzz(12)
console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
