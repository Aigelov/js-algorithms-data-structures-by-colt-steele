// My solution
function collectStrings(obj) {
  const keys = Object.keys(obj);
  let newArr = [];
  for (let key of keys) {
    if (typeof obj[key] === 'object') {
      newArr = newArr.concat(collectStrings(obj[key]));
    }
    if (typeof obj[key] === 'string') {
      newArr.push(obj[key]);
    }
  }
  return newArr;
}
const obj = {
  stuff: "foo",
  data: { val: { thing: { info: "bar", moreInfo: { evenMoreInfo: { weMadeIt: "baz" } } } } }
};
console.log(collectStrings(obj)); // ["foo", "bar", "baz"])


// Solution by Colt Steele. Helper method recursion method
function collectStrings2(obj) {
  let stringsArr = [];
  function gatherStrings(o) {
    const keys = Object.keys(o);
    for(let key of keys) {
      if (typeof o[key] === 'string') {
        stringsArr.push(o[key]);
      } else if(typeof o[key] === 'object') {
        return gatherStrings(o[key]);
      }
    }
  }
  gatherStrings(obj);
  return stringsArr;
}
console.log(collectStrings2(obj)); // ["foo", "bar", "baz"])