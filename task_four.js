/*
Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

 Example Input: ([1, 3, 6, 8, 11, 15], 9) Example Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)

 */

const findSum = (arr, t) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + arr[i + 1] === t) return [i, i + 1];
  }
  return [];
};
const userArr = [1, 3, 6, 8, 11, 15];
const target = 14;
const answer = [1, 2];
console.log(findSum(userArr, target));
