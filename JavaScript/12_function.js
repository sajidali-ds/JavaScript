// function saymyname(){
//     console.log("S");
//     console.log("A")
//     console.log("J")
//     console.log("I")
//     console.log("D")
// }
// saymyname // no O/P
// saymyname() // S A J I D

// function add2num(num1,num2){
//     console.log(num1+num2)
// }
// add2num(3,4); //7
// add2num(3,"4");//34
// add2num(3,"a"); //3a
// add2num(3,"null"); //3null

//parameter :num1,num2
//arguments:3,4

// const result=add2num(3,4); //7
// console.log("Result:",result)// Result: undefined

// function add2num(num1,num2){
//     let result =num1+num2;
//     return result;
//     console.log("sajid")// return ke baad kuch execute nhi hoga
// }

// function add2num(num1,num2){
//     return num1+num2;
    
   
// }
// const result=add2num(3,6)
// console.log("Result:",result) //Result: 9

// function loginusermsg(user_name){
//     // if (user_name===undefined){  //check datatype is undeined
//     //     console.log("Please enter a username")
//     //     return
//     // }
//     if(!user_name){
//         console.log("please enter your username");
//         return;
//     }
//     return (`${user_name} welcome to sajid store`);
// }
//console.log(loginusermsg("salim")) //salim welcome to sajid store

//console.log(loginusermsg()) //undefined

// agar check karna hi nhi h to bydefault value parameter ke satth pass krdo;;

// function seename(user_name ="sajid")
// agar agrument () hua to sajid print ho jayega .
// agar argument dega to jo argument hoga wo print hoga...

// function calculateCartPrice(...num1){
//        return num1
// }
// console.log(calculateCartPrice(200,400,500)) // [ 200, 400, 500 ]
//... sbko ek bandal me kar dega aur ek array return kar dega

// function calculateCartPrice(val1,val2,...num1){
//        return num1
// }
// console.log(calculateCartPrice(200,400,500,2000))  //[ 500, 2000 ] 200 val1 me 400 val 2 me chale gya baki array me 

//const user={
//     username:"sajid",
//     price:199
// }
// function handleObject(anyobject){
//       console.log(`username is ${anyobject.username} and price is ${anyobject.price} `);
// }
// handleObject(user) //username is sajid and price is 199 
// const user={
//     username:"sajid",
//     prices:199
// }
function handleObject(anyobject){
      console.log(`username is ${anyobject.username} and price is ${anyobject.price} `);
}
//handleObject(user) //username is sajid and price is undefined due to in user prices is not price..

handleObject({
    username:"majid",
    price:400
})   //username is majid and price is 400 

const mynewarray=[200,400,100,600]

function returnsecondvalue(getArray){
    return getArray[1]
}
//console.log(returnsecondvalue(mynewarray)) //400

console.log(returnsecondvalue([200,400,100,600]))//400

//dono tarike se kar sakte h