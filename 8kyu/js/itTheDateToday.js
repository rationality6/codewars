const isToday = (date) => {
  let time = new Date()
  let today = time.getDate()
  let thisMonth = time.getMonth()
  if(date.getMonth() === thisMonth){
    return today === date.getDate()
  }
  return false
}

function isToday(date) {
  return new Date().toDateString() === date.toDateString();
}

var tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

var yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

console.log(isToday(new Date()));
// , true);

console.log(isToday(tomorrow));
// , false);

console.log(isToday(yesterday));
// , false);

console.log(new Date().toDateString());
