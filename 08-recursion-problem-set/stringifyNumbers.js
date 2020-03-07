// My solution. In my solution modifying original object which is not right by exercise rule. Could not solve
// the of not to modify object
function stringifyNumbers(obj) {
  const keys = Object.keys(obj);
  for (let key of keys) {
    if (typeof obj[key] === 'object') {
      stringifyNumbers(obj[key]);
    }
    if (typeof obj[key] === 'number') {
      obj[key] = obj[key].toString();
    }
  }
  return obj;
}
let obj = {
  num: 1,
  test: [],
  data: { val: 4, info: { isRight: true, random: 66 } }
};
console.log(stringifyNumbers(obj));


// Solution by Colt Steele without modifying original object
function stringifyNumbers2(obj) {
  let newObj = {};
  const keys = Object.keys(obj);
  for (let key of keys) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers2(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
console.log(stringifyNumbers2(obj));