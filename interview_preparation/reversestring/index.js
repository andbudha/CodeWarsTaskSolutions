//Exercise 1
// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reduce((reversed, item) => item + reversed, '');
}

console.log(reverse('andrei'));

// //Solution 1
// function reverse(str) {
//   return str.split('').reverse().join('');
// }

// console.log(reverse('Greetings!'));

// //Solution 2
// function reverse(str) {
//  let reversed = '';
//  for(let el of str){
// reversed = el + reversed;
//  }
//  return reversed;
// }

// //Solution 3
// function reverse(str) {
//  return str.split('').reduce((reversed, character)=>character+reversed,'');
// }
