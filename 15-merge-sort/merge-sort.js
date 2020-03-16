function merge(first, second) {
  let arr = [];
  let i = 0;
  let j = 0;

  while(i < first.length) {
    if (first[i] <= second[j] || !second[j]) {
      arr.push(first[i]);
      i++;
    } else if (second[j]) {
      arr.push(second[j]);
      j++;
    }
  }

  if (j !== second.length) {
    arr = arr.concat(second.slice(j));
  }

  return arr;
}
// console.log(merge([1, 10, 50, 77, 200], [2, 14, 99, 100]));

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let middle = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle));
  return merge(left, right);
}
console.log(mergeSort([10, 24, 76, 73]));