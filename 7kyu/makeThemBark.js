function Dog(name, breed, sex, age) {
  this.name = name;
  this.breed = breed;
  this.sex = sex;
  this.age = age;
};

Dog.prototype.bark = function(){
  return "Woof!"
}

var apollo = new Dog('Apollo', 'Dobermann', 'male', '4');
var zeus = new Dog('Zeus', 'Dobermann', 'male', '4');

Test.assertEquals(apollo.bark(), 'Woof!');
Test.assertEquals(zeus.bark(), 'Woof!');
