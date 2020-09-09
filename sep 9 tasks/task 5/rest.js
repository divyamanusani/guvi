//The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
//rest operator is always the last element

//Ex 1.

function sum(...theArgs) {
    return theArgs.reduce((previous, current) => {
      return previous + current;
    });
  }
  
  console.log(sum(1, 2, 3));
  //output: 6
  
  console.log(sum(1, 2, 3, 4));
  // output: 10

//   Syntax
// function f(a, b, ...theArgs) {
//   
// }

// Description
// A function's last parameter can be prefixed with ... which will cause all remaining (user supplied) arguments to be placed within a "standard" JavaScript array.

// Only the last parameter can be a "rest parameter".

function myFun(a,  b, ...manyMoreArgs) {
    console.log("a", a) // one
    console.log("b", b) // two
    console.log("manyMoreArgs", manyMoreArgs) // [three,four,five,six];
  }
  
  myFun("one", "two", "three", "four", "five", "six");
  myFun("one", "two")// here a=one , b=two, manyMoreArgs=[];

  //Finding length
  function fun1(...theArgs) {
    console.log(theArgs.length)
  }
  
  fun1()         // 0
  fun1(5)        // 1
  fun1(5, 6, 7)  // 3

  //another ex.
  function multiply(multiplier, ...theArgs) {
    return theArgs.map(element => {
      return multiplier * element
    })
  }
  
  let arr = multiply(2, 1, 2, 3)
  console.log(arr)  // [2, 4, 6]

//Assignment
const user = {
    id: 42,
    is_verified: true
};

const {id, is_verified} = user;

console.log(id); // 42
console.log(is_verified); // true 

//Assignment without declaration
let a, b;
({a, b} = {a: 1, b: 2});

//Assigning to new variable names

const o = {p: 42, q: true};
const {p: foo, q: bar} = o;
 
console.log(foo); // 42 
console.log(bar); // true

//Default values
const {a = 10, b = 5} = {a: 3};

console.log(a); // 3
console.log(b); // 5

  

