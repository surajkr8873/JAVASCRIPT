// STRINGS :- =============================
// STRING is immmutable.

// string >> string is a sequence of character used to represent text.

// crete a string
let str = "suraj kumar";
// for string length
console.log(str.length);

// STRING INDICES
console.log(str[0]);
console.log(str[1]);
console.log(str[2]);
console.log(str[3]);
console.log(str[4]);
console.log(str[5]);
console.log(str[6]);
console.log(str[7]);
console.log(str[8]);
console.log(str[9]);
console.log(str[10]);
console.log(str[11]);

// TEMPLATE LITERALS :- 

// A way to have embeded exxpressions in strings 
// `this is a template literals`

// STRING INTERPOLATION:-

// to create strings by doing substitutionn of placeholder:-

// `string text${expresssions} string text`

let obj = {
    item : "pen",
    price : 10,
};

let output = `the cost of pen is ${obj.item} is ${obj.price} rupees`
console.log(output);

// basically isme hum koi coma(,) use krne ki jarurat nahi hoti.isme koi bhi variable ko hum bina coma(,) ke likh skte hai

console.log("suraj \n kumar");

// STRING METHOD 
// these are built-in functions to manipulate a string.

// str.touppercase()
// str.tolowercase()
// str.trim()

// ==========================================================================================
// idx strt  with 0 

// str.slice(start,end?) // return part of string
// str1.concat(str2)  /// join str2 with str1
// str.replace(searchval, newval) 
// str.charAt(idx)

let str1 = "Suraj Kumar  ";
let str2 = "Donkey";
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());
console.log(str1.trim()); // remove all the extra space at  end and start.

console.log(str1.slice(0, 4));
console.log(str1.concat(str2));
console.log(str2.replace("D" , "h"));
console.log(str1.charAt(4)); // kon  sa idx pr kon sa character hai wo find krta hai.