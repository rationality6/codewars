class Animal {
  constructor(name){
    this.name = name
  }
}

class Cat extends Animal {
  constructor(props) {
    super(props)
  }
  speak(){
    return `${this.name} meows.`
  }
}

let cat = new Cat('Mr Whiskers');
console.log(cat.speak());
// , 'Mr Whiskers meows.'

cat = new Cat('Lamp');
cat.speak()
// , 'Lamp meows.')

cat = new Cat('$$Money Bags$$');
cat.speak()
// , '$$Money Bags$$ meows.')
