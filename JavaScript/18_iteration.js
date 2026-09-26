// for loop
// for (let index=0;index <10;index++){
//     const element=index;
//     if(index==5){
//         console.log("5 is the best number")
//     }
//     console.log(element); // 0-9 tak aa jayega
// }

// for(let i=1;i <=10;i++){
//     console.log(`Outer loop value ${i}`)
//     for(let j=1;j<=10;j++){
//         //console.log(`Inner loop value ${j} and inner loop ${i}`)
//         console.log(i +"*"+ j + "=" + i*j) // print table of 1 to 10 
        
//     }
// }

// let myarr=["sajid","salim","majid"]

// for(let i=0;i<myarr.length;i++){
//     const element=myarr[i]
//     console.log(element)
// }

//keyboard -- break and continue

// for(let i=0;i<20;i++){
//     const element=i;
//     if(element==5){
//         console.log("five detacted")
//         break;
//     }
//     console.log(element)
// }
// break pure execution ko break kar deta hu uske aage ka 

// for(let i=0;i<20;i++){
//     const element=i;
//     if(element==5){
//         console.log("five detacted")
//         continue; // 5 ke alawa sab print hoga
//     }
//     console.log(element)
// }

//5 ke alawa sb print ho jata h continue me...

// **********WHILE LOOP************
//syntax
// while(condition){

// }

// let index =0;
// while(index <=10){
//     console.log(`Value of index is ${index}`);
//     index =index+2;
// }

// let myarr =["sajid","majid","ali","salim"]
// let arr=0;
// while(arr < myarr.length){
//     console.log(`Value is ${myarr[arr]}`);
//     arr=arr+1;
// }

//********** DO WHILE LOOP**********/
let score =11;
do{
    console.log(`Score is ${score}`);
    score++;
}
while(score <=10)
// phele kam hoga phir condition check
