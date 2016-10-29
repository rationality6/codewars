const sq = s => Math.round(Math.pow((s*4)/(2*Math.PI),2)*100)/100

const squareArea = A => {
  let circum = 4 * A;
  let radius = circum / (2 * Math.PI);
  let radius1 = circum / Math.PI *2;
  console.log(radius);
  console.log(radius1);
  let area = Math.pow(radius, 2);
  return Math.round(area*100)/100
}

console.log(squareArea(2));
console.log(sq(2));
