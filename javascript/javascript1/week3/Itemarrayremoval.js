 //Item array removal
 
 const names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
 console.log("Name list: " +names);
 const nameToRemove = 'Ahmad';
 console.log("Remove: " +nameToRemove);
 const result = remove(names, nameToRemove);
 console.log("Updated list of names is: ")
 console.log(result);
 
function remove (array, value)
{
    return array.filter(function(ele)
    {
        return ele != value;
    });

}

