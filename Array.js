// console.log("Shoaib soomr")

// const Arr = [23,34,56,78,90];

// const Arr2 = Arr.reduce((accom , curr)=>{
//     return accom - curr
// })
// console.log(Arr2)

// const as = [11,11,11,11,11,11,11,11,11,11,];

// const as2 = as.reduce((accom , curr)=>{
//     return accom + curr
// })
// console.log(as2)

// "use Strick"

// sum(22,22)

// function sum(a,b){
//     const add = a+b
//     console.log(add)
// }


// sum (12,12,12,12)

// function sum(a,b,c,d){
//     const add = a+b+c+d
//     console.log(add)
// }



// function sum(a){
//     return (b)=>(c)=>(d)=> a+b+c+d
// }

// const add = sum(12)(12)(13)(12)
// console.log(add)

// const nam =  ["shoaib soomr","sir zeeshan","sir Ijaz", "tanveer"]

// const b = nam.splice(nam.length,2,"ali_hussain")
// console.log(nam)

// const nam =  ["shoaib soomr","sir zeeshan","sir Ijaz", "tanveer"]

// const na = nam.unshift("king")

// console.log(nam)


// const num = [12,34,56,78,23];

// const add = num.reduce((accom, curr)=>{
//     return accom + curr
// })

// console.log(add);


// const num = [12,34,56,78,23];

// const avg = num.reduce((accom, curr, index, array)=>{
//     let total = accom += curr;
//     if(index ===array.length-1){
//         return total/array.length
//     }
//     return total

// })

// console.log(avg)



// const num = [112,134,156,178,123];

// const avg = num.reduce((accom, curr , index, array)=>{
//     let total = accom += curr;
//     if(index === array.length-1){
//         return total/array.length
//     }
//     return total;
// })

// console.log(avg);

// const num = [12,34,56,78,23];

// for(let elements in num){
//     console.log(elements)
// }

// const name = ["shoaib", "shahzaib", "zeeshan ali", "abdullah"];

// for(let elem in name){
//     console.log(elem)
// }

// const add = ["shoaib", "shahzaib", "zeeshan ali", "abdullah"];

// for(let elem of add){
//     console.log(elem)
// }







// const arr = [1,23,45,67,89,11];

// const add = arr.reduce((accom, curr)=>{
//     return accom * curr

// })

// console.log(add);




// const arr = [1,23,45,67,89,11]

// const avg = arr.reduce((accom, curr, index, array)=>{
//     let total = accom +=curr;
//     if(index === array.length-1){
//         return total/array.length
//     }
//     return total;
// })

// console.log(avg)


// const arr = ["shoaib","soomro","ahmed"]

// for(let elem in arr){
//     console.log(elem)
// }

// const arr = [11,23,45,67,89,11]
// const add = arr.reduce((accom, curr)=>{
//     return accom + curr
// })

// console.log(add)

// const arr = [1,23,45,67,89,11];

// const avg = arr.reduce((accom,curr,index,array)=>{
//     let total = accom += curr;
//     if(index === array.length-1){
//         return total/array.length
//     }
//     return total
// })
// console.log(avg)

// const arr = [1,23,45,67,89,11]

// for(let elem in arr){
//     console.log(elem)
// }

const prom = false

let pro = new Promise(function(resolve, reject){
    if(prom){
        resolve("i m shoaib soomro")
    }else{
        reject("i m solangi")
    }
})

console.log(pro)



