
//Week 11


const numArr = [4, 13, 67, 55, 9];
const sumTwoSmallestNumbers = (numbers) => {
    const newArr = numbers.sort( (a,b) => a-b);
    return newArr[0]+newArr[1];
};

console.log(sumTwoSmallestNumbers(numArr));