console.log("1. Adding new song to songDatabase");

const songDatabase = [{
    songId: 1,
    title: 'My baby',
    artist: 'Soggy socks',
  },
  {
    songId: 2,
    title: '3 nails in wood',
    artist: 'The carpenters',
  },
  {
    songId: 3,
    title: 'Blacker than black',
    artist: 'Instant coffee',
  },
  {
    songId: 4,
    title: 'When is enough too little?',
    artist: 'The spies girls',
  },
];

const myPlaylist = [];

//Adding song to Database
function addSongToDatabase(object)
    {
       if (doesSongAlreadyExist(object) === false)
        {
            object.songId = songDatabase.length + 1;
            songDatabase.push(object);      
        }         
    }

//Checking for duplicacy
    function doesSongAlreadyExist(object)
    {
    for(let i = 0; i < songDatabase.length; i++)
        {
            if(songDatabase[i].title === object.title)
            {
                console.log('"' + object.title + '"' + " already exists in the database at id: " +(i+1));
                return true;
            }
                  
        }
          return false;
    }
    

    //Test Data for "Adding songs to database"
const song1 = {
    songId: '',
    title: 'Despasito',
    artist: 'Loui Fonsi'
};

const song2 = {
    songId: '',
    title: 'Hero',
    artist: 'Enrique'
};

const song3 = {
    songId: '',
    title: 'When is enough too little?', //testdata for checking duplicacy
    artist: 'The spies girls'
};

const song4 = {
    songId: '',
    title: 'Thunder Stuck',
    artist: 'ACDC'
};
//*************************************************
console.log("Song Database BEFORE adding the new songs: ");
console.log(songDatabase);
addSongToDatabase(song1);
addSongToDatabase(song2);
addSongToDatabase(song3);
addSongToDatabase(song4);
console.log("Song Database AFTER adding the new songs: ");
console.log(songDatabase);
console.log("--------------------------------------------------");



//2. Search

console.log("2. Search");


getSongByTitle('When is enough too little?');
getSongByTitle('When is enough too');

//function for checking the song already exists
function getSongByTitle(inputTitle)
{
    for(let i = 0; i < songDatabase.length; i++)
     {
      if(inputTitle === songDatabase[i].title)
        {
             console.log("The searched song is:");
             console.log (songDatabase[i]); 
             return;  
          
        }
    }
    console.log("The searched song: " + '"'  +inputTitle+ '"' + " does not exists");  
}

console.log("--------------------------------------------------");

//3. Playlist
console.log("3. Playlist");
const myPlayList = [];

//test data for playlist
const song10 ={
    songId: 1,
    title: 'My baby',
    artist: 'Soggy socks',
  };

const song11={
    songId: 2,
    title: '3 nails in wood',
    artist: 'The carpenters',
  };
  
//*********************************

  function addSongToPlaylist(object)
  {
      for(let i=0; i<songDatabase.length; i++)
      { 
        if(object.songId===songDatabase[i].songId)
        {
            myPlayList.push(songDatabase[i]);
            break;
        }
               
      }
      
  }

  addSongToPlaylist(song10);
  addSongToPlaylist(song11);
  console.log("My playlist is:" );
  console.log( myPlayList);
