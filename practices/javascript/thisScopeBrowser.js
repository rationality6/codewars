

var links = $("a");
for(var i = 0; i < links.length; i++){
  var element = links[i];
  element.addEventListener('click',function(e){
    e.preventDefault();
    console.log(this);
    console.log(e.target);
    console.log(e.currentTarget);
    this.style.color = "red";
  })
}

