/*
 Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

Example Input: "hello world" Example Output: "dlrow olleh"
 */

const custom_reverse = (str) => {
  let res = "";
  for (let i = userInput.length - 1; i >= 0; i--) {
    res += userInput[i];
  }
  return res;
};
const userInput = "hello world";
const userOutput = "dlrow olleh";
console.log(custom_reverse(userInput));
