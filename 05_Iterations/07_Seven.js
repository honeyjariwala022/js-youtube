const MyNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums=MyNumbers.map((num)=>num + 10)
// console.log(newNums);

// const newNums = [];

// MyNumbers.forEach((num) => {
//     newNums.push(num + 10);
// });
// console.log(newNums);


const newNums = MyNumbers
            .map((num)=>num * 10)
            .map((num)=>num+2)
            .filter((num)=> num >= 70)
console.log(newNums);
