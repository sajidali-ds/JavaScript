// Primitive

// 7 type:String,Number,Boolean,null,undefined,Symbol,BigInt

const score="100"

const scoreVal=20
const isLoggedIn=false

const OutsideTemp=null
let userEmail;

const id=Symbol('123') //symbol datatype
const another_id=Symbol('123') // not same val
console.log(id==another_id) //false

const bigNumber= 34567867898245n

//Reference type - Non premitive

//Array ,object,Function

const heros=["shaktiman","naagraj","doga"] //array

//object
let myObj={
    name:"sajid",
    age:22
}

// function

const myfunction=function(){
    console.log("Hello");
}

// find datatype

console.log(typeof myfunction)//function
console.log(typeof heros)//object
console.log(typeof myObj) //object
console.log(typeof bigNumber) //bigint

console.log(typeof scoreVal)


