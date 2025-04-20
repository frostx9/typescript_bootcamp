## Type Annotation Basic
Variable Declaration Variable : type = value

# String Annotation
const movie: *string* = "Top Gun"


# Number Annotation
const movie: *number* = 14


# Boolean Annotation
const movie: *boolean* = true



## Type Inference
we dont need to declare the type of the variable. Typescript will infer the type of the variable. Meaning if I assign a value to the variable, the variable hold the type of the value from the begining, It cant change the type later

let x = 23 .. Now x is holdting the type number and it remembering

x = "Hello" ... Not Allowed




## Any Type
Any type is used when we don't know the type of the variable. It is used when we want to use a variable in any type. We Can the change the value later multipale times

let x: any = 23
x = "Hello"
x = true


*Implicit Any*
if we decalrae a variable without type it implictly hold the type any

let y  .... now y is holdting the type any

its beetter do this .... let y : string;