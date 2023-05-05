// // DATA TYPES
// alert("Hello World");
// typeof()


// // VARIABLES
// var myName = "George";
// var yourName = prompt("What is your name?")
// alert("Hi, " + yourName + "! " + "I'm " + myName + ", and it's really nice to meet you");
// ;


// function test() {
//     var a = "3";
//     var b = "8";

//     var c = a;
//     a = b;
//     b = c;  

//     console.log(a)
//     console.log(b)
// }

// test()



// // NAMING AND NAMING CONVENTIONS
// var myvar = "abc";
// var my123 = 123;
// var myname = "George";
// var my_name = "George"
// var userScoreFinal = 12;



// // STRING CONCATENATION
// var message = "Hello";
// var user = prompt("Enter your name: ");

// alert(message + " " + user);



// // STRING LENGTH
// var blogPost = prompt("Enter your post: ");

// // alert("You have written " + blogPost.length + " characters. " + 
// //       "You have " + (140-blogPost.length) + " characters left");

// var blogPostCount = blogPost.length;
// alert("You have written " + blogPostCount + " characters. " + 
//       "You have " + (140 - blogPostCount) + " characters left");




// // SLICING AND EXTRACTING STRINGS
// var name = "George";
// name.slice(5,6)

// var blogPost = prompt("Enter your post (Maximum of 20 characters): ");
// var newBlogPost = blogPost.slice(0,20);
// var blogPostCount = blogPost.length;

// alert(newBlogPost);
// alert("You have written " + blogPostCount + " characters. " + 
//       "You have " + (20 - blogPostCount) + " characters left");



// // MORE STRING METHODS
// var userName = prompt("Enter your username: ");
// var firstChar =  userName.slice(0,1);
// var upperCaseFirstChar =  firstChar.toUpperCase();
// var otherChar = userName.slice(1,userName.length);
// var lowerCaseOtherChar = otherChar.toLowerCase();
// var capitalisedName = upperCaseFirstChar + lowerCaseOtherChar;

// // alert(userName.slice(1, (userName.length-1))); 
// alert("Hello, " + capitalisedName);



// // ARITHMETIC AND MODULO OPERATOR
// var dogAge = prompt("Enter age of dog: ");
// var humanAge = (dogAge-2) * 4 + 21;

// alert("The dog's age is " + humanAge + " in human years");




// // INCREMENT AND DECREMENT EXPRESSIONS
// var x = 5;
// var y = 3;

// x = x + 1;
// x++;
// x = x - 1;
// x--
// x += y;
// x -= y;
// x *= y;
// x /= y;
// x %= y;



// // FUNCTIONS
// // A function that tells my robot to buy food
// function getFood() {
//     console.log("leaveHouse");
//     console.log("moveRight");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveRight");
//     console.log("buyFood");
//     console.log("moveLeft");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveLeft");
//     console.log("enterHouse");
// }

// getFood();


// // ANOTHER EXAMPLE - DRY PRINCIPLE
// function getFood() {
//     console.log("leaveHouse");
//     console.log("moveRight");
//     moveUp();
//     console.log("moveRight");
//     console.log("buyFood");
//     console.log("moveLeft");
//     moveDown();
//     console.log("moveLeft");
//     console.log("enterHouse");
// }


// function moveUp() {
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
// }


// function moveDown() {
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
// }

// getFood();



// FUNCTION PARAMETERS AND ARGUMENTS
// function getFood(nameOfFood, quantity) {    
//     console.log("leaveHouse");
//     console.log("moveRight");
//     console.log("moveUp");
//     console.log("Buy " + quantity + " cups of " + nameOfFood + " at the store");
//     console.log("moveLeft");
//     console.log("moveDown");
//     console.log("moveLeft");
//     console.log("enterHouse");
// }
// getFood("rice", 5);

// // var foodName = prompt("Enter the name of food: ");
// // var foodQuantity = prompt("Enter the quantity of food: ");
// // getFood(foodName, foodQuantity);





// // CHALLENGE - LIFETIME CHECKER
// // Create a fn that tells how many days, weeks and
// // months we have left until 90 years using this format:
// // You have x days, y weeks and z months left.

// // Assume we have 365 days, 52 weeks and 12 months in a year

// function timeLeft(age) {
//     var yearsLeft = 90 - age;
//     var daysLeft = yearsLeft * 365;
//     var weeksLeft = yearsLeft * 52;
//     var monthsLeft = yearsLeft * 12;

//     console.log("You have " + daysLeft + " days, " + weeksLeft + 
//                 " weeks and " +  monthsLeft + " months left.");
// }

// var age = prompt("Enter your age : ");
// timeLeft(age);



// // CHALLENGE
// // BMI (Body Mass Index) CALCULATOR to estimate the amount of body fat.
// // Used in medicine to calculate risk of heart disease

// // BMI = weight / height * height
// function bmiCalculator(weight, height) {
//    return "Your Body Mass Index is " + calcBmi(weight, height);
// }

// function calcBmi(weight, height) {
//     // var bmi =  Math.floor(weight / (height * height));
//     var bmi =  Math.round(weight / Math.pow(height, 2));
//     return bmi;
// }


// var bmi = bmiCalculator(65, 1.8);
// console.log(bmi);




// RANDOM NUMBER GENERATION IN JS
// // Multiply random generated no by whatever range needed
// var n = Math.random() * 6;
// n = Math.floor(n) + 1;
// console.log(n)



// // // CHALLENGE - LOVE CALCULATOR
// var yourName = prompt("Enter your name: ");
// var crushName = prompt("Enter crush's name: ");
// var loveScore = Math.random() * 100;
// loveScore = Math.floor(loveScore) + 1;

// console.log("The love score for " +
//             yourName + " and " + crushName + " is " +
//            loveScore + "%");



// // CHALLENGE - LEAP YEAR
// // Write a program that works out whether if a given year
// // is a leap year. A normal year has 365 day, leap years
// // have 366, with an extra day in February.
// // Hint:
// // every year that is evenly divisible by 4
// // except every year that is evenly divisible by 100
// // unless the year is also evenly divisible by 400

// function isLeap(year) {
//     if ((year % 4) == 0) {
//         if ((year % 100) == 0) {
//             if ((year % 400) == 0) {
//                 console.log("Leap year.");
//             } else {
//                 console.log("Not Leap year.");
//             }  
//         } else {
//              console.log("Leap year.");
//         }
//     } else {
//         console.log("Not leap year.");
//     }
// }

// var year = prompt("Enter year: ");
// isLeap(year);



// // ARRAYS
// var guestList = ["Angela", "Jack", "Jill",
//                  "George", "Vanessa"];
// var guestName = prompt("Enter your name: ")
// if (guestList.includes(guestName)) {
//     alert("Welcome, " + guestName);
// }else {
//     alert("Sorry, can't find you");
// }

// // CHALLENGE - FIZZBUZZ
// var output = [];
// var n = 1;


// function fizzBuzz() {
//     if (n % 3 == 0 && n % 5 == 0) {
//         output.push("FizzBuzz");
//     }
//     else if (n % 3 == 0) {
//         output.push("Fizz");
//     }
//     else if (n % 5 == 0) {
//         output.push("Buzz");
//     }
//     else {
//         output.push(n);    
//     }
//     n++;
   
//     console.log(output)
// }

// let names = ["Angela", "Ben", "Jenny",
//              "Michael", "Chloe"];

// function whosPaying(names) {
//     payLunch = Math.floor(Math.random() * names.length)
//     return names[payLunch] + " is going to buy lunch today!";
// }

// whosPaying(names);


// JS ARRAYS
let bikes = ["yamaha", "Bajaj", "Honda", "TVS"];
console.log(bikes); //[ 'yamaha', 'Bajaj', 'Honda', 'TVS' ]

console.log(bikes.toString()); //yamaha,Bajaj,Honda,TVS

console.log(bikes.toString()[0]); //y

console.log(bikes.join("-")); //yamaha-Bajaj-Honda-TVS

console.log(bikes.pop()); //TVS

console.log(bikes); //changes original array [ 'yamaha',     'Bajaj', 'Honda' ]


bikes = ["yamaha", "Bajaj", "Honda", "TVS"]; 
console.log(bikes.push("Ducatti" , "Royal Enfield")); // returns new length 6
console.log(bikes); //changes the original array [ 'yamaha', 'Bajaj', 'Honda', 'TVS', 'Ducatti', 'Royal Enfield' ]

console.log(bikes.shift()); //yamaha 
console.log(bikes); //changes the original array [ 'Bajaj', 'Honda', 'TVS', 'Ducatti', 'Royal Enfield' ]


bikes = ["yamaha", "Bajaj", "Honda", "TVS", "Ducatti" , "Royal Enfield"]; 
console.log(bikes.unshift("BMW", "Kawasaki")); //returns new length 8
console.log(bikes); //changes the original array [ 'BMW','Kawasaki', 'yamaha', 'Bajaj', 'Honda' , 'TVS', 'Ducatti','Royal Enfield' ]


bikes = ["yamaha", "Bajaj", "Honda", "TVS", "Ducatti" , "Royal Enfield"]; 
delete bikes[1];
console.log(bikes); //does not change the length of array[ 'yamaha', <1 empty item>, 'Honda' , 'TVS', 'Ducatti','Royal Enfield' ]


let bikes1 = ["BMW", "Kawasaki"];
let bikes2 = ["yamaha", "Bajaj", "Honda"]; 
let bikes3 = ["TVS", "Ducatti" , "Royal Enfield"]; 
let newBikes = bikes1.concat(bikes2, bikes3);
console.log(newBikes); //returns new array ["BMW", "Kawasaki","yamaha", "Bajaj", "Honda", "TVS", "Ducatti" , "Royal Enfield"];


newBikes = ["BMW", "Kawasaki","yamaha", "Bajaj"];
let newBikesCost = [1200, 500, 350, 4100];
newBikes.sort();
console.log(newBikes);
newBikesCost.sort(compareFn)
console.log(newBikesCost.sort(compareFn))
  function compareFn(a, b) {
      return a - b;
  }
console.log(newBikesCost);


bikes = ["yamaha", "Bajaj", "Honda", "TVS", "Ducatti" , "Royal Enfield"]; 
bikes.splice(2, 3) //[ 'yamaha', 'Bajaj', 'Royal Enfield' ]
console.log(bikes);
bikes = ["yamaha", "Bajaj", "Honda", "TVS", "Ducatti" , "Royal Enfield"]; 
bikes.splice(2, 3, "Ford", "Toyota");
console.log(bikes); //[ 'yamaha', 'Bajaj', 'Ford', 'Toyota', 'Royal Enfield' ]


