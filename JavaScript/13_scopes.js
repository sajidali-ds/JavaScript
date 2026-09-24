// let a=10;
// const b=20;
// var c=30;


//scope
// if (true) {
//     let a=10;
//     const b=20;
//     var c=30
// }



// console.log(a) //10
// console.log(b) //20
// console.log(c) //10
//IMP Line

//scope ke andar jo value h wo bahar nhi jata h aur bahar jo likhte h wo global scope hota h 

// private and public class in oops 

// agar console.log scope ke andar karega to andar wala value print hoga ..

// node ke through jo scope krte ha aur keyword se karte h dono alag h

// function one(){
//     const username="sajid"
//     function two(){
//         const website="youtube";
//         console.log(username); // func2 ke liye username global h to access ho jayega
//     }
//     //console.log(website); // func1 ke liye website local h to func2 access nhi kar payega...
//     two();
// }
// one()

// if(true){
//     const username="Sajid";
//     if(username=="Sajid"){
//         const website="youtube"
//         console.log(username + website); //sajidyoutube

//     }
//     //console.log(website) //error dega q ki andar var access krna chah rahe h
// }
//console.log(username) //error dega q ki andar var access krna chah rahe h
//++++++++++++Interseting discussion++++++++++++++++
console.log(addone(5));
function addone(num){
    return num+1;
    addone(5)
}

// decleartion se phele access nhi kr sakte h..
// const addtwo=function (num){
//     return num+2;
//     addtwo(5)
// }
