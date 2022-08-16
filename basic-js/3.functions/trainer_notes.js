// trainess node v14 for this session
// "npm install -g prompt-sync" also need ot be executed
// if the above command doesnt work then try "npm install prompt-sync --cli"

//1.
const prompt = require("prompt-sync")();
const nameofParticipant1 = prompt("What is your name? ");
console.log(nameofParticipant1);
const ageofParticipant1 = prompt("What is your age? ");
console.log(ageofParticipant1);
const locationofParticipant1 = prompt("What is your location? ");
console.log(locationofParticipant1);

const nameofParticipant2 = prompt("What is your name? ");
console.log(nameofParticipant2);
const ageofParticipant2 = prompt("What is your age? ");
console.log(ageofParticipant2);
const locationofParticipant2 = prompt("What is your location? ");
console.log(locationofParticipant2);

//2. abstraction

function introduceYourself() {
  const nameofParticipant = prompt("What is your name? ");
  console.log(nameofParticipant);
  const ageofParticipant = prompt("What is your age? ");
  console.log(ageofParticipant);
  const locationofParticipant = prompt("What is your location? ");
  console.log(locationofParticipant);
}

introduceYourself();
introduceYourself();

//3.  returning from function

function introduceYourself() {
  const participant = {};
  const nameofParticipant = prompt("What is your name? ");
  participant.name = nameofParticipant;
  const ageofParticipant = prompt("What is your age? ");
  participant.age = ageofParticipant;
  const locationofParticipant = prompt("What is your location? ");
  participant.location = locationofParticipant;

  return participant;
}

const p1 = introduceYourself();
const p2 = introduceYourself();

console.table(p1);
console.table(p2);


//4. arguments/parameters. make them realize they were using prompt function this whole time

function setPropertyInObject(object,key,value){
    object[key] = value
    return object
}

function introduceYourself() {
    const participant = {};
    const nameofParticipant = prompt("What is your name? ");
    const updated = setPropertyInObject(participant,'name',nameofParticipant);
    console.log(updated)
    const ageofParticipant = prompt("What is your age? ");
    setPropertyInObject(participant,'age',ageofParticipant);
    const locationofParticipant = prompt("What is your location? ");
    setPropertyInObject(participant,'location',locationofParticipant);
  
    return participant;
  }
  
  const p1 = introduceYourself();
  const p2 = introduceYourself();
  
  console.table(p1);
  console.table(p2);