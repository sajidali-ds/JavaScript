// const userEmail="sajid@google.com"

// if(userEmail){
//     console.log("Got user email");
// }
// else{
//     console.log("Dont have email")
// }
// hum useremail ke basis pe khud man le rahee h ki kya true h 
// kya false without compare

//falsy values

// (false,0,-0,BigInt,On ,"",null,undefined,NaN)
//except this all true assumed 
// email me agar "" //false hoga
//email  agar [] to true hoga

//truthy values 

//"0","false"," ",[],{}, function (){} ,

// if(userEmail.length==0){
//     console.log("Array is empty")
// }

// const emptyobj={}
// if(Object.keys(emptyobj).length==0){
//     console.log("Object is Empty");
// }

//*** Nullish Coalesting Operator(??) : null defined ****/

// let  val1;
// val=5 ??10
// console.log(val); //5

// let val2;
// val2=null ?? 10
// console.log(val2) //10 
//agar null aa jaye to check karle..

// let val3;
// val3 = undefined ??15
// console.log(val3); //15

// let val3;
// val3 = null ?? 10 ?? 20
// console.log(val3); //10

// Terniary Operator
//condition ? true:false

const iceTeaPrice=100
iceTeaPrice >= 80 ? console.log("greater than 80") : console.log("less than 80")


