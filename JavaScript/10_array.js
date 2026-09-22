const myArr=[2,3,4,5]

// console.log(myArr[0]) //2
// array make shallow copy 
//mtlb ki agar kio change karunga to original
//array me bhi change hoga.

//Methods
// myArr.push(6);//last me 6 aa jayega
// myArr.push(7);
// myArr.pop()//last element delete

//myArr.unshift(7)// array ke 0 index pe aa jayega
// myArr.shift() //isse 0 index hatt jata h

// console.log(myArr.includes(5));//true
// console.log(myArr.includes(8));//false
// console.log(myArr.indexOf(5))//2
// console.log(myArr.indexOf(8))//-1

// const newArr=myArr.join()
// console.log(myArr)//[ 2, 3, 4, 5 ]
// console.log(newArr);//2,3,4,5
// console.log(typeof newArr); //string


//slice,splice

// console.log("A",myArr);
// const myn1=myArr.slice(1,3)//A [ 2, 3, 4, 5 ]
// console.log(myn1);//[3,4]
// console.log("B",myArr);//B [ 2, 3, 4, 5 ]

// const myn2=myArr.splice(1,3)
// console.log("C",myArr)//C [ 2 ]
// console.log(myn2) //[3,4,5]

const marvel_heros=["thor","Ironman","spiderman"]
const dc_heros=["superman","flash","batman"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros)//[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// const all_heros=marvel_heros.concat(dc_heros)
// console.log(all_heros)//[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// const all_new_heros=[...marvel_heros,...dc_heros]//[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// console.log(all_new_heros)


const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array)//[
//   1, 2, 3, 4, 5,
//   6, 7, 6, 7, 4,
//   5
// ]

console.log(Array.isArray("Sajid")) //false
console.log(Array.from("Sajid"))//[ 'S', 'a', 'j', 'i', 'd' ]
console.log(Array.from({name:"Sajid"})) //[] - interesting case

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3)); //[ 100, 200, 300 ]

