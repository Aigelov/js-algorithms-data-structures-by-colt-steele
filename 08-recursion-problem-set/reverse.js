// My solution
function reverse(str) {
  let newStr = '';
  if (str.length === 0) return newStr;
  newStr = str.slice(str.length - 1);
  newStr += reverse(str.slice(0, -1));
  return newStr;
}
console.log(reverse('awesome')); // 'emosewa'
// console.log(reverse('rithmschool')); // 'loohcsmhtir'


// Solution by Colt Steele
function reverse2(str){
  if(str.length <= 1) return str;
  return reverse2(str.slice(1)) + str[0];
}
console.log(reverse2('awesome')); // 'emosewa'
// console.log(reverse2('rithmschool')); // 'loohcsmhtir'