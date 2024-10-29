// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";
{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}

// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
}

show();
// console.log(functionVar); // Throws ReferenceError
// console.log(functionLet); // Throws ReferenceError
// console.log(functionConst); // Throws ReferenceError

//Practice task, block scope test
{
    let let1 = "test 1";
    const const1 = "const 1";
    var var1 = "var 1";

    let1 = "reassign value to var1 (in block)";
    // const1 = "reassign value to const1 (in block)"; //error can't reassign
    var1 = "reassign value to var1 (in block)";

    console.log("Value in block: " + let1); 
    console.log("Value in block: " + const1); 
    console.log("Value in block: " + var1); 

}

let1 = "reassign value to var1 (outside block)";
const1 = "reassign value to const1 (outside block)";
var1 = "reassign value to var1 (outside block)";

console.log("Value outside of block: " + let1); 
console.log("Value outside of block: " + const1); 
console.log("Value outside of block: " + var1); 