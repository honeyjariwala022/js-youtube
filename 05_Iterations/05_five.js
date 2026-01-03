const codeing = ["js","ruby","java","python","cpp"]

// codeing.forEach(function(value){
//     console.log(value);
    
// })

// codeing.forEach( (item)=>{
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }
// codeing.forEach(printMe)

// codeing.forEach((item,index,arr) =>{
//     console.log(item,index,arr);  
// })

const myCodeing = [
    {
        languageName : "Javascript",
        languageFileName : "js" 
    },
    {
        languageName : "Java",
        languageFileName : "java" 
    },
    {
        languageName : "Python",
        languageFileName : "py" 
    },
]

myCodeing.forEach((item)=>{
    console.log(item.languageName);
    
})

