const present = (x, y) => {
  if (x === 'badpresent') {
    return 'Take this back!'
  } else if (x === 'dog') {
    return `pass out from excitement ${y} times`
  } else if (x === 'bang') {
    return (x.split('').map(a => a.charCodeAt() - y)).map(a => String.fromCharCode(a)).join('')
  } else if(x==='goodpresent'){
    return (x.split('').map(a => a.charCodeAt() + y)).map(a => String.fromCharCode(a)).join('')
  } else if(x ==='crap'){
    return x.split('').sort().join('')
  } else if(x===''){
    return 'empty'
  }else{
    return 'empty'
  }
}


function present(x,y){
return x=='goodpresent'?x.replace(/./g,c=>String.fromCharCode(c.charCodeAt()+y)):
       x=='crap'?'acpr':x=='empty'?x:
       x=='bang'?408-y*4:
       x=='dog'?`pass out from excitement ${y} times`:
       x=='badpresent'?'Take this back!':'Boring Kata, just for 3 points'
}

present('badpresent', 3)
  // , 'Take this back!');

present('goodpresent', 9)
  // , 'pxxmy{n|nw}');

present('crap', 10)
  // , 'acpr');

console.log(present('bang', 10));
