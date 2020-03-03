// Naive solution
function sumZero1(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}
// const result1 = sumZero1([-4, -3, -2, -1, 0, 1, 2, 5]); // [-2, 2]
// console.log(result);


// Refactored solution using MULTIPLE POINTERS PATTERN
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
// const result = sumZero([-4, -3, -2, -1, 0, 1, 2, 5]); // [-2, 2]
// console.log(result);


// Count unique values used MULTIPLE POINTERS PATTERN
function countUniqueValues2(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let pointer1 = 0;
  let pointer2 = 1;

  while (pointer2 < arr.length) {
    if (arr[pointer1] !== arr[pointer2]) {
      pointer1++;
      arr[pointer1] = arr[pointer2];
    }
    pointer2++;
  }

  return pointer1 + 1;
}
// const resultUniqueCount2 = countUniqueValues2([-2, -1, -1, 0, 1, 1, 2, 2, 2, 3]);
// console.log(resultUniqueCount2);


// Implement a function called, areThereDuplicates which accepts variable number of arguments and checks
// whether there are any duplicates among the arguments passed in
function areThereDuplicates(...args) {
  const arr = args;
  if (arr.length < 1) {
    return false;
  }

  arr.sort((a, b) => {
    if (typeof a === 'number') {
      return a - b;
    } else if (typeof a === 'string') {
      if (a > b) {
        return 1;
      }
      if (a < b) {
        return -1;
      }

      return 0;
    }
  });

  let start = 0;
  let next = 1;

  while (next < arr.length) {
    if (arr[start] === arr[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}
// console.log(areThereDuplicates(1, 2, 3, 4, 5)); // => false
// console.log(areThereDuplicates(1, 2, 3, 1)); // => true
// console.log(areThereDuplicates('a', 'b', 'c', 'd')); // => false
// console.log(areThereDuplicates('a', 'b', 'c', 'a')); // => true


function averagePair(arr, num) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;

    if (avg === num)
      return true;
    else if (avg < num)
      start++;
    else
      end--
  }

  return false;
}
console.log(averagePair([1, 7, 10, 17, 29], 12));


// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string
// form a subsequence of the characters in the second string. In other words, the function should check
// whether the characters in the first string appear somewhere in the second string, without their order changing
function isSubsequence(str1, str2) {
  if (str1.length > str2.length) { return false; }

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  let p1 = 0;
  let p2 = 0;

  while (p2 < str2.length) {
    if (str1[p1] === str2[p2])
      p1++;

    if (p1 === str1.length)
      return true;

    p2++;
  }

  return false;
}
// console.log(isSubsequence('hello', 'hello world')); // true
// console.log(isSubsequence('sing', 'sting')); // true
// console.log(isSubsequence('abc', 'abracadabra')); // true
// console.log(isSubsequence('abc', 'acb')); // false (order matters)