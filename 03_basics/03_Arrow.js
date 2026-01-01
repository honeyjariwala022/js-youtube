const user = {
    username : "Honey",
    price: 999,

    welcomeMessage: function(){
        // console.log(`${this.username} , Welcome To Website`);
        // console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username = "Sammy"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Honey"
//     console.log(this);
// }
// chai()


// const chai = function(){
//     let username = "Honey"
//     console.log(this.username);

// }

const chai = ()=> {
    let username = "Honey"
    console.log(this.username);

}
// chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }
 
// const addTwo = (num1,num2) => num1 + num2
// const addTwo = (num1,num2) => (num1 + num2)

const addTwo = (num1,num2) => ({username:"Honey"})

console.log(addTwo(3,6));
