// FUNCTION 
// BLOCK of code that perform a specific task, can be invoked whenever needed.

function func_name(){
    //do some work
}

function funct_name(para_1, para_2){
    // do some work
}

//function call / fuunction invoke 
func_name();

// ==================================================================================================================
// my first function program :
// ===================================================================================================================

function my_func(){
    let Name = "suraj kumar";
    console.log("my name is", Name);
    console.log("i am learning javascript now :");
}
my_func();

// =================================================================================================================
function message(msg){            // msg is parameter :
    console.log(msg);
}
message("hello, everyone : suraj this side :") // function call me jo hota hai wo argument hota hai

// =================================================================================================================
// Q >> calculate two number sum using function
// =================================================================================================================

function sumtwonumber(a, b){
    console.log(a + b);
}
sumtwonumber(5, 9);

// =================================================================================================================
// return statement :

function add(a, b){
    sum = a + b
    return sum
    
}
let val = add(5, 6);
console.log(val);

// ================================================================================================================
// Arrow function 
// compact way of writing a function 

const functionname = (para_1, para_2) =>{
    //do some work
}
const sum5 = (a , b) =>{
    return a + b
}
let add2 = sum5(5, 9);
console.log(add2);

// =================
// Q >> add two number from arrow function

const sum2 = (a, b) => {
    console.log(a + b)

}
sum2(7, 8)

// ====================================================================================================================
//  Q >> create a function keyword that takes a string as an argument & return the number of vowel in the string
// =====================================================================================================================

function countvowels(str){
    count = 0;
    for(let char of str){

        if(
            char === "a" || 
            char === "e" || 
            char === "i" || 
            char === "o" || 
            char === "u"
        ){
            count++
        }
    }
    console.log(count)
}
countvowels("suraj kumar yadav khanna")

// ==================================================================================================================

// for each loop in array :=================================

// ==================================================================================================================

// arr.forEach(callbackfunction)
// callbackfunction : here, it is a function to execute for each elemment in the array

// *A callback is a function passed as an argument to another function 

arr1.forEach( (val) => {
    console.log(val)
})

// ===================================================================================================================
// Q >> for a given array of number, print the square of each value using forEach loop.
// ===================================================================================================================

let nums = [2, 3, 4, 5, 6, 7];

nums.forEach((num) => {
    console.log(num * num);
});

// some more array methods
// map

// create a new array with the result of some operation. The value its callback return are used to form new array

// arr1.map(callbackFnx(CSSMathValue, indexedDB,array))

let newArr = arr1.map((val) => {
    return val * 2
});



