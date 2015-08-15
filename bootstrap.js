import {FooClass as Jango} from "./MyModule.js";

class Greeter {
  constructor(message) {
    this.message = message;
  }

  greet() {
    console.log("Hello World");
  }
};

var greeter = new Greeter('Hello, world!');
greeter.greet();

var foo = new Jango();
foo.sayFoo("Finally this is working with webpack");
