function Min_Max_Checker(arr){
var Min = arr[0] ; // initalize Min and Max variables 
var Max = arr[0] ;
for (var count = 1 ; count < arr.length ; count++ ){
    if (arr[count] > Max)
    {
        Max = arr[count] ; 
    }
    if (arr[count] < Min)
    {
        Min = arr[count] ;
    }
}
console.log("Min is %d ,Max is %d",Min,Max) ; // Print Min and Max values 
}
/*
// for test 
var arr = [-1,2,3,5,7,2,1,0] ;
Min_Max_Checker(arr) ;
*/
