Array.from(Array(100).keys()).slice(1)
    .map((num) => {
        if (num%3 === 0 && num%5 === 0) {
            return "fizzbuzz";
        } else if (num%3 === 0) {
            return "fizz";
        } else if (num%5 === 0) {
            return "buzz";
        } else {
            return num;
        }
    })
    .map(output => console.log(output));
