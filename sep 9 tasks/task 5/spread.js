//Spread syntax (...) 

//Ex1

function sum(x, y, z) {
    return x + y + z;
}
const numbers = [5, 1, 2];
console.log(sum(...numbers)); // o/p:8


//Spread in function calls

function myFunction(x, y, z) { return x+y+z;}
const args = [0, 1, 2];
console.log(myFunction(...args));

function myFunction(v, w, x, y, z) { }
const args = [0, 1];
console.log(myFunction(-1, ...args, 2, ...[3]));

const dateFields = [1970, 0, 1];  // 1 Jan 1970
const d = new Date(...dateFields);


// Spread in array literals

const parts = ['shoulders', 'knees']; 
const lyrics = ['head', ...parts, 'and', 'toes']; 

//Copy an array
const arr = [1, 2, 3];
const arr2 = [...arr];
arr2.push(4);
//  arr2 becomes [1, 2, 3, 4]
//  arr remains unaffected

// used in array concatenation
let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

arr1 = [...arr1, ...arr2]; //  arr1 is now [0, 1, 2, 3, 4, 5]


//Spread in object literals

const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 13 };

const clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

const mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }






