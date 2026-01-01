// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS(IIFE)

// ---------- Example 1-----------------//
// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()

// -----------Example 2-----------------//
// (function chai(){
//     console.log(`DB CONNECTED`);
// })();


//  ( function aurcode() {
//     console.log(`DB CONNECTED TWO`);
    
//  } )()

 ( (name)=> {
    console.log(`DB CONNECTED TWO ${name}`);
    
 } )("Honey")