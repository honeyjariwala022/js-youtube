// const userEmail = "honey@gmail.com"
// const userEmail = []

// if(userEmail){
//     console.log("Got User Email");
// }else{
//     console.log("Don't Have User Email");
    
// }

// FALSY VALUES//
// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN
// TRUTHY VALUES//
// "0"->Because It Is In a String , 'false' , " " , [] , {} , function(){}
// “Any value that comes under a string is called a truthy value.”


// if (userEmail.length === 0){
//     console.log("Array Is Empty");   
// }

// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0){
//     console.log("Object Is Empty");
    
// }

// Nullish Coalescing Operator (??) : null , Undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20 
console.log(val1);


// Terniary Operator//
// condition ? true : false
 
const iceTeaPrice = 100
// iceTeaPrice >=80 ? console.log("Less Than 80") : console.log("More Than 80");
iceTeaPrice <=80 ? console.log("Less Than 80") : console.log("More Than 80");
