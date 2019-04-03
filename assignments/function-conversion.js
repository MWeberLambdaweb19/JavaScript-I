// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {
// console.log("Function was invoked!");
// };
// myFunction();

const myFunction = () => console.log("Function was invoked!"); 
myFunction();

// let anotherFunction = function (param) {
//   return param;
// };
// anotherFunction("Example");
const anotherFunction = (param) => console.log(param);
anotherFunction("Kittens!");

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);
let add = (param1, param2) => param1 + param2;
add(1,3);
// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);
let subtract = (param1, param2) => param1 - param2;
subtract();
// Stretch

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);
const exampleArray = [1,2,3,4,5];
const triple = exampleArray.map(cb => cb * 3);
console.log(triple);