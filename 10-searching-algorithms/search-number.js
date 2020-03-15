function searchNumber(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== val && start <= end) {
    if (arr[middle] > val) end = middle - 1;
    else start = middle + 1;

    middle = Math.floor((start + end) / 2);
  }

  return arr[middle] === val ? middle : -1;
}
// console.log(binarySearch([1, 2, 3, 4, 5], 2));
// console.log(binarySearch([1, 2, 3, 4, 5], 6));
console.log(searchNumber(
  [
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
  ],
  40
));