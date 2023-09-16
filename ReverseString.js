function Reverse_String(str){
var Reversed = " " ; // Reversed string initialization
    if (typeof str == "string" ) // validate the input 
{ for (var count = 1 ; count<=str.length ;count++) 
    {
        Reversed +=str[str.length - count] ; // concatenate characters in reversed order 

    }
    console.log("Reversed string =",Reversed) // display the reversed string on console 
}
else 
{
    console.log("Invalid input ") ;
}

}
/*
// for test 
Reverse_String("Mohamed Abokhalil")
*/