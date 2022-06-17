typeof 15;  // Returns: "number"
typeof (42.7);  // Returns: "number"
typeof "AARTI";  // Returns: "string"

typeof Null;  // Output: "object"

typeof 15;  // Output: "number"
typeof 42.7;  // Output: "number"
typeof 5.5e-6;  // Output: "number"
typeof Infinity;  // Output: "number"
typeof NaN;  
// Output: "number". Despite being "Not-A-Number"

typeof '';  // Output: "string"
typeof 'hello';  // Output: "string"
typeof '12';  // Output: "string". Number within quotes is typeof string

typeof true;  // Output: "boolean"
typeof false;  // Output: "boolean"

typeof undefined;  // Output: "undefined"
typeof undeclaredVariable; // Output: "undefined"

typeof {name: "John", age: 18};  // Output: "object"

typeof [1, 2, 4];  // Output: "object"

typeof addNumbers(){};  // Output: "function"

console.log(typeof "Navgurukul"); 
console.log(typeof {name: "Shweta", age: 118});
console.log(typeof [1, 2, 4]); 
console.log(typeof function(){});

//2 What is the error in the following code?
console.log(typeOf ({name: "Shweta", age: 18}));
//Output: SyntaxError: missing ) after argument list
//ohhhh you missed a parenthesis.



