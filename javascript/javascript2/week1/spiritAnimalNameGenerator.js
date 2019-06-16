function yesnoCheck() {
    if (document.getElementById('yesCheck').checked) {
        document.getElementById('ifYes').style.visibility = 'visible';
    }
    else document.getElementById('ifYes').style.visibility = 'hidden';

  if (document.getElementById('noCheck').checked) {
        document.getElementById('ifNo').style.visibility = 'visible';
      required();
          }
    else document.getElementById('ifNo').style.visibility = 'hidden';

}


function over() {
              animal();
            }

function out() {
               animal();
            }


function required() //checking that the name field is not empty
{  
let empt = document.forms["form1"]["text1"].value;
if (empt == "")
    {
    alert("Please input a Value");
    return false;
    }
else 
    {
    
    animal();
    return true;
    }
}


function change( el ) //changing the value of the "submit" button to "try again"
{ 
 if (required()) 
    {
    animal();
    if ( el.value === "Submit" )
        el.value = "Try Again";
    else
        el.value = "Submit";
    }  
}


let animals = ['The crying Butterfly', 'The laughing Cow', 'The Angry Tiger', 'The moody Cat', 'The loving Puppy', 'The Lion King',
     'The Beautiful Bird', 'The Giant Elephant', 'The Killer Shark', 'The friendly Dolphin'];

       

function animal() //generating random animal name
    {
    let name= document.getElementById("name").value;
    let animalName = animals[Math.floor(Math.random()*animals.length)] ;
    document.getElementById("demo").innerHTML = "Hi " + name+ ", Your spirited animal is " + animalName;    
    }

