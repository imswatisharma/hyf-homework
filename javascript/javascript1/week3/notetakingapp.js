//1. Saving a note
console.log("1. Saving a note");
let note = [];


object1 = {
    id: 1,
    content: "abcd"
};

object2 = {
    id: 2,
    content: "pqrs"
};

object3 = {
    id: 3,
    content: "vxyz"
};

//Testdata for adding notes
addObject(object1);
addObject(object2);
addObject(object3);
console.log(note);

function addObject(object) //Save a note
{
    note.push(object);
}

console.log("----------------------------------------------");
//2. Get a note
console.log("2. Get a note.");
//Testdata for getting a note
console.log("Get a note at id: 3");
getNoteFromId(3);
console.log("Get a note at id: 8");
getNoteFromId(8);
function getNoteFromId(number) //Get a note
{
    for(let i=0; i<note.length; i++)
    {
        if(number === note[i].id)
        {
            console.log(note[i]);
            return; //out of function
        }  
    }
    console.log("not found");  
}


console.log("----------------------------------------------");
//3. Get all notes
console.log("3. Get all notes");

getAllNotes(note);

function getAllNotes(array)//Get all notes
{
    for(let k=0; k<array.length; k++)
    {
    console.log(array[k]);
    }
}


console.log("----------------------------------------------");

//4. Log out notes
console.log("4. Log out notes");
console.log("See the content at id 1");
logOutNotesFormatted(1);

function logOutNotesFormatted(number)
{
    for(let j =0; j<note.length; j++)
    {
        if(number===note[j].id)
        {
            console.log(note[j].content);
            return;
        }
        
    }
}


console.log("----------------------------------------------");

//5. Delete a note (Optional)
console.log("5. Delete a note (Optional)");
deleteNote(2);
console.log("Delete note: 2");
console.log("Current Notes are:");
    console.log(note);
function deleteNote(number)
{
    if(note.length < number)
    {
        console.log("numbe ris small");
        return;
    }
    for(let x=number-1; x< note.length-number+1 ; x++)
    {
        note[x] = note[x+1];
    }
    note.pop();
    }
    