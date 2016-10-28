const rentalCarCost = d => {
  if (d > 6) {
    return (d * 40) - 50
  } else if (d > 2) {
    return (d * 40) - 20
  }
  return d * 40
}

const rentalCarCost = d => d * 40 - ((d > 6) ? 50 : ((d > 2) ? 20 : 0));

console.log(rentalCarCost(1));
// , 40);

console.log(rentalCarCost(2));
// , 80);

console.log(rentalCarCost(3));
// , 100);
