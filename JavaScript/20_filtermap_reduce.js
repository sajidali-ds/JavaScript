//const mynum=[1,2,3,4,5,6,7,8,9]

// const newnum=mynum.filter((num) => num >4 )
// console.log(newnum)  //[ 5, 6, 7, 8, 9 ]

// const newnum=mynum.filter((num) => {
//     return num >4
// })
// console.log(newnum) //[ 5, 6, 7, 8, 9 ] return nhi likhte to [] O/P aayega due to explicit return scope use hone laga
// const mynum=[1,2,3,4,5,6,7,8,9]
// const newnums=[]
// mynum.forEach((num) => {
//     if(num >4){
//         newnums.push(num)
//     }


// })
// console.log(newnums) //[ 5, 6, 7, 8, 9 ]

//*******  MAP *******/

// const mynumbers =[1,2,3,4,5,6,7,8]
// const nums=mynumbers.map((nums) => nums+10)
// console.log(nums)

// const mynum=[1,2,3,4,5]
// const newnums=mynum.map((num) => num*10)
// .map((num) => num+1) // [ 11, 21, 31, 41, 51 ]
// .filter((num) => num >=40)  //[ 41, 51 ]

// console.log(newnums) //[ 11, 21, 31, 41, 51 ]

//******* Reduce **********/

// const mynums=[1,2,3]
// const total=mynums.reduce(function (
//     acc,currval){
//         console.log(`acc:${acc} and currval :${currval}`)
//      return acc+currval
//     },0  // 0 initial value of accumulater let kiye kuch bhi le sakte h ...
// )
// console.log(total)  //6
//result
// acc:0 and currval :1
// acc:1 and currval :2
// acc:3 and currval :3


//## By arrow Function 
// const mynums=[1,2,3]
// const mytotal = mynums.reduce((acc,curr) => acc+curr,0)
// console.log(mytotal)  //6

//# shopping cart

const shopingcart=[
{
    itemname:"cloth",
    price:599
},
{
    itemname:"study material",
    price:399
},
{
  itemname:"skincare",
  price:489
}
]
const total=shopingcart.reduce((acc,item) => acc + item.price ,0)
console.log(total)  //=>1487