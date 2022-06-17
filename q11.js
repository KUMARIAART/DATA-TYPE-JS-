//strings example
const name = 'Peter';
const name1 = "Jack";
const result = `The names are ${name} and ${name1}`;



//Access String Characters
//One way is to treat strings as an array. For example,
const a = 'hello';
console.log(a[1]); // "e"

//Another way is to use the method charAt(). For example,
const a1 = 'hello';
console.log(a1.charAt(1)); // "e"



//JavaScript Strings are immutable
let a2 = 'hello';
a2[0] = 'H';
console.log(a2); // "hello"

let a3 = 'hello';
a3 = 'Hello';
console.log(a3); // "Hello"



//JavaScript is Case-Sensitive
const a4 = 'a4';
const b = 'A'
console.log(a4 === b); // false



//JavaScript Multiline Strings
// using the + operator
const message1 = 'This is a long message ' +
    'that spans across multiple lines' + 
    'in the code.'

// using the \ operator
const message2 = 'This is a long message \
that spans across multiple lines \
in the code'



//JavaScript String Length
const l = 'hello';
console.log(l.length); // 5



// JavaScript String Objects
// You can also create strings using the new keyword. For example,
const ab = 'hello';
const bc = new String('hello');

console.log(ab); // "hello"
console.log(bc); // "hello"

console.log(typeof ab); // "string"
console.log(typeof bc); // "object"



//JavaScript String Methods
const text1 = 'hello';
const text2 = 'world';
const text3 = '     JavaScript    ';

// concatenating two strings
const result1 = text1.concat(' ', text2);
console.log(result1); // "hello world"

// converting the text to uppercase
const result2 = text1.toUpperCase();
console.log(result2); // HELLO

// removing whitespace from the string
const result3 = text3.trim();
console.log(result3); // JavaScript

// converting the string to an array
const result4 = text1.split();
console.log(result4); // ["hello"]

// slicing the string
const result5= text1.slice(1, 3);
console.log(result5); // "el"



//JavaScript String() Function
const ax = 225; // number
const by = true; // boolean

//converting to string
const reslt1 = String(ax);
const reslt2 = String(by);

console.log(reslt1); // "225"
console.log(reslt2); // "true"



//Escape Character
// const name = 'My name is \'Peter\'.';
// console.log(name);