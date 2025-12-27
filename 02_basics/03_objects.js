//Singleton//
// object.create//
//Object Literals//

const mysym = Symbol("key1")
const JsUser = {
    name :"Honey",
    "full name" : "Honey Jariwala",
    [mysym] : "mykey1",
    age: 18,
    location: "Surat",
    email: "honey@google.com",
    isLoggedIn: false ,
    lastLoginDays: ["Monday","Saturday"]

}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"] );
// console.log(JsUser[mysym]);

JsUser.email = "honey@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "honey@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}
 JsUser.greetingtwo= function(){
     console.log(`Hello JS User,${this.name}`);
 }
console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());

