const moviesApi = "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/";

let badMovies = [];
let badMovies2000 = [];
let badMoviesTitle2000 = [];
fetch(moviesApi)
    .then(response => response.json())
    .then(json =>{
        console.log(json);
         badMovies = json.
        filter(obj => obj.rating < 4);
        return badMovies;
    })
    .then(result =>{
        console.log(result);
        badMovies2000 = result.filter(obj => obj.year >= 2000);
        console.log(badMovies2000);
        return badMovies2000;
    })
    .then(result =>{
        console.log(result);
        badMoviesTitle2000 = result.map(obj => obj.title);
        console.log(badMoviesTitle2000);
        return badMoviesTitle2000;
    })
    .then(result => console.log(result))
    .catch(err => console.log(err)); 
 
    //function used to display samples in list
const ul = document.querySelector("section.display > ul");
function sampleDisplay1(movies){     
    clearList(ul);
    for(let i=0; i<movies.length;i++){
        const li1 = document.createElement('li');
        li1.innerHTML = "Title: " + movies[i].title;
        ul.appendChild(li1);
        const li2=document.createElement('li2');
        li2.innerHTML = "Year: " + movies[i].year;
        ul.appendChild(li2);
        const li3=document.createElement('li3');
        li3.innerHTML = "Rating: " + movies[i].rating;
        ul.appendChild(li3);
        const li4=document.createElement('li4');
        li4.innerHTML = "Votes: " + movies[i].votes;
        ul.appendChild(li4);
        const li5=document.createElement('li5');
        li5.innerHTML = "Running Times: " + movies[i].running_times;
        ul.appendChild(li5);
    }  
}
function sampleDisplay2(movies){     
    clearList(ul);
    for(let i=0; i<movies.length;i++){
        const li = document.createElement('li');
        li.innerHTML = movies[i];
        ul.appendChild(li);
    }  
}



function clearList(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}
    function showSelectedValue(){
        const select = document.querySelector('select');
        const section = document.querySelector('section.display');
        const p = document.querySelector('p.display');
        select.addEventListener('change',function(){        
            if(select.value === "titleBadRatingMovies"){
                p.innerHTML = 'Sample of movies title with bad rating:' + badMovies.length;              
                sampleDisplay1(badMovies);
            }else if(select.value === "givenYear"){
                p.innerHTML = 'Number of bad movies since year 2000:' + badMovies2000.length;
                sampleDisplay1(badMovies2000);
            }else if(select.value === "badRating"){
                p.innerHTML = 'The number of Movies with Bad rating since year 2000:' + badMoviesTitle2000.length;
                sampleDisplay2(badMoviesTitle2000);
            }           
            select.value = 'none';
        });
    };
    showSelectedValue();