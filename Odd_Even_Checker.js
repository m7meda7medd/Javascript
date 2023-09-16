function OddEvenChecker(n){
if ((typeof n == "number") && (n>=0)){ // validation on input 
if (n%2 == 0 ){ //check if the reminder of dividing by 2 is 0 then even else is odd 
    console.log("Even") ;
}
else{
    console.log("Odd") ;
}
}
else{
console.log("Invalid Input !!") // output when got invalid input 
}
}
/*
// to test 
OddEvenChecker(5) ;
OddEvenChecker(2) ;
OddEvenChecker(-1) ;
*/

