//*********** for of **************

//const arr=[1,2,3,4,5]
//syntax
// for(const iterator of object){

// }
// for (const num of arr){
//     console.log(num);
// }

// const greeting ="Hello World"
// for(const greet of greeting){
//     console.log(greet) // H e l l o  w o r l d alag alag line me print
// }

//Maps

// const map=new Map()
// map.set('IN' ,"India")
// map.set('USA',"United state of America")
// map.set("Fr" ,"france")
// console.log(map)
//Map(3) {
//   'IN' => 'India',
//   'USA' => 'United state of America',
//   'Fr' => 'france'
// }

// for (const [key,value] of map){
//     console.log(key ,":-" ,value); 
// }
//IN :- India
//USA :- United state of America
//Fr :- france

// const myobj={
//     'game1':'NFS',
//     'game2':'Spiderman'
// }
// for(const [key,value] of myobj){
//     console.log(key,":-",value);
// }

// not working for of here on object ...

//***********FOR IN LOOP********/
//concept : object me value deta h aur array me index ....
//const myobj={
    // js:"JavaScript",
    // cpp:'C++',
    // swift:"swift by apple"
// }

// for(const key in myobj){
//     console.log(myobj[key])
// }
//JavaScript


// const programming=["js","python","ruby"]
// for(const key in programming){
//     console.log(`language is ${key}`)
// }
// language is 0
// language is 1
// language is 2

// const programming=["js","python","ruby"]
// for(const key in programming){
//     console.log(programming[key])
// }
// js
// python
// ruby

// const map=new Map()
// map.set('IN' ,"India")
// map.set('USA',"United state of America")
// map.set("Fr" ,"france")
// for(const key in map){
//     console.log(map[key]);
// }  
// NOT ITERABLE on map ...NO OUTPUT

/**********FOR EACH LOOP***/

// const coding=["js","python","c++","java"]

// coding.forEach(function (language){
//     console.log(language);
// })

// js
// python
// c++
// java

// BY ARROW FUNCTION

// const coding=["js","python","c++","java"]
// coding.forEach((language) =>{
//     console.log(language);
// })
// js
// python
// c++
// java

// const coding=["js","python","c++","java"]
// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)
// js
// python
// c++
// java

// const coding=["js","python","c++","java"]
// coding.forEach((item,index,arr)=> {
//     console.log(item,index,arr);
// })
// //js 0 [ 'js', 'python', 'c++', 'java' ]
// python 1 [ 'js', 'python', 'c++', 'java' ]
// c++ 2 [ 'js', 'python', 'c++', 'java' ]
// java 3 [ 'js', 'python', 'c++', 'java' ]


const myCoding=[
{
    languagename:"JavaScript",
    languageFilename:"js"
},
{
    languagename:"python",
    languageFilename:"py"
},
{
    languagename:"c++",
    languageFilename:"cpp"
}]

myCoding.forEach((item)=>{
    console.log(item.languagename); // javascript python c++ new new line me
    
})