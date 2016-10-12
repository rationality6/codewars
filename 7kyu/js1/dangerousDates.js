const nextFiveDays = str => {
  let date = new Date(str),
    day = date.getDate(),
    month = date.getMonth(),
    year = date.getFullYear(),
    dates = [];
  for (let i = 0; i < 5; i+=1) {
    dates.push(`${month+1}/${day+i}/${year}`);
  }
  return dates.join(', ');
}

console.log(nextFiveDays('3/4/2015'));
