// Find the shortest word

  function shortestWord(array) {
    var shortestWord = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i].length < shortestWord.length) {
        shortestWord = array[i];
      }
    }
    return shortestWord;
  }
  
  let array = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];
  console.log("The list of the words is: " + array);
  let output = shortestWord(array);
  console.log("The shortest word in the list is: " +output); // Returns 'a'
  
  
//   Difference between median and average

  function average(array)
  {
    let total =0;
    let i;
    for (i=0; i< array.length; i++)
    {
      total = total + array[i];
    }
    average = total/i;
    console.log("The average of the array '" +array+ "' is: " + average);
  }

  function median(array)
  {
    let j;
    array.sort(function(a, b){return a-b});
   // console.log("The sorted array is: " + array);
    
    if(array.length%2 ===0)
    {

      j = array.length/2;
      let k = (array[j]+ array[j-1]);
      median = k/2;
      console.log("The median of the array '" +array+ "' is: " + median);
    }
    else
    {
      j = array.length+1;
      let k = j/2;
      median = array[k-1];
      console.log("The median of the array '" +array+ "' is: " + median);
    }
    
  }
  // let array= [1,5,68,9, 67, 45];
  // average(array);
  // median(array);

  const housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];
  average(housePrices);
  median(housePrices);
  
  

      
      