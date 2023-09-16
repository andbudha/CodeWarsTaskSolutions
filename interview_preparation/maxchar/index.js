// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const obj = {};
  let maxVal = 0;
  let mostlyUsedCahr = '';

  for (let char of str) {
    !obj[char] ? (obj[char] = 1) : obj[char]++;
  }

  for (let char in obj) {
    if (obj[char] > maxVal) {
      maxVal = obj[char];
      mostlyUsedCahr = char;
    }
  }

  return mostlyUsedCahr;
}

console.log(maxChar('natalia'));

//The solutions below may be used to solve the following problems:
//  a. What is the mostly used character in the string?
//  b. Does the string A have the same characters as sring B (is it an anagram)?
//  c. Does the given string have any repeated characters in it?
//The best thing in the above mentioned cases would be to convert the given string into an object
//with the given key-value pairs, where the each character in the string would be the key in the object
//and the object-values would be the number of times each string character is repeated.
//  - So we can use the: for of loop, which is used to iterrate through an array or a string: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

// const string = 'anatalndrei'
// for(let char of string){
//    !obj[char] ? obj[char]= 1: obj[char]++;
// }

//As a result we shall get an oject and to iterate through an object we shall use the: for in loop: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in?retiredLocale=de
// for(let char in charMap){
//   if(charMap[char]>max){
//     max = charMap[char];
//     maxChar = char;
//   }

//Solution to the task in question is:

// function maxChar(str) {
//   const charMap={};
//   let max= 0;
//   let maxChar = '';

//   for(let char of str){
//    charMap[char] ? charMap[char]++: charMap[char]=1;
// }
// for(let char in charMap){
//   if(charMap[char]>max){
//     max = charMap[char];
//     maxChar = char;
//   }
// }
// return maxChar
// }

// console.log(maxChar('natalia'));
