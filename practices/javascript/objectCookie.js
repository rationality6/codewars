var cookie = {
  sugar: 10,
  flour: 5,
  calories: function(){
    sugar = 5
    console.log(this);
    var details = function() {
      console.log("Sugar amount is: " + this.sugar);
      console.log("Flour amount is: " + this.flour);
      console.log("Flour amount is: " + this);
    }.bind(this)
    details();
    return this.sugar * 3.87 + this
  }
}

var Cookie()


console.log(cookie.calories());

// 펑션안에 펀션이면 안들어가나?

$.ajax({
  type:"get"
  url: "http://advanced-js.herokuapp.com/chuck_norris",
})

var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "http://advanced-js.herokuapp.com/chuck_norris", true);

$.ajax({
  type:"get"
  url: "http://advanced-js.herokuapp.com/chuck_norris",
  data: function(){
    console.log(this);
  }
})

var chuck = new ChuckNorris();
