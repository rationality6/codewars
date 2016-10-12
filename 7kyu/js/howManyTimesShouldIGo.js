const howManyTimes = (annual_price, individual_price) => {
  return Math.ceil(annual_price/individual_price);
}

howManyTimes(40,15)
// , 3)

howManyTimes(30,10)
// , 3)

howManyTimes(80,15)
// , 6)
