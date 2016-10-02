class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Cat extends Animal {
  constructor(props,cute){
    super(props)
    this.cute = cute
  }

  speak(){
    console.log(this.name + ' meao!' + this.cute);
  }
}

const hume = new Cat('Hume','cuty!')
hume.speak()
