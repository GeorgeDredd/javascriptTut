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



// FUNCTIONS
// A function that tells my robot to buy food


// declare function
// write function
// call function





// let foodName = prompt("Enter food to buy: ");
// let foodName = prompt("Enter food to buy: ");
// getFood(foodName);


// let username = "George"




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



// // FUNCTION PARAMETERS AND ARGUMENTS
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
// // getFood("rice", 5);

// let foodName = prompt("Enter the name of food: ");
// let foodQuantity = prompt("Enter the quantity of food: ");

// getFood(foodName, foodQuantity);





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


// // 2.435454
// 2






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



// let names = ["Angela", "Ben", "Jenny",
//              "Michael", "Chloe"];

// function whosPaying(names) {
//     payLunch = Math.floor(Math.random() * names.length)
//     return names[payLunch] + " is going to buy lunch today!";
// }

// whosPaying(names);

/*






//JS ARRAY METHODS
// let bikes = ["yamaha", "Bajaj", "Honda", "TVS"];
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


newBikes = ["BMW", "Kawasaki","yamaha", "Bajaj"]
newBikesArr = newBikes.map(e => e.toLowerCase());
let newBikesCost = [1200, 500, 350, 4100];
newBikes.sort();
console.log(newBikes);

// newBikesCost.sort((a, b) => a - b) //smallest to largest
// newBikesCost.sort((a, b) => b - a) //largest to smallest


newBikesCost.sort(compareFn)
  function compareFn(a, b) {
      return a - b;
  }
console.log(newBikesCost); //[ 350, 500, 1200, 4100 ]


bikes = ["yamaha", "Bajaj", "Honda", "TVS", "Ducatti" , "Royal Enfield"]; 
bikes.splice(2, 3) //[ 'yamaha', 'Bajaj', 'Royal Enfield' ]
console.log(bikes);
bikes = ["yamaha", "Bajaj", "Honda", "TVS", "Ducatti" , "Royal Enfield"]; 
bikes.splice(2, 3, "Ford", "Toyota");
console.log(bikes); //[ 'yamaha', 'Bajaj', 'Ford', 'Toyota', 'Royal Enfield' ]



bikes = ["yamaha", "Bajaj", "Honda", "TVS", "Ducatti" , "Royal Enfield"];
console.log(bikes.slice(1, 4)); //[ 'Bajaj', 'Honda', 'TVS' ]



newBikes = ["BMW", "Kawasaki","yamaha", "Bajaj"];
newBikesCost = [1200, 500, 350, 4100];
newBikes.reverse()
console.log(newBikes); //[ 'bajaj', 'yamaha', 'kawasaki', 'bmw' ]
newBikesCost.reverse()
console.log(newBikesCost);//[ 4100, 350, 500, 1200 ]


bikes = ["yamaha", "Bajaj", "Honda", "TVS", "Ducatti" , "Royal Enfield"];
let movieName = "Ghost Rider";
console.log(Array.isArray(bikes)); //true
console.log(Array.isArray(movieName)); //false



bikes = ["yamaha", "Bajaj", "Honda", "TVS", "Ducatti" , "Royal Enfield", "TVS"];
console.log(bikes.indexOf("TVS")); //3
console.log(bikes.indexOf("yamaha", 4)); //-1
console.log(bikes.lastIndexOf("TVS")); //6



newBikesCost = [1200, 500, 350, 4100];
newBikesCost.sort(compareFn)
let highCostArr = [];
newBikesCost.forEach((element) => { 
        if (element > 400) {
        highCostArr.push(element);
        return highCostArr;
        }
}) 
console.log(highCostArr); //[ 500, 1200, 4100 ]


newBikesCost = [1200, 500, 350, 4100];
newBikesCost.sort(compareFn);
const newCost = newBikesCost.find((v) => v > 350);
const newCostIndex = newBikesCost.findIndex((v) => v > 350);
console.log(newBikesCost); //[ 350, 500, 1200, 4100 ]
console.log(newCost); //500
console.log(newCostIndex); //1



newBikesCost = [1200, 500, 350, 4100];
console.log(newBikesCost.includes(350)); //true




bikes = ["yamaha", "Bajaj", "Honda", "TVS", "Ducatti" , "Royal Enfield"];
let bike = bikes.entries();

for (let x of bike) {
  console.log(x + " \n") 
                        // 0,yamaha
                        // 1,Bajaj  
                        // 2,Honda  
                        // 3,TVS  
                        // 4,Ducatti  
                        // 5,Royal Enfield
}



bikes = [1500, "yamaha", "Bajaj", "Honda", "TVS", "Ducatti" , "Royal Enfield", true];
newBikesCost = [2, 1200, 500, 350, 4100, 50];

let stringTest = (currentValue) => typeof(currentValue) === "string";
let max200  = (currentValue) => currentValue > 200;


  // function stringTest (currentValue) {
  //     return typeof(currentValue) === "string";
  // }

  // function  max200 (currentValue) {
  //     return currentValue > 200;
  // }

console.log(bikes.every(stringTest)); //false
console.log(newBikesCost.every(max200)); //false

console.log(bikes.some(stringTest)); //true
console.log(newBikesCost.some(max200)); //true




bikes = [1500, "yamaha", "Bajaj", "Honda", "TVS", "Ducatti" , "Royal Enfield", true];
let lastElem = bikes.length;
bikes.fill("bike", 0, 1);
bikes.fill("bike", lastElem - 1 , lastElem);
console.log(bikes); //['bike','yamaha', 'Bajaj','Honda', 'TVS', 'Ducatti', 'Royal Enfield','bike']





bikes = [1500, "yamaha", "Bajaj"];
bikes.copyWithin(2, 0);
console.log(bikes); //[ 1500, 'yamaha', 1500 ]




bikes = [1500, "yamaha", "Bajaj"];
console.log(bikes.valueOf()); //[1500, "yamaha", "Bajaj"]






newBikesCost = [1200, 500, 350, 4100];
newBikesCost.forEach(formatPrice);

function formatPrice(item, index, arr) {
    arr[index] = `$${item}.00`;
    return arr[index];
}

console.log(newBikesCost); //[ '$1200.00', '$500.00', '$350.00', '$4100.00' ]





let ages = [32, 33, 16, 40];
let result = ages.filter(checkAdult);

function checkAdult(age) {
  return  age >= 18;
}

console.log(result) //[ 32, 33, 40 ];





ages = [32, 33, 1, 4, 5];
// ages.reduce(myFunc);
// ages.reduceRight(myFunc);

function myFunc(total, num) {
  return total - num;
}

console.log(ages); //[ 32, 33, 1, 4, 5 ]







let myName = "George";
console.log(Array.from(myName));//[ 'G', 'e', 'o', 'r', 'g', 'e' ]

*/



// // CHALLENGE - FIZZBUZZ
// var output = [];
// var n = 1;


// function fizzBuzz() {
//     while (n <= 100) {
//       if (n % 3 == 0 && n % 5 == 0) {
//           output.push("FizzBuzz");
//       }
//       else if (n % 3 == 0) {
//           output.push("Fizz");
//       }
//       else if (n % 5 == 0) {
//           output.push("Buzz");
//       }
//       else {
//           output.push(n);    
//       }
//       n++;
//     }
//     console.log(output)
// }
// fizzBuzz();


// // CHALLENGE - 99 BOTTLES OF BEER
// var count  = 99;
// function beer() {
//     while(count >= 0) {
//         // if (count == 0) {
//         //   console.log("No more bottles of beer on the wall, no more bottles of beer.");
//         //   count--;
//         //   console.log("Go to the store and buy some more, 99 bottles of beer on the wall \n");
//         // }
//         // else if(count == 1) {
//         //   console.log(count + " bottle of beer on the wall, " + count + " bottle of beer.");
//         //   count--;
//         //   console.log("Take one down and pass it around, no more bottles of beer on the wall.\n");
//         // }
//         // else if(count == 2) {
//         //   console.log(count + " bottles of beer on the wall, " + count + " bottles of beer.");
//         //   count--;
//         //   console.log("Take one down and pass it around, " + count + " bottle of beer on the wall.\n");
//         // }

//         Trial - 2
//         let bottleWord = " bottles";
//         let msgOne = count + bottleWord + " of beer on the wall, " + count + " bottles of beer.";
//         let msgTwo = "Take one down and pass it around, " + count + bottleWord + " of beer on the wall.\n";
//         if (count == 0) {
//           msgOne = "No more bottles of beer on the wall, no more bottles of beer."
//           msgTwo = "Go to the store and buy some more, 99 bottles of beer on the wall \n"
//         }
//         else if(count == 1) {
//           bottleWord = " bottle"
//           msgTwo = "Take one down and pass it around, no more bottles of beer on the wall.\n";
//         }
//         else if(count == 2) {
//           bottleWord = " bottle"
//           msgOne = count + " bottles of beer on the wall, " + count + " bottles of beer.";

//         }
//         console.log(msgOne);
//         count--;
//         console.log(msgTwo);
      
//     }
// }

// beer();




// // Challenge - FibonnacciGenerator
// function fibonnacciGenerator (n) {
      
// }

// output = fibonnacciGenerator()
// console.log(output)

// bikes = ["yamaha", "Bajaj", "Honda", "TVS", "Ducatti" , "Royal Enfield", "TVS"];
// console.log(bikes.indexOf("TVSS")); //3



/*
// Template Literal
let myName = "George Odo Chiedozie";
let profession = "Software Dev"

// let composition = "My name is " + myName + ". I am a " + profession + "\n" + "More about my self i did bla bla bla bla bla bla bla bla bla bla bla bla";

let composition = `My name is ${myName}. I am a ${profession}.
More about my self i did bla bla bla bla bla bla bla bla bla bla bla bla
djhgf
dfiugdgyug

djhffgyd
djbhdbhff
fhdhuhiu
${myName}
${profession}
`

console.log(composition); //My name is George Odo ChiedozieI am a Software Dev

*/


// function getFood(foodName) {
//   console.log("leaveHouse");
//   console.log("moveRight");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp " + foodName);
//   console.log("moveRight");
//   console.log("Buy " + foodName);
//   console.log("buyFood");
//   console.log("moveLeft");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveLeft");
//   console.log("enterHouse");

// }



// Fn takes as input 
let number = "123-81-34";
// number = number.replace(/- /g, "");
number = Array.from(number);