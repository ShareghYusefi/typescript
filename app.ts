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
  name: string;
  age: number;
  isStudent: boolean;

  constructor(nameArg: string, ageArg: number, isStudentArg: boolean) {
    this.name = nameArg;
    this.age = ageArg;
    this.isStudent = isStudentArg;
  }
}

let person1 = new Person("John", 25, true);
console.log(person1);
