// // UDEMY - MODERN JS FROM BEGINNING

// //SECTION 3 - ARRAYS & OBJECTS

// // ARRAYS
// // EXC #1
// const arr = [1 , 2, 3, 4, 5]

// // 1
// arr.push(6);
// arr.unshift(0);
// arr.reverse()

// // 2
// arr.push(6);
// arr.reverse()
// arr.push(0);

// console.log(arr); // [6, 0, 1, 2, 3, 4, 5, 6, 0 ]




// // EXC #2
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [5, 6, 7, 8, 9, 10];

// // METHOD 1
// const arr3 = arr1.slice(0, 4).concat(arr2)
// console.log(arr3);

// // METHOD 2
// const arr4 = [...arr1, ...arr2];
// arr4.splice(4, 1)
// console.log(arr4);


// // METHOD 3
// arr1.splice(-1);
// const newarr = [...arr1, arr2];
// console.log(newarr);




// arr1.splice(-2, 1)
// console.log(arr1); // [ 1, 2, 3, 5 ]

// arr2.splice(0, 1)
// console.log(arr2); // [5, 6, 7, 8, 9, 10]




// // OBJECTS
// // EXC #1 - Step 1
// const library = [
//     {
//         title: "Zero To One",
//         author: "Peter Thiel",
//         status: {
//             own: true,
//             reading: true,
//             read: false
//         }
//     },
//     {
//         title: "War Of Art",
//         author: "Stevel Pressfield",
//         status: {
//             own: true,
//             reading: true,
//             read: false
//         }
//     },
//     {
//         title: "Tools Of Titans",
//         author: "Tim Ferris",
//         status: {
//             own: true,
//             reading: true,
//             read: false
//         }
//     }

// ]

// // Step 2
// library[0].status.read = true;
// library[1].status.read = true;
// library[2].status.read = true;


// // const { title} = library[0];
// // console.log(title);

// // Step 3
// const { title:firstbook} = library[0];
// console.log(firstbook);


// // Step 4
// const obj = JSON.stringify(library)
// console.log(obj)