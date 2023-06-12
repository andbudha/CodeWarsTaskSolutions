
//Week 11

/*
Task 1
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.
No floats or non-positive integers will be passed.
For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
 */

const numArr = [4, 13, 67, 55, 9];
const sumTwoSmallestNumbers = (numbers) => {
    const newArr = numbers.sort((a, b) => a - b);
    return newArr[0] + newArr[1];
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
    if (sum1 > sum2) {
        return sum1 - sum2;
    } else {
        return sum2 - sum1;
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
            letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u').length;
}

console.log(getCount(name));


/*
Task 2
Description:
Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
Examples
remove("Hi!") == "Hi"
remove("Hi!!!") == "Hi!!"
remove("!Hi") == "!Hi"
remove("!Hi!") == "!Hi"
remove("Hi! Hi!") == "Hi! Hi"
remove("Hi") == "Hi"
 */

const string = 'Hi John!'

function remove(str) {
    //coding and coding....
    return str.at(-1) === '!' ? str.slice(0, -1) : str;
}

console.log(remove(string));



//Week 13

/*
Task 1
We need a simple function that determines if a plural is needed or not.
It should take a number, and return true if a plural should be used with that number or false if not.
This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.
You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).
All values will be positive integers or floats, or zero.
 */


function plural(n) {
    return n !== 1;
}

console.log(plural(2));



/*
Task 2
Americans are odd people: in their buildings,
the first floor is actually the ground floor and there is no 13th floor (due to superstition).
Write a function that given a floor in the american system returns the floor in the european system.
With the 1st floor being replaced by the ground floor and the 13th floor being removed,
the numbers move down to take their place. In case of above 13,
they move down by two because there are two omitted numbers below them.
Basements (negatives) stay the same as the universal level.
 */

function getRealFloor(n) {
    if (n === 0 || n < 0) {
        return n;
    } else if (n > 0 && n < 13) {
        return n - 1;
    } return n - 2;
}

console.log(getRealFloor(5));


//Week 14

/*
Task 1
I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.
Can you help me fix the function?

function addFive(num) {
    var total = num + 5
    return num;
}
*/

function addFive(num) {
    var total = num + 5
    return total;
}

console.log(addFive(5));




