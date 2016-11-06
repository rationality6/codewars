function groupByCommas(n) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


console.log(Array.from(Array(100).keys()).slice(1));
console.log([...Array(100)].map((_,i)=>i));
