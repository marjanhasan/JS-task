/*
Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

 */
const calculate = (num1, operator, num2) => {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        return "Cannot divide by zero.";
      }
    default:
      return "Invalid operator.";
  }
};
const num1 = 10;
const num2 = 5;
const operator = "+";
console.log(calculate(num1, operator, num2));
