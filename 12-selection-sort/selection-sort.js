function selectionSort(arr) {
  if (!arr.length) {
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    let minValIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minValIndex]) {
        minValIndex = j;
      }
    }
    if (i !== minValIndex) [arr[i], arr[minValIndex]] = [arr[minValIndex], arr[i]];
  }
  return arr;
}
console.log(selectionSort([45, 25, 4, 79, 3, 5, 19, 1, 2]));