const tickets = peopleInLine => {
  let change = 0
  for (let i = 0, len = peopleInLine.length; i < len; i += 1) {
    if(peopleInLine[i] < 25){
      return "No"
    }
    peopleInLine[i] -= 25
    change += 25
    change = change - peopleInLine[i]
    if (change < 0) {
      return 'NO'
    }
  }
  return 'YES'
}


// console.log(tickets([25, 25, 50, 50]));
// , "YES");

// console.log(tickets([25, 100]));
  // , "NO");

// console.log(tickets([0, 25, 100]));

console.log(tickets([0,25,0,75,0,0,0,75,0,0,0,75,75,25]));
