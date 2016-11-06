const meeting = x => {
  for (let i = 0; i < x.length; i += 1) {
    if (x[i] === 'O') return i
  }
  return 'None available!'
}

meeting = x => (x = x.join('').indexOf('O')) > -1 ? x : 'None available!'

console.log(meeting(['X', 'O', 'X']));
// , 1);

// meeting(['O','X','X','X','X'])
// , 0);

// meeting(['X','X','X','X','X'])
// , 'None available!');
