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
// const result1 = maxSubArraySum1([1, 2, 3, 4, 5, 2, 3], 4);
// console.log(result1);


// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum
// of a subarray with the length of the number passed to the function
function maxSubarraySum(arr, num){
  if (arr.length < num) return null;

  let total = 0;
  for (let i = 0; i < num; i++) {
    total += arr[i];
  }

  let currentTotal = total;
  for (let i = num; i < arr.length; i++) {
    currentTotal += arr[i] - arr[i - num];
    total = Math.max(total, currentTotal);
  }

  return total;
}
// console.log(maxSubarraySum([100, 200, 300, 400, 500], 2)); // 900
// console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
// console.log(maxSubarraySum([-3 ,4 , 0, -2, 6, -1], 2)); // 5
// console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
// console.log(maxSubarraySum([2, 3], 2)); // null


// Write a function called minSubArrayLen which accepts two parameters
// an array of positive integers and a positive integer.
// This function should return the minimal length of a contiguous subarray of which the sum is greater than
// or equal to the integer passed to the function. If there isn't one, return 0 instead
function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if(total < sum && end < nums.length){
      total += nums[end];
      end++;
    }
      // if current window adds up to at least the sum given then
    // we can shrink the window
    else if(total >= sum){
      minLen = Math.min(minLen, end-start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}
// console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2  because [4,3] is the smallest subarray
// console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2  because [5,4] is the smallest subarray
// console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1  because [62] is greater than 52
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
// console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0


// Write a function called findLongestSubstring, which accepts a string and returns the length
// of the longest substring with all distinct characters
function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}
// console.log(findLongestSubstring('')); // 0
// console.log(findLongestSubstring('rithmschool')); // 7
// console.log(findLongestSubstring('thisisawesome')); // 6
// console.log(findLongestSubstring('thecatinthehat')); // 7
// console.log(findLongestSubstring('bbbb')); // 1
// console.log(findLongestSubstring('longestsubstring')); // 8
// console.log(findLongestSubstring('thisisshowwedoit')); // 6