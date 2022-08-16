/**
 * Task description: Checks if path is a direct property of object.
 * Expected Result: {a :{b:2}} => true or false
 * Task Complexity: 2 of 5
 * @param {object} data - The object to query.
 * @param {string} path - The path to check.
 * @returns {Boolean}
 */
const has = (data,path) => {
    throw new Error('Put your solution here');
}
const data = {
    a : {b : 2}
}
const path = 'a.b'

console.log(has(data,path)); // true
console.log(has(data,'a.b.c')); // false
