// My solution
function capitalizeWords(arr) {
  if (arr.length === 0) return false;
  let newArr = [];
  newArr.push(arr[0].toUpperCase());
  if (arr.length === 1) return newArr[0];
  newArr = newArr.concat(capitalizeWords(arr.slice(1)));
  return newArr;
}
let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']


// Solution by Colt Steele
function capitalizeWords2(array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeWords2(array.slice(0, -1));
  res.push(array.slice(array.length-1)[0].toUpperCase());
  return res;
}
console.log(capitalizeWords2(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']