const num1 = 10;
const num2 = 5;
const operator = "+";
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

console.log(calculate(num1, operator, num2));
