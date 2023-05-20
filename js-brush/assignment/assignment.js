// ASSIGNMENT


// // Comparison Operator

// No #1
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
// let age = prompt("Enter your age: ");

// if (age >= 18) {
//     alert("Adult")
// } else {
//     alert("Not an adult")
// }


// No #3



// No #4
// let text = prompt("Enter your message: ");

// console.log(text.length)

// if (text.length > 10) {
//     alert("You entered more than 10 characters");
// }
// else {
//     alert("You entered less than 10 characters");
// }



// No #5
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
// function checkEqualsTo(a, b) {
//     if (a === b) {
//         return true
//     }
//     else {
//         return false
//     }
// }


// console.log(checkEqualsTo(1, 1));



// No #2
// let newpword = prompt("Enter your password: ");
// let pword = "1234"

// if (newpword != pword) {
//     alert("Password is incorrect!");
// } else {
//     alert("Password correct!");
// }



// No #3


// No #4


// No #5
// let html = {name: "HyperText Markup Language", language: "Markup"};
// let htmlTwo = {name: "HyperText Markup Language", language: "Markup"};
// let js = {name: "Javascript", language: "Programming"};


// function objectsChecker(a, b) {
//     if (a === b) {
//         console.log("same");
//     }
//     else {
//         console.log("not same");
//     }
// }

// objectsChecker(html.name, htmlTwo.name);






// // Compound Operator

// No #1
// Given a variable x with an initial value of 5, use a compound operator to increment its value by 3.

// let x = 5;
// x += 3
// console.log(x);



// No #2
// Create a variable y with an initial value of 10 and use a compound operator to subtract 2 from it.

// let y = 10
// y -= 2
// console.log(y);


// No #3
// Write a JavaScript function that takes two parameters (a and b) and swaps their values using compound assignment operators without using a temporary variable.


// No #4
// Implement a JavaScript program that calculates the sum of the first 10 natural numbers using a compound operator.


// No #5
// Create an array numbers with initial values [1, 2, 3, 4, 5] and use a compound operator to append the value 6 to the end of the array.

// let numArr = [1, 2, 3, 4, 5];
// let numArrEnd = numArr.length
// numArr[numArrEnd] = 6;

// console.log(numArr);




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




// No #3
// Write a JavaScript program that prompts the user for their age and displays a message based on the following conditions: if the age is less than 18, display "You are a minor"; if the age is between 18 and 65, display "You are an adult"; if the age is greater than or equal to 65, display "You are a senior citizen".

// let age = prompt("Enter your age: ");
// age = Number(age);

// if (age < 18) {
//     alert("You are a minor");
// }
// else if (age >= 18 && age < 65 ) {
//     alert("You are an adult");
// }
// else {
//     alert("You are a senior citizen");
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





// //Import & Export


import defMod, {pi, capitalizeString, utilityFn, car, countryList} from "./exportAssign.js";


const useDefMod = () => {
    defMod();

    // No 1
    // Create a JavaScript module that exports a constant variable PI with a value of 3.14159. Import and use this variable in another file to calculate the circumference of a circle.

    // let circleCircumf = 2 * pi();
    // console.log(circleCircumf);

    // No 2
    // Write a JavaScript module that exports a function capitalizeString which accepts a string as input and returns the capitalized version of the string. Import and use this function in another file to capitalize a user-entered string.

    // let msg = "hey"
    // msg = capitalizeString(msg);
    // console.log(msg);


    // No 3
    // Implement a JavaScript module that exports multiple utility functions (e.g., sum, multiply, subtract) and import and use these functions in another file to perform mathematical operations.



    // No 4
    // Create a JavaScript module that exports an object representing a car with properties such as make, model, and year. Import this module in another file and display the car details.

    // console.log(car()["name"], car().model, car().year);



    // No 5
    // Write a JavaScript module that exports an array of country names. Import and use this array in another file to display a list of available countries for selection.

    // countryList().forEach((country) => {
    //     console.log(country);
    // });

}
useDefMod();
