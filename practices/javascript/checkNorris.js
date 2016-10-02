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
