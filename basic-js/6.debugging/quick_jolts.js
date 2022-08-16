
/*
    The idea of these code snippets is to reinforce the explained 
    concepts in the session

    each log statement should be asked to trainees one at a time
*/


//1.

let dividend = 18;
let numbers = [2, 3, 4, 5, 6, 7, 8, 9];
let idx;

for (idx = 0; idx < numbers.length; idx++) {
  let factor;
  let divisor = numbers[idx];

  if (dividend % divisor === 0) {
    factor = true;
  }

  if (factor) {
    console.log(divisor + ' is a factor of ' + dividend + '!');
  }
}

//2.
function displayEvenNumbers(){
    /* let numbers = [1,2,3,4,5,6,7,8];
    let evenNumbers = [];
    for(let i=0; i<numbers.length-1; i++;){
        if(numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    } */
}
displayEvenNumbers(); // should return [2,4,6,8]

//3. word ladder

const words = ['head','heal','tail','teal','tell'];

let ladder = '';
for(w of word){
    if(w !== ''){
        w+='-';
    }
    ladder+=w
}

console.log(ladder); // expected : head-heal-tail-teal-tell

//4. Random recipe generator
// * adding a new task
// * completing a given number of existing task
// * displaying the task list

/*  
let todos = ['wash car', 'exercise', 'buy groceries', 'balance budget',
             'call plumber', 'feed fido', 'get gas',  'organize closet'];

function addTask(task) {
  if (todos.includes(task)) {
    console.log('That task is already on the list.');
  } else {
    todos.push(task);
  }
}

function completeTasks(n = 1) {
  let tasksComplete = 0;

  while (todos.length > 0 && tasksComplete < n) {
    console.log(`${todos[0]} complete!`);
    delete todos[0];
    tasksComplete++;
  }

  if (todos.length === 0) {
    console.log('All tasks complete!');
  } else {
    console.log(`${tasksComplete} tasks completed; ${todos.length} remaining.`);
  }
}

function displayTaskList() {

  console.log(`ToDo list (${todos.length} tasks):`);
  console.log('---------------------');

  for (let idx = 0; idx < todos.length; idx++) {
    console.log(`-- ${todos[idx]}`);
  }
}

// Utilizing our task manager

addTask('oil change');
addTask('dentist');
addTask('homework');

completeTasks(3);
displayTaskList();
*/

