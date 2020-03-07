// My solution
function capitalizeFirst(arr) {
  let newArr = [];
  arr[0] = arr[0].slice(0, 1).toUpperCase() + arr[0].slice(1);
  newArr.push(arr[0]);
  if (arr.length === 1) return newArr;
  newArr = newArr.concat(capitalizeFirst(arr.slice(1)));
  return newArr;
}
console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']


// Solution by Colt Steele
function capitalizeFirst2(array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  const res = capitalizeFirst2(array.slice(0, -1));
  const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
  res.push(string);
  return res;
}
console.log(capitalizeFirst2(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']