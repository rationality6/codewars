Number.prototype.times = function (f) {
  for (let i = 0; i < this; ++i) {
    f(i);
  }
};

(6).times(_ => {
  console.log("Hello World");
});
