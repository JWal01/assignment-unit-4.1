console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
hello();
// Call the function to test
console.log('Test - should say "Hello World!"', hello());

hello();



// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(firstName) {
  return `Hello, ${firstName}!`;
}
console.log(helloName("Jeff"));
// Remember to call the function to test
helloName();



// 3. Function to add two numbers together & return the result
let x = addNumbers(5, 2);
function addNumbers(a , b) {
  return a + b;
  // return firstNumber + secondNumber;
}
addNumbers();
console.log(x);


// 4. Function to multiply three numbers & return the result
let m = multiplyThree( 5,4,3);
function multiplyThree(a, b ,c) {
  return a * b * c;
}
multiplyThree();

console.log(m);
// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
num =isPositive(7)
function isPositive(a) {
  if (a > 0) {
    return true;
  }
  return false;
}
isPositive();
console.log(num);
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('isPositive - should say true', isPositive(3));
console.log('isPositive - should say false', isPositive(0));
console.log('isPositive - should say false', isPositive(-3));


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.


let myArr = ['apple', 'oranges', 'grapes'];

function getLast(myArr) {
  if(myArr.length === 0){
    return undefined;
  }else{
    return myArr[myArr.length - 1];
    
  }
}
getLast();





// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

let list=[1, 2, 3, 4, 5, 6];
/**
 * 
 * @param {number} value 
 * @returns 
 */
/*function findValue(value){
  for (let i = 0; i < list.length; i++) {
  if (list[i] === value){
    return true;
  }else {
    return false;
  }
    
  }
}
findValue(4);
*/
function findValue(value){
  console.log("infunction");
  for (let i = 0; i < list.length; i++) {
    console.log("item");
    if(list[i] === value){
      console.log("found item");
      console.log("true");
    }else{
      console.log("item not found");
      console.log("false");
    }
    
    
  }
}
findValue(2);

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log('isFirstLetter - should say true', isFirstLetter('a', 'apple'));
console.log('isFirstLetter - should say false', isFirstLetter('z', 'apple'));

// 9. Function to return the sum of all numbers in an array
function sumAll() {
  let sum = 0;
  // TODO: loop to add items

  // TODO: return the sum
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive() {

}


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}