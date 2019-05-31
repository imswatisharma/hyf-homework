let temperature
let x = whatToWear(25)
console.log(x);

function whatToWear(temperature)
{
    if(temperature <= 18)
    {
        return("Wear winter clothes, jackets, hat, boots, gloves");
    }
    if(temperature <= 27)
    {
        return("Wear lite jackets. It's not to cold");
    }
    else    
    {
        return("It's summer time. Flaunt your body with that summer dress");
    }
}


