function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base,exponent - 1);
}
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16


function factorial(x) {
  if (x < 0 ) return 0;
  if (x <= 1 ) return 1;
  return x * factorial(x - 1);
}
// factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040


function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60


// Write a function called recursiveRange which accepts a number and adds up all the numbers
// from 0 to the number passed to the function
function recursiveRange(x) {
  if (x === 0 ) return 0;
  return x + recursiveRange(x - 1);
}
// recursiveRange(6) // 21
// recursiveRange(10) // 55


// Solution in the course
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n-2);
}
// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465


// My solution
let arr = [1, 1];
function fib2(num) {
  let index = num - 1;
  if (index < 2) {
    return 1;
  }
  if (arr[index]) {
    return arr[index];
  }
  arr.push(arr[arr.length -2] + arr[arr.length - 1]);
  return fib2(num);
}
// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465


function collectOddValues(arr) {
  let newArr = [];
  if (arr.length === 0) return newArr;
  if (arr[0] % 2 !== 0) newArr.push(arr[0]);
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}
// console.log(collectOddValues([1, 2, 3, 4, 5])); // [1, 3, 5]