const findSecondSmallest = (arr) => {
  if (arr.length < 2) {
    return "Array must have at least two elements.";
  }

  const sortedArr = arr.slice().sort((a, b) => a - b);
  return sortedArr[1];
};

const numbers = [5, 2, 8, 1, 9, 3];
console.log(findSecondSmallest(numbers));
