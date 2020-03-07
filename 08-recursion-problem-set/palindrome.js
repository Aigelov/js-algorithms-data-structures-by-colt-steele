function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str[0] !== str[str.length - 1]) return false;
  isPalindrome(str.slice(1, -1));
  return true;
}
// console.log(isPalindrome('awesome')); // false
// console.log(isPalindrome('foobar')); // false
// console.log(isPalindrome('tacocat')); // true
// console.log(isPalindrome('amanaplanacanalpanama')); // true
// console.log(isPalindrome('amanaplanacanalpandemonium')); // false