const cookie = {
  sugar: 10,
  flour: 5,
  calories: function(){
    sugar = 5
    console.log(this);
    var details = () => {
      console.log("Sugar amount is: " + this.sugar);
      console.log("Flour amount is: " + this.flour);
      console.log("Flour amount is: " + this);
    }
    details();
    return this.sugar * 3.87 + this
  }
}

console.log(cookie.calories());
