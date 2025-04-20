## Fucntions

To Declare Function in typescript we use type keyword in parameter and return type.

function person(name: String) {
  return `Hello ${name} !!`
}




# Retrun Type In Function

To declare return type in function we use arrow function.

const person2 = (name: String)*: String* => {
  return `Hello ${name} !!`
}

*: String* -> This Part Says that, the fucntion return type is String



# Void Type
The Function, that do not return anything, its return type is Void. If the Function return anything, we dont care. Its Void

function printMsg(msg: String): void {
  console.log(msg);
  return undefined
}

we can also retrun keyword, but it will undefined 




# Never Type
Never type is used when the function never finish executing. Dont Mixed Wiht *void*. *void* meaning it maybe undefined
But *never* will be simple nothing