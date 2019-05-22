//1.  Age Calculator

let yearOfBirth = 1987
let yearFuture = 2017
let age = (yearFuture - yearOfBirth);
if(yearFuture < yearOfBirth)
    {
        console.log("Please enter a valid yearFuture")
    }
    else
    {
        console.log("Your age in " +yearFuture+ " is", age);
    } 
//--------------------------------------------------------------------------------------------------------------------------

//Goodboy-Oldboy (A dog age calculator)

let dogYearOfBirth = 2009
let dogYearFuture = 2019
let ageInHumanYear = dogYearFuture - dogYearOfBirth 
let dogYear =  ageInHumanYear * 7 
let shouldShowResultInDogYears = true
if (shouldShowResultInDogYears === true) 
    {
        console.log ( "Your dog will be " + dogYear +  " dog years old in " +  dogYearFuture  ) 
    }
  else
    {
        console.log ( "Your dog will be " + ageInHumanYear + " human years old in " + dogYearFuture )  
    }
//--------------------------------------------------------------------------------------------------------------------------

// House pricey (A House Price Estimator)

let friends = ["Peter", "Julia"]
let volumeInMeters = [8*10*10, 5*11*8]
let gardenSizeInM2 = [100 , 70]
let housePrice = [,]

housePrice[0] = volumeInMeters[0] * 2.5 * 1000 + gardenSizeInM2[0] * 300
housePrice[1] = volumeInMeters[1] * 2.5 * 1000 + gardenSizeInM2[1] * 300

console.log ( "House price for " + friends[0] + " is " + housePrice[0])  
console.log ( "House Price for " + friends[1] + " is " + housePrice[1]) 

if (housePrice[0] > 2500000)
    {
    console.log ("Peter is paying much")
    }
    else
    {
        console.log("Peter is paying little")
    }

if (housePrice[1] > 1000000)
    {
        console.log ("Julia is paying much")
    }
    else
    {
        console.log("Julia is paying little")
    }
//--------------------------------------------------------------------------------------------------------------------------

//Ez Namey (Startup name generator) 

let firstWords = ["Shopping" , "Lovely", "Friends" , "Cheer", "Funny" , "Kitchen" , "Beauty", "Kids" , "Game" , "Study"]
let secondWords = ["Kart", "Book" , "Time", "Love" , "Today", "With Me", "Buddies" , "Partner", "More" , "Fun"]

let startupName = firstWords[Math.floor(Math.random()*firstWords.length)] + secondWords[Math.floor(Math.random()*secondWords.length)];

console.log("Your startup name is " + startupName + ", and it is " + startupName.length + " characters long.")  ;
//--------------------------------------------------------------------------------------------------------------------------