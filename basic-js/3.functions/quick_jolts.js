/*
    The idea of these code snippets is to reinforce the explained 
    concepts in the session

    each log statement should be asked to trainees one at a time
*/

//1.
function sum(n1, n2) {
  n1 + n2;
}
const r = sum(2, 3);
console.log(r);

//2.
function sum(n1, n2) {
  return n1 + n2;
}
const r = sum(2, 3);
console.log(r);

//3.
function sum(n1, n2) {
  return n1 + n2;
}
const r = sum(2);
console.log(r);

//4.
function sum(n1, n2 = 3) {
  return n1 + n2;
}
const r = sum(2);
console.log(r);


//5.
let n1 = 2;
let n2 = 4;

function sum(n1, n2) {
  return n1 + n2;
}
const r = sum(n1, n2);
console.log(r);

//6.

const ar = [1,3,4,2,5,6]
function chunk(ar) {
  return [ar[0],ar[ar.length -1]]
}
const r = chunk(ar);
console.log(r);


//7. 
const obj = {
  name:'faiyaz',
  age:12
}

function pluck(obj,key){
  const plucked = {};
  plucked[key] = obj[key]
  return plucked
}

const p = pluck(obj,'name').name
console.log(p);