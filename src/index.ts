// Basic Types
let id: number = 5;
let company: string = 'A Company';
let isPublished: boolean = true;
let x: any = 'Hello';

let ids: number[] = [1, 2, 3, 5];
let arr: any[] = [1, true, 'hello'];

// Tuple
let person: [number, string, boolean] = [1, 'Tyson', true];

// Tuple Array
let employee: [number, string][];

employee = [
  [1, 'John'],
  [2, 'Jill'],
];

// Union
let productId: string | number = 22;
productId = '22';

// Enum
enum Direction1 { // if the first item is not set than it will default to value of 0 index
  Up,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

// Objects
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: 'John',
};

// Type Assertion
let cid: any = 1;
// way 1
// let customerId = <number>cid
// way 2
let customerId = cid as number;

// Functions
function addNum(x: number, y: number): number {
  return x + y;
}

function log(message: string | number): void {
  console.log(message);
}

// Interfaces (can not be used with primatives or unions. Best used with objects)
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number; // "?" makes it an optional property
}

const user1: UserInterface = {
  id: 1,
  name: 'John',
};

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const subtract: MathFunc = (x: number, y: number): number => x - y;

interface PersonInterface {
    id: number;
    name: string;
    register(): string 
  }

// Classes
class Person implements PersonInterface{
  id: number; // they are public by default (public, private, protected)
  name: string;

  constructor(id: number, name: string) {
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
    position: string

    constructor(id: number, name: string, position: string){
        super(id, name)
        this.position = position
    }
}

// Generics (Allows you to create reusable components)
function getArray<T> (items: T[]): T[]{
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray(['John', 'Jill', 'Jack'])

// numArray.push('hello') - This will throw an error because numArray has been set to only use number type