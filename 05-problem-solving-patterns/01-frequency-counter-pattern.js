// Naive solution
function same1(arr1, arr2){
  if (arr1.length !== arr2.length){
    return false;
  }
  for (let i = 0; i < arr1.length; i++){
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex,1)
  }
  return true;
}
// same1([1,2,3,2], [9,1,4,4]);


// Refactored solution using FREQUENCY COUNTER PATTERN
function same(arr1, arr2){
  if (arr1.length !== arr2.length){
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1){
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }

  for (let val of arr2){
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }

  for (let key in frequencyCounter1){
    if (!(key ** 2 in frequencyCounter2)){
      return false
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
      return false
    }
  }

  return true
}
// same([1,2,3,2,5], [9,1,4,4,11]);


// Anagram solution using FREQUENCY COUNTER PATTERN
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}
// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
// validAnagram('anagram', 'nagaram');


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


// sameFrequency(485767, 677854) => true
// sameFrequency(22, 222) => false
// sameFrequency(785, 652) => false
function sameFrequency(num1, num2) {
  const str1 = num1.toString();
  const str2 = num2.toString();
  
  if (str1.length !== str2.length) {
    return false;
  }
  
  const freqCnt1 = {};
  for (let item of str1) {
    freqCnt1[item] ? freqCnt1[item]++ : freqCnt1[item] = 1;
  }

  for (let item of str2) {
    if (!freqCnt1[item]) {
      return false;
    } else {
      freqCnt1[item]--;
    }
  }

  return true;
}
// console.log(sameFrequency(4564, 345));


// Implement a function called, areThereDuplicates which accepts variable number of arguments and checks
// whether there are any duplicates among the arguments passed in
function areThereDuplicates(...args) {
  const arr = args;
  const freqCnt = {};

  for (let item of arr) {
    freqCnt[item] ? freqCnt[item]++ : freqCnt[item] = 1;
  }

  for (let key in freqCnt) {
    if (freqCnt[key] > 1) {
      return true;
    }
  }

  return false;
}
// console.log(areThereDuplicates(1, 2, 3)); // => false
// console.log(areThereDuplicates(1, 2, 2)); // => true
// console.log(areThereDuplicates('a', 'b', 'c', 'a')); // => true