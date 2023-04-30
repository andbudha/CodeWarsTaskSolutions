
//Week 11

/*
Task 1
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.
No floats or non-positive integers will be passed.
For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
 */

const numArr = [4, 13, 67, 55, 9];
const sumTwoSmallestNumbers = (numbers) => {
    const newArr = numbers.sort( (a,b) => a-b);
    return newArr[0]+newArr[1];
};

console.log(sumTwoSmallestNumbers(numArr));


