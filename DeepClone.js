function DeepClone(obj)  // this fumction makes a deepclone from all datatypes in js 
{ if (typeof obj !="object" && Array.isArray(obj) == false) // if it's not an object and not array 
    {   
        return obj ;
    }

    if (Array.isArray(obj)) // check for being array 
    {
        const Cloned_Arr = [] ;
        for (var i = 0 ; i<obj.length ; i++)
        {
            Cloned_Arr[i]=obj[i] ;
        }
        return Cloned_Arr ;
    }
  // if the Object is from type object 
  var Cloned_Obj = {} ;
  for (var key in obj)
  { 
        Cloned_Obj[key] = DeepClone(obj[key]) ;
  }
  return Cloned_Obj ;


}


// for test
const originalObject = {
    name: 'Mohamed',
    age: 22,
    address: {
    City: 'Alexandria',
    Country: 'Egypt',
    },
  };
  
  const clonedObject = DeepClone(originalObject);
  
  console.log(originalObject !== clonedObject); // they are different object // have different addresses (as i expect)
  console.log(clonedObject) ;
  clonedObject["name"] = "AboKhalil" ;
  console.log(originalObject) ;
  