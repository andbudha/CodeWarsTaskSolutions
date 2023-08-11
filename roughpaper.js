
const fakeBin = (num) => {
    if (!num) return false;
    return Number(num) < 5 ? num = new String(0)[0] : num = new String(1)[0];
}
const result2 = fakeBin('5');
console.log(result2);