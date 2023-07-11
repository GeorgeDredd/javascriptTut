// // ASSIGNMENT 1
// // 1) Write a JavaScript function to check whether an input is an array or not

// function is_array(data) {
//     return Array.isArray(data);
// }



// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));



// // 2) Write a JavaScript function to clone an array

// function array_Clone(data) {
//     return [...data];
// }


// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));





// 3) Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.

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
// console.log(first([7, 9, 0, -2], 6));
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




// // 6) Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8

// function insertDashes(number) {
//     var numberString = number.toString();
//     var result = numberString[0];
  
//     for (var i = 1; i < numberString.length; i++) {
//       if (parseInt(numberString[i]) % 2 === 0 && parseInt(numberString[i - 1]) % 2 === 0) {
//         result += "-" + numberString[i];
//       } else {
//         result += numberString[i];
//       }
//     }
  
//     return result;
//   }
  
//   // Example usage:
//   var inputNumber = 253468;
//   var output = insertDashes(inputNumber);
//   console.log(output); // Output: 2534-6-8
  


// // 7) Write a JavaScript program to sort the items of an array.
// function sortArray(data) {
//     return data.sort(compareFn);
//     function compareFn(a, b) {
//     return a - b;
//     }
// }
  
//   // Example usage
//   var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
//   const sortedArray = sortArray(arr1);
//   console.log(sortedArray);






// 8) Write a JavaScript program to find the most frequent item in an array.

  
  // // Example usage
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

// function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;
  
//     while (left <= right) {
//       const mid = Math.floor((left + right) / 2);
  
//       if (arr[mid] === target) {
//         return mid;
//       } else if (arr[mid] < target) {
//         left = mid + 1;
//       } else {
//         right = mid - 1;
//       }
//     }
  
//     return -1; // Target value not found
//   }
  
//   var items = [1, 2, 3, 4, 5, 7, 8, 9];
  
//   console.log(binarySearch(items, 1)); // 0
//   console.log(binarySearch(items, 5)); // 4
  
  


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
//   const array1 = [1,0,2,3,4];
//   const array2 = [3,5,6,7,8,13];
//   const result = computeSumOfIndexes(array1, array2);
//   console.log(result); // Output: [ 4, 5, 8, 10, 12, 13 ]
  


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


// function flatten(arr, shallow = false) {
//     if (shallow) {
//       return arr.reduce((result, item) => {
//         return result.concat(Array.isArray(item) ? item : [item]);
//       }, []);
//     }
  
//     return arr.reduce((result, item) => {
//       return result.concat(Array.isArray(item) ? flatten(item) : item);
//     }, []);
//   }
  
//   console.log(flatten([1, [2], [3, [[4]]], [5, 6]]));
//   console.log(flatten([1, [2], [3, [[4]]], [5, 6]], true));
  


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






// // 26) Write a JavaScript program to find a pair of elements (indices of the two numbers) in a given array whose sum equals a specific target number

// function findSumPair(numbers, target) {
//     const map = {};
  
//     for (let i = 0; i < numbers.length; i++) {
//       const complement = target - numbers[i];
  
//       if (complement in map) {
//         return [map[complement], i];
//       }
  
//       map[numbers[i]] = i;
//     }
  
//     return [];
//   }
  
//   // Example usage:
//   const numbers = [10, 20, 10, 40, 50, 60, 70];
//   const target = 50;
//   const indices = findSumPair(numbers, target);
//   console.log(indices.join(', '));
//   // Output: 2, 3
  




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
  



// // 29) Write a JavaScript function to fill an array with values (numeric, string with one character) within supplied bounds.

// function num_string_range(start, end, step) {
//     const result = [];
  
//     for (let i = start.charCodeAt(0); i <= end.charCodeAt(0); i += step) {
//       const value = String.fromCharCode(i);
//       result.push(value);
//     }
  
//     return result;
//   }
  
//   // Example usage:
//   console.log(num_string_range('a', 'z', 2));
//   // Output: ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]



// // 30) Write a JavaScript function that merges two arrays and removes all duplicate elements

// function mergeArray(array1, array2) {
//     const mergedArray = array1.concat(array2);
//     const uniqueArray = [...new Set(mergedArray)];
//     return uniqueArray;
//   }
  
//   // Example usage:
//   const array1 = [1, 2, 3];
//   const array2 = [2, 30, 1];
//   console.log(mergeArray(array1, array2));
//   // Output: [3, 2, 30, 1]



// // 31) Write a JavaScript function to remove a specific element from an array.

// function removeArrayElement(array, element) {
//     const index = array.indexOf(element);
  
//     if (index !== -1) {
//       array.splice(index, 1);
//     }
  
//     return array;
//   }
  
//   // Example usage:
//   console.log(removeArrayElement([2, 5, 9, 6], 5));
//   // Output: [2, 9, 6]



// // 32) Write a JavaScript function to find an array containing a specific element

// function contains(array, element) {
//     return array.includes(element);
//   }
  
//   // Example usage:
//   const arr = [2, 5, 9, 6];
//   console.log(contains(arr, 5));
//   // Output: true



// // 33) Write a JavaScript script to empty an array while keeping the original

// // Original array
// const originalArray = [1, 2, 3, 4, 5];

// // Create a copy of the original array
// const newArray = [...originalArray];

// // Empty the original array
// originalArray.length = 0;

// // Output
// console.log(originalArray); // Output: []
// console.log(newArray);      // Output: [1, 2, 3, 4, 5]





// // 34) Write a JavaScript function to get the nth largest element from an unsorted array.


// function nthLargest(arr, n) {
//     if (n > arr.length || n <= 0) {
//       return null;
//     }
    
//     const sortedArr = arr.sort((a, b) => b - a);
//     return sortedArr[n - 1];
//   }
  
//   // Example usage:
//   const array = [43, 56, 23, 89, 88, 90, 99, 652];
//   console.log(nthLargest(array, 4));
//   // Output: 89




// // 35) Write a JavaScript function to get random items from an array.


// function getRandomItems(arr, numItems) {
//     if (numItems <= 0 || numItems > arr.length) {
//       return null;
//     }
  
//     const randomItems = [];
//     const shuffledArray = arr.slice(); // Create a copy of the original array
  
//     for (let i = 0; i < numItems; i++) {
//       const randomIndex = Math.floor(Math.random() * shuffledArray.length);
//       const item = shuffledArray.splice(randomIndex, 1)[0];
//       randomItems.push(item);
//     }
  
//     return randomItems;
//   }
  
//   // Example usage:
//   const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   const randomItems = getRandomItems(array, 4);
//   console.log(randomItems);
//   // Output: [6, 2, 9]



// // 36) Write a JavaScript function to create a specified number of elements with a pre-filled numeric value array


// function arrayFilled(length, value) {
//     const newArray = [];
  
//     for (let i = 0; i < length; i++) {
//       newArray.push(value);
//     }
  
//     return newArray;
//   }
  
//   // Example usage:
//   console.log(arrayFilled(6, 0));
//   // Output: [0, 0, 0, 0, 0, 0]
  
//   console.log(arrayFilled(4, 11));
//   // Output: [11, 11, 11, 11]
  

//   // 37) Write a JavaScript function to create a specified number of elements with a pre-filled string value array.


// function arrayFilled(length, value) {
//     const newArray = new Array(length).fill(value);
//     return newArray;
//   }
  
//   // Example usage:
//   console.log(arrayFilled(6, "hello"));
//   // Output: ["hello", "hello", "hello", "hello", "hello", "hello"]
  
//   console.log(arrayFilled(4, "world"));
//   // Output: ["world", "world", "world", "world"]
  



// // 38) Write a JavaScript function to move an array element from one position to another.


// function move(array, fromIndex, toIndex) {
//     const newArray = [...array];
    
//     if (fromIndex < 0) {
//       fromIndex = newArray.length + fromIndex;
//     }
    
//     if (toIndex < 0) {
//       toIndex = newArray.length + toIndex;
//     }
    
//     if (fromIndex >= newArray.length || toIndex >= newArray.length || fromIndex < 0 || toIndex < 0) {
//       return array;
//     }
    
//     const element = newArray.splice(fromIndex, 1)[0];
//     newArray.splice(toIndex, 0, element);
    
//     return newArray;
//   }
  
//   // Example usage:
//   console.log(move([10, 20, 30, 40, 50], 0, 2));
//   // Output: [20, 30, 10, 40, 50]
  
//   console.log(move([10, 20, 30, 40, 50], -1, -2));
//   // Output: [10, 20, 30, 50, 40]



// // 39) Write a JavaScript function to filter false, null, 0 and blank values from an array.

// function filterFalsyValues(array) {
//     const filteredArray = array.filter((value) => {
//       return Boolean(value);
//     });
  
//     return filteredArray;
//   }
  
//   // Example usage:
//   console.log(filterFalsyValues([1, 0, null, 'hello', '', false, 42]));
//   // Output: [1, 'hello', 42]
//   console.log(filterFalsyValues([58, '', 'abcd', true, null, false, 0])); // [58, "abcd", true]

  

// // 40) Write a JavaScript function to generate an array of integer numbers, increasing one from the starting position, of a specified length



// function arrayRange(start, length) {
//     const result = [];
  
//     for (let i = 0; i < length; i++) {
//       result.push(start + i);
//     }
  
//     return result;
//   }
  
//   // Example usage:
//   console.log(arrayRange(1, 4));
//   // Output: [1, 2, 3, 4]
  
//   console.log(arrayRange(-6, 4));
//   // Output: [-6, -5, -4, -3]


// Example2
// function arrayRange(start, length) {
//     return Array.from({ length }, (_, index) => start + index);
//   }
  
//   // Example usage:
//   console.log(arrayRange(1, 4));
//   // Output: [1, 2, 3, 4]
  
//   console.log(arrayRange(-6, 4));
//   // Output: [-6, -5, -4, -3]

  



// // 41) Write a JavaScript function to generate an array between two integers of 1 step length

// function rangeBetween(start, end) {
//     const length = Math.abs(end - start) + 1;
//     const step = start <= end ? 1 : -1;
  
//     return Array.from({ length }, (_, index) => start + index * step);
//   }
  
//   // Example usage:
//   console.log(rangeBetween(4, 7));
//   // Output: [4, 5, 6, 7]
  
//   console.log(rangeBetween(-4, 7));
//   // Output: [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]
  



// //  42) Write a JavaScript function to find unique elements in two arrays.


// function difference(array1, array2) {
//     const mergedArray = [...array1, ...array2];
//     const uniqueArray = Array.from(new Set(mergedArray));

//     uniqueArray.sort((a, b) => a - b);
  
//     return uniqueArray.map(String);
//   }
  
//   // Example usage:
//   console.log(difference([1, 2, 3], [100, 2, 1, 10]));
//   // Output: ["1", "2", "3", "10", "100"]
  
//   console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]));
//   // Output: ["1", "2", "3", "4", "5", "6"]
  
//   console.log(difference([1, 2, 3], [100, 2, 1, 10]));
//   // Output: ["1", "2", "3", "10", "100"]
  



// //  43) Write a JavaScript function to create an array of arrays, ungrouping the elements in an array produced by zip.

// function unzip(arr) {
//     const maxLength = Math.max(...arr.map(subArr => subArr.length));
//     const result = [];
  
//     for (let i = 0; i < maxLength; i++) {
//       result.push(arr.map(subArr => subArr[i]));
//     }
  
//     return result;
//   }
  
//   // Example usage:
//   console.log(unzip([['a', 1, true], ['b', 2, false]]));
//   // Output: [["a","b"],[1,2],[true,false]]
  
//   console.log(unzip([['a', 1, true], ['b', 2]]));
//   // Output: [["a","b"],[1,2],[true]]



// // 44) Write a JavaScript function to create an object from an array, using the specified key and excluding it from each value.

// function indexOn(arr, keyExtractor) {
//     return arr.reduce((obj, item) => {
//       const key = keyExtractor(item);
//       const { [keyExtractor.name]: _, ...rest } = item;
//       obj[key] = rest;
//       return obj;
//     }, {});
//   }
  
//   // Example usage:
//   console.log(indexOn([{ id: 10, name: 'apple' }, { id: 20, name: 'orange' }], x => x.id));
//   // Output: {"10":{"name":"apple"},"20":{"name":"orange"}}
  



// // 45) Write a JavaScript program to find all the unique values in a set of numbers.

// function findUniqueValues(numbers) {
//     const uniqueValues = [...new Set(numbers)];
//     return uniqueValues;
//   }
  
//   // Test Data
//   const testData1 = [1, 2, 2, 3, 4, 4, 5];
//   const testData2 = [1, 2, 3, 4, 5];
//   const testData3 = [1, -2, -2, 3, 4, -5, -6, -5];
  
//   // Find unique values
//   console.log(findUniqueValues(testData1)); // Output: [1, 2, 3, 4, 5]
//   console.log(findUniqueValues(testData2)); // Output: [1, 2, 3, 4, 5]
//   console.log(findUniqueValues(testData3)); // Output: [1, -2, 3, 4, -5, -6]
  


// // 47) Write a JavaScript program to remove all false values from an object or array.

// function filterTrueValues(data) {
//     if (Array.isArray(data)) {
//       return data
//         .filter((value) => value)
//         .map((value) => filterTrueValues(value));
//     }
  
//     if (typeof data === 'object' && data !== null) {
//       const result = {};
  
//       for (const key in data) {
//         if (data.hasOwnProperty(key) && data[key]) {
//           result[key] = filterTrueValues(data[key]);
//         }
//       }
  
//       return result;
//     }
  
//     return data;
//   }
  
//   // Test Data
//   const obj = {
//     a: null,
//     b: false,
//     c: true,
//     d: 0,
//     e: 1,
//     f: '',
//     g: 'a',
//     h: [null, false, '', true, 1, 'a'],
//     i: { j: 0, k: false, l: 'a' },
//   };
  
//   // Filter true values
//   const result = filterTrueValues(obj);
  
//   // Display the result
//   console.log(JSON.stringify(result));




// // 48) Write a JavaScript program that takes an array of integers and returns false if every number is not prime. Otherwise, return true.


// function isPrime(number) {
//     if (number < 2) {
//       return false;
//     }
  
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//       if (number % i === 0) {
//         return false;
//       }
//     }
  
//     return true;
//   }
  
//   function checkPrimeArray(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       if (!isPrime(arr[i])) {
//         return false;
//       }
//     }
  
//     return true;
//   }
  
//   // Test Data
//   const array1 = [2, 3, 5, 7, 11];        // All prime numbers
//   const array2 = [2, 3, 4, 5, 6, 7, 8];   // 4, 6, and 8 are not prime
  
//   // Check if every number in the array is prime
//   console.log(checkPrimeArray(array1));  // Output: true
//   console.log(checkPrimeArray(array2));  // Output: false




// // 49) Write a JavaScript program that takes an array of numbers and returns the third smallest number.


// function findThirdSmallestNumber(arr) {
//     if (arr.length < 3) {
//       return "Array should have at least 3 numbers.";
//     }
  
//     // Sort the array in ascending order
//     arr.sort((a, b) => a - b);
  
//     // Return the number at index 2
//     return arr[2];
//   }
  
//   // Test Data
//   const numbers1 = [4, 2, 9, 1, 5, 7, 3];   // Third smallest: 3
//   const numbers2 = [4, 2];        // Array has less than 3 numbers
  
//   // Find the third smallest number in the array
//   console.log(findThirdSmallestNumber(numbers1));  // Output: 3
//   console.log(findThirdSmallestNumber(numbers2));  // Output: "Array should have at least 3 numbers."




// // 50) Write a JavaScript program that takes an array with mixed data type and calculates the sum of all numbers.


// function calculateSumOfNumbers(arr) {
//     let sum = 0;
  
//     for (let i = 0; i < arr.length; i++) {
//       if (typeof arr[i] === 'number') {
//         sum += arr[i];
//       }
//     }
  
//     return sum;
//   }
  
//   // Test Data
//   const mixedArray = [1, '2', 3, '4', 5, true, false, 'hello'];
  
//   // Calculate the sum of all numbers in the array
//   console.log(calculateSumOfNumbers(mixedArray));  // Output: 9





// // 51) Write a JavaScript program to check if an array is a factor chain or not.

// A factor chain is an array in which the previous element is a factor of the next consecutive element. The following is a factor chain: [2, 4, 8, 16, 32] // 2 is a factor of 4 // 4 is a factor of 8 // 8 is a factor of 16 // 16 is a factor of 32



// function isFactorChain(arr) {
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] % arr[i - 1] !== 0) {
//         return false;
//       }
//     }
//     return true;
//   }
  
//   // Test Data
//   const factorChain1 = [2, 4, 8, 16, 32];
//   const factorChain2 = [3, 6, 12, 24, 48];
//   const nonFactorChain = [2, 3, 5, 7, 11];
  
//   // Check if the arrays are factor chains
//   console.log(isFactorChain(factorChain1));  // Output: true
//   console.log(isFactorChain(factorChain2));  // Output: true
//   console.log(isFactorChain(nonFactorChain));  // Output: false





// // 52) Write a JavaScript program to get all the indexes where NaN is found in a given array of numbers and NaN


// function getNaNIndexes(arr) {
//     const nanIndexes = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (isNaN(arr[i])) {
//         nanIndexes.push(i);
//       }
//     }
//     return nanIndexes;
//   }
  
//   // Test Data
//   const numbers = [1, NaN, 3, NaN, 5, NaN];
  
//   // Get the indexes where NaN is found
//   const nanIndexes = getNaNIndexes(numbers);
  
//   // Output the indexes
//   console.log(nanIndexes);  // Output: [1, 3, 5]
  



// // 53) Write a JavaScript program to count the number of arrays inside a given array

// function countArrays(arr) {
//     let arrayCount = 0;
//     for (let i = 0; i < arr.length; i++) {
//       if (Array.isArray(arr[i])) {
//         arrayCount++;
//       }
//     }
//     return arrayCount;
//   }
  
//   // Test Data
//   const data = [1, [2, 3], 'Hello', [4, 5, 6], ['a', 'b', 'c'], 7];
  
//   // Count the number of arrays
//   const numberOfArrays = countArrays(data);
  
//   // Output the result
//   console.log(numberOfArrays);  // Output: 3



// // ASSIGNMENT 2
// // JS EXERCISES ON OBJECTS

// // 1. Write a JavaScript program to list the properties of a JavaScript object. Sample object:
// var student = {
//     name: "David Rayy",
//     sclass: "VI",
//     rollno: 12
// };

// // Get the object's properties
// var properties = Object.keys(student);

// // Display the properties
// for (var i = 0; i < properties.length; i++) {
//     console.log(properties[i]);
// }



// // 2. Write a JavaScript program to get the length of a JavaScript object. Sample object :
// var student = {
//     name: "David Rayy",
//     sclass: "VI",
//     rollno: 12
// };

// // Get the object's properties
// var properties = Object.keys(student);

// // Get the length of the properties array
// var length = properties.length;

// console.log("Length of the object:", length);




// // 3. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
// var library = [
//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         author: 'Suzanne Collins',
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         readingStatus: false
//     }
// ];

// // Display the reading status, book name, and author name
// for (var i = 0; i < library.length; i++) {
//     var book = library[i];
//     var status = book.readingStatus ? 'Read' : 'Not Read';
//     console.log("Book:", book.title);
//     console.log("Author:", book.author);
//     console.log("Reading Status:", status);
//     console.log("-----");
// }



// // 4. Write a JavaScript program to get the volume of a cylindrical with four decimal places using object classes. Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder.

// class Cylinder {
//     constructor(radius, height) {
//         this.radius = radius;
//         this.height = height;
//     }

//     getVolume() {
//         // Calculate the volume using the formula V = πr^2h
//         const volume = Math.PI * Math.pow(this.radius, 2) * this.height;

//         // Round the volume to four decimal places
//         const roundedVolume = volume.toFixed(4);

//         return roundedVolume;
//     }
// }

// // Create a new Cylinder object
// const cylinder = new Cylinder(3, 5); // Example: radius = 3, height = 5

// // Calculate and display the volume
// const volume = cylinder.getVolume();
// console.log("Volume of the cylinder:", volume);


// // 5. Write a bubble sort algorithm in JavaScript. Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, Sample Data: [6,4,0, 3,-2,1] Expected Output : [-2, 0, 1, 3, 4, 6]
// function bubbleSort(arr) {
//     var len = arr.length;
    
//     // Iterate through the array
//     for (var i = 0; i < len - 1; i++) {
//       // Inner loop to compare adjacent elements and swap if necessary
//       for (var j = 0; j < len - i - 1; j++) {
//         if (arr[j] > arr[j + 1]) {
//           // Swap elements
//           var temp = arr[j];
//           arr[j] = arr[j + 1];
//           arr[j + 1] = temp;
//         }
//       }
//     }
    
//     return arr;
//   }
  
//   // Example usage:
//   var data = [6, 4, 0, 3, -2, 1];
//   var sortedData = bubbleSort(data);
//   console.log(sortedData);
  



// // 6. Write a JavaScript program that returns a subset of a string. Sample Data: dog Expected Output: ["d", "do", "dog", "o", "og", "g"]
// function getSubsets(str) {
//     var subsets = [];
//     var len = str.length;
  
//     // Generate all possible subsets
//     for (var i = 0; i < len; i++) {
//       for (var j = i + 1; j <= len; j++) {
//         var subset = str.substring(i, j);
//         subsets.push(subset);
//       }
//     }
  
//     return subsets;
//   }
  
//   // Example usage:
//   var sampleData = "dog";
//   var subsets = getSubsets(sampleData);
//   console.log(subsets);
  

// // 7. Write a JavaScript program to create a clock. Note: The output will come every second. Expected Console Output : "14:37:42" "14:37:43" "14:37:44" "14:37:45" "14:37:46" "14:37:47"
// function displayTime() {
//     var currentDate = new Date();
//     var hours = currentDate.getHours();
//     var minutes = currentDate.getMinutes();
//     var seconds = currentDate.getSeconds();
  
//     var formattedTime = `${hours}:${minutes}:${seconds}`;
//     console.log(formattedTime);
//   }
  
//   // Update the time every second
//   setInterval(displayTime, 1000);
  

// // 8. Write a JavaScript program to calculate circle area and perimeter. Note : Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user.
// class Circle {
//     constructor(radius) {
//       this.radius = radius;
//     }
  
//     calculateArea() {
//       // Calculate the area of the circle using the formula A = πr^2
//       return Math.PI * Math.pow(this.radius, 2);
//     }
  
//     calculatePerimeter() {
//       // Calculate the perimeter of the circle using the formula P = 2πr
//       return 2 * Math.PI * this.radius;
//     }
//   }
  
//   // Get user input for the radius
//   var radius = parseFloat(prompt("Enter the radius of the circle:"));
  
//   // Create a Circle object with the user-provided radius
//   var circle = new Circle(radius);
  
//   // Calculate and display the area and perimeter
//   var area = circle.calculateArea().toFixed(2);
//   var perimeter = circle.calculatePerimeter().toFixed(2);
  
//   console.log("Area of the circle:", area);
//   console.log("Perimeter of the circle:", perimeter);
  

// // 9. Write a JavaScript program to sort an array of JavaScript objects. Sample Object :
// var library = [
//     {
//         title: 'The Road Ahead',
//         author: 'Bill Gates',
//         libraryID: 1254
//     },
//     {
//         title: 'Walter Isaacson',
//         author: 'Steve Jobs',
//         libraryID: 4264
//     },
//     {
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         author: 'Suzanne Collins',
//         libraryID: 3245
//     }
// ];

// // Sort the library array based on libraryID in ascending order
// library.sort(function(a, b) {
//     return a.libraryID - b.libraryID;
// });

// // Display the sorted library array
// console.log(library);   


// // 10. Write a JavaScript function to print all the methods in a JavaScript object. Test Data :
// // console.log(all_properties(Array));
// // ["length", "name", "arguments", "caller", "prototype", "isArray", "observe", "unobserve"]

// function printMethods(obj) {
//     var methods = [];
  
//     // Get all property names of the object
//     var properties = Object.getOwnPropertyNames(obj);
  
//     // Iterate through the properties and filter out the methods
//     properties.forEach(function(property) {
//       if (typeof obj[property] === 'function') {
//         methods.push(property);
//       }
//     });
  
//     console.log(methods);
//   }
  
//   // Test data
//   var ArrayMethods = Array;
  
//   // Print the methods of the Array object
//   printMethods(ArrayMethods);
  


// // 11. Write a JavaScript function to parse an URL.
// function parseURL(url) {
//     var urlObject = new URL(url);
  
//     var parsedURL = {
//       protocol: urlObject.protocol,
//       hostname: urlObject.hostname,
//       port: urlObject.port,
//       pathname: urlObject.pathname,
//       search: urlObject.search,
//       hash: urlObject.hash
//     };
  
//     return parsedURL;
//   }
  
//   // Example usage:
//   var url = "https://www.example.com:8080/path/to/page?param1=value1&param2=value2#section1";
//   var parsedURL = parseURL(url);
//   console.log(parsedURL);
  

// // 12. Write a JavaScript function to retrieve all the names of an object's own and inherited properties.function getAllProperties(obj) {
  //   var properties = [];
  
  //   // Get own properties
  //   properties = properties.concat(Object.getOwnPropertyNames(obj));
  
  //   // Get inherited properties
  //   var prototype = Object.getPrototypeOf(obj);
  //   while (prototype !== null) {
  //     properties = properties.concat(Object.getOwnPropertyNames(prototype));
  //     prototype = Object.getPrototypeOf(prototype);
  //   }
  
  //   return properties;
  // }
  
  // // Example usage:
  // var myObject = {
  //   a: 1,
  //   b: 2
  // };
  
  // // Add a property to the object's prototype
  // Object.prototype.c = 3;
  
  // // Retrieve all properties of the object
  // var allProperties = getAllProperties(myObject);
  // console.log(allProperties);
  

// // 13. Write a JavaScript function to retrieve all the values of an object's properties.
// function getAllPropertyValues(obj) {
//     var propertyValues = [];
  
//     // Get own property values
//     propertyValues = propertyValues.concat(Object.values(obj));
  
//     // Get inherited property values
//     var prototype = Object.getPrototypeOf(obj);
//     while (prototype !== null) {
//       propertyValues = propertyValues.concat(Object.values(prototype));
//       prototype = Object.getPrototypeOf(prototype);
//     }
  
//     return propertyValues;
//   }
  
//   // Example usage:
//   var myObject = {
//     a: 1,
//     b: 2
//   };
  
//   // Add a property to the object's prototype
//   Object.prototype.c = 3;
  
//   // Retrieve all property values of the object
//   var allPropertyValues = getAllPropertyValues(myObject);
//   console.log(allPropertyValues);
  

// // 14. Write a JavaScript function to convert an object into a list of [key, value] pairs.

// function convertObjectToList(obj) {
//     return Object.entries(obj);
//   }
  
//   // Example usage:
//   var myObject = {
//     name: 'John',
//     age: 25,
//     city: 'New York'
//   };
  
//   // Convert the object to a list of [key, value] pairs
//   var list = convertObjectToList(myObject);
//   console.log(list);
  

// // 15. Write a JavaScript function to get a copy of the object where the keys become the values and the values are the keys.
// function swapKeysAndValues(obj) {
//     var swappedObj = {};
  
//     for (var key in obj) {
//       if (obj.hasOwnProperty(key)) {
//         swappedObj[obj[key]] = key;
//       }
//     }
  
//     return swappedObj;
//   }
  
//   // Example usage:
//   var myObject = {
//     name: 'John',
//     age: 25,
//     city: 'New York'
//   };
  
//   // Get a copy of the object with swapped keys and values
//   var swappedObject = swapKeysAndValues(myObject);
//   console.log(swappedObject);
  

// // 16. Write a JavaScript function to check whether an object contains a given property.
// function hasProperty(obj, property) {
//     return obj.hasOwnProperty(property);
//   }
  
//   // Example usage:
//   var myObject = {
//     name: 'John',
//     age: 25,
//     city: 'New York'
//   };
  
//   // Check if the object has the 'age' property
//   var hasAgeProperty = hasProperty(myObject, 'age');
//   console.log(hasAgeProperty); // Output: true
  
//   // Check if the object has the 'gender' property
//   var hasGenderProperty = hasProperty(myObject, 'gender');
//   console.log(hasGenderProperty); // Output: false
  

// // 17. Write a JavaScript function to check whether a given value is a DOM element.
// function isDOMElement(value) {
//     return value instanceof HTMLElement;
//   }
  
//   // Example usage:
//   var element = document.getElementById('myElement');
//   var isElement = isDOMElement(element);
//   console.log(isElement); // Output: true
  
//   var notElement = 'Not a DOM element';
//   var isNotElement = isDOMElement(notElement);
//   console.log(isNotElement); // Output: false
  


// // ASSIGNMENT 3
// // 18 JavaScript Snippets for Common Tasks
// // JavaScript is a powerful language that allows you to accomplish a wide range of tasks. In this article, we'll explore 18 JavaScript code snippets for common tasks, from copying to clipboard and checking for dark mode to generating random integers and rounding numbers to a specific number of decimals. Let's dive in!

// // 1. Copy to Clipboard
// function copyToClipboard(text) {
//   navigator.clipboard.writeText(text)
//     .then(() => {
//       console.log('Text copied to clipboard');
//     })
//     .catch((error) => {
//       console.error('Unable to copy text: ', error);
//     });
// }

// // 2. Scroll to Top
// function scrollToTop() {
//   window.scrollTo({ top: 0, behavior: 'smooth' });
// }

// // 3. Check for Dark Mode
// function isDarkModeEnabled() {
//   return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
// }

// // 4. Swap Between Two Elements
// function swapElements(element1, element2) {
//   const sibling = element1.nextSibling;
//   element2.parentNode.insertBefore(element1, element2);
//   sibling ? element2.parentNode.insertBefore(element2, sibling) : element2.parentNode.appendChild(element2);
// }

// // 5. Capitalize a String
// function capitalizeString(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }

// // 6. Reverse a String
// function reverseString(string) {
//   return string.split('').reverse().join('');
// }

// // 7. Remove Duplicates from an Array
// function removeDuplicates(array) {
//   return [...new Set(array)];
// }

// // 8. Remove Falsy Values from an Array
// function removeFalsyValues(array) {
//   return array.filter(Boolean);
// }

// // 9. Merge Multiple Arrays
// function mergeArrays(...arrays) {
//   return [].concat(...arrays);
// }

// // 10. Check if a Variable is an Array
// function isArray(variable) {
//   return Array.isArray(variable);
// }

// // 11. Clone an Array
// function cloneArray(array) {
//   return [...array];
// }

// // 12. Shuffle an Array
// function shuffleArray(array) {
//   const shuffledArray = [...array];
//   for (let i = shuffledArray.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
//   }
//   return shuffledArray;
// }

// // 13. Convert RGB to Hex
// function rgbToHex(red, green, blue) {
//   const componentToHex = (component) => {
//     const hex = component.toString(16);
//     return hex.length === 1 ? '0' + hex : hex;
//   };
//   return `#${componentToHex(red)}${componentToHex(green)}${componentToHex(blue)}`;
// }

// // 14. Generate Random Hex Color
// function generateRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// // 15. Generate Random Integer within a Range
// function generateRandomInteger(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// // 16. Find the Average of Numbers
// function findAverage(numbers) {
//   const sum = numbers.reduce((acc, num) => acc + num, 0);
//   return sum / numbers.length;
// }

// // 17. Convert a Number to Another Base
// function convertToBase(number, base) {
//   return number.toString(base);
// }

// // 18. Round a Number to a Specific Number of Decimals
// function roundNumber(number, decimals) {
//   return Number(number.toFixed(decimals));
// }

// // These JavaScript snippets provide simple solutions to common tasks. You can use them to enhance your web applications and make your development process more efficient. Feel free to experiment and adapt these snippets to suit your specific needs.

// // Happy coding! 