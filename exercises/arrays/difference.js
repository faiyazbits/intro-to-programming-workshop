/**
 * Task description: write a function to find the difference between two arrays
 * Expected Result: [2, 1], [2, 3] => [1]
 * Task Complexity: 2 of 5
 * @param {Array} array1 - array1.
 * @param {Array} array2 - array2.
 * @returns {Array}
 */
const difference = (array1,array2) => {
    throw new Error('Put your solution here');
}
const ar1 = [2, 1];
const ar2 =  [2, 3];

console.log(difference(ar1,ar2)); // [1]
console.log(difference([1,2],[2,3])) // [1]
console.log(difference([3,2],[2,1])) // [3]
console.log(difference([2,2],[2,2])) // []
console.log(difference([1,2,3,5],[2,3,4])) // [1,5]
console.log(difference([2,3,4],[1,2,3,5])) // [4]
