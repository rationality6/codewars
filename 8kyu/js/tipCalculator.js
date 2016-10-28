// const calculateTip = (amount, rating) => {
//   const rationgLow = rating.toLowerCase()
//   switch (rationgLow) {
//     case 'excellent':
//       return Math.ceil(amount * 0.2)
//     case 'great':
//       return Math.ceil(amount * 0.15)
//     case 'good':
//       return Math.ceil(amount * 0.1)
//     case 'poor':
//       return Math.ceil(amount * 0.05)
//     case 'terrible':
//       return Math.ceil(amount * 0)
//     default:
//       return 'Rating not recognised'
//   }
// }
//



const TIPS = {
  "terrible": 0.0,
  "poor": 0.05,
  "good": 0.1,
  "great": 0.15,
  "excellent": 0.2
};

const calculateTip = (amount, rating) => {
  rating = rating.toLowerCase();

  return rating in TIPS ? Math.ceil(TIPS[rating] * amount) : "Rating not recognised";
};



console.log(calculateTip(20, "Excellent"));
// , 4);

console.log(calculateTip(26.95, "good"));
// , 3);
