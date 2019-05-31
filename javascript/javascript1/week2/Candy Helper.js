//Keeping the candy price list as array of arrays

const arrayCandyTypeAndPrices = [
    ["Sweet", 0.5],
    ["Chocolate", 0.7],
    ["Toffee", 1.1],
    ["Chewing-gum", 0.03]
    ];
    
const boughtCandyPrices = [];
  
  addCandy('Chocolate', 10);
  addCandy('Sweet', 10);
  addCandy('Sweet', 0);
  addCandy('A', 0);
  addCandy('Toffee', 1);
  
  let amountToSpend = Math.random() * 100;
  console.log('amountToSpend: ' +  amountToSpend);
  
  if (canBuyMoreCandy()) {
    console.log('You can buy more, so please do!');
  } else {
    console.log('Enough candy for you!');
  }



  function addCandy(candyType, weight) 
  {    
    for (let i=0; i < arrayCandyTypeAndPrices.length; i++) 
    {
      if (arrayCandyTypeAndPrices[i][0] === candyType) 
      {
        if (weight > 0) 
        {
          boughtCandyPrices.push(arrayCandyTypeAndPrices[i][1] * weight);
        }
      }
    }
    console.log('boughtCandyPrices: ' + boughtCandyPrices);
  }
  
  
  function canBuyMoreCandy() 
  {
    // calculating total price of already bought candy
    let totalPriceOfAlreadyBoughtCandy = 0;
    for (let i=0; i<boughtCandyPrices.length; i++)
    {
      totalPriceOfAlreadyBoughtCandy = totalPriceOfAlreadyBoughtCandy + boughtCandyPrices[i];
    }
    console.log('totalPriceOfAlreadyBoughtCandy: ' +  totalPriceOfAlreadyBoughtCandy);
    // returning true if amountToSpend is greater than totalPriceOfAlreadyBoughtCandy
    // otherwise false is returned
    return amountToSpend > totalPriceOfAlreadyBoughtCandy;
  }