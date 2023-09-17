// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const strA = stringA.toLowerCase().split('').sort().join('').trim();
  const strB = stringB.toLowerCase().split('').sort().join('').trim();
  return strA === strB;
}

console.log(anagrams('Hal va!', ' ! AVLAH'));
//console.log(anagrams('hEl lO', 'o Lle h '));

//My solution
// function anagrams(stringA, stringB) {
//   const str1 = stringA.toLowerCase().split('').sort().join('').trim();
//   const str2 = stringB.toLowerCase().split('').sort().join('').trim();
//   return str1 === str2;
// }

// console.log(anagrams('hel lO', 'o Lle h '));

//Solution 2
//We can make use of regular expressions in order te get rid of symbols and spaces:
// const word = 'Hi There!!!';
// const newWord = word.replace(/[^\w]/g, '').toLowerCase();
// console.log(newWord);

// function anagrams(stringA, stringB) {
//   const str1 = stringA
//     .toLowerCase()
//     .replace(/[^\w]/g, '')
//     .split('')
//     .sort()
//     .join('');
//   const str2 = stringB
//     .toLowerCase()
//     .replace(/[^\w]/g, '')
//     .split('')
//     .sort()
//     .join('');
//   return str1 === str2;
// }

// console.log(anagrams('hel lO', 'o Lle h '));
