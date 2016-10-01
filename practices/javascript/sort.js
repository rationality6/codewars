function sorting(array){
  return array.sort((a,b)=>a-b)
}

//desc order.

function sorting(array){
  return array.sort((a,b)=>(a-b)*-1)
}

console.log(sorting([3,2,6]));
