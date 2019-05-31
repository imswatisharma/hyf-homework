let firstName
let surName
let fullName1, fullName2
const useFormalName = [true, false]
const formalName ="Lord"

fullName1 = getFullName("Swati", "Sharma", true)
console.log("The full name of a traveller is" + " " + getFullName("Swati", "Sharma" ,useFormalName[0]) );


fullName2 = getFullName("Swati", "Sharma", false)
console.log("The full name of a traveller is" + " " + getFullName("Swati", "Sharma" ,useFormalName[1]) );

function getFullName(firstName, surName, useFormalName) 
{
    if(useFormalName === true)
    {
        return (formalName + " " + firstName + " " + surName); 
    }
    else
    {
        return (firstName + " " + surName);
    }
}

//-------------------------------------------------


