// const calc = x => {
//   let charCodeX = x.split('').map(a=>a.charCodeAt()).join('').split('')
//   // console.log(charCodeX);
//   let foo = charCodeX.filter(a=>a==='7').length
//   return foo*6
// }

const calc = x => (x.split('').map(a=>a.charCodeAt()).join('').split('').filter(a=>a==='7').length)*6

const calc=x=>(x.replace(/./g,x=>x.charCodeAt()).match(/7/g)||[]).length*6

// console.log(calc('abcdef'));
// , 6);

// calc('ifkhchlhfd')
// , 6);

console.log(calc('aaaaaddddr'));
// , 30);
