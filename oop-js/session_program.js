
/*

  This is the program that is used to deliver the concepts in the session

*/


// Design a stopwatch object
// duration property
// stop,reset and start methods
// cant call stop or start mutiple times. if so, throw error
/* 
function StopWatch(){

}

const sw = new StopWatch(); */


// solution


function StopWatch(){
  let startTime,endTime,running,duration = 0;

  this.start = function(){
    if(running){
      throw new Error("stopwatch has already started")
    }

    running = true;
    startTime = new Date();
  }

  this.stop = function(){
    if(!running){
      throw new Error("stopwatch has not started")
    }

    running = false;
    endTime = new Date();

    let seconds = (endTime.getTime() - startTime.getTime())/1000;
    duration += seconds
  }

  this.reset = function(){
    startTime = null;
    endTime = null;
    duration = 0;
    running = false;
  }

  Object.defineProperty(this,'duration',{
    get:function(){
      return duration
    }
  })
}


// prototypes and prototypical inheritance

let person = {name:"mosh"}

let objectBase = Object.getPrototypeOf(person);

let descriptor = Object.getOwnPropertyDescriptor(objectBase,"toString")



let array = []

console.log(array.__proto__ == Array.prototype);
console.log(cc.__proto__ == Circle.prototype);


function Circle(radius){
  this.radius = radius;
}

Circle.prototype.draw = function(){
  console.log('draw')
}


// move methods of stopwatch into prototype