// const binaryToString = binary => {
//   return binary !== '' ? binary.match(/.{1,8}/g).map(a=>String.fromCharCode(parseInt(a,2))).join('') : ''
// }

const binaryToString = binary => {
  return binary.replace(/[01]{8}/g, (v) => {
    return String.fromCharCode(parseInt(v, 2));
  });
}

console.log(binaryToString('01100001'));

console.log(binaryToString('01001011010101000100100001011000010000100101100101000101'));
// , 'KTHXBYE')
