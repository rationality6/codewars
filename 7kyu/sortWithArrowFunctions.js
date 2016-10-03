// const OrderPeople = people => {
//   return people.sort((x,y) =>{
//     return x.age - y.age
//   } ); //complete this function
// }
//
// const OrderPeople = people => {
//   return people.sort((a,b) => a.age - b.age);
// }

//desc order
const OrderPeople = people => {
  return people.sort((a,b) => (a.age - b.age)*-1);
}

let result = OrderPeople([ { age: 83, name: 'joel' },
{ age: 46, name: 'roger' },
{ age: 99, name: 'vinny' },
{ age: 26, name: 'don' },
{ age: 74, name: 'brendan' } ])

console.log(result);

// [
//   {age:26,name:"don"},
//   {age:46,name:"roger"},
//   {age:74,name:"brendan"},
//   {age:83,name:"joel"},
//   {age:99,name:"vinny"}
// ]
