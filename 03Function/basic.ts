// Number

function sum(num: number) {
  // Always type decalre in parameter
  return num + num;
}

sum(3);

// String

function greet(person: string) {
  return `Hi There ${person}`;
}

greet("Saumya");

// Arrow Function with multi parameter

const doSomething = (person: string, age: number) => {
  return `${person} age is ${age}`;
};

doSomething("ABC", 25);

// Default Parameter

function greet1(person: string = "Somebody") {
  return `Hi There ${person}`;
}

greet1();

// Return Type Annotaion

function random(num: number): number {
  return num * num;
}

random(2);
