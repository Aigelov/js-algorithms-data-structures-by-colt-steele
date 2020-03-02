// Max sub array sum using SLIDING WINDOW PATTERN
function maxSubArraySum1(arr, num) {
  if (num > arr.length) { return null; }
  let max = 0;
  let temp = 0;
  for (let i = 0; i < num; i++) {
    max += arr[i];
  }
  for (let i = 1; i < arr.length - num + 1; i++) {
    temp = max - arr[i - 1] + arr[i - 1 + num];
    max = temp > max ? temp : max;
  }
  return max;
}
const result1 = maxSubArraySum1([1, 2, 3, 4, 5, 2, 3], 4);
console.log(result1);