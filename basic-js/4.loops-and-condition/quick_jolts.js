/*
    The idea of these code snippets is to reinforce the explained 
    concepts in the session

    each log statement should be asked to trainees one at a time
*/

const nums = [1, 12, 3, 6, 2, 8, 4, 5, 9, 11, 7, 10];

//1.
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}

//2.

for (let j = nums.length - 1; j > 0; j--) {
  console.log(nums[j]);
}

//3.
for (let j = nums.length - 1; j >= 0; j--) {
  console.log(nums[j]);
}

//4.
for (let k = 0; k < nums.length; k += 2) {
  console.log(nums[k]);
}

//5.
let i = 0;
while (i < nums.length) {
  console.log(nums[i]);
  i++;
}

//6.
let i = 0;
while (i < nums.length) {
  i++;
  console.log(nums[i]);
  i++;
}

//7.
let i = 0;
while (i < nums.length) {
  i++;
  console.log(nums[i]);
}

//8.

let i = nums.length;
while (i >= 0) {
  console.log(nums[i]);
  i--;
}

//9. This will take some thinking
for (let i = 0, j = i + 1; i < nums.length && j < nums.length; i++, j++) {
  console.log(nums[i] + nums[j]);
}

//10.Take time with this

let temp;
let start = 0;
let end = nums.length - 1;

while (start < end) {
  temp = nums[start];
  nums[start] = nums[end];
  nums[end] = temp;
  start++;
  end--;
}

console.log(nums);
