//You can use exponential notation e to include too large or too small numbers. For example,

const a1 = 5e9;
console.log(a1); //5000000000

const a2 = 5e-5;
console.log(a2); // 0.00005



//Numbers can also be denoted in hexadecimal notation. For example,

const a = 0xff;
console.log(a); // 255

const b = 0x00 ;
console.log(b); // 0



//+ Operator with Numbers
//When + is used with numbers, it is used to add the numbers. For example,

const a3 = 4 + 9;
console.log(a3); // 13
//When + is used with numbers and strings, it is used to concatenate them. For example,

const a4 = '4' + 9;
console.log(a4); // 49
//When a numeric string is used with other numeric operations, the numeric string is converted to a number. For example,

const a5 = '4' - 2;
console.log(a5); // 2

const a6 = '4' / 2;
console.log(a6); // 2

const a7 = '4' * 2;
console.log(a7); // 8




//JavaScript NaN
//In JavaScript, NaN(Not a Number) is a keyword that indicates that the value is not a number.

//Performing arithmetic operations (except + ) to numeric value with string results in NaN. For example,

const a8 = 4 - 'hello';
console.log(a8); // NaN
//The built-in function isNaN() can be used to find if a value is a number. For example,

const a9 = isNaN(9);
console.log(a9); // false

const A = isNaN(4 - 'hello');
console.log(A); // true
//When the typeof operator is used for NaN value, it gives a number output. For example,

const A1 = 4 - 'hello';
console.log(A1); // NaN
console.log(typeof A1); // "number"



// JavaScript Infinity
// In JavaScript, when calculation is done that exceeds the largest (or smallest) possible 
// number, Infinity (or -Infinity) is returned. For example,

const A2 = 2 / 0;
console.log(A2); // Infinity

const A3 = -2 / 0;
console.log(A3); // -Infinity



// JavaScript BigInt
// In JavaScript, Number type can only represent numbers less than (253 - 1) and more than
//  -(253 - 1).A BigInt number is created by appending n to the end of an integer JavaScript 
//Numbers Are Stored in 64-bit

// BigInt value
const value = 900719925124740998n;

// Adding two big integers
const value1 = value + 1n;
console.log(value1); // returns "900719925124740999n"



// Precision Problems
// Operations on floating-point numbers results in some unexpected results
const A4 = 0.1 + 0.2;
console.log(A4); // 0.30000000000000004

//To solve the above problem, you can do something like this:

const A5 = (0.1 * 10 + 0.2 * 10) / 10;
console.log(A5); // 0.3
//You can also use the toFixed() method.

const A6 = 0.1 + 0.2;
console.log(A6.toFixed(2)); // 0.30
toFixed(2) //rounds up the decimal number to two decimal values.

const A7 = 9999999999999999
console.log(A7); // 10000000000000000
//Note: Integers are accurate up to 15 digits.



//Number Objects
//You can also create numbers using the new keyword. For example,

const A8 = 45;

// creating a number object
const B = new Number(45);

console.log(A8); // 45
console.log(B); // 45

console.log(typeof A8); // "number"
console.log(typeof B); // "object"



//JavaScript Number Methods
// check if a is integer
const c = 12;
console.log(Number.isInteger(c)); // true

// check if b is NaN
const e = NaN;
console.log(Number.isNaN(e)); // true

// display upto two decimal point
const d = 5.1234;
console.log(d.toFixed(2)); // 5.12



//JavaScript Number Properties
// largest possible value
const f = Number.MAX_VALUE;
console.log(f); // 1.7976931348623157e+308

// maximum safe integer
const g = Number.MAX_SAFE_INTEGER;
console.log(g); // 9007199254740991



//JavaScript Number() Function
//The Number() function is used to convert various data types to numbers
const h = '23'; // string
const j = true; // boolean

//converting to number
const result1 = Number(a);
const result2 = Number(b);

console.log(result1); // 23
console.log(result2); // 1










