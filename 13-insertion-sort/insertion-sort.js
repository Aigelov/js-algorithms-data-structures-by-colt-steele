// My solution
function insertionSort(arr) {
  const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  };
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= arr[i - 1]) {
      swap(arr, i, i - 1);
      for (let j = i - 1; j >= 0; j--) {
        if (arr[j] <= arr[j - 1]) {
          swap(arr, j, j - 1);
        }
      }
    }
  }
  return arr;
}
// console.log(insertionSort([25, 13, 2, 14, 3, 4, 1]));


// Colt Steele solution
function insertionSort2(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}
console.log(insertionSort2([25, 13, 1, 2, 14, 37, 3, 3, 4, 1]));