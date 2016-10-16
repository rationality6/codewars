function run() {
  "use strict";

  return {
    helloWorld: function () {
    let str = { message: "Hello World"};
    console.log(str);
    return str;
  }};
}

console.log(run().helloWorld().message);
