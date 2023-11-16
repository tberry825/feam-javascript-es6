//You are given an array of numbers. Your task is to write a JavaScript function that uses the .filter() method to create a new array containing only the odd numbers from the original array.

//Here's the array:

//Your function should filter out the even numbers, leaving only the odd ones in the new array. Finally, log the resulting array to the console.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterOddNumbers(arr) {
    return arr.filter(number => number % 2 !== 0);
}

console.log(filterOddNumbers(numbers));