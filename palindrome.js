


const string1 = 'racecar';
const string2 = 'rac e c ar ';

const isPalindrome = (string) => string == string.split('').reverse().join('');

//string.split('') == ["r", "a", "c", "e", "c", "a", "r"]
//string.split('').reverse() == ["r", "a", "c", "e", "c", "a", "r"]
//string.split('').reverse().join('') == 'racecar'

console.log(isPalindrome(string1)); 
console.log(isPalindrome(string2)); 