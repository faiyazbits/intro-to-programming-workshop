/**
 * Task description: Removes the property at path of object.
 * Expected Result: { a: [{ b: { c: 7 } }] } => true or false
 * Task Complexity: 2 of 5
 * @param {object} data - The source object
 * @param {Array} paths - The property paths to omit.
 * @returns {Array}
 */
const unset = (data,paths) => {
    throw new Error('Put your solution here');
}
const data = {
    a : [
        {
            b: {
                c : 7
            }
        }
    ]
}
const paths = ['a', '0', 'b', 'c'];

console.log(unset(data,paths)); // true
console.log(data); // {a : [{ b: {} }]}
