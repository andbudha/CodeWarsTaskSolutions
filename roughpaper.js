



const string1 = "camelCasing"
const string2 = "identifier"

function solution(string) {
    return string.split('').map(el => el.toLocaleUpperCase() === el ? ' ' + el : el).join('');
}

console.log(solution(string1));
