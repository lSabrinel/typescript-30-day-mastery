
*******
Steps
*******
npm init -y  -> to create packages.json
npm install typescript --save-dev -> ti create package-lock.json and and install node modules
npx tsc --init
  			---> initialize env

npx tsc index.ts   ---> to create js file form ts. npx .. not just tsc because the tsc is installed locally in the node_modules and pnly npx knows where it is
node index.js  ---> to execute the script


*********************
intro & type concept
**********************
TypeScript is a superset of JavaScript that adds types.

Type inference in TS: is TypeScript's ability to automatically determine and assign types to variables, function return values, and expressions based on their initial value and context, without requiring explicit type annotations.

Type Shapes in TS: refer to the structure of an object, where the type is defined by the properties and methods it contains, not by its specific class or implementation.

Any in TS: There are some places where TypeScript will not try to infer what type something is—generally when a variable is declared without being assigned an initial value.Variables of type any can be assigned to any value and TypeScript won’t give an error if they’re reassigned to a different type later on.

type annotations == type declarations: let mustBeAString : string;

***************
tsconfig.json
***************
"es2017": 2017 version of EcmaScript standards // ECMAScript is a standard for scripting languages, including JavaScript
"commonjs": syntax to import and export modules.
"strictNullChecks", variables can only have null or undefined values if they are explicitly assigned those values.
"include" that determines what files the compiler applies the rules to


*****
FAQ
*****

Why TypeScript creates .js files instead of running .ts directly
******************************************************************
1. Because browsers and Node.js only understand JavaScript: TypeScript is not a language that computers or browsers can run directly/ It’s a superset of JavaScript
2. TypeScript = Development Tool, JavaScript = Execution Code


What is Node.js?
******************
Node.js is a runtime environment that lets you run JavaScript outside the browser — for example, on your computer or a server.
Normally, JavaScript runs inside browsers (like Chrome or Firefox) to make web pages interactive.
Node.js takes the same JavaScript engine from Chrome (called V8) and runs it on your machine, not in a webpage.
So, with Node.js, you can do things like:

+ read and write files,
+ run backend servers,
+ use JavaScript (or compiled TypeScript) for tools and automation.

*********
Functions
**********
you have to pass arguments in the same order as the aparameters or else the function cannot be executed.

if you add an optional parameter in ts function you write ? after it name.
parameters with default values don’t need a ? after their name, 
since assigning a default value already implies that they’re optional parameters.

TypeScript can also infer the types of values returned by 
functions
Preview: Docs Loading link description.
It does this by looking at the types of the values after a function’s return statements


Explicit Return Types
************************
You can annotate parameters and return values by functions (even in arrow functions).


Void Return Type
*****************
If the function returns nothing the return type should be Void.

Documenting Functions
**********************
TypeScript recognizes JavaScript comment syntax

Comments:
----------
// This is a single line comment 

/*
This is a 
multiline
comment
*/

Documentation comments:
--------------------------
/**
  * Returns the sum of two numbers.
  *
  * @param x - The first input number
  * @param y - The second input number
  * @returns The sum of `x` and `y` // No return value
  *
  */

***************
Complex Types 
****************

Array Type Annotations
*************************
It could be one of these two:

let names: string[] = ['Danny', 'Samantha'];
let names: Array<string> = ['Danny', 'Samantha'];


Multi-dimensional Arrays
-----------------------------
let arr: string[][] = [['str1', 'str2'], ['more', 'strings']];
let numbersMulti : number[][][] = [ [[1],[2,3]], [[7],AnotherArray] ];


Tuples
*******
JavaScript arrays are flexible and can have elements of different types. With TypeScript, we can also define arrays with a fixed sequence of types: Tuples.

let ourTuple: [string, number, string, boolean] = ['Is', 7 , 'our favorite number?' , false];

tuples have fixed lengths,

Rest Parameters
*****************
The rest parameter syntax allows a function to accept an indefinite number of arguments as an array.

function addPower(p: number, ...numsToAdd: number[]): number{} 
OR
function addPower(p,...numsToAdd: number[]): number{}
NOT SURE ?

Spread Syntax
****************

an example of an array of tuples: let danceMoves: [string, number, boolean][] = [
  ['chicken beak', 4, false],
  ['wing flap', 4, false],
  ['tail feather shake', 4, false],
];

*************
Custom Types
*************

Enums
******

Numeric Enums
---------------

We use enums when we’d like to enumerate all the possible values that a variable could have.

enum Direction {
  North,
  South,
  East,
  West
}

enum Direction {
  North = 7,
  South,
  East,
  West
}

enum Direction {
  North = 8,
  South = 2,
  East = 6,
  West = 4
}

String Enums
-------------
With numeric enums, the numbers could be assigned automatically, but with string enums we must write the string explicitly.

enum DirectionNumber { North, South, East, West }
enum DirectionString { North = 'NORTH', South = 'SOUTH', East = 'EAST', West = 'WEST' }

Object Types
*************

annotation: let aPerson: {name: string, age: number};

TypeScript places no restrictions on the types of an object’s properties. They can be enums, 
arrays, and even other object types!

let aCompany: {
  companyName: string, 
  boss: {name: string, age: number}, 
  employees: {name: string, age: number}[], 
  employeeOfTheMonth: {name: string, age: number},  
  moneyEarned: number
};

Type Aliases
*************
Type Aliases allow defining types with a custom name (an Alias).
Type aliases let you give a name to a type in TypeScript.

They are used to:
- make types easier to read
- reuse complex types
- express intent clearly

example:

type Person = { name: string, age: number };
let aCompany: {
  companyName: string, 
  boss: Person, 
  employees: Person[], 
  employeeOfTheMonth: Person,  
  moneyEarned: number
};

Function Types
***************

One of the neat things about TypeScript is that we can precisely control the kinds of functions assignable to a variable. 
We do this using function types, which specify the argument types and return type of a function.

type StringsToNumberFunction = (arg0: string, arg1: string) => number;

This syntax is just like arrow notation for functions, except instead of the return value we put the return type.
Function types are most useful when applied to callback functions.

**Note:** A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

Generic Types
**************
TypeScript’s generics are ways to create collections of types (and typed functions, and more) that share certain formal similarities. These collections are parameterized by one or more type variables.

type Family<T> = {
  parents: [T, T], mate: T, children: T[]
};

The following assignment will be error free:

let aStringFamily: Family<string> = {
  parents: ['stern string', 'nice string'],
  mate: 'string next door', 
  children: ['stringy', 'stringo', 'stringina', 'stringolio']
}; 


Generic Functions
*******************
Generic functions are functions that work with different types while preserving type safety.

Instead of fixing the type in advance, you parameterize the type and let TypeScript infer it when the function is used.

function getFilledArray<T>(value: T, n: number): T[] {
  return Array(n).fill(value);
}


************
Union Types
************

Defining Unions
*****************

Unions: Docs Some values can have more than one possible type. TypeScript represents these either-or types using a union.
allow us to define multiple allowed type members by separating each type member with a vertical line character 

let ID: string | number;

// number
ID = 1;

// or string
ID = '001';

console.log(`The ID is ${ID}.`);


In this example, string | number is a union that allows ID to be a string or a number. 
It’s more flexible than a single primitive type, but much more specific than the any type.

Unions can be written anywhere a type value is defined, including function parameters.

Type Narrowing
****************

Type narrowing is a TypeScript process that refines a value of multiple types into a single, specific type.
It is when TypeScript can figure out what type a variable can be at a given point in our code.

Inferred Union Return Types
****************************

TypeScript is able to infer types in many cases so that we don’t have to manually write them.
A great example is a function’s return type.
TypeScript will look at the contents of a function and infer which types the function can return. 
If there are multiple possible return types, TypeScript will infer the return type as a union.