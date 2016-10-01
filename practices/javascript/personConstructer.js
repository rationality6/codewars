function Person(gender) {
  this.gender = gender;
  alert('Person instantiated');
}

Person.sayHello = function()
{
  alert ('hello');
};


Person.prototype.sayGreeting = function(){ console.log('hi') };
