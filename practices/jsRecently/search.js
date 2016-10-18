const search = (str, key) => {
  return str.filter(b => {
    return b.indexOf(key) > -1
  })
}

list0 = ['1', '2', '3', '4', '5']

console.log(search(list0, '3'));



const search = (str, key) => {
  return str.filter(b => {
    console.log(toString(b));
    // return toString(b).indexOf(toString(key)) > -1
  })
}

list0 = [1, 2, 3, 4, 5]

console.log(search(list0, 6));



const search = (obj, key) => {
  return obj.filter(x => {
    return x.name.indexOf(key) > -1
  })
}

const obj0 = [
  {'name':'hyun'},
  {'name':'kim'},
  {'name':'kimm'},
]


console.log(search(obj0,'ki'));
