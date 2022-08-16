

// 1.

const nums =  [1,6,8,2,4];
if(nums[0] == 2){
    console.log('has two');
}
if(nums[1] == 2){
    console.log('has two');
}
if(nums[2] == 2){
    console.log('has two');
}
if(nums[3] == 2){
    console.log('has two');
}
if(nums[4] == 2){
    console.log('has two');
}

//2. code is repeating so abstract to a function

function isTwo(num){
    if(num === 2){
        console.log('has two');
    }
}

isTwo(nums[0]);
isTwo(nums[1]);
isTwo(nums[2]);
isTwo(nums[3]);
isTwo(nums[4]);

//3. now code is not repeating but execution is repeating. here we use loops
// use walking example

let i = 0;

while(i < nums.length){
    //console.log(i)
    isTwo(nums[i]);
    i++; 
}

//4. we can use for loop because it helps to organize

for(let i=0;i<nums.length;i++){
    isTwo(nums[i])
}

//5. since this one increment pattern is so common we can use for of loop
 for(let num of nums){
     isTwo(num)
 }

//6. we can loop an object using for in loop
const person =  {
    name:'faiyaz',
    age: 28,
    isCollegeMate: false,
    hobbies : ['chess','ted talk']
},

for(let key in person){
    console.log(person[key]);
}
// 7. To avoid unneeded iteration we can break away from loop

function isTwo(num){
    if(num === 2 ){
        return true;
    }else{
        return false;
    }
}

for(let i=0;i<nums.length;i++){
    if(isTwo(nums[i])){
        console.log('has time');
        break;   
    }
}

// 8. show how break only executes the iteration i.e needed