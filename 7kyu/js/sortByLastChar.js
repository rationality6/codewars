// const last = x => {
//   return x.split(' ').sort((a,b)=>{
//     if (a.slice(-1) > b.slice(-1)){
//       return 1
//     }
//   })
// }

const last = x => x.split(' ').sort((a,b)=> a.slice(-1) > b.slice(-1) ? 1 : -1)

console.log(last('man i need a taxi up to ubud'));
// , ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']);
last('what time are we climbing up the volcano')
// , ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']);
last('take me to semynak')
// , ['take', 'me', 'semynak', 'to']);
