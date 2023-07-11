// const test = () => {
//     console.log('testing the microphone');
// }

// test();





// const test = () => {
//     console.log('testing the microphone');
    // return "Hello world";
    // return 1;
    // return {name: "George",
    //         age: 20,
    //         color: 'pink'};
// }

// console.log(test().name);




// console.log(test());
// console.log(test()[0]);
// test().forEach((value) => {
//     console.log(value);
// })





// // Assignment-1
// const test = () => {
//     return [1,2,3,4];
// }


// // Decrement
// for (var a=test().length - 1; a>=0; a--) {
//     console.log(test()[a]);
// }



// // Assignment 2
// const star1 = () => {
//     for (var a = 0; a <= 4 ; a++) {
//         let star = "";
//         for (var b = 4; b >= a; b-- ) {
//             star += "*";
//         }
//         console.log(star)
//     }
// }

// star1();



// // Assignment 3
// const star2 = () => {
//     for (var a = 0; a <= 4 ; a++) {
//         let star = "";
//         for (var b = 0; b <= a; b++) {
//             star += "*";
//         }
//         console.log(star)
//     }
// }
// star2();



// // Assignment-4
// const George = () => {
//     return {
//         name: "George",
//         age: 101,
//         aspiration: "Software Dev",
//         color: "Blue"
//     };
// }

// console.log(George().name, George().age, George().aspiration, George().color);





// // Assignment-5
// const jobInfo = () => {
//     return "Dev @ PMT";
// };

// const George = () => {
//     // return "George";
//     // return 101;
//     // return true;
//     // return jobInfo();
//     return {
//         name: "George",
//         age: 101,
//         aspiration: "Software Dev",
//         color: "Blue",
//         isAdult: true,
//         job: jobInfo
//     };
// }

// console.log(George().name);
// console.log(George().job());






// import interns, {department, bio} from "./impExp.js";

// const workingWithImpExp = () => {
//     interns();
//     department();
//     bio(44);
//     console.log(bio(2).name);
// }

// workingWithImpExp();





// // EXAMPLE #1
// function fetchData(callback) {
//     setTimeout(() => {
//         const data = "Callback data";
//         callback(data);
//     }, 3000)
// }

// function myData(data) {
//     console.log(`Processed Data: ${data}`);
// }

// fetchData(myData);



// // EXAMPLE #2
// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // const data = "Callback Henry accepted";
//             // resolve(data);

//             const data = "Callback Henry rejected";
//             reject(data);
//         }, 3000)
//     })
// }

// function myData(data) {
//     console.log(`Processed Data: ${data}`);
// }

// fetchData().then(myData).catch(error => {
//     console.error("Error", error);
// });


// // EXAMPLE #3
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "Callback Henry accepted";
            resolve(data);

            // const data = "Callback Henry rejected";
            // reject(data);
        }, 3000)
    })
}

async function myData() {
    try{
        const data = await fetchData();
        console.log(`Processed: ${data}`);
    }catch(error){
        console.log(`Error: ${error}`)
    }
}

myData();