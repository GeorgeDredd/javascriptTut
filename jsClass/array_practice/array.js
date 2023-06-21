let arrayText = document.querySelector("#arrayText");
let newArrayText = document.querySelector("#newArrayText");
let btn = document.querySelector("#btn");


let bikes = ["yamaha", "Bajaj", "Honda", "TVS"];
let bikesTwo = ["Ford", "Toyata", "Benz"];
// let bikes = ["yamaha", "Bajaj", "Honda", "TVS", "Ford", "Toyata", "Benz"];
arrayText.innerHTML = bikes;


function change() {
// // ACCESS INDEX
  // let newArr = `
  //   We are a car dealer shop, we sell different kind of cars but we only have ${bikes.length} in stock which are ${bikes[0]}, ${bikes[1]}, ${bikes[2]}, ${bikes[3]} .
  // `


  // // TO STRING
  // let newArr = `We are a car dealer shop, we sell different kind of cars like ${bikes.toString().}`


// // JOIN
  // let newArr = `We are a car dealer shop, we sell different kind of cars like ${bikes.join("hbcuehb")}`


  // // POP
  // bikes.pop();
  

  // // PUSH
  // bikes.push("Ford")
  // bikes.push("Toyota")
  // bikes.push("Benz")

  // // SHIFT
  // bikes.shift();
  // bikes.shift();

  // // UNSHIFT
  // bikes.unshift("FORD");

  //  // DELETE
  // delete bikes[1]

  // // REPLACE ARRAY ELEMENTS
  // bikes[0] = "Highlander";
  // bikes[1] = "Camry";
  // bikes[2] = "Toyata";
  // bikes[3] = "Benz";


let newBikes = bikes.concat(bikesTwo);
  
newArrayText.innerHTML = ` 
        <p style="color:darkgreen; margin-top: 150px">We are a car dealer shop</p> 
        <p>We sell different kind of cars but we only have ${newBikes.length} in stock which are ${newBikes.join(", ")} </p>
      `;
}
















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



