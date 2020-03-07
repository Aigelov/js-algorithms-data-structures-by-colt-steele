function flatten(arr) {
  let newArr = [];
  if (Array.isArray(arr[0])) {
    return flatten(arr[0].concat(arr.slice(1)));
  } else {
    newArr.push(arr[0]);
    if (arr.length === 1) return newArr;
    newArr = newArr.concat(flatten(arr.slice(1)));
    return newArr;
  }
}
// console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
// console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
// console.log(flatten([[1],[2],[3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]


// Solution by Colt Steele
function flatten2(oldArr) {
  let newArr = [];
  for (let i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten2(oldArr[i]))
    } else {
      newArr.push(oldArr[i])
    }
  }
  return newArr;
}
// console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
// console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
// console.log(flatten([[1],[2],[3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]