var myCar = new Object();
myCar.make = "Ford"

// console.log(myCar);


function showProps(obj, objName){
  var result = "";
  for(var i in obj)
    if(obj.hasOwnProperty(i)){
      result += objName+"."+i+"="+obj[i]+"\n";
    }
  return result;
}

obj0 = {
  'foo':1,
  'bar':2,
  'baz':3
}

// console.log(showProps(obj0,'foo'));


function listAllProperties(o){
  var result = [];

  for (var objectToInspect = o; objectToInspect !== null; objectToInspect = Object.getPrototypeOf(objectToInspect)){
    result = result.concat(Object.getOwnPropertyNames(objectToInspect));
  }
  console.log(result);
}

// listAllProperties(obj0)

var result = []
console.log(result);
result = result.concat(Object.getOwnPropertyNames(obj0))
console.log(result);
