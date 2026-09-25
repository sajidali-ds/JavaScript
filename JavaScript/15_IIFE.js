//Immidiately Invoked Function Expression(IIFE)

(function chai(){
    //name IIFE
    console.log(`DB Connected`);

})();
// ; use karna padega aur 2 IIFE ek saath krna h to 
//global scope ke polution ki wajah se hum IIFE ka use kiya hu

( (name) => {
    console.log(`DB connected Two ${name}`);
})('sajid')