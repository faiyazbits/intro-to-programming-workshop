
/* Object Literals */

const circle = {
    radius : 5,
    location: {
        x : 3,
        y: 4
    },
    draw(){
        console.log('draw')
    }
}
// properties
// methods
circle.draw()


/* Factory function */

// duplicating objects with behaviour is not preffered in literals
function createCircle(radius){
    return {
        radius,
        draw(){
            console.log('draw')
        }
    }
}

const cf = createCircle(5);
cf.draw();

/* Constructor */


function Circle(radius){
    this.radius = radius;
    this.draw()= function(){
        console.log('draw')
    }
}

const cc = new Circle(5);
cc.draw();

// every object in javascript has a constructor property which refers
// to the function used to construction the object

console.log(cf.constructor); // f Object()
console.log(cc.constructor);// f Circle()


// functions are also objects

console.log(Circle)

console.log(Circle.constructor)// f Function()


const CircleF = new Function("radius", `
    this.radius = radius;
    this.draw()= function(){
        console.log('draw')
    }
`)

const ccF = new CircleF(5);


// value type
let number = 10;

function increment(number){
    number++;
}

increment(number)
console.log(number);


// reference type
let obj = {value:10};

function increment(obj){
    obj.value++;
}

increment(obj)
console.log(obj);


// Abstraction


function Circle(radius){
    this.radius = radius;
    this.defaultLocation = {x:0,y:0}
    this.computeOptimumLocation = function(){
        //
        //
    }
    this.draw()= function(){
        this.computeOptimumLocation();
        console.log('draw')
    }
}

const c = new Circle(5);
c.computeOptimumLocation = false;// mess up everything
// if compute method only needs to be called inside draw then following will break

c.computeOptimumLocation();
c.draw();

// private members 

function Circle(radius){
    this.radius = radius;
    let defaultLocation = {x:0,y:0}
    let computeOptimumLocation = function(){
        //
        //
    }
    this.draw()= function(){
        computeOptimumLocation();
        console.log('draw')
    }
}

const c = new Circle(5);
c.computeOptimumLocation = false;// mess up everything
// if compute method only needs to be called inside draw then following will break

c.computeOptimumLocation();
c.draw();


// getter and setter 


function Circle(radius){
    this.radius = radius;
    let defaultLocation = {x:0,y:0}
    let computeOptimumLocation = function(){
        //
        //
    }
    this.draw()= function(){
        computeOptimumLocation();
        console.log('draw')
    }

    Object.defineProperty(this,'defaultLocation',{
        get:function(){
            return defaultLocation
        },
        set:function(value){
            defaultLocation = value;
        }
    })
}

const c = new Circle(5);
c.computeOptimumLocation = false;// mess up everything
// if compute method only needs to be called inside draw then following will break

c.computeOptimumLocation();
c.draw();


// create your own prototypical inheritance

function Circle(){
    this.duplicate = function(){

    }
}

function Square(){
    this.duplicate = function(){
        
    }
}

// duplicate method is repeated

function Shape(color){
    this.color = color;
}

Shape.prototype.duplicate = function(){

}


function Circle(radius){
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.draw = function(){

}

const s = new Shape();
const c = new Circle();

// there is no color property in c even though methods are inherited, properties are not


function Circle(radius,color){
    Shape(color)// this wont work because "this" is window
    this.radius = radius;
}

function Circle(radius,color){
    Shape.call(this,color);
    this.radius = radius;
}

function extend(Child,Parent){
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Circle(radius){
    this.radius = radius;
}

function Sqaure(size){
    this.size = size;
}

extend(Circle,Shape);
extend(Sqaure,Shape);
// Method overriding
Circle.prototype.duplicate = function(){
    console.log('Circle duplicated')
}


Circle.prototype.duplicate = function(){
    Shape.prototype.duplicate.call(this);
    console.log('Circle duplicated')
}


// polymorphism
function Shape(){

}

function Sqaure(){
}
    


extend(Sqaure,Shape);

Sqaure.prototype.duplicate = function(){
    console.log('duplicate square')
}

function Circle(){
    
}

extend(Circle,Shape);

Circle.prototype.duplicate = function(){
    console.log('duplicate Circle')
}


let shapes = [new Circle(), new Sqaure()]

for(let shapes of shapes){
    shapes.duplicate()
}

// Mixin

const canEat = {
    eat:function(){
        this.hunger--;
        console.log('eating');
    }
}

const canWalk = {
    walk:function(){
        console.log('walking');
    }
}

const person = Object.assign({},canEat,canWalk)

function Person(){

}
Object.assign(Person.prototype,canEat,canWalk)

function mixin(target,...sources){
    Object.assign(target,...sources)
}


// es6 class

class Circle {
    constructor(radius){
        this.radius = radius;
        this.move = function(){}
    }

    draw(){

    }
}


// static methods

class Circle{
    constructor(radius){
        this.radius = radius;
    }

    // instance methods
    draw(){

    }
}


// method overiding

class Shape{
    move(){

    }
}

class Circle extends Shape {
    move(){
        super.move();
        console.log('circle move');
    }
}