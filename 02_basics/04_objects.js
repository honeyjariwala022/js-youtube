// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Honey"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularuser ={
    email : "honey@gmail.com",
    fullname : {
        userfullname: {
            firstname: "Honey",
            lastname: "Jariwala"
        }
    }
}
// console.log(regularuser.fullname.userfullname.firstname);

const object1 = {1: "a",2: "b"}
const object2 = {3: "a",4: "b"}
const object4 = {5: "a",6: "b"}


// const object3 = {object1 , object2}
// const object3 = object.assign({},object1,object2,object4)

const object3 = {...object1,...object2}
// console.log(object3);


const users =[
    {
    },
    {
    },
    {
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(Object.keys(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('isLogged'));

const course ={
    coursename: "Js In Hindi",
    price: "999",
    courseInstructor: "Hitesh"
}
// course.courseInstructor

const {courseInstructor: instructor} = course
// console.log(instructor);


// ---------NAVBAR----------//[API]//
// const navbar = ({company}) => {

// }
// navbar(company = "Zara")
// console.log(company);

//WE CAN NOT ACCESS IT WITHOUT DECLARE CONST VARIABLE//
//  {
//     "name" : "Honey",
//     "cousename" : "Js In Hindi",
//     "price" :"free"
//  }

// [

//     {},
//     {},
//     {}
// ]