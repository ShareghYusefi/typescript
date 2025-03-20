// What is a Single Page Application?
// An application with one HTML page, updated dynamically without refreshing the page.
// Angular, Vue, React JS are all SPA frameworks.

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
let y = 10;
if (y == 10) {
  // try to redefine the variable y locally
  let y = 20;
  console.log("redeclared y = " + y); // 20
}
console.log("y = " + y); // 10

// const is blocked scoped.
// we cannot erassign a value to a const variable
const z = 10;

// z = 20; // will error

// "let" is preferred over "var" as best practice to avoid scoping issues.

const w = 50;
console.log(w);

// Data types in Typescript
// We can define a variables data type using a colon.

// Built-in data types
// number, string, boolean, void, null, undefined
let customMessage: string = "Hello World!";
let num: number = 10;
let isValid: boolean = true;
let nullValue: null = null;
let undefinedValue: undefined = undefined;

// void is used to define a functions return type of void
function greet(): void {
  console.log("Hello World!");
  return; // does not return anything (void)
}

// "Any" data type
let anyValue: any = 10;
anyValue = "Hello";

// Type operators
console.log(typeof num);
console.log(typeof customMessage);
console.log(typeof isValid);

// User-define data types
// Arrays, tuples, classes and interfaces

// Arrays
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["John", "Doe", "Jane"];

// Tuples: when we jave a known number of elements with different data types within an array.
let person: [string, number, boolean] = ["John", 25, true];

// classes
class Person {
  // What are access modifier?
  // These are the keywords "public", "private", "protected"
  // They control access to properties and methods when working with an object instance
  name: string;
  // public: accessible within and outside of current class
  public age: number;
  // private: accessible only within the current class
  private _isStudent: boolean;

  constructor(nameArg: string, ageArg: number, isStudentArg: boolean) {
    this.name = nameArg;
    this.age = ageArg;
    this._isStudent = isStudentArg;
  }

  // getter and setter methods are used for private properties
  get isStudent(): boolean {
    return this._isStudent;
  }

  set isStudent(value: boolean) {
    this._isStudent = value;
  }

  greet(): void {
    console.log("Hello my name is " + this.name);
  }
}

// instantiating a class = creating an object instance of the class definition
let person1 = new Person("John", 25, true);
// this calls the getter method
console.log("getter " + person1.isStudent);
// this calls the setter method
console.log("setter " + (person1.isStudent = true));

console.log(person1);
person1.greet();

// What is inheritance?
// When a class inherits properties and methods from a parent class

// Parent class of mammal
class Mammal {
  hasHair: boolean;
  isWarmBlooded: boolean;

  constructor(hasHairArg: boolean, isWarmBloodedArg: boolean) {
    this.hasHair = hasHairArg;
    this.isWarmBlooded = isWarmBloodedArg;
  }

  eat(): string {
    return "Mammal is eating.";
  }
  // protected: accessible within current class and child classes
  protected canWalk(): string {
    return `Mammal is walking`;
  }
}

// Animal child class inheriting from mammal using "extends" keyword
// We can use "implemments" keyword to ensure Animal class abides by the IAnimal contract
class Animal extends Mammal implements IAnimal {
  name: string;
  age: number;

  constructor(
    nameArg: string,
    ageArg: number,
    hasHairArg: boolean,
    isWarmBloodedArg: boolean
  ) {
    // We can use "super" keyword to call the parent class constructor
    super(hasHairArg, isWarmBloodedArg);
    this.name = nameArg;
    this.age = ageArg;
  }
  // can override inherited functions
  eat(): string {
    return `${this.name} is eating`;
  }

  sleep(): string {
    return `${this.name} is sleeping`;
  }

  // accessing a protected parent method in child class
  busy(): string {
    return this.canWalk();
  }
}

let cat = new Animal("Cat", 2, true, true);
console.log(cat.eat());

// What is an Interface?
// An interface can be used to create custom data types, we can define the structure for an object.
// An interface defines a contract for an object, specifying the properties and methods it must have.

// Interface for a Animal object
interface IAnimal {
  name: string;
  age: number;
  hasHair: boolean;
  isWarmBlooded: boolean;
  eat(): string;
  sleep(): string;
}

// Using an interface with Objects
let bird: IAnimal = {
  name: "Bird",
  age: 2,
  hasHair: true,
  isWarmBlooded: true,
  eat() {
    return "Bird is eating";
  },
  sleep() {
    return "Bird is sleeping";
  },
};

// Implementing an interface with a Class
let dog = new Animal("Dog", 2, true, true);

console.log(dog.sleep());

// Type Assertion
// Type assertion is used to tell the typescript compiler the type of a variable.

let message = "Hello World!";
// message variable is a string
let messageLength = (<string>message).length;
let alternateMessageLength = (message as string).length;
