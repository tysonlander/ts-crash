"use strict";
// Basic Types
let id = 5;
let company = 'A Company';
let isPublished = true;
let x = 'Hello';
let ids = [1, 2, 3, 5];
let arr = [1, true, 'hello'];
// Tuple
let person = [1, 'Tyson', true];
// Tuple Array
let employee;
employee = [
    [1, 'John'],
    [2, 'Jill'],
];
// Union
let productId = 22;
productId = '22';
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'John',
};
// Type Assertion
let cid = 1;
// way 1
// let customerId = <number>cid
// way 2
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'John',
};
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is bow registered`;
    }
}
const harry = new Person(1, 'Harry Potter');
const ron = new Person(1, 'Ron Weasley');
// Subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
// Generics (Allows you to create reusable components)
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['John', 'Jill', 'Jack']);
// numArray.push('hello') - This will throw an error because numArray has been set to only use number type
