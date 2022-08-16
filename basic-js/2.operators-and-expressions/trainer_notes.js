
// 1. assignment

let num = 3;
console.log(num);

num += 3; // num = num + 3;
console.log(num);

// 2. Destructuring
const nums = [1,2];
// how will we assign the first and second element into variables
const first = nums[0];
const second = nums[1];

// destructure
const [first,second] = nums;

const person = {
    name: "faiyaz",
    age: 27
}

const name = person.name;
const age = person.age;

// destructure
const {name} = person;
const {age} = person;
const {name,age} = person;

// 3.comparison operator

const num1 = 3;
const num2 = 4;
const string1 = "3";

console.log(num1 == 3);
console.log(num1 == num2);
console.log(num1 != num2);
console.log(num1 === string1);
console.log(num1 !== string1);
console.log(num1 < num2);
console.log(num1 > num2);
console.log(num2 < num1);

//4. arithmetic operators

const num = 3;
num++;
console.log(num);
console.log(num--);


const num = 3;
++num;
console.log(num);

// 5.logical operators

const isMale = true;
const isFemale = false; // with above two we represent same information
const gender = 'male';

console.log(isMale && gender === 'male')
console.log(isFemale || gender === 'male');
console.log(!isMale)

// 6.string operators

const firstname = "muhammed";
const lastname = "faiyaz";
const noOfParticipants = 50;
const programGenre = "music";

const fullname = firstname + lastname;
console.log(fullname);

const fullnameWithSpace = firstname + " " + lastname;
console.log(fullnameWithSpace);

const message = "around " + noOfParticipants + "people participated in " + programGenre +  "event";
console.log(message);

// concatenating string using plus is tedious so use template strings

const messageWithStringLiteral = `around ${noOfParticipants} people participated in  ${programGenre} event`;
console.log(messageWithStringLiteral);

// 7. Ternary operators

const isMale = true;
const gender = isMale ? 'male' : 'female';

console.log(gender)

// 8. in operator

const nums = [1,2];
const person = {
    name: "faiyaz",
    age: 27
}

console.log(0 in nums);
console.log(3 in nums);
console.log('names' in person);
console.log('company' in person);
