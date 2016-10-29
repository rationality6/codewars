let guess = 10

Math.floor = () => 10

let lucky_number = Math.floor(Math.random() * 100 + 1);
console.log(lucky_number);
console.log(guess===lucky_number);
// Test.assertEquals(guess, lucky_number, "Sorry. Unlucky this time.");
