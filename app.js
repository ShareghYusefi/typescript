// What is a Single Page Application?
// An application with one HTML page, updated dynamically without refreshing the page.
// Angular, Vue, React JS are all SPA frameworks.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// What is typescript?
// Typescript is a superset of Javascript, used to build large applications with data types.
// Typescript is transpiled to Javascript.
// We can install the typescript transpiler using npm
// npm install -g typescript
// tsc -w app.ts will transpile to app.ts in watch mode
// How can we declare variables in Typescript?
// var, let, const
// var is global scoped.
var x = 10;
if ((x = 10)) {
    // redefine the variable x globally
    var x = 20;
}
console.log(x); // 20
// let is block scoped
var y = 10;
if (y == 10) {
    // try to redefine the variable y locally
    var y_1 = 20;
    console.log("redeclared y = " + y_1); // 20
}
console.log("y = " + y); // 10
// const is blocked scoped.
// we cannot erassign a value to a const variable
var z = 10;
// z = 20; // will error
// "let" is preferred over "var" as best practice to avoid scoping issues.
var w = 50;
console.log(w);
// Data types in Typescript
// We can define a variables data type using a colon.
// Built-in data types
// number, string, boolean, void, null, undefined
var customMessage = "Hello World!";
var num = 10;
var isValid = true;
var nullValue = null;
var undefinedValue = undefined;
// void is used to define a functions return type of void
function greet() {
    console.log("Hello World!");
    return; // does not return anything (void)
}
// "Any" data type
var anyValue = 10;
anyValue = "Hello";
// Type operators
console.log(typeof num);
console.log(typeof customMessage);
console.log(typeof isValid);
// User-define data types
// Arrays, tuples, classes and interfaces
// Arrays
var numbers = [1, 2, 3, 4, 5];
var names = ["John", "Doe", "Jane"];
// Tuples: when we jave a known number of elements with different data types within an array.
var person = ["John", 25, true];
// classes
var Person = /** @class */ (function () {
    function Person(nameArg, ageArg, isStudentArg) {
        this.name = nameArg;
        this.age = ageArg;
        this.isStudent = isStudentArg;
    }
    Person.prototype.greet = function () {
        console.log("Hello my name is " + this.name);
    };
    return Person;
}());
// instantiating a class = creating an object instance of the class definition
var person1 = new Person("John", 25, true);
console.log(person1);
person1.greet();
// What is inheritance?
// When a class inherits properties and methods from a parent class
// Parent class of mammal
var Mammal = /** @class */ (function () {
    function Mammal(hasHairArg, isWarmBloodedArg) {
        this.hasHair = hasHairArg;
        this.isWarmBlooded = isWarmBloodedArg;
    }
    Mammal.prototype.eat = function () {
        return "Mammal is eating.";
    };
    // protected: accessible within current class and child classes
    Mammal.prototype.canWalk = function () {
        return "Mammal is walking";
    };
    return Mammal;
}());
// Animal child class inheriting from mammal using "extends" keyword
// We can use "implemments" keyword to ensure Animal class abides by the IAnimal contract
var Animal = /** @class */ (function (_super) {
    __extends(Animal, _super);
    function Animal(nameArg, ageArg, hasHairArg, isWarmBloodedArg) {
        // We can use "super" keyword to call the parent class constructor
        var _this = _super.call(this, hasHairArg, isWarmBloodedArg) || this;
        _this.name = nameArg;
        _this.age = ageArg;
        return _this;
    }
    // can override inherited functions
    Animal.prototype.eat = function () {
        return "".concat(this.name, " is eating");
    };
    Animal.prototype.sleep = function () {
        return "".concat(this.name, " is sleeping");
    };
    // accessing a protected parent method in child class
    Animal.prototype.busy = function () {
        return this.canWalk();
    };
    return Animal;
}(Mammal));
var cat = new Animal("Cat", 2, true, true);
console.log(cat.eat());
// Using an interface with Objects
var bird = {
    name: "Bird",
    age: 2,
    hasHair: true,
    isWarmBlooded: true,
    eat: function () {
        return "Bird is eating";
    },
    sleep: function () {
        return "Bird is sleeping";
    },
};
// Implementing an interface with a Class
var dog = new Animal("Dog", 2, true, true);
console.log(dog.sleep());
