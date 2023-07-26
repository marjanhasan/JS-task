/*
Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.
 */
const romanToInt = (romanNumeral) => {
  const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;
  for (let i = 0; i < romanNumeral.length; i++) {
    const currentChar = romanNumeral[i];
    const currentValue = romanValues[currentChar];
    const nextChar = romanNumeral[i + 1];
    const nextValue = romanValues[nextChar];

    nextValue > currentValue
      ? (total -= currentValue)
      : (total += currentValue);
  }
  return total;
};

console.log(romanToInt("IX"));
console.log(romanToInt("XXI"));
