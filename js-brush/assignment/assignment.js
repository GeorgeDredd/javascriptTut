// ASSIGNMENT


// // Comparison Operator

// No #1
// Write a JavaScript function that takes two numbers as parameters (a and b) and returns true if a is greater than b, and false otherwise.

// function checkGreaterThan(a, b) {
//     if (a > b) {
//         return true
//     }
//     else {
//         return false
//     }
// }


// console.log(checkGreaterThan(1, 2));


// No #2
// Create a JavaScript program that prompts the user to enter their age and checks if it is greater than or equal to 18 using the comparison operator.

// let age = prompt("Enter your age: ");

// if (age >= 18) {
//     alert("Adult")
// } else {
//     alert("Not an adult")
// }


// No #3



// No #4
// Write a JavaScript program that checks if a given string is longer than 10 characters using the comparison operator.

// let text = prompt("Enter your message: ");

// console.log(text.length)

// if (text.length > 10) {
//     alert("You entered more than 10 characters");
// }
// else {
//     alert("You entered less than 10 characters");
// }



// No #5
// Create a JavaScript function that takes two dates as parameters and checks if the first date is later than the second date using the comparison operator.

// let dateOne = new Date("May 25 2023");
// let dateTwo = new Date("May 21 2023");

// function laterDate(d1, d2) {
//     if(d1 > d2) {
//         alert("First date is later than second")
//     }
//     else {
//         alert("Second date is later than first")
//     }
// }

// laterDate(dateOne, dateTwo);






// // Equality Sign

// No #1
// Write a JavaScript function that takes two parameters (a and b) and returns true if they are equal and false otherwise.

// function checkEqualsTo(a, b) {
//     if (a === b) {
//         return true
//     }
//     else {
//         return false
//     }
// }

// console.log(checkEqualsTo(1, 1));


// // CHATGPT
// function checkEquality(a, b) {
    // // No need for conditional statements, the expression returns boolean values
//     return a === b;
//   }
  
// const num1 = 10;
// const num2 = 10;

// const isEqual = checkEquality(num1, num2);
// console.log("Are the numbers equal?", isEqual);
  


// No #2
// Create a JavaScript program that prompts the user to enter their password and checks if it matches a predefined password using the equality operator.

// let newpword = prompt("Enter your password: ");
// let pword = "1234"

// if (newpword != pword) {
//     alert("Password is incorrect!");
// } else {
//     alert("Password correct!");
// }

// // CHATGPT
// const predefinedPassword = "password123";
// const enteredPassword = prompt("Enter your password:");

// const isMatch = enteredPassword === predefinedPassword;
// console.log("Password match:", isMatch);


// No #3
// Implement a JavaScript function that takes an array of numbers and returns true if all elements are equal and false otherwise.

// function checkArrayEquality(arr) {
// for (let i = 1; i < arr.length; i++) {
//     // uses the first value in array to test for condition. Function returs false if condition is true and true if condition is condition is false
//     // 5 !== 5  // condition is false
//     // 6 !== 5  // condition is true
//     if (arr[i] !== arr[0]) {
//     return false;
//     }
// }
// return true;
// }

// const numbers = [5, 5, 5, 5, 5];

// const areEqual = checkArrayEquality(numbers);
// console.log("Are all numbers equal?", areEqual);
  


// No #4
// Write a JavaScript program that checks if a given string is a palindrome using the equality operator.

// function isPalindrome(str) {
    // reverse method   -  reverses elements in an Array, first convert to array using split and finally join
//     const reversedStr = str.split("").reverse().join("");
//     return str === reversedStr;
// }

// const inputString = "racecare";

// const isPalindromic = isPalindrome(inputString);
// console.log("Is the string a palindrome?", isPalindromic);
  


// No #5
// Create a JavaScript function that takes two objects as parameters and checks if they have the same properties and values using the equality operator


// // const htmlOne = { name: "HyperText Markup Language", language: "Markup" };
// // console.log(Object.keys(htmlOne));
// // console.log(Object.values(htmlOne));
// // console.log(Object.keys(htmlOne).length);

// function compareObjects(obj1, obj2) {
//     const obj1Keys = Object.keys(obj1);
//     const obj2Keys = Object.keys(obj2);
  
//     if (obj1Keys.length !== obj2Keys.length) {
//       return false;
//     }
  
//     for (let key of obj1Keys) {
//       if (obj1[key] !== obj2[key]) {
//         return false;
//       }
//     }
  
//     return true;
// }
  
// const htmlOne = { name: "HyperText Markup Language", language: "Markuper" };
// const htmlTwo = { name: "HyperText Markup Language", language: "Markup" };

// const obj1 = htmlOne;
// const obj2 = htmlTwo;

// const areEqual = compareObjects(obj1, obj2);
// console.log("Are the objects equal?", areEqual);  



// // Compound Operator

// No #1
// Given a variable x with an initial value of 5, use a compound operator to increment its value by 3.

// let x = 5;
// x += 3
// console.log("New value of x:", x);



// No #2
// Create a variable y with an initial value of 10 and use a compound operator to subtract 2 from it.

// let y = 10
// y -= 2
// console.log("New value of y:", y);


// No #3
// Write a JavaScript function that takes two parameters (a and b) and swaps their values using compound assignment operators without using a temporary variable.

// function swapValues(a, b) {
//     // 15 = 10 + 5
//     a += b;
//     // 10 = 15 - 5
//     b = a - b;
//     // 5 = 15 - 10
//     a -= b;
//     // return as array
//     return [a, b];
// }

// let num1 = 10;
// let num2 = 5;

// // define as array
// [num1, num2] = swapValues(num1, num2);
// console.log("Swapped values:", num1, num2);
  



// No #4
// Implement a JavaScript program that calculates the sum of the first 10 natural numbers using a compound operator.

// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//     sum = sum + i;
// }

// console.log("Sum of the first 10 natural numbers:", sum);


// No #5
// Create an array numbers with initial values [1, 2, 3, 4, 5] and use a compound operator to append the value 6 to the end of the array.

// let numArr = [1, 2, 3, 4, 5];
// numArr.push(6)

// console.log("Updated array:", numArr);




// // Conditional Statement

// No #1
// Write a JavaScript program that checks if a given number is positive, negative, or zero, and displays an appropriate message.

// let number = prompt("Enter number: ");
// number = Number(number);

// if (number > 0) {
//     alert("You entered a positive number!")
// }
// else if (number === 0) {
//     alert("You entered zero")
// }
// else {
//     alert("You entered a negative number!")
// }


// // CHATGPT
// function checkNumber(number) {
//     if (number > 0) {
//       console.log("The number is positive.");
//     } else if (number < 0) {
//       console.log("The number is negative.");
//     } else {
//       console.log("The number is zero.");
//     }
//   }
  
//   const number = 10;
//   checkNumber(number);
  




// No #2
// Create a JavaScript function that takes a year as input and determines whether it is a leap year or not.
// A normal year has 365 day, leap years
// have 366, with an extra day in February.
// Hint:
// every year that is evenly divisible by 4
// except every year that is evenly divisible by 100
// unless the year is also evenly divisible by 400

// function isLeap(year) {
//     if ((year % 4) == 0) {
//         if ((year % 100) == 0) {
//             if ((year % 400) == 0) {
//                 alert("Leap year.");
//             } else {
//                 alert("Not Leap year.");
//             }  
//         } else {
//              alert("Leap year.");
//         }
//     } else {
//         alert("Not leap year.");
//     }
// }

// let year = prompt("Enter year: ");
// isLeap(year);



// // CHATGPT
// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }
  
// const year = 2023;
// const leapYear = isLeapYear(year);
// console.log(`${year} is a leap year: ${leapYear}`);
  




// No #3
// Write a JavaScript program that prompts the user for their age and displays a message based on the following conditions: if the age is less than 18, display "You are a minor"; if the age is between 18 and 65, display "You are an adult"; if the age is greater than or equal to 65, display "You are a senior citizen".

// // let age = prompt("Enter your age: ");
// let age = 18
// age = Number(age);

// if (age < 18) {
//     console.log("You are a minor");
// }
// else if (age >= 18 && age <= 65 ) {
//     console.log("You are an adult");
// }
// else {
//     console.log("You are a senior citizen");
// }



// No #4
// Implement a JavaScript function that takes three numbers as input and returns the maximum value among them.

// function maxValue (a, b ,c) {
//     let max;
//     if (a > b) {
//         max = a;
//     }
//     else if (b > c) {
//         max = b;
//     }
//     else {
//         max = c;
//     }
//     alert("Max value is " + max);
// }

// maxValue(12, 3, 4);


// // CHATGPT
// function findMaximum(a, b, c) {
//     return Math.max(a, b, c);
// }
  
// const num1 = 10;
// const num2 = 5;
// const num3 = 8;

// const maximum = findMaximum(num1, num2, num3);
// console.log("Maximum value:", maximum);
  



// No #5
// Write a JavaScript program that prompts the user to enter two numbers and displays the larger number followed by the message "is larger" using a conditional statement.

// function maxValue (a, b) {
//     let max;
//     if (a > b) {
//         max = a;
//     }
//     else {
//         max = b;
//     }

//     alert(max + " is larger");
// }

// let num1 = Number(prompt("Enter first number: "));
// let num2 = Number(prompt("Enter second number: "));

// maxValue(num1, num2);



// // CHATGPT
// function findLargerNumber(num1, num2) {
// if (num1 > num2) {
//     return `${num1} is larger.`;
// } else if (num2 > num1) {
//     return `${num2} is larger.`;
// } else {
//     return "The numbers are equal.";
// }
// }

// const input1 = parseFloat(prompt("Enter the first number:"));
// const input2 = parseFloat(prompt("Enter the second number:"));

// const result = findLargerNumber(input1, input2);
// console.log(result);
  




// //Import & Export


import defMod, {pi, capitalizeString, sum, multiply, subtract, car, countryList} from "./exportAssign.js";

const useDefMod = () => {
    defMod();
    //No 1
    // Create a JavaScript module that exports a constant variable PI with a value of 3.14159. Import and use this variable in another file to calculate the circumference of a circle.

    // const calcCircum = (r) => {
    //      return 2 * pi * r;
    // }

    // const radius = 5;
    // const circumference = calcCircum(radius);
    // console.log("Circumference of the circle:", circumference);

    // No 2
    // Write a JavaScript module that exports a function capitalizeString which accepts a string as input and returns the capitalized version of the string. Import and use this function in another file to capitalize a user-entered string.

    // let msg = "hey"
    // msg = capitalizeString(msg);
    // console.log("Capitalized string:", msg);


    // No 3
    // Implement a JavaScript module that exports multiple utility functions (e.g., sum, multiply, subtract) and import and use these functions in another file to perform mathematical operations.

    // let sumResult = sum(2, 3);
    // console.log("Sum:", sumResult);


    // let multResult = multiply(2, 3);
    // console.log("Multiplication:", multResult);


    // let subResult = subtract(2, 3);
    // console.log("Subtraction:", subResult);


    // No 4
    // Create a JavaScript module that exports an object representing a car with properties such as make, model, and year. Import this module in another file and display the car details.

    // console.log(car);
    // console.log("Car make:", car.make);
    // console.log("Car model:", car.model);
    // console.log("Car year:", car.year);
    // console.log(car["make"], car.model, car.year);



    // No 5
    // Write a JavaScript module that exports an array of country names. Import and use this array in another file to display a list of available countries for selection.

    // console.log("Available countries: ");
    // countryList.forEach((country) => {
    //     console.log(country)
    // });

}
useDefMod();
