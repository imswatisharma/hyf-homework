//Series duration of my life

const seriesDurations = [
    {
      title: 'Game of thrones',
      days: 3,
      hours: 1,
      minutes: 0,  
    },
    {
      title: 'Sopranos',
      days: 3,
      hours: 14,
      minutes: 0,
    },
    {
      title: 'The Wire',
      days: 2,
      hours: 12,
      minutes: 0,
    }
  ]

durations(seriesDurations);
    
  

  function durations(object)
  {
    let totalDuration = 0;
      for( let i=0; i< seriesDurations.length;i++)
      {
        duration = ((seriesDurations[i].days*24+seriesDurations[i].hours+seriesDurations[i].minutes/60)/(80*365*24))* 100; //converting all durations (days, hours and minutes) into hours
        console.log(seriesDurations[i].title+ " took " +duration+ "% of my life");
        
        totalDuration = totalDuration + duration ;
      }   
      console.log("I have spent " +totalDuration+ "% of my life watching TV series.");
  }