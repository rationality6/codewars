const cookie = {
  sugar: 10,
  flour: 5,
  calories: function() {
    var sugar = 4
    const details = function() {
      console.log(this.sugar);
      console.log("Sugar amount is: " + this.sugar);
    }
    details()
  }
}

cookie.calories();


const cookie = {
  sugar: 10,
  flour: 5,
  calories: function() {
    var sugar = 4
    const details = function() {
      console.log(this.sugar);
      console.log("Sugar amount is: " + this.sugar);
    }.bind(this)
    details()
  }
}

cookie.calories();



const cookie = {
  sugar: 10,
  flour: 5,
  calories: function() {
    console.log('calories scope', this);
    var sugar = 4
    var details = function() {
      console.log(this.sugar);
      // console.log(this);
      console.log("Sugar amount is: " + this.sugar);
    }.bind(this)
    details()
  }
}

cookie.calories();


const cookie = {
  sugar: 10,
  flour: 5,
  calories: function() {
    console.log('calories scope', this);
    var sugar = 4
    var details = function() {
      console.log(this.sugar);
      // console.log(this);
      console.log("Sugar amount is: " + this.sugar);
    }.bind(this)
    details()
  }
}

cookie.calories();
