const userInput = "hello world";
const userOutput = "dlrow olleh";
const custom_reverse = (str) => {
  let res = "";
  for (let i = userInput.length - 1; i >= 0; i--) {
    res += userInput[i];
  }
  return res;
};
console.log(custom_reverse(userInput));
