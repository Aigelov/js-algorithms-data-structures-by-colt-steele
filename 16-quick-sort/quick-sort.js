let arr = [5, 2, 1, 8, 4 ,7 ,6, 3];
function swap(arr, i , j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
function pivot(arr, start = 0, end = arr.length - 1) {
  let pivotItem = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivotItem > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }

  swap(arr, swapIndex, start);
  return swapIndex;
}
// console.log(pivot(arr, 0)); // 4
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);

    // left
    quickSort(arr, left, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}
console.log(quickSort(arr));