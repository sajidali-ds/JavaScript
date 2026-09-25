// if 

// if(true){

// }

// if (false){

// }
// const isUserLoggedIn=true
// if (isUserLoggedIn){

// }

// true is decided by condition 

//concept of condition
// < ,> ,== , >= ,<= ,!= ,===,!==
// !==
//examples
//const temp=75;

// if (temp <50){
//     console.log(`temperature is ${temp}`);
// }
// else{
//     console.log("temperature is greater than 50")
// }

// const score=200;

// if(score > 100){
//     const power="fly"
//     console.log(`User Power:${power}`)  //User Power:fly
// }
//console.log(`User Power:${power}`) // yaha error aa jayega duew to power local 
// scope h hum usko globally excess krna chah rahe h

// const score=500
// if(score >60) console.log("test") ,console.log("test2") //  bad way to print
// const balance =800
// if(balance < 500){
//     console.log("less than 500")
// }
// else if (balance <750){
//     console.log("less than 750")
// }
// else if (balance <900){
//     console.log("less than 900")
// }
// else{
//     console.log("less than 2000")
// }

// const userloggedIn=true;
// const debitcard=true;

// const loggedinfromgoogle=false;
// const loggedinfromemail=true

// if(userloggedIn && debitcard){
//     console.log("allow to buy")
// }
// if(loggedinfromgoogle || loggedinfromemail){
//     console.log("krne do ")
// }

// switch (key){
//     case value:
//         break;
    
// }
const month=4
switch (month){
    case 1:
      console.log("january");
      break;
    case 2:
        console.log("february")
        break;
    case 3:
        console.log("march")
        break
    case 4:
        console.log("april")
        break
    default:
        console.log("default check match")
        break;
}
// break jaruri h q ki agar  nhi kiye to match ke baad wla sara print hoga expect default