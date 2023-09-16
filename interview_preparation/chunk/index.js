// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const newArray = [];
  const index = 0;
  while (array.length > index) {
    newArray.push(array.splice(index, size));
  }
  return newArray;
}

const arr = [1, 2, 3, 4];

console.log(chunk(arr, 2));

//My Solution

// function chunk(array, size) {
//   const newArr = [];
//   const index = 0;
//   while (index < array.length) {
//     newArr.push(array.splice(index, size));
//   }
//   return newArr;
// }
