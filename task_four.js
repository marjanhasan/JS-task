const userArr = [1, 3, 6, 8, 11, 15];
const target = 14;
const answer = [1, 2];
const findSum = (arr, t) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + arr[i + 1] === t) return [i, i + 1];
  }
  return [];
};
console.log(findSum(userArr, target));
