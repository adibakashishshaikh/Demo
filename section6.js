function constructors
function Person(firstName, lastName) {

  console.log(this);
  this.firstName = firstName;   //   this points a new object and that object returned from function
  this.lastName = lastName;

  console.log("this function is invoked");

}

var john = new Person("john", "doe");
console.log(john);

var jane = new Person("jane ", "doe");
console.log(jane);

// prototype  ---- allows you to add new property to the eobject constructor

function Person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
}

Person.prototype.nationality = "english";

var john = new Person("john", "doe", 33);

console.log(john.nationality);

function Person(firstName, lastName) {
  console.log(this);
  this.firstName = firstName; //   this points a new object and that object returned from function
  this.lastName = lastName;

  console.log("this function is invoked");
}
Person.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

var john = new Person("john", "doe");
console.log(john.getFullName());

// built in function constructors

var a = new Number(3);
console.log(a);
console.log(a.toFixed(2));

var a = new String("john");
console.log(a.indexOf("o"));

var a = 3;
var b = new Number(3);

console.log(a == b);

console.log(a === b);

/////Arrays and for in

Array.prototype.myCustomFeatures = "cool";

var arr = ["john", "jane", "jim"];

for (var prop in arr) {
  console.log(prop + ": " + arr[prop]);
}

/// prototypal inheritance    object.create

var person = {
  firstName: "Default",
  lastName: "Default",
  greet: function () {
    return "Hi " + this.firstName;
  },
};

var john = Object.create(person);

john.firstName = "john";
john.lastName = "Doe";

console.log(john.greet());

john.greet();
