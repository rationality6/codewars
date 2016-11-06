const isOdd = int => {
  if(int % 2 === 0){
    return false;
  }else{
    return true;
  }
}

const evil = num => {
  num = num.toString(2);
  console.log(num);
  num = num.replace(/0/g, '');
  console.log(num);
  if(isOdd(num.length))
    return "It's Odious!";
  else
    return "It's Evil!";
}

console.log(evil(1));
// ,"It's Odious!");

console.log(evil(2));
// ,"It's Odious!");

console.log(evil(3));
// ,"It's Evil!");
