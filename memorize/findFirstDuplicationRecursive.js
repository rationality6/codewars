const sortArray = (list) => {
  return list.sort((a, b) => a - b)
}

const findFirstDuplicationRecursive = func => {
  if(func.length < 1){
    return;
  }else{
    if func === func
    return findFirstDuplicationRecursive(func.length-1)
  }
}


let len = 4;
let end = 3;
let data = [];

const loop = index => {
  if(index === end){
    console.log(data);
    return;
  }
  for(let i=index;i<len;i++){
    data[index] = i;
    loop(index+1)
  }
}

loop(0)
