//Create a new array where each number is increased by one using .map()
let arr = [1, 2, 3, 4, 5, 6, 7];

let newArr = arr.map(number => number + 1);

//Exercise 2

/*
Refactor this using map. log the new array to the console.*/

const numbers = [65, 44, 12, 4];

function myFunction(num) {
    return num * 10;
}

const newArray = numbers.map(myFunction);

console.log(newArray);