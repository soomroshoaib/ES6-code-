// console.log('hello world')

// const arry = ["shooaib soomro","salman", "abdullah soomr"]
// const b = arry.splice(1,0,"khan soomro")
// console.log(arry)

// let a = ["shooaib soomro","salman", "abdullah soomr"];
// const b = a.splice(a.length,0,"sultan khan");

// console.log(a);

// const a = ['2','21','3','6']
// const b = a.find((elem)=>{
//     return elem > 2;
// })
// console.log(b)

// const a = [55,76,9,45];
// const b = a.findIndex((elem)=>{
//     return elem > 76;
// })
// console.log(b)
// console.log("hello world ")

// const a = ["shoaib","soomro", "abdullah"]
// const b = a.splice(0,1,"king")
// console.log(a)

// const a = [1, 2, 3, 4, 11, 56];

// const b = a.find((elem)=>{
//     return elem > 3;
// })
// console.log(b)

// "use Strick"
// sum(9,10)
// function sum(a,b){
    
//         const add = a + b;
//         console.log(add)
    


// }
//  

// sum(10,20,20,19)

// function sum(a,b,c,d){
//     const add = a+b+c+d
//     console.log(add)
// }



//  "curring funcation"
// function sum(a){
//     return (b)=>(c)=>(d)=> a+b+c+d
// }


// const add = sum(10)(20)(30)(19);
// console.log(add)


// const arr = [10,20,30,40,50,60,198];

// const sum = arr.reduce((accom,curr)=>{
//     return accom + curr
// })

// console.log(sum)

// 

// const sum = add.reduce((accom, curr)=>{
//     return accom + curr
// })

// console.log(sum)



// const add = [15,15,15,15,20];

// const avg = add.reduce((accom, currValue, index, array)=>{
   
//     let total = accom += currValue;
//     if(index === array.length-1){
//         return total/array.length;
//     }
//     return total
// })

// console.log(avg)


// const add = [10,15,15,15,20];
// const avg = add.reduce((accom,currVal,index,array)=>{
//     let total = accom += currVal;
//     if(index ===array.length-1){
//         return total/array.length
//     }
//     return total
// })

// console.log(avg)

// const add = true
// let prom = new Promise(function(resolve, reject){
//     if(add){
//         resolve("i am shoaib soomro")
//     }else{
//         reject("i m king ")
//     }
// })

// console.log(prom)


// function prom(complate){
//     return new Promise(function(resolve , reject){
//         console.log("fetching data please wait ")
//         setTimeout(()=>{
//             if(complate){
//                 resolve("i m hero")
//             }else(
//                 reject("i m falled")
//             )
//         },3000)
//     })
// }

// prom(true).then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })







// function prom(complate){
//     return new Promise(function(resolve, reject){
//         console.log("fetching data ")
//         setTimeout(()=>{
//             if(complate){
//                 resolve("i m hero man")
//             }else{
//                 reject("i m failling ")
//             }
//         },4000)
//     })
// }


// prom(true).then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })




//// callback function promise async await 


// const datas=[
//     {name:"shoaib soomro", profession: 'software engineer'},

//     {name:"Abdullah soomro", profession: 'software engineer'},
// ];

// function getdata(){
//     setTimeout(() => {
//         let output="";
//         datas.forEach((data,index)=>{
//             output += `<li>${data.name}</li>` 
//             console.log(output)   
//         })
         
//     }, 1000)

// }



// function createdata(newdata,callback){
//     setTimeout(()=>{
//         datas.push(newdata)
//         callback();
//     }, 4000)
// }

// getdata()

// createdata({name:"zeeshan soomro", profession: 'software engineer'}.getdata())

///////////////// FOR EACH LOOP 
 
// const arr = ["javascript", "java", "node js ", "react-js", "css"]



// for(let x = 0; x<lng.length; x++){
//     console.log(lng[x])
// }

// arr.forEach(function(elem, ind){
//     console.log(ind -- + "-- " + elem)
// })

// const num = [10,20,30,40,50,60]

// num.forEach(function(elem,ind,arr){
//     console.log(arr[ind] + 100)
// })


////for Of LOOP


// const arr = ["javascript", "java", "node js ", "react-js", "css"]

// for(lang of arr){
//     console.log(lang)
// }



// const names = ["shoaib", "soomro","zeeshan", "pinger", "abdullah"];

// names.forEach(function(elem, ind ){
//     console.log(ind + " " + elem)
// })

// const add = [10, 20, 30 , 40, 50]

// add.forEach(function(elem, ind, arr){
//     console.log(arr[ind] + 100)
// })


// const names = [100,30,40,57,90];

// names.forEach(function(elem,ind, arr){
//     console.log(arr[ind] - 20)
// })


const add = ["javascript", "java", "node js ", "react-js", "css"];

add.forEach(function(elem,ind){
console.log(ind  +""+ elem)
})