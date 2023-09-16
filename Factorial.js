function Factorial(n){ // Recursive Function to Calculate Factorial 
if ((typeof n == "number" ) && (n>=0)) // validation on the input 
{
if (n == 0)  // stop condition 
    return 1 ;
else 
{
return Factorial(n-1)*n ;  // recursive iteration 
}
}
else
{
console.log("Invalid input") ; // in case of bad input 
return -1 ;
}
}



/*
// to test 
console.log(Factorial(5)) ;
console.log(Factorial(-2)) ;
*/