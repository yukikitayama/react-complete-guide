const myName = 'Yuki';
console.log(myName);

// myName = 'Kitayama';
// console.log(myName);

function printMyName(name) {
  console.log(name);
}

printMyName('Yuki');

const printMyName2 = (name) => {
  console.log('Yuki');
}

const multiply = (number) => {
  return number * 2;
}

console.log(multiply(2));

const multiply2 = number => number * 2;
console.log(multiply2(3));

class Human {
  constructor() {
    this.gender = 'male';
  }

  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  constructor() {
    // Important
    super();
    this.name = 'Yuki';
  }

  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
person.printGender();

class Human2 {
  gender = 'male';

  printGender = () => {
    console.log(this.gender);
  }
}

class Person2 extends Human2 {
  name = 'Yuki';

  printMyName = () => {
    console.log(this.name);
  }
}

const person2 = new Person2();
person2.printMyName();

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];
console.log(numbers);
console.log(newNumbers);

const person3 = {
  name: 'Yuki'
}

const newPerson = {
  ...person3,
  age: 32
}

console.log(newPerson);

const filter = (...args) => {
  return args.filter(el => el === 1);
}

console.log(filter(1, 2, 3));

const numbers2 = [1, 2, 3];
[num1, num2, num3] = numbers2;
console.log(num1, num2);

[num1, , num3] = numbers2;
console.log(num1, num3);

const number3 = 1;
const number4 = number3;
console.log(number4);

const person4 = {
  name: 'Yuki'
}

const secondPerson = person4;
person4.name = 'Kitayama';
console.log(secondPerson);

const person5 = {
  name: 'Yuki'
}

const thirdPerson = {
  ...person5
};
person5.name = 'Kitayama';
console.log(thirdPerson);

const numbers3 = [1, 2, 3];
const doubleNumArray = numbers3.map((num) => {
  return num * 2;
});

console.log(numbers3);
console.log(doubleNumArray);