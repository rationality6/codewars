const discount = (litres,dis) => {
  console.log((litres/1)*dis);
  if ( ((litres/1)*dis) > 0.25 ){
    return 0.25
  }else{
    return (litres/1) * dis
  }
}

const fuelPrice = (litres, pricePerLiter) => {
  if(litres>2){
    return (litres*pricePerLiter)-(discount(litres,0.05))
  }else if (litres>4){
    return (litres*pricePerLiter)-(discount(litres,0.1))
  }else{
    return litres * pricePerLiter
  }
}

function fuelPrice(litres, pricePerLiter) {
  for (var i = 2; i <= 10; i +=2) { //discount loop
    if (litres >= i) {
      pricePerLiter -= 0.05;
    }
  }
  return Math.round(litres * pricePerLiter * 100) / 100;;
}

console.log(fuelPrice(5, 1.23));
// , 5.65);

// fuelPrice(8, 2.5)
// , 18.40);

// fuelPrice(5, 5.6)
// , 27.50);
