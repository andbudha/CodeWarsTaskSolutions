
const arr1 = [5, 'Andrei', 9]
const value1 = 'Andrei'

const value2 = 7;

function check(a, x) {
    return a.indexOf(x) === -1 ? false : true;
}


console.log(check(arr1, value2));