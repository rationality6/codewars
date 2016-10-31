const isOpposite = (s1,s2) => {
  if (s1.length < 1) return false
  let oppoS1 = s1.split('').map(a=>{
    return a.toUpperCase()===a ? a.toLowerCase() : a.toUpperCase()
  }).join('')
  return s2 === oppoS1
}

const isOpposite(s1,s2){
  return s1!=''&&s1==s2.replace(/./g,ch=>ch['to'+(ch<='Z'?'Lower':'Upper')+'Case']())
}

// console.log(isOpposite("ab","AB"));
 // should return true;

// console.log(isOpposite("aB","Ab"));
 // should return true;

// console.log(isOpposite("aBcd","AbCD"))
 // should return true;);

// console.log(isOpposite("AB","Ab"));
 // should return false;

// console.log(isOpposite("",""));
 // should return false;
