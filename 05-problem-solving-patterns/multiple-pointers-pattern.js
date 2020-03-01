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

// const result1 = sumZero1([-4, -3, -2, -1, 0, 1, 2, 5]);
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
// const result = sumZero([-4, -3, -2, -1, 0, 1, 2, 5]);
// console.log(result);


// Count unique values used FREQUENCY COUNTER PATTERN
function countUniqueValues1(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let frequencyCounter = {};
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    frequencyCounter[item] ? frequencyCounter[item]++ : frequencyCounter[item] = 1;
  }
  let uniqCounter = 0;
  for (let keys in frequencyCounter) {
    uniqCounter++;
  }
  return uniqCounter;
}
// const resultUniqueCount1 = countUniqueValues1([-2, -1, -1, 0, 1]);
// console.log(resultUniqueCount1);


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
const resultUniqueCount2 = countUniqueValues2([-2, -1, -1, 0, 1, 1, 2, 2, 2, 3]);
console.log(resultUniqueCount2);