// const accum = s => {
//   let splited = s.split('')
//   let result = []
//   for (let i = 0; i < splited.length; i++) {
//     result = result.concat(`${splited[i].toUpperCase()}` + new Array(i+1).join(splited[i].toLowerCase()))
//   }
//   return result.join('-')
// }


const accum = s => {
  return s.split('').map((x,index) => x.toUpperCase()+Array(index+1).join(x.toLowerCase())).join('-');
}

console.log(accum("ZpglnRxqenU"));
// , "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");

// accum("NyffsGeyylB")
// , "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");

// accum("MjtkuBovqrU")
// , "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");

// accum("EvidjUnokmM")
// , "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");

// accum("HbideVbxncC")
// , "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");
