const state = {
  contactData:[
          {id: 1, name:"Bbet",phone:'310 21349 2348'},
          {id: 2, name:"Aetty",phone:'210 21349 1234'},
          {id: 3, name:"Chaly",phone:'110 33 4321'},
          {id: 4, name:"Delt",phone:'010 21349 8792'},
          {id: 5, name:"Et",phone:'010 89 81192'},
          {id: 6, name:"Dlet",phone:'0230 21349 2341'},
          {id: 7, name:"Gelte",phone:'01230 234 234'},
          {id: 8, name:"Heeilt",phone:'0110 897 543'},
  ]
}

console.log(state.contactData[0].name = 'g');

var string = JSON.stringify(state,null,3)
// console.log(string);
var string = JSON.parse(string)
// console.log(string);
