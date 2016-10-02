class Person {
  constructor(gender) {
    this.gender = gender;
  }
}

Person.sayHello = () => {
  console.log('hello');
};

Person.sayHello()

Person.prototype.sayGreeting = function() {
  console.log(`I'm ${this.gender}`)
};

const a = new Person('male')
a.sayGreeting()
