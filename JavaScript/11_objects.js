// singleton
// Singleton ek design pattern hai jisme ek hi instance allow kiya jata hai.


// Object Literals
// Object literal se banaya gaya object singleton nahi hota.


// Constructor method
// Object.create() se object create kar sakte hain.

// const mySym=Symbol("key1")
// const JsUser={
//     name:"Sajid",
//     "full_name":"Sajid Ali",
//     age:18,
//     [mySym]:"mykey1",
//     location:"delhi",
//     email:"sajid@google.com",
//     isLoggedIn:false,
//     lastLoginDays:["Monday","friday"]
// }

//access
// console.log(JsUser.email) //sajid@google.com
// console.log(JsUser["email"])//sajid@google.com

// console.log(JsUser.full_name)//Sajid Ali
// console.log(JsUser["full_name"])//Sajid Ali

// Dot (.) notation valid nahi hoti jab property name me space, hyphen (-), ya koi invalid identifier character ho.
// Example: JsUser["full-name"] 

// console.log(JsUser[mySym])//mykey1
// console.log(JsUser[mySym])

// JsUser.email ="Sajid@chatgpt.com" //overright email
// //Object.freeze(JsUser)
// JsUser.email ="Sajid@openai.com"
// console.log(JsUser);

// JsUser.greeting=function(){
//     console.log("Hello Js User");
// }
// console.log(JsUser.greeting) //Hello Js User
// console.log(JsUser.greeting())//undefined

// JsUser.greetingTwo=function(){
//     console.log(`Hello Js User,${this.name}`);
// }
// console.log(JsUser.greetingTwo()); //Hello Js User,Sajid undifined also come
// JsUser.greetingTwo() //Hello Js User,Sajid (for no undefined only exact function o/p)..

//console.tinderUser=new Object()
const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false

//console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"sajid",
            lastname:"ali"
        }
    }
}
// console.log(regularUser.fullname.userfullname)//{ firstname: 'sajid', lastname: 'ali' }
// console.log(regularUser.fullname.userfullname.firstname)//sajid

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

//const obj3={obj1,obj2}
//console.log(obj3) //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3={...obj1,...obj2}
// console.log(obj3) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// const obj4=Object.assign({},obj1,obj2) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// console.log(obj4);

const users=[
    {
        id:1,
        email:"sa@gmail.com"
    },
    {
       id:1,
       email:"sa@gmail.com"
    }
]

// users[1].email

// console.log(tinderUser)

// console.log(Object.values(tinderUser));
// console.log(Object.keys(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))//true
// console.log(tinderUser.hasOwnProperty('isLogged'))//false

const course={
    coursename:"js",
    price:999,
    courseInstructor:"hitesh"

}
const {courseInstructor}=course
const {courseInstructor:instructor}=course // use alias
console.log(courseInstructor) //hitesh
console.log(instructor) //print using alias same o/p

//JSON STRUCTURE
// {
//     "name":"sajid",
//     "age":20,
//     "price":"free"
// }

[
    {},
    {},
    {}
]