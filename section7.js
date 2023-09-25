//typeof  and instanceof

var a = 3;
console.log(typeof a);

var b = "hello";
console.log(typeof b);

var c = {};
console.log(typeof c);

var d = [];
console.log(typeof d);
console.log(Object.prototype.toString.call(d));

function Person(name) {
  this.name = name;
}

var e = new Person("jane");
console.log(typeof e);
console.log(e instanceof Person); //true

console.log(typeof undefined);
console.log(typeof null);

var z = function () {};

console.log(z);

///strict mode     improves error handling

function myFunction() {
  "use strict";
  y = 20;
  console.log(y);
}

myFunction();
