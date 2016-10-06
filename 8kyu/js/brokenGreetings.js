class Person {
	constructor(name){
		this.name = name;
	}
}

Person.prototype.greet = function(otherName) {
  return "Hi " + otherName + ", my name is " + this.name;
}

hyun = new Person('Hyun')

console.log(hyun.greet('Kim'));
// "Hi Kim, my name is Hyun", "This is just an example of how you can write your own TDD tests"
