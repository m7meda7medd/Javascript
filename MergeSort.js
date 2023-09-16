function MergeSort (arr) // Function that splits the main array into two smaller arrays recursively 
{  if (arr.length == 1){ // Slice arrays till reach one element in each side 
    return arr ;
    }

var M = Math.ceil(arr.length/2) ; // get the middle value and ceil it 
var Left_arr = arr.slice(0,M) ; // slice the array into left and Right 
var Right_arr = arr.slice(M) ;

var Left_Sorted = MergeSort(Left_arr) ; // call mergesort function recursively till reach one element in both sides 
var Right_Sorted = MergeSort(Right_arr) ;

return Merge(Left_Sorted , Right_Sorted); // start concatenate from recursively .
}


function Merge (Left_arr,Right_arr){
var Sorted = [] ;
var i = 0 , j = 0 ; 
while ((i <Left_arr.length) && (j<Right_arr.length)) // check for the smaller value to put first in sorted array
{
    if (Left_arr[i]<Right_arr[j])
    {
        Sorted.push(Left_arr[i]) ;
        i++;
    }
    else{
        Sorted.push(Right_arr[j]) ;
        j++;
    }
}
// to add the reminder values in left and Right arrays .
while (i<Left_arr.length)
{
    Sorted.push(Left_arr[i]) ;
    i++;
}
while (j<Right_arr.length)
{
    Sorted.push(Right_arr[j]) ;
    j++;
}
return Sorted ;
}

/*
//for test
var Arr = [-1,3,421,56,8,-5,1,2,4,1,213,54,5677,8];
var Sorted_Arr = MergeSort(Arr);
console.log("Sorted Array:", Sorted_Arr);
*/



