class Warrior {
  constructor (name) {
    this._name = name;
  }

  valueOf () {
    return `Hi! my name's ${this._name}`;
  }

  name (name) {
    if (name) {
      this._name = name;
    }
    return this._name;
  }
}

function Warrior(n){
  name = n;
  this.name = function(n){
    if( n ) name=n;
    return name;
  }
}

Warrior.prototype.toString = function(){
    return "Hi! my name's " + this.name();
}


let albert = new Warrior("Albert")
// let boris  = new Warrior("Boris")

// albert=="Hi! my name's Albert");
console.log(albert.name()=="Albert");
// boris.name()=="Boris");

// boris.name("Bobo")
// boris.name()=="Bobo");

console.log(albert.toString());
