//1. Adding Activities
console.log("1. Adding an activity");

let activities= [];

let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let today  = new Date();

// console.log(today.toLocaleDateString("en-US")); // 9/17/2016
// console.log(today.toLocaleDateString("en-US", options)); // Saturday, September 17, 2016
// console.log(today.toLocaleDateString("hi-IN", options)); // शनिवार, 17 सितंबर 2016



function addActivity(date, activity, duration)
{
    let obj = {};
    obj.date = date;
    obj.activity = activity;
    obj.duration = duration;
    activities.push(obj);
}

//testdata for adding activity
addActivity("05-06-2019", "Whatsapp", 80);
addActivity("06-06-2019", "Slack", 35);
addActivity("17-05-2019", "GitHub", 40);
addActivity(today.toLocaleDateString("en-US"), "YouTube", 60);
addActivity("25-04-2019", "Facebook", 30);
console.log(activities);
console.log("--------------------------------------------------");

//2. Show Status
console.log("2. Show Status");
function showStatus()
{
    let d=0;
    if (activities.length===0)
    {
        console.log("Add some activities before calling showStatus");
    }
    else
    {
    for(let i =0; i< activities.length; i++)
    {
        d = d + activities[i].duration;
    }
    console.log("You have added "+activities.length +" activities. They amount to " +d+ " min. of usage");
    }
}

showStatus(activities);
console.log("--------------------------------------------------");

//3. Usage Limit
console.log("3. Usage Limit");
function usageLimit()
{
    let d =0;
    for(let i =0; i< activities.length; i++)
    {
        d = d + activities[i].duration;
    }
    if( d >= 180)
    {
        console.log("You have reached your limit, no more smartphoning for you");
    }
}

usageLimit(activities);

console.log("--------------------------------------------------");

//4. Show Status on Date
console.log("4. Show Status on Date");

function showStatusOnDate(date)
{
    for(let i =0; i< activities.length; i++)
    {
    if(date === activities[i].date)
    {
        console.log("On date " + date+ ", You spent " + activities[i].duration+ " minutes on " +activities[i].activity);
        
    }
    }
}

showStatusOnDate("25-04-2019");

console.log("--------------------------------------------------");

//5. Max time spend on activity
console.log("5. Max time spend on activity");

function maxTime(activities)
{
    let maxIndex = 0;
    for (let i = 1; i< activities.length; i++)
    {
    if(activities[maxIndex].duration < activities[i].duration)
    {
        maxIndex = i;
    }
    
    }
    console.log("You have spend maximum time of " + activities[maxIndex].duration 
    + " minutes on activity " + activities[maxIndex]. activity+ " on date " + activities[maxIndex].date);
}

maxTime(activities);