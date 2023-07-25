const userInput = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const userOutput = 3;
const frequentNumber = (arr) => {
  let frequency = {};
  for (let i = 0; i < arr.length; i++) {
    if (frequency[arr[i]]) {
      frequency[arr[i]]++;
    } else {
      frequency[arr[i]] = 1;
    }
  }
  let frequentElement;
  let max = 0;
  for (const e in frequency) {
    if (frequency[e] > max) {
      frequentElement = e;
      max = frequency[e];
    }
  }
  return frequentElement;
};

console.log(frequentNumber(userInput));
