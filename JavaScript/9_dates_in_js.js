let myDate=new Date()

// console.log(myDate) //2026-09-21T18:49:15.435Z  5:30AM date change

// console.log(typeof myDate) //object 
// console.log(myDate.toDateString()) //Mon Sep 21 2026
// console.log(myDate.toString()) //Mon Sep 21 2026 18:51:11 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toLocaleString()) //9/21/2026, 6:53:40 PM

// let mycreateddate=new Date(2023,0,22)
// console.log(mycreateddate) //2023-01-23T00:00:00.000Z
// console.log(mycreateddate.toDateString()); //Mon Jan 23 2023

// let mycreateddate=new Date(2023,0,22,5,4)
// console.log(mycreateddate.toLocaleString()); //1/22/2023, 5:04:00 AM

let mycreateddate=new Date("2026-09-22")
// console.log(mycreateddate.toLocaleString()); //9/22/2026, 12:00:00 AM

let myTimeStamp=Date.now()
// console.log(myTimeStamp) //1790017783359
// console.log(mycreateddate.getTime())//1790035200000
console.log(Math.floor(Date.now()/1000))// convert in second -1790018006

let newDate=new Date()
console.log(newDate);
console.log(newDate.getDate()); //21
console.log(newDate.getMonth());//8

console.log(newDate.toLocaleString('default',{
    weekday:"long"
}))  // Monday


