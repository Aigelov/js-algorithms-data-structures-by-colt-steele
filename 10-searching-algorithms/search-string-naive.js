function searchString(str, search) {
  let counter = 0;
  let matchCounter = 0;
  let matched;
  for (let item of str) {
    matched = true;
    if (search[matchCounter] !== item) {
      matchCounter = 0;
      matched = search[matchCounter] === item;
    }
    matchCounter++;
    if (matched && matchCounter === search.length) counter++;
    if (!matched) matchCounter = 0;
  }
  return counter;
}
console.log(searchString('wowomomgzygomg', 'wo'));