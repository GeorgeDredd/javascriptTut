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
  
//     return [mostFrequentItem, maxFrequency];

//   }
  
//   // Example usage
//   var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//   const [mostFrequent, freq] = findMostFrequentItem(arr1);
//   console.log(`${mostFrequent} (${freq} times)`); 





// // 9) Write a JavaScript program that accepts a string as input and swaps the case of each character

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
  



// // 10) Write a JavaScript program that prints the elements of the following array. Note : Use nested for loops. 
// Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];


// function printArrayElements(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(`"row ${i}"`)
//       for (let j = 0; j < arr[i].length; j++) {
//         result = `"${arr[i][j]}"`
//         console.log(result);
//       }
//     }
// }
  
//   // Example usage
//   var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
//   printArrayElements(a);
  


// // 11) Write a JavaScript program to find the sum of squares of a numerical vector.

// function sumOfSquares(vector) {
//     let sum = 0;
    
//     for (let i = 0; i < vector.length; i++) {
//       sum += vector[i] * vector[i];
//     }
    
//     return sum;
//   }
  
//   // Example usage:
//   const vector = [2, 3, 4, 5];
//   const result = sumOfSquares(vector);
//   console.log(result); // Output: 54
  



// // 12) Write a JavaScript program to compute the sum and product of an array of integers.


// function calculateSumAndProduct(array) {
//     let sum = 0;
//     let product = 1;
    
//     for (let i = 0; i < array.length; i++) {
//       sum += array[i];
//       product *= array[i];
//     }
    
//     return { sum, product };
//   }
  
//   // Example usage:
//   const numbers = [2, 4, 6, 8];
//   const result = calculateSumAndProduct(numbers);
//   console.log(result.sum);     // Output: 20
//   console.log(result.product); // Output: 384
  

// // 13) Write a JavaScript program to add items to a blank array and display them. Sample Screen : add elements in an blank array


// const array = [];

// function addItemToArray(item) {
//   array.push(item);
//   console.log("Item added:", item);
// }

// function displayArray() {
//   console.log("Array:", array);
// }

// // Example usage:
// addItemToArray("Apple");
// addItemToArray("Banana");
// addItemToArray("Orange");

// displayArray();



// // 14) Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).

// function removeDuplicates(array) {
//     const uniqueArray = [];
    
//     for (let i = 0; i < array.length; i++) {
//       const currentItem = array[i].toLowerCase();
      
//       if (!uniqueArray.includes(currentItem)) {
//         uniqueArray.push(currentItem);
//       }
//     }
    
//     return uniqueArray;
//   }
  
//   // Example usage:
//   const array = ["Apple", "Banana", "apple", "orange", "Banana"];
//   const result = removeDuplicates(array);
//   console.log(result); // Output: ["apple", "banana", "orange"]
  




// // 15) We have the following arrays :
// // color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// // o = ["th","st","nd","rd"]

// // Write a JavaScript program to display the colors in the following way : "1st choice is Blue ." "2nd choice is Green." "3rd choice is Red."

// Note : Use ordinal numbers to tell their position.

// const color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const o = ["th", "st", "nd", "rd"];

// function displayColorChoices(colors) {
//   for (let i = 0; i < colors.length; i++) {
//     let position = i + 1;
//     let ordinal = getOrdinal(position);
//     let choice = `${position}${ordinal} choice is ${colors[i]}.`;
//     console.log(choice);
//   }
// }

// function getOrdinal(number) {
//   if (number >= 10 && number <= 20) {
//     return o[0];
//   } else {
//     let lastDigit = number % 10;
//     switch (lastDigit) {
//       case 1:
//         return o[1];
//       case 2:
//         return o[2];
//       case 3:
//         return o[3];
//       default:
//         return o[0];
//     }
//   }
// }

// // Example usage:
// displayColorChoices(color);



// // 16) Write a JavaScript program to find the leap years in a given range of years.


// function findLeapYears(startYear, endYear) {
//     const leapYears = [];
  
//     for (let year = startYear; year <= endYear; year++) {
//       if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//         leapYears.push(year);
//       }
//     }
  
//     return leapYears;
//   }
  
//   // Example usage:
//   const startYear = 2000;
//   const endYear = 2023;
//   const result = findLeapYears(startYear, endYear);
//   console.log("Leap years:", result);
  




// 17) Write a JavaScript program to shuffle an array.


// function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
//   }
  
//   // Example usage:
//   const array = [1, 2, 3, 4, 5];
//   const shuffledArray = shuffleArray(array);
//   console.log(shuffledArray);
  


// // 18) Write a JavaScript program to perform a binary search. Note : A binary search or half-interval search algorithm finds the position of a specified input value within an array sorted by key value


// function binarySearch(array, target) {
//     let left = 0;
//     let right = array.length - 1;
  
//     while (left <= right) {
//       let mid = Math.floor((left + right) / 2);
  
//       if (array[mid] === target) {
//         return mid; // Target found, return the index
//       } else if (array[mid] < target) {
//         left = mid + 1; // Target is in the right half
//       } else {
//         right = mid - 1; // Target is in the left half
//       }
//     }
  
//     return -1; // Target not found
//   }
  
//   // Example usage:
//   const sortedArray = [2, 4, 6, 8, 10, 12, 14, 16];
//   const target = 10;
//   const result = binarySearch(sortedArray, target);
//   console.log(result); // Output: 4
  


// // 19) There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.


// function computeSumOfIndexes(arr1, arr2) {
//     const result = [];
  
//     const maxLength = Math.max(arr1.length, arr2.length);
  
//     for (let i = 0; i < maxLength; i++) {
//       const value1 = arr1[i] || 0; // If value is undefined, consider it as 0
//       const value2 = arr2[i] || 0; // If value is undefined, consider it as 0
  
//       const sum = value1 + value2;
//       result.push(sum);
//     }
  
//     return result;
//   }
  
//   // Example usage:
//   const array1 = [1, 2, 3, 4, 5];
//   const array2 = [6, 7, 8, 9, 10];
//   const result = computeSumOfIndexes(array1, array2);
//   console.log(result); // Output: [7, 9, 11, 13, 15]
  


// // 20) Write a JavaScript program to find duplicate values in a JavaScript array.

// function findDuplicates(array) {
//     const duplicates = [];
//     const uniqueValues = new Set();
  
//     for (let i = 0; i < array.length; i++) {
//       const value = array[i];
  
//       if (uniqueValues.has(value)) {
//         duplicates.push(value);
//       } else {
//         uniqueValues.add(value);
//       }
//     }
  
//     return duplicates;
//   }
  
//   // Example usage:
//   const array = [1, 2, 3, 2, 4, 5, 3, 6, 6];
//   const result = findDuplicates(array);
//   console.log(result); // Output: [2, 3, 6]
  



// // 21) Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened to a single level.


// function flattenArray(array, shallow = false) {
//     if (shallow) {
//       return array.flat();
//     } else {
//       let flattened = [];
  
//       for (let i = 0; i < array.length; i++) {
//         if (Array.isArray(array[i])) {
//           flattened.push(...flattenArray(array[i]));
//         } else {
//           flattened.push(array[i]);
//         }
//       }
  
//       return flattened;
//     }
//   }
  
//   // Example usage:
// //   const nestedArray = [1, [2, [3, [4, 5]]]];
//   const nestedArray = [1, 2, 3, 4, 5];
//   const flattenedArray = flattenArray(nestedArray);
//   console.log(flattenedArray); // Output: [1, 2, 3, 4, 5]
  
//   const shallowFlattenedArray = flattenArray(nestedArray, true);
//   console.log(shallowFlattenedArray); // Output: [1, 2, [3, [4, 5]]]




// // 22) Write a JavaScript program to compute the union of two arrays

// function computeUnion(array1, array2) {
//     const set = new Set([...array1, ...array2]);
//     return Array.from(set);
//   }
  
//   // Example usage:
//   const array1 = [1, 2, 3, 4, 5];
//   const array2 = [4, 5, 6, 7, 8];
//   const union = computeUnion(array1, array2);
//   console.log(union); // Output: [1, 2, 3, 4, 5, 6, 7, 8]



// // 23) Write a JavaScript function to find the difference between two arrays

  
// function computeDifference(array1, array2) {
//     const set1 = new Set(array1);
//     const set2 = new Set(array2);
//     const difference = [];
  
//     for (let item of set1) {
//       if (!set2.has(item)) {
//         difference.push(item);
//       }
//     }
  
//     return difference;
//   }
  
//   // Example usage:
//   const array1 = [1, 2, 3, 4, 5];
//   const array2 = [4, 5, 6, 7, 8];
//   const difference = computeDifference(array1, array2);
//   console.log(difference); // Output: [1, 2, 3]
  



// /// 24) Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array

// function removeFalsyValues(array) {
//     const truthyValues = array.filter((value) => {
//       return value !== null && value !== 0 && value !== "" && value !== false && value !== undefined && !Number.isNaN(value);
//     });
  
//     return truthyValues;
//   }
  
//   // Example usage:
//   const array = [1, null, 2, 0, 3, "", 4, false, 5, undefined, 6, NaN];
//   const filteredArray = removeFalsyValues(array);
//   console.log(filteredArray); // Output: [1, 2, 3, 4, 5, 6]




// // 25) Write a JavaScript function to sort the following array of objects by title value

// function sortByTitle(array) {
//     array.sort((a, b) => {
//       const titleA = a.title.toLowerCase();
//       const titleB = b.title.toLowerCase();
  
//       if (titleA < titleB) {
//         return -1;
//       }
//       if (titleA > titleB) {
//         return 1;
//       }
//       return 0;
//     });
  
//     return array;
//   }
  
//   // Example usage:
//   const library = [
//     { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
//     { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
//     { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
//   ];
  
//   const sortedLibrary = sortByTitle(library);
//   console.log(sortedLibrary);
  


// // 27) Write a JavaScript function to retrieve the value of a given property from all elements in an array.



// function getNumericValues(array) {
//     return array.filter(value => {
//       return typeof value === 'number' && !isNaN(value);
//     });
//   }
  
//   // Example usage:
//   const array = [NaN, 0, 15, false, -22, '', undefined, 47, null];
//   const numericValues = getNumericValues(array);
//   console.log(numericValues); // Output: [0, 15, -22, 47]
  



// // 28) Write a JavaScript function to find the longest common starting substring in a set of strings.

// function longestCommonStartingSubstring(strings) {
//     if (strings.length === 0) {
//       return '';
//     }
  
//     const firstString = strings[0];
//     let longestSubstring = '';
  
//     for (let i = 0; i < firstString.length; i++) {
//       const currentChar = firstString[i];
  
//       for (let j = 1; j < strings.length; j++) {
//         if (strings[j][i] !== currentChar) {
//           return longestSubstring;
//         }
//       }
  
//       longestSubstring += currentChar;
//     }
  
//     return longestSubstring;
//   }
  
//   // Example usage:
//   const strings = ['apple', 'app', 'application', 'aptitude'];
//   const longestSubstring = longestCommonStartingSubstring(strings);
//   console.log(longestSubstring); // Output: "app"
  


