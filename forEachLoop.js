// Refactor the following forLoops to be forEach


//Exercise 1
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Answwer
const numbers2 = [1, 2, 3, 4, 5];
const allNumbers = numbers2.map((number) => console.log(number));


//Exercise 2
const scores = [65, 75, 80, 90, 85];

for (let i = 0; i < scores.length; i++) {
  scores[i] = scores[i] + 5;
}

console.log(scores);

// Answwer
const scores1 = [1, 2, 3, 4, 5];
const allScores = scores1.map((score) => score + 5);
console.log(allScores);


//Exercise 3
const words = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
const filteredWords = [];

for (let i = 0; i < words.length; i++) {
  if (words[i].length > 5) {
    filteredWords.push(words[i]);
  }
}

console.log(filteredWords);

// Answwer

const words1 = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
const filteredWords1 = words1.map((word) => word.length > 5);

console.log(filteredWords1);