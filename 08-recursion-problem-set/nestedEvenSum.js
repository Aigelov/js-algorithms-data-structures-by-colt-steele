function nestedEvenSum(obj) {
  const keys = Object.keys(obj);
  let sumEven = 0;
  for (let key of keys) {
    if (typeof obj[key] === 'object') {
      sumEven += nestedEvenSum(obj[key]);
    }
    if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
      sumEven += obj[key];
    }
  }
  return sumEven;
}
let obj1 = {
  outer: 2,
  obj: {
    inner: 4,
    otherObj: { superInner: 6, notANumber: true, alsoNotANumber: "yup", aNumber: 8 },
    innerNumber: 10
  }
};
let obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};
// console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10