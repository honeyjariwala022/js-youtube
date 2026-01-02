// For Loop//

// for (let i=0; i <= 10; i++) {
//     const element = i;
//     console.log(element);
// }

// for (let i=0; i <= 10; i++) {
//     const element = i;
//     if (element == 5){
//     console.log("5 Is Best Number");
//     }
//     // console.log(element);
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer Loop value: ${i}`);
//     for (let j = 0; j <= 10; j++) {
//     console.log(`Inner Loop Value ${j} And Inner Loop ${i}`);
//     console.log(i + '*' + j + ' = ' + i*j);
    
//     }
// }

let array = ["Flash","Batman","Superman"]
console.log(array.length);

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
       
}

// Break And Continue//

// for (let index = 1; index <= 20; index++) {
//     if (index == 5){
//         console.log(`Detected 5`);
//         break
//     }
//     console.log(`Value Of I Is ${index}`);
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5){
        console.log(`Detected 5`);
        continue 
    }
    console.log(`Value Of I Is ${index}`);
}
