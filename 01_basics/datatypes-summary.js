//primitive data types//

// 7 categories - types : String , Number , Boolean , Null , Undefined,Symbol , BigInt//

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

//const bigNumber = 85221478521258n


//Reference type(Non primitive)//

// Arrays , Objects , Functions //

// const heros = ["Saktiman" , "Naagraj" , "Doga"];

// let myobj = {
//     name: "Honey",
//     age:18,
// };

// const myFuntion = function() {
//     console.log("Hello World");
// };

// console.log(typeof bigNumber);

// console.log(typeof outsideTemp);

// console.log(typeof scoreValue);

// console.log(typeof myFuntion);

// console.log(typeof Symbol);

// console.log(typeof heros);


//---------------------------------------------//

//That Is 2 Types Of Memory:-(1) Stack [primitive types],(2) Heap[non-primitive]

let myYoutubename = "honeyjariwaladotcom"

let anothername = myYoutubename
anothername = "honeyjariwala22"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email:"user@google.com",
    upi: "user@abc"
}

let userTwo = userOne

userTwo.email = "honey@email.com"

console.log(userOne.email);
console.log(userTwo.email);
