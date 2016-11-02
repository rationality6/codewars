let cardClass = ['c', 'd', 'h', 's']
let cardLevel = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 'T', 'J', 'Q', 'K']

const cardTableMaker = () => {
  return cardClass.map(a=>{
    return cardLevel.map(b=>{
      return `${b}${a}`
    })
  })
}

const flatten = n => [].concat.apply([],n)

const cardTable = flatten(cardTableMaker())

// const cardsConverter = input => {
//   input.map((a,index)=>{
//     cardTable.map((b,index1)=>{
//       if(a===index1){
//         return cardTable[index1]
//       }
//     })
//   })
// }

const cardsConverter = input => {
  // if(input === null) return null
  let result = []

  //if first input list is number
  if(typeof(input[0])==='number'){
    console.log('number!');
    let inputSorted = input.sort((a,b)=>a-b)
    for (let i = 0, len = inputSorted.length; i < len; i += 1) {
      result = result.concat(
        cardTable.find((a) => {
          return cardTable.indexOf(a) === inputSorted[i]
        })
      )
    }
    return result
  }

  //if first input list is string
  if(typeof(input[0]==='string')){
    console.log('string!');
    for (let i = 0, len = input.length; i < len; i += 1) {
      console.log(input[i]);
      result = result.concat(
        cardTable.indexOf(
          cardTable.find((a,index) => {
            if(a === input[i]){
              console.log(cardTable.indexOf(a));
              return cardTable.indexOf(a)
            }
          })
        )
      )
    }
    return result.sort((a,b)=>a-b)
  }
}

// console.log(cardsConverter([50, 6, 13,30, 37]));
// , ["7c", "Ad", "5h", "Qh", "Qs"], 'should return ["7c", "Ad", "5h", "Qh", "Qs"]');

console.log(cardsConverter(["5h", "7c", "Qh", "Qs", "Ad"]));
// , [6, 13, 30, 37, 50], 'should return [6, 13, 30, 37, 50]');
