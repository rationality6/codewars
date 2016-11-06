// es5

function Counter() {
  this.value = 0;
}

Counter.prototype.increase = function() {
  this.value++;
};


Counter.prototype.getValue = function() {
  return this.value;
};

Counter.prototype.reset = function() {
  this.value = 0;
};


// es6

class Counter {
  constructor() {
    this.value = 0;
  }

  increase() {
    this.value = this.value + 1;
  };

  getValue() {
    return this.value;
  };

  reset() {
    this.value = 0;
  };
}
