

function simpleDecorator(constructor:Function){
    console.log('simpleDecorator called');
}

@simpleDecorator
class ClassWithSimpleDecorator{

}



let instance_1 = new ClassWithSimpleDecorator();
let instance_2 = new ClassWithSimpleDecorator();
console.log(`instance_1 : ${JSON.stringify(instance_1)}`);
console.log(`instance_2 : ${JSON.stringify(instance_2)}`);


function secondDecorator(constructor: Function) {
    console.log(`secondDecorator called`);
}

@simpleDecorator
@secondDecorator
class ClassWithMultipleDecorators {
}



function classDecorator(constructor: Function) {}
function propertyDecorator(target: any, propertyKey: string) {}
function methodDecorator(
  target: any,
  methodName: string,
  descriptor?: PropertyDescriptor
) {}
function parameterDecorator(
  target: any,
  methodName: string,
  parameterIndex: number
) {}



@classDecorator
class ClassWithAllTypesOfDecorators {
    @propertyDecorator
    id: number = 1;
    @methodDecorator
    print() { }
    setId(@parameterDecorator id: number) { }
}


function decoratorFactory(name: string) {
    return (constructor: Function) => {
        console.log(`decorator function called with : ${name}`);
    }
}

@decoratorFactory('testName')
class ClassWithDecoratorFactory {
}



function classConstructorDec(constructor: Function) {
    console.log(`constructor : ${constructor}`);
}
@classConstructorDec
class ClassWithConstructor {
    constructor(id: number) { }
}


function classConstructorDecExtra(constructor: Function) {
    console.log(`constructor : ${constructor}`);
    constructor.prototype.testProperty = "testProperty_value";
}


@classConstructorDecExtra
class ClassWithConstructorExtra {
    constructor(id: number) { }
}


let classInstance = new ClassWithConstructorExtra(1);
console.log(`classInstance.testProperty = 
    ${(<any>classInstance).testProperty}`);

function auditLogDec(
  target: any,
  methodName: string,
  descriptor?: PropertyDescriptor
) {
  let originalFunction = target[methodName];
  let auditFunction = function (this: any) {
    console.log(`1. auditLogDec : overide of ` + ` ${methodName} called`);
    for (let i = 0; i < arguments.length; i++) {
      console.log(`2. arg : ${i} = ${arguments[i]}`);
    }
    originalFunction.apply(this, arguments);
  };
  target[methodName] = auditFunction;
  return target;
}    


class ClassWithAuditDec {
    @auditLogDec
    print(arg1: string, arg2: string) {
        console.log(`3. ClassWithMethodDec.print`
            + `(${arg1}, ${arg2}) called.`);
    }
}
let auditClass = new ClassWithAuditDec();
auditClass.print("test1", "test2");