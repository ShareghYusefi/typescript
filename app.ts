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
