//Week 1

/*
Task 1
Complete the square sum function so that it squares each number passed into it and then sums the results together.
For example, for [1, 2, 2] it should return 9.
 */

const numbers = [1, 2, 2]
function squareSum(numbers) {
    let total = 0;
    for (let element of numbers)
        total = (element * element) + total;
    return total;
}

console.log(squareSum(numbers));


/*
Task 2
You only need one - Beginner
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
Array can contain numbers or strings. X can be either.
Return true if the array contains the value, false if not.
 */

const arr1 = [5, 'Andrei', 9]
const value1 = 'Andrei'

const value2 = 7;

function check(a, x) {
    return a.indexOf(x) === -1 ? false : true;
}


console.log(check(arr1, value2));

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

/*
Task 2
Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) 
that receive a list of integers as input, and return the largest and lowest number in that list, respectively.
!!!Solution to be noted!!!

const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);
 */

const arr = [5, 9, 64, 29, 87, 46, 20, 10, 29, -5, 64, -84, 67, -9];

const min = (list) => list.sort((a, b) => a > b ? 1 : -1)[0];

console.log(min(arr));

const max = (list) => list.sort((a, b) => a > b ? -1 : 1)[0];

console.log(max(arr));

//Week 15

/*
Task 1
Given two numbers and an arithmetic operator (the name of it, as a string), 
return the result of the two numbers having that operator used on them.
a and b will both be positive integers, 
and a will always be the first number in the operation, and b always the second.

The four operators are "add", "subtract", "divide", "multiply".

5, 2, "add"      --> 7
5, 2, "subtract" --> 3
5, 2, "multiply" --> 10
5, 2, "divide"   --> 2.5
*/

function arithmetic(a, b, operator) {
    //your code here!
    if (operator === 'add') {
        return a + b;
    } else if (operator === 'subtract') {
        return a - b;
    } else if (operator === 'multiply') {
        return a * b;
    } else if (operator === 'divide') {
        return a / b;
    }
}

/*
Task 2
Complete the function that takes two integers (a, b, where a < b) 
and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]
 */

function between(a, b) {
    let arr = [];
    for (let i = a; i <= b; i++) {
        arr.push(i);
    }
    return arr;
}
console.log(between(2, 9));

//Week 16

/*
Task 1
GComplete the solution so that the function will break up camel casing, using a space between words.

"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

const string1 = "camelCasing"
const string2 = "identifier"

function solution(string) {
    return string.split('').map(el => el.toUpperCase() === el ? ' ' + el : el).join('');
}

console.log(solution(string1));

/*
Task 2
Create a combat function that takes the player's current health and the amount of damage recieved, 
and returns the player's new health. Health can't be less than 0.
*/

function combat(health, damage) {
    if (health < damage) {
        return 0;
    } else {
        return health - damage;
    }
}

console.log(combat(100, 110));

/*
Week 17

Task 1
Description
The wide - mouth frog is particularly interested in the eating habits of other creatures.
He just can't stop asking the creatures he encounters what they like to eat. 
But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!
When he meets the alligator, it then makes a tiny mouth.
Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog.
If this one is an alligator(case -insensitive) return small otherwise return wide.
*/


function mouthSize(animal) {
    return animal.toLowerCase() === 'alligator' ? 'small' : 'wide'
}

console.log(mouthSize('alligator'));

/*
Task 2
Write a function that returns a string in which firstname is swapped with last name.
"john McClane" --> "McClane john"
*/

function nameShuffler(str) {
    return str.split(' ').reverse().join(' ');
}

console.log(nameShuffler('Bartov Andrei'));


/*
Week 18

Task 1
Get the Middle Character
Description
You are going to be given a word. 
Your job is to return the middle character of the word. 
If the word's length is odd, return the middle character. 
If the word's length is even, return the middle 2 characters.
*/

const word = 'Delia';

function getMiddle(string) {
    //Code goes here!
    const length = string.split('').length;
    if (length % 2 === 0) {
        return string.split('').splice(length / 2 - 1, 2).join('');
    } else {
        return string.split('').splice((length - 1) / 2, 1).join('');
    }
}

console.log(getMiddle(word));

/*
Task 2
Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. 
Marketing thinks it would be great to welcome visitors to the site in their own language. 
Luckily you already use an API that detects the user's location, so this is an easy win.

The Task
Think of a way to store the languages as a database (eg an object). 
The languages are listed below so you can copy and paste!
Write a 'welcome' function that takes a parameter 'language' (always a string), 
and returns a greeting - if you have it in your database. 
It should default to English if the language is not in the database, 
or in the event of an invalid input.
*/

const languages = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
}

function greet(language) {
    const lang = Object.keys(languages).find(el => el === language)
    if (lang) {
        return languages[language]
    } else {
        return languages.english
    }
}

console.log(greet('irish'));

/*
Week 19

Task 1
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. 
Return the resulting string.

Note: input will never be an empty string
*/

const fakeBin = (num) => {
    if (!num) return false;
    return Number(num) < 5 ? num = new String(0)[0] : num = new String(1)[0];
}
const result2 = fakeBin('5');
console.log(result2);


/*
Week 19

Task 2
In this game, the hero moves from left to right. 
The player rolls the dice and moves the number of spaces indicated by the dice two times.
Create a function for the terminal game that takes the current position of the hero and 
the roll (1-6) and return the new position.

Example:
move(3, 6) should equal 15
*/

function move(position, roll) {
    // return the new position
    return (roll * 2) + position;
}


console.log(move(3, 6));