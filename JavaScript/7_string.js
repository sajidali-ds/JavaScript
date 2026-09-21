// const name="sajid"
// const repoCount=35

// console.log(name+repoCount+"Value")

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// const gameName=new String('sajid')// it store in form of index 0:s,1:a;

// console.log(gameName[0]); //s
// console.log(gameName.__proto__); //{}
// console.log(gameName.length); //5
// console.log(gameName.toUpperCase()); //SAJID
// console.log(gameName.charAt(2));//j
// console.log(gameName.indexOf('l'));//-1
// console.log(gameName.indexOf('j'))//2

let name=new String("majid-ali")
// const newString=name.substring(0,4)
// console.log(newString) //saji

const anotherString=name.slice(-8,4);
console.log(anotherString); //aji

const newStringOne="   sajid  "
console.log(newStringOne)//    sajid phele space phir name 
console.log(newStringOne.trim());//sajid space hat gya

const url ="https://sajid.com/sajid%20ali"

console.log(url.replace('%20','-'))//https://sajid.com/sajid-ali

console.log(url.includes('sajid')) //sajid
console.log(url.includes('google')) //false

console.log(name.split('-'))//["majid","ali"]




