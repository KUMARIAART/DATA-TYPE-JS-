/*strings example
const name = 'ram';
const name1 = "hari";
const result = `The names are ${name} and ${name1}`;*/

/*const number1 = 3;
const number2 = 3.433;
const number3 = 3e5 // 3 * 10^5*/

/*const number1 = 3/0;
console.log(number1); // Infinity*/

const number2 = -3/0;
console.log(number2); // -Infinity

// strings can't be divided by numbers
const number3 = "abc"/3; 
console.log(number3);  // NaN

// BigInt value
// const value1 = 900719925124740998n;

// Adding two big integers
const result1 = value1 + 1n;
console.log(result1); // "900719925124740999n"

// const value2 = 900719925124740998n;

// Error! BitInt and number cannot be added
const result2 = value2 + 1; 
console.log(result2); 

const dataChecked = true;
const valueCounted = false;

// let name;
console.log(name); // undefined

// let name = undefined;
console.log(name); // undefined

// const number = null;

// two symbols with the same description

const value1 = Symbol('hello');
const value2 = Symbol('hello');

const student = {
    firstName: 'ram',
    lastName: null,
    class: 10
};

// data is of undefined type
let data;

// data is of integer type
data = 5;

// data is of string type
data = "JavaScript Programming";

const name = 'ram';
typeof(name); // returns "string"

const number = 4;
typeof(number); //returns "number"

const valueChecked = true;
typeof(valueChecked); //returns "boolean"

const a = null;
typeof(a); // returns "object"


