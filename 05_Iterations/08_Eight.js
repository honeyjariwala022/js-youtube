const MyNumbers = [1,2,3,4,5]

// const MyTotal = MyNumbers.reduce(function(acc,currentvalues){
//     console.log(`acc : ${acc} And currentvalues : ${currentvalues}`);
     
//     return acc + currentvalues
// },0)

// console.log(MyTotal);

const MyTotal = MyNumbers.reduce((acc,currentvalues)=>acc+currentvalues,0)
 console.log(MyTotal);
 

 const shoppingcard = [
    {   
        itemName : "js Course",
        price : 2999
    },
    {   
        itemName : "python course",
        price : 1999
    },
    {   
        itemName : "mobile Course",
        price : 5999
    },
    {   
        itemName : "Data Science Course",
        price : 12999
    },
]

const priceToPay=shoppingcard.reduce((acc,item)=>acc + item.price,0)
console.log(priceToPay);
