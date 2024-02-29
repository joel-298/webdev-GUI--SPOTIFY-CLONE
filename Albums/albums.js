
const Artists = [
    {
        id: 1,
        songName: `Alan Walker`,
        poster : "/Albums/artists_poster_images/1.jpg",
    },
    {   
        id: 2,
        songName: `Arijit Singh`,
        poster : "/Albums/artists_poster_images/2.jpg",
    },
    {
        id: 3,
        songName: `Billie Eilish`,
        poster : "/Albums/artists_poster_images/3.jpg",
    },
    {
        id: 4,
        songName: `BTS`,
        poster : "/Albums/artists_poster_images/4.jpg",
    },
    {
        id: 5,
        songName: `Coldplay`,
        poster : "/Albums/artists_poster_images/5.jpg",
    },
    {
        id: 6,
        songName: `Eminem`,
        poster : "/Albums/artists_poster_images/6.jpg",
    },
    {
        id: 7,
        songName: `Guns N' Roses`,
        poster : "/Albums/artists_poster_images/7.jpg",
    },
    {
        id: 8,
        songName: `Jagjit Singh`,
        poster : "/Albums/artists_poster_images/8.jpg",
    },
    {
        id: 9,
        songName: `Juice Wrld`,
        poster : "/Albums/artists_poster_images/9.jpg",
    },
    {
        id: 10,
        songName: `Shawn Mendes`,
        poster : "/Albums/artists_poster_images/10.jpg",
    },
    {
        id: 11,
        songName: `KK`,
        poster : "/Albums/artists_poster_images/11.jpg",
    },
    {
        id: 12,
        songName: `Zayn Malik`,
        poster : "/Albums/artists_poster_images/12.jpg",
    },
    
]



// Array of songs
Array.from(document.getElementsByClassName("Artist_albums")).forEach((e, i)=>{
    e.getElementsByTagName('img')[0].src= Artists[i].poster;
    e.getElementsByTagName('figcaption')[0].innerHTML= Artists[i].songName;
}) ;
