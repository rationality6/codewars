// const xor = (a, b) => {
//   if(a===false && b===false){
//     return false
//   }
// }
const xor = (a, b) => {
  if (a===true&&b===true) return false
  return a || b
}

function xor(a, b) {
  return a != b;
}

xor(false, false)
// , false, "false xor false === false");

// xor(true, false)
// , true, "true xor false === true");

// xor(false, true)
// , true, "false xor true === true");

// xor(true, true)
// , false, "true xor true === false");

// xor(true, true)
// , true, "'xor' is NOT identical to 'or'");
