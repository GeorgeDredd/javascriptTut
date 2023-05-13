// // OUTPUT METHODS
// console.log("Hello");
// windows.alert("Hello");
// alert("Hello");

// // DOM
// windows.prompt("Please what is your  name: ");


// Rules in Naming Js
// let myusernameisgeorge = prompt("What is your username");
// let myUsernameIsGeorge = prompt("What is your username");
// let userName = prompt("What is your username");
// document.getElementById("paragraph").textContent = userName;


// alert("Are you sure you want to ");
// confirm("Are you sure you want to ");


// // DATATYPES
// // STRINGS

// // keyword name = value;
// let     pm =   "VICTOR CHETACHI"
// console.log(pm.length); 
// console.log(pm.toLowerCase());


// // STRING CONCATENATION

// // prompt to request for user input


/*
knjnjdjjdc
efefefef
efefefef
*/


// let firstname = prompt("Enter your first name");
// let lastname = prompt("Enter your last name");
// let surname = prompt("Enter your surname name");



// console.log(myname);
// let fullName = firstname + " " + lastname + " " + surname;
// document.getElementById("paragraph").textContent = fullName;


// // CHALLENGE - Calculator 
// alert("Add two numbers");
// let num1 = Number(prompt("Enter your first number")); 
// let num2 = Number(prompt("Enter your second number"));
// let answer = num1 + num2;



// let num1 = prompt("Enter your first number"); 
// let num2 = prompt("Enter your second number");
// let answer = Number(num1) + Number(num2);

// document.getElementById("paragraph").textContent = answer ;



// alert("Calculator");
// let num1 = prompt("Enter your first number"); 
// let operator = prompt("Enter operator");
// let num2 = prompt("Enter your second number");

// let answer = eval(Number(num1) + operator + Number(num2));
// document.getElementById("paragraph").textContent = answer ;



// // 2. Discuss DOM properties 
// document.getElementById("paragraph").textContent = "A pararagraph" ;

// document.getElementById("paragraph").style.color = "green";

// document.getElementById("paragraph").style.fontSize = "30px";

// document.getElementById("paragraph").style.cursor = "pointer";

// document.getElementById("paragraph").style.transition = "1s";

// document.getElementById("paragraph").innerHTML = "<a href='www.google.com'>This is a link </a>"


// document.getElementById("paragraph").setAttribute("style", "color:green");


// let img = document.createElement("img")
// img.src = "images/bg.jpg";
// document.getElementById("paragraph").appendChild(img);


// // 3. Intro to Functions
// document.getElementById("paragraph").addEventListener("click", (changeContent))
//     function changeContent () {
//         document.getElementById("paragraph").style.fontSize = "50px";
//         document.getElementById("paragraph").classList.add("new-para");
//     }



// // 4. Comparison Operators (==, <, <=, >, >=, !=)
// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;
// let e = 1

// // == Equals
// // != Not equals
// let comparison = (b  > a);
// comparison = (a  > b );
// comparison = (a  < b );
// comparison = (b  >= a);
// comparison = (b  <= a);
// comparison = (a == b);
// comparison = (a  != b);
// comparison = (a == e);
// comparison = (a + b == c);
// comparison = (a + b != c + d);
// comparison = (d == c + a);
// comparison = (d <= c + a);
// comparison = (c >= b + a);


// document.getElementById("msg").textContent = comparison;
// // console.log(comparison)





// CLASS
// 02:40 - 03:10
// 1. Assign value to document.getElementById
// 2. Discuss DOM properties 
// 3. Intro to Functions
// 4. Comparison Operators (==, <, <=, >, >=, !=)
// 5. Conditional
// 6. Assignment - background changer, age calculator




let body = document.getElementById("body");
let p = document.getElementById("msg");
let inputScore = document.getElementsByClassName("inputScore");
let btn = document.getElementById("btn");
let head = document.getElementById("head");



btn.addEventListener("click", addScore);


function addScore (e) {
    // prevent the defaut bhvur wen u submit a form
    e.preventDefault();
    let maths = inputScore[0].value;
    let eng = inputScore[1].value;
    let phy = inputScore[2].value;
    let chem = inputScore[3].value;
    // convert the values from string to number
    let totalScore = Number(maths) + Number(eng) + Number(phy) + Number(chem) ;
    // add a text to the paragraph element you selected from the DOM
    p.textContent = "Your score is " + totalScore;


     
    if (totalScore >= 200)  {      
        body.style.backgroundColor = "green"; 
        btn.style.backgroundColor = "green"; 
        p.textContent += "...Boss!!!"; 

    }
    // 100 101 102..... 200
    else if (totalScore >= 100 && totalScore < 200)  {      
        body.style.backgroundColor = "orange"; 
        btn.style.backgroundColor = "orange"; 
        p.textContent += "..You try!!!"; 

    }        
    else {
        body.style.backgroundColor = "red"; 
        btn.style.backgroundColor = "red";
        p.textContent += "..Dey Play"; 
    } 
}










// btn.addEventListener("click", showResult);
// function showResult(e) {
//     e.preventDefault()
//     let totalScore = Number(inputScore[0].value) + Number(inputScore[1].value) +  Number(inputScore[2].value) +  Number(inputScore[3].value);
//     p.textContent = "Your Jamb Score is " + totalScore + ".... "; 


  
// }