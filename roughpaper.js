
const math = (a, b, operator) => {
    if (operator === 'add') {
        return a + b;
    } else if (operator === 'substract') {
        return a - b;
    } else if (operator === 'multiply') {
        return a * b;
    } else if (operator === 'devide') {
        return a / b;
    }
}

console.log(math(5, 6, 'multiply'));