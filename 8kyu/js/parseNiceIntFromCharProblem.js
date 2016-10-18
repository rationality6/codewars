const getAge = s => {
  return +s.match(/[0-9]/)
}

const getAge = s => parseInt(s);

console.log(getAge('1 year old'));
