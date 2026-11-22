//  LOOPS AND STRINGS

 // loops 
 // loops are used to execute a piece of code again and again.

 //Eg :-

 // Q >> print your name 5 times.

 for (let i = 1; i <= 5; i++){
    console.log("suraj kumar");
 }

//  for (initialization, condition, updation){
    // do some work
//  }

// Q >> calculate a number from 1 to n 

let sum = 0;
for ( i = 1; i <= 10; i++){
    sum+= i;
}
console.log(sum);
console.log("loop has ended");

// // TYPES OF LOOPS :- ===========================================================

// i >> while 
// ii >> for
// iii >> do while

// WHILE LOOP:- ==========================

// while(condition){
//     //do some work
// }


let num3 = 1;
while (num3 <= 5){
    console.log(i);
    num3++;
}

// DO WHILE LOOP :-

// run at least one time 

let j = 1;
do{
    console.log(j);
    j++;
}while(j >= 5);

// // FOR LOOP :- ===========================

// for(let val of strval){
//     //do soome work
// }

let string = "suraj kumar";
for(let i of string){
    console.log(i)
}

let student = {
    name : "suraj kumar",
    age : 17,
    cgpa : 7.5,
    ispass : true
};

// for(let i in student){
//     console.log(i);
// }

// jab bhi hum for i in krenge to wo value return nahi krti wo sirf keys return krti hai.

let student2 = {
    name : "suraj kumar",
    age : 17,
    cgpa : 7.5,
    ispass : true
};

for(let i in student){
    console.log(i, student2[i]);
}

// key or value dono print karwana hai to uske variable ko likhna pdega i ke sath.

// Q >> print all the even number from 1 to 100;

let num = 1;
for(let i = 1; i <= 100; i++){
    if (i % 2 == 0){
        console.log(i)
    }
}

// console.log("loop has ended all the even number :")

// Q >> print all the odd  number from 1 to 100

let num2 = 1;
for(let i = 1; i <= 100; i++){
    if (i % 2 !== 0){
        console.log(i)
    }
}