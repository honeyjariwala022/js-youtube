// For Of Loop//

const arr = [ 1,2,3,4,5]

for (const num of arr) {
    //   console.log(num);
         
}

const greetings = "Hello World!"
for (const greet of greetings) {
    // cons ole.log(`Each Char Is ${greet}`);
}

// Maps//

const map = new Map()
map.set('IN', "India")
map.set('USA' , "United States Of America")
map.set('FR' , "France")

// console.log(map);

for (const [set , value] of map) {
    // console.log(set , ':-' , value);
    
}


 const myObject = {
    'game1' : 'NFS'
    'game2' : 'Spiderman'
 }

 for (const [set,value] of myObject) {
    console.log(set , ':=', value);  
 } 