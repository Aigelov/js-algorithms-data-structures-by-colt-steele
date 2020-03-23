function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10((Math.abs(num)))) + 1;
}
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}
let arr = [3221, 1, 9680, 10, 577, 2760, 7, 4793, 82, 743];

// My solution
// function radixSort(arr) {
//   let maxDigitCount = mostDigits(arr);
//   let newObj;
//   for (let k = 0; k < maxDigitCount; k++) {
//     newObj = {};
//     for (let i = 0; i < arr.length; i++) {
//       let digit = getDigit(arr[i], k);
//       if (!newObj[digit]) newObj[digit] = [];
//       newObj[digit].push(arr[i]);
//     }
//     arr = [];
//     for (let key in newObj) {
//       arr.push(...newObj[key]);
//     }
//   }
//   return arr;
// }

// Solution by Colt Steele
function radixSort2(arr) {
  let maxDigitCount = mostDigits(arr);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({length: 10}, () => []);
    for (let i = 0; i < arr.length; i++) {
      let digit = getDigit(arr[i], k);
      digitBuckets[digit].push(arr[i]);
    }
    arr = [].concat(...digitBuckets);
  }
  return arr;
}
console.log(radixSort2(arr));