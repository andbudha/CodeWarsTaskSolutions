function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  return (
    classPoints.reduce((acc, val) => acc + val, 0) / classPoints.length <
    yourPoints
  );
}

console.log(
  betterThanAverage([55, 82, 67, 64, 78, 90, 61, 71, 82, 54, 87], 85)
);
