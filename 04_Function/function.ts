// Fucntion. Type In Parameter

function person(name: String) {
  return `Hello ${name} !!`
}

console.log(person("Alex")); // Hello Alex !!



// More Than One Parameter With Arrow Function
const greet = (person: String, msg: String) => {
  return `${person} ${msg}`;
}

console.log(greet("Alex", "Hello")); //Alex Hello



// Default Parameter
const greet2 = (person: String, msg: String = "Hello There") => {
  return `${person} ${msg}`;
}

console.log(greet2("Alex")); // Alex Hello There



// Return Type
const add = (num: number): number => {
  return num + num
}

console.log(add(5)); // 10



// Anonymous Function
const colors = ["red", "green", "blue"];
colors.forEach((colors) => {

})

/*
 * In Here TtypeScript Will Infer The Type Of The Variable. It Knows it will be string. Done Need To Declare
*/



// Void Type
// Dont Return Any Value
function printMsg(msg: String): void {
  console.log(msg);
  return undefined
}