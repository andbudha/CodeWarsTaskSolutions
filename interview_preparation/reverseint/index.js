// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(num) {
  const result = parseInt(num.toString().split('').reverse().join(''));
  return result * Math.sign(num);
}

console.log(reverseInt(-15));

// //Solution 1(we must multiply the number by -1 if we want to get a negative number)

// function reverseInt(num) {
//   if(num < 0){
//  return parseInt(new String(num).split('').reverse().join(''))*-1
// } else{
//  return parseInt(new String(num).split('').reverse().join(''))
// }
// }
//console.log(reverseInt(-15));

//Solution 2 (we can use the Math.sign() method: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign)
// The Math.sign() static method returns 1 or -1,
// indicating the sign of the number passed as argument. If the input is 0 or -0, it will be returned as-is.

// function reverseInt(num) {
//   const newNum = parseInt(new String(num).split('').reverse().join(''))
//  return newNum * Math.sign(num);
// }
// console.log(reverseInt(-15));
