// 2 Type of  memory

//1)stack - (primitive type)
//2)heap - (Non primitive) 

let myYtname ="sajidcodex"
let anothername=myYtname
anothername="padhle beta"

console.log(myYtname) // stack me jayega 
console.log(anothername) // ye copy ho jayega stack ke layer me ;

// ye heap me jayega copy hoke ...
let user={
    "email":"user@paytm.com",
    "upi":"user@ybl"
}

let user2=user
user2.email="sajid@google.com"

console.log(user.email) //sajid@google.com
console.log(user2.email) //sajid@google.com

// summarize

//stack me jo bhi chize lenge uska copy hi milta ha aur 
// heap me reference bheja jata h -- original