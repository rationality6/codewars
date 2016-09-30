const varTest = () => {
  var x = 31;
  if (true) {
    var x = 71;  // same variable!
    console.log(x);  // 71
  }
  console.log(x);  // 71
}

varTest()

const letTest = () => {
  let x = 31;
  if (true) {
    let x = 71;  // different variable
    console.log(x);  // 71
  }
  console.log(x);  // 31
}

letTest()


console.log(i);
for(var i=0;i<3;i++){

}
