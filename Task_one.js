const userInput = "hello world";
const userOutput = "dlrow olleh";
let res = "";
for (let i = userInput.length - 1; i >= 0; i--) {
  res += userInput[i];
}
console.log(res);
