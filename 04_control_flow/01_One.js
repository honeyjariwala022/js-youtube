//If Statment//
//If Condtion Is True Then It Can Execute Otherwise It Cannot Execute The Code//

// if (true){

// }
// const isUserLoggedIn = true
//  if(2 !=3){
//     console.log("Executed");
    
//  }

 // <,>,<=,>=,==,!=,===,!==//

//  const isUserLoggedIn = true
//  const temperature = 41
//  if(temperature === 40){
//     console.log("Less Than 50");
//  }else{
//     console.log("Temperature Is Greater Then 50");
//  }
//  console.log("Executed");
 
// const score = 200
//  if (score > 100){
//     let power = "fly"
//     console.log(`user power : ${power}`);
    
//  }
//   console.log(`user power : ${power}`);

// const balance = 1000
// This Is Not a Right Code...//
// if (balance > 500) console.log("Test"),
// console.log("Test2");

// if (balance<500){
//     console.log("Less Than 500");
// }else if(balance<750){
//     console.log("Less Than 750");
// }else if(balance<900){
//     console.log("Less Than 900");
// }else{
//     console.log("Less Than 1200");
// }


const userLoggedIn = true 
const debitCard = true
const LoggedInFromGoogle = false
const userLoggedInFromEmail = true

if(userLoggedIn && debitCard && 2==3){
    console.log("Allow To Buy Course");
    
}

if (LoggedInFromGoogle || userLoggedInFromEmail){
     console.log("User Logged In"); 
}