const findMidNum = (arr) => {
  const midNum = arr.find(
    (num) => num !== Math.min(...arr) && num !== Math.max(...arr)
  );
  return arr.indexOf(midNum);
};

console.log(findMidNum([5, 10, 14]));
