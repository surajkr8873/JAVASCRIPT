// ARRAY >>
// collection of item 


// EG :-

let heroes = ["ironman", "hulk", "thor", "baalveer"];
let marks = [89, 56, 89, 52, 88];
let info = ["Rahul", 86, "delhi"];

console.log(heroes);
console.log(heroes.length);

console.log(typeof heroes);

// ARRAY indices

let num = [1, 2, 5, 8, 78];
console.log(num[0]);
console.log(num[1]);
console.log(num[2]);
console.log(num[3]);
console.log(num[4]);

// change of ARRAY
num[3] = 55;
console.log(num);

// ARRAY is mutable :

// looping in ARRAY

// Q >> print all heroes


let hero = ["ironman", "hulk", "thor", "baalveer"];

for(let i = 0; i < hero.length; i++){
    console.log(hero[i]);
}
// =========================================================================================================
// Q >> calculate avg marks :
// =========================================================================================================

let mark = [98, 87, 67, 90, 86];
let sum = 0;
for(let num of marks){
    sum = sum += num
    
}
console.log("Avg of student marks", sum / 5);

// ==============================================================================================================
// Q >> five item price is given, 10% discount for  each item find the value of item price after applying 10% off.
// ==============================================================================================================

let prices = [250, 645, 300, 900, 50];
let finalprice = 0;
for(let price of prices){
    offer = price / 10
    finalprice = price - offer
    console.log("final price of the product", finalprice , "rupees");
}

// =============================================================================================================
// Array method :
// =============================================================================================================

// push() : add to ended
// pop() : delete from end & return
// tostring() : convert array to string

let add = [1, 2, 3, 4, 5];
add.push(8)
console.log(add);

add.pop()
console.log(add);

add.toString()
console.log(add);

// ======================================================================================================
// concat() : joins array and return result
// unshift() : add to start
// shift()  : delete from start & return 

let arr1 = ["suraj", "monu",];
let arr2 = ["rohit", "shubham"];

let arr3 = arr1.concat(arr2);
console.log(arr3);

let arr4 = ["suraj", "monu",]

arr4.unshift("suraj kumar");
console.log(arr4);

arr4.shift();
console.log(arr4);

// ====================================================================================================

// slice() : return a piece of thee array
// slice(stridx, endidx)

// splice() : change original array(add, removve, replace)
// splice(strtidx, delcount, new_element)

let more_name = ["suraj", "supu", "madhav", "baalveer", "chhota_bheem"];
// more_name.slice(1, 4)
console.log(more_name.slice(0, 2));
console.log(more_name.splice(1, 1));