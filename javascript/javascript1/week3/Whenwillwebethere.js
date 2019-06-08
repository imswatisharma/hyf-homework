//When will we be there??
let speed;
let destinationDistance;
const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  
  console.log("Distance is: " + travelInformation.destinationDistance);
  console.log("Speed is: " +travelInformation.speed)
  const travelTime = time(travelInformation);
  
  
  function time(object)
  {
      time = travelInformation.destinationDistance/travelInformation.speed;
    
    intergerPart = Math.floor(time)
    decimals = time - Math.floor(time);
    minutes = decimals * 60; //converting decimal part of hours into minutes
    return console.log("It will take " + intergerPart + " hours and " + ~~minutes+ " minutes to complete your journey" );
  }
