const lovefunc = (flower1, flower2) => {
  return flower1%2===0 && flower2%2!==0 || flower1%2!==0 && flower2%2===0 ? true : false
}


function lovefunc(flower1, flower2){
  return flower1 % 2 !== flower2 % 2;
}


function lovefunc(flower1, flower2){
  return (flower1 + flower2) % 2 === 1
}


console.log(lovefunc(1,4));
// , true)

console.log(lovefunc(2,2));
// , false)

lovefunc(0,1)
// , true)

lovefunc(0,0)
// , false)
