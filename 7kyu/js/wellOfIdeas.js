const well = arrays => {
  let result = 0
  arrays.map(array=>{
    result = result + array.filter(x => String(x).toLowerCase() === 'good').length
  })
  return result > 2 ? 'I smell a series!' : result > 0 ? 'Publish!' : "Fail!"
}

function well(x){
  return ['Fail!', 'Publish!', 'Publish!'][x.reduce((r, a) => r+a.filter(s => /^good$/i.test(s)).length, 0)]||'I smell a series!';
}

console.log(well([['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad']]))
console.log(well([['bad', 'bAd', 'bad',3], ['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad']]))
// , 'Fail!'););

console.log(well([['gOOd', 'bad', 'BAD', 'bad', 'bad'], ['bad', 'bAd', 'bad'], ['GOOD', 'bad', 'bad', 'bAd']]));
// , 'Publish!');

console.log(well([['gOOd', 'bAd', 'BAD', 'bad', 'bad', 'GOOD'], ['bad'], ['gOOd', 'BAD']]));
// , 'I smell a series!');
