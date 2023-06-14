// // 1) Write a JavaScript function to check whether an input is an array or not

// function is_array(data) {
//     return Array.isArray(data);
// }


// const is_array = (data) => Array.isArray(data);

// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));





// // 2) Write a JavaScript function to clone an array

// function array_Clone(data) {
//     return [...data];
// }


// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));





// // 3) Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.

// function first(data, n) {
//     if (n === undefined) {
//         return data[0];
//     } 
//     else {
//          return data.slice(0, n);
//     }
// }


// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));




// // 4 Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array

// function last(data, n) {
//     if (n === undefined) {
//         return data[data.length - 1];
//     } else {
//         return data.slice(-n);
//     }
// }

// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));




// // 5) Write a simple JavaScript program to join all elements of the following array into a string.


// function arrayToString(data) {
//     return data.join("+")
// }

// const myColor = ["Red", "Green", "White", "Black"];
// console.log(arrayToString(myColor));




// 6) Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8


// function changeEven(data) {
//  let arrayNum = Array.from(data);
// }

// changeEven()





// // 7) Write a JavaScript program to sort the items of an array.
//     function sortArray(data) {
//         return data.sort(compareFn);
//             function compareFn(a, b) {
//             return a - b;
//         }
//     }
  
//   // Example usage
//   var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
//   const sortedArray = sortArray(arr1);
//   console.log(sortedArray);







// // 8) Write a JavaScript program to find the most frequent item in an array.

// function findMostFrequentItem(arr) {
//     const frequencyMap = new Map();
  
//     // Count the frequency of each item
//     for (let item of arr) {
//       if (frequencyMap.has(item)) {
//         frequencyMap.set(item, frequencyMap.get(item) + 1);
//       } else {
//         frequencyMap.set(item, 1);
//       }
//     }
  
//     let mostFrequentItem;
//     let maxFrequency = 0;
  
//     // Find the item with the highest frequency
//     for (let [item, frequency] of frequencyMap) {
//       if (frequency > maxFrequency) {
//         mostFrequentItem = item;
//         maxFrequency = frequency;
//       }
//     }
  
//     return mostFrequentItem;
//   }
  
//   // Example usage
//   function findMostFrequentItem(arr) {
//     const frequencyMap = new Map();
  
//     // Count the frequency of each item
//     for (let item of arr) {
//       if (frequencyMap.has(item)) {
//         frequencyMap.set(item, frequencyMap.get(item) + 1);
//       } else {
//         frequencyMap.set(item, 1);
//       }
//     }
  
//     let mostFrequentItem;
//     let maxFrequency = 0;
  
//     // Find the item with the highest frequency
//     for (let [item, frequency] of frequencyMap) {
//       if (frequency > maxFrequency) {
//         mostFrequentItem = item;
//         maxFrequency = frequency;
//       }
//     }
  
//     return mostFrequentItem;
//   }
  
//   // Example usage
//   var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//   const mostFrequent = findMostFrequentItem(arr1);
//   console.log(mostFrequent); // Output: 2





// 9) Write a JavaScript program that accepts a string as input and swaps the case of each character

// function swapCase(str) {
//     let swappedString = '';
  
//     for (let i = 0; i < str.length; i++) {
//       const char = str.charAt(i);
  
//       if (char === char.toUpperCase()) {
//         swappedString += char.toLowerCase();
//       } else {
//         swappedString += char.toUpperCase();
//       }
//     }
  
//     return swappedString;
//   }
  
//   // Example usage
//   const inputString = 'The Quick Brown Fox';
//   const swapped = swapCase(inputString);
//   console.log(swapped); // Output: hELLO wORLD
  