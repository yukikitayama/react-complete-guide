// Primitives: numer, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;

age = 12;

let userName: string;

userName = 'Max';

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

// type keyword to create a new type
type Person = {
  name: string;
  age: number;
}

// let person: {
//   name: string,
//   age: number
// };
let person: Person;

person = {
  name: 'Max',
  age: 32
};

// person = {
//   isEmployee: true
// }

// array of objects
// let people: {
//   name: string,
//   age: number
// }[];
let people: Person[];

// Type inference
// You should rely on type inference so long as possible to avoid redundancy
// No need to do; let course: string = 'React ...';
let course = 'React - The Complete Guide';
// The above initialize it as string

// Shows error because from the above statement TS infers type
// course = 123;

// Union type, more than type
let course2: string | number = 'React';
// No error below
course2 = 123;

// Okay to union with object too
let userNames: string | string[];

// Functions and types
function add(a: number, b: number) {
  return a + b;
}

// void
function print2(value: any) {
  console.log(value);
}

// Generics <T>
// TS looks at input type and return type will be updated
function insertAtBeginning<T>(array: T[], value: T) {
  // spread operator ... to copy array
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

// number type
const updatedArray = insertAtBeginning(demoArray, -1);
// [-1, 1, 2, 3]

// string type
const stringArray = insertAtBeginning(['a', 'b'], 'c');

// Below doesn't work because array type T is locked with string
// const unionArray = insertAtBeginning(['a', 'b'], 1);

// updatedArray[0].split('');
