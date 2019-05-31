const weekDays= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const todayDate = new Date (); 
const todayDay = todayDate.getDay();
console.log(todayDay);
let eventHeldDay;
let eventDay;

console.log("The event is held on:" + " " + getEventWeekDay(4));



function getEventWeekDay (eventDay) {
    
     eventHeldDay = weekDays[(todayDay + eventDay) % 7];
     return eventHeldDay;
}
