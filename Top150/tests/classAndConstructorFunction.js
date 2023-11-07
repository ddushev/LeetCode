class Person {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`Hello my name is ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, studentId) {
        super(name);
        this.studentId = studentId;
    }

    study() {
        return `${this.name} is studying`;
    }
}

// function Person(name) {
//     this.name = name;

//     Person.prototype.sayHello = function () {
//         console.log(`Hello my name is ${this.name}`);
//     }
// }

const person1 = new Person('Adriana');
const student1 = new Student('Daniel');

console.log(student1.study());

const person1Prototype = Object.getPrototypeOf(person1);
console.log(person1Prototype)

const student1Prototype = Object.getPrototypeOf(student1);
console.log(student1Prototype)

