function saymyname(){
// console.log("H");
// console.log("O");
// console.log("N");
// console.log("E");
// console.log("Y");
}

// saymyname()

// function addtwoNumbers(number1,number2){
//     console.log(number1 + number2);
// }
function addtwoNumbers(number1,number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}
addtwoNumbers(10,20)
addtwoNumbers(10,"20")
addtwoNumbers(10,"a")
addtwoNumbers(10,null)

const result = addtwoNumbers(10,20)

// console.log("result: ", result);

//TRIC :- 1//
// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("Please Enter A Username");
//         return
//     }
//     return `${username} Just logged In`
    
// }
// // console.log(loginUserMessage("Honey"));
// console.log(loginUserMessage());

// TRIC :- 2//
function loginUserMessage(username = "Sammy"){
    if(!username){
        // console.log("Please Enter A Username");
        return
    }
    return `${username} Just logged In`
    
}
//console.log(loginUserMessage("Honey"));
// console.log(loginUserMessage("Honey"));


function calculatecartprice(val1,val2,...num1){
    return num1
}
console.log(calculatecartprice(200,400,500,2000));

const user={
    username: "Honey",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username Is ${anyObject.username} And Price Is ${anyObject.price}`  );
    
}

//handleObject(user)//Example:-1
//Example:-2//
handleObject({
    username: "Sammy",
    price: 299
})

const myNewArry = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArry));
console.log(returnSecondValue([200,400,500,1000]));

