var p = new Promise((a, b) => {
  var randomNumber = Math.floor(Math.random() * 100);
  if (randomNumber < 50) {
    a();
  } else {
    b();
  }
});

p.then(() => {
  console.log(location.coords.latitude);
  console.log(location.coords.longitud);
  console.log(location.coords.accuracy);
})
.catch(() => {console.log(('Foo'));
})
