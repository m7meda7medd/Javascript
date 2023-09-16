function Fibonacci (n){
if ((typeof n == "number") && (n>0)) // validate on input 
{
var ret_arr = [] ;
var first= 0 ;
var second = 1 ;
var sum = 1 ;
 // get the first element
console.log(first) ;
ret_arr.push(first);
while (--n )
{
console.log(sum) ;
ret_arr.push(sum) ;
/*************Start The Sequence of Fibonacci***************/
sum = first + second ;
first = second ;
second = sum ;
/**********************/
}
return ret_arr ; // return array with the first n Fibonacci series 
}
else {
 console.log("invalid input !")
}
}
//for test 
var arr = Fibonacci(20) ;
console.log(arr) ;
