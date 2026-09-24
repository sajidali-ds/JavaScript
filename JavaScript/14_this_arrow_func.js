// const user={
//     username: "sajid",
//     age:19,
//     welcomemessage:function(){
//         console.log(`${this.username},welcome to my website`); 
//         console.log(this); //no output
//     }
// }
// user.welcomemessage(); //sajid,welcome to my website
// user.username="majid"
// user.welcomemessage() //majid,welcome to my website

// console.log(this);// {}
    
// function saj(){
//     console.log(this) // bahut sara o/p aata h...
// }
// saj()

// function saj(){
//     let username="sajid"
//     console.log(this.username) // undefined
// }
// saj()
// this function ke under kam nhi kar pa raha h bas object ke andar kar raha h

// const saji =function(){
//     let username="sajid"
//     console.log(this.username) // undefined
// }
// saji()
//************ARROW FUNCTION************/

// const saj= () => {
//     let username="sajid"
//     console.log(this.username); //undefined
// }
// saj()

// const saj= () => {
//     let username="sajid"
//     console.log(this); //{}
// }
// saj()


// const add2num=(num1,num2) => {
//     return num1+num2;
// }
// console.log(add2num(3,7)); //10

// const add2num=(num1,num2) =>  num1+num2;
// console.log(add2num(3,7)); //10

const add2num=(num1,num2) =>  (num1+num2);
console.log(add2num(3,7)); //10

