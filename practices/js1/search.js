const search = (str, key) => {
  return str.filter(b => {
    return b.indexOf(key) > -1
  })
}

list0 = ['1', '2', '3', '4', '5']

console.log(search(list0, '7'));
