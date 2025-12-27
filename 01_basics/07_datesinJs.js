//Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toJSON());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2025,22,05)
// console.log(myCreatedDate.toDateString());

let myCreatedDate = new Date(2025,0,22,05,03)
// let myCreatedDate = new Date("2025-05-22")
// let myCreatedDate = new Date("05-22-2025")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));//to use not to give us a decimal values ex:-34555.67

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
newDate.toLocaleString('default',{
    weekday:"long"
})


