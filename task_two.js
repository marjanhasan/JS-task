const userInput = [2, -5, 10, -3, 7];
const userOutput = 19;
const positive_sum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) sum += arr[i];
  }
  return sum;
};
console.log(positive_sum(userInput));
