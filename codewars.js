
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


/*
Task 2
In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b.
You must find the difference of the cuboids' volumes regardless of which is bigger.
For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.
Your function will be tested with pre-made examples as well as random ones.
If you can, try writing it in one line of code.
 */

const nums1 = [4, 6, 1];
const nums2 = [4, 4, 14];
function findDifference(a, b) {
    const sum1 = a.reduce((a, v) => a * v);
    const sum2 = b.reduce((a, v) => a * v);
    if(sum1 > sum2){
        return sum1 - sum2;
    } else {
        return  sum2 - sum1;
    }
}

console.log(findDifference(nums1, nums2));


/*
Some other solution for the second task:

function find_difference([a,b,c], [d,e,f]) {
  return Math.abs(a*b*c-d*e*f)
}

function find_difference(a, b) {
  return Math.abs(a.reduce(function(x,y){return x*y;}) - b.reduce(function(x,y){return x*y;}))
}

 */




//Week 12

/*
Task 1
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.
 */

const name = 'nata'
const getCount = (str) => {
    return str
        .toLowerCase()
        .split('')
        .filter(letter =>
            letter === 'a'|| letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u' ).length;
}

console.log(getCount(name));