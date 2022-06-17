//JavaScript Symbol
// two symbols with the same description

const value1 = Symbol('hello');
const value2 = Symbol('hello');

console.log(value1 === value2); // false
//Though value1 and value2 both contain the same description, they are different.



//Creating Symbol
//You use the Symbol() function to create a Symbol. For example,

// creating symbol
const x = Symbol()

typeof x; // symbol
//You can pass an optional string as its description. For example,

const X = Symbol('hey');
console.log(X); // Symbol(hey)



//Access Symbol Description
//To access the description of a symbol, we use the . operator. For example,

const x1 = Symbol('hey');
console.log(x1.description); // hey



//Add Symbol as an Object Key
//You can add symbols as a key in an object using square brackets []. For example,

let id = Symbol("id");

let person = {
    name: "Jack",

    // adding symbol as a key
    [id]: 123 // not "id": 123
};

console.log(person); // {name: "Jack", Symbol(id): 123}



//Symbols are not included in for...in Loop
//The for...in loop does not iterate over Symbolic properties. For example,

let id1 = Symbol("id");

let person1 = {
    name: "Jack",
    age: 25,
    [id1]: 12
};

// using for...in
for (let key in person1) {
    console.log(key);
}



//Symbol Methods
// get symbol by name
let sym = Symbol.for('hello');
let sym1 = Symbol.for('id');

// get name by symbol
console.log( Symbol.keyFor(sym) ); // hello
console.log( Symbol.keyFor(sym1) ); // id



//Symbol Properties Example
const x2 = Symbol('hey');

// description property
console.log(x2.description); // hey

const stringArray = ['a', 'b', 'c'];
const numberArray = [1, 2, 3];

// isConcatSpreadable property
numberArray[Symbol.isConcatSpreadable] = false;

let result = stringArray.concat(numberArray);
console.log(result); // ["a", "b", "c", [1, 2, 3]]



//Benefit of Using Symbols in Object
// If the same code snippet is used in various programs, then it is better to use Symbols in
// the object key. It's because you can use the same key name in different codes and avoid 
// duplication issues. For example,

let persoN = {
    name: "Jack"
};

// creating Symbol
let Id = Symbol("id");

// adding symbol as a key
persoN[Id] = 12;








