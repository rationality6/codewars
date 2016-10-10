const fizzBuzz = (n, a, b) => {
  for (let i = 1; i <= n; i += 1) {
    if (i % b === 0 && i % a === 0) {
      console.log('FizzBuzz');
    } else if (i % b === 0) {
      console.log('Fizz');
    } else if (i % a === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(20, 3, 5);
