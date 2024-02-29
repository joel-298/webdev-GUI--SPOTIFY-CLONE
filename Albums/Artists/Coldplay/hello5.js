const music = new Audio('');
// music.play();

const songs = [
    {
        id: 1,
        songName: `Hymn For The Weekend<br><div class="subtitle">Coldplay</div>`,
        poster : "/Albums/Artists/Coldplay/images/1.jpg",
    },
    {   
        id: 2,
        songName: `Youre A Sky Full Of Stars<br><div class="subtitle">Coldplay</div>`,
        poster : "/Albums/Artists/Coldplay/images/2.jpg",
    },
    {   
        id: 3,
        songName: `Viva La Vida<br><div class="subtitle">Coldplay</div>`,
        poster : "/Albums/Artists/Coldplay/images/3.jpg",
    },
    {   
        id: 4,
        songName: `Yellow<br><div class="subtitle">Coldplay</div>`,
        poster : "/Albums/Artists/Coldplay/images/4.jpg",
    },
   
]



// Array of songs
// Array.from(document.getElementsByClassName("songs")).forEach((e, i)=>{
//     e.getElementsByTagName('img')[0].src= songs[i].poster;
//     e.getElementsByTagName('figcaption')[0].innerHTML= songs[i].songName;
// }) ;




// Functionality of buttons
let master_play = document.getElementById('master_play');

master_play.addEventListener('click', ()=>{
    if(music.paused || music.currentTime <= 0){
        music.play();

        master_play.classList.remove('bi-play-fill');
        master_play.classList.add('bi-pause-fill');
    }
    else{
        music.pause();

        master_play.classList.remove('bi-pause-fill');
        master_play.classList.add('bi-play-fill');
    }
})



////////
// let playListPlay = document.getElementsByClassName('playListPlay');

///////



//    **************************************************************** we are on this part 
const makeAllBackground = () =>{
    Array.from(document.getElementsByClassName('song')).forEach((el)=>{
        el.style.background = 'rgb(21, 22, 23)';


        // el.addEventListener('mouseenter', () =>                this code is 
        // el.style.background = 'rgb(68, 70, 71,1)');             correct and we will 
                                                        //        get
                                                        //        back on 
        // el.addEventListener('mouseleave', () =>                this 
        // el.style.background = 'rgb(26, 28, 29)');              later on and we will put if else condition here 
    

    })
}
// const makeAllplay = () =>{                                                                we will get back on this later 
//     Array.from(document.getElementsByClassName('playListPlay')).forEach((el)=>{
//         el.classList.remove('bi-play-circle-fill');
//         el.classList.add('');


//     })
// }
//





// Functionality of direct click    , and image change with song change ,
let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let download_music = document.getElementById('download_music');
//look at line title
// let title1 = document.getElementbyId('title1');


Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click', (els)=>{
        index = els.target.id;
        // console.log(index);
        music.src = `/Albums/Artists/Coldplay/audio/${index}.mp3`;
        music.play();
        poster_master_play.src = `/Albums/Artists/Coldplay/images/${index}.jpg`;

        // Now we are linking the pause and play button with direct click 
        master_play.classList.remove('bi-play-fill');
        master_play.classList.add('bi-pause-fill');
 
        // Download music 
        download_music.href =  `/Albums/Artists/Coldplay/audio/${index}.mp3`;


      //  title ( id  sae > index value > aur uss sae >  jo array mil rahi hae use filter karwa rahe hae > aur vaha sae value show karwae gae)
        let songTitles = songs.filter((els) => {  
            return els.id == index;
        });


        songTitles.forEach(elss => {
            let { songName } = elss;
          //  Now from here we will go to the 3rd line after functionality of direct click and place our title code
            title.innerHTML = songName ;
            download_music.setAttribute('download', songName);
        });



        //play button hover         we are on this part 
        makeAllBackground();
        Array.from(document.getElementsByClassName('song'))[index-1].style.background = 'rgb(68, 70, 71,1)';


        // makeAllplay();                   we will get back o this later 
        


    });
})



let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot  =  document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', ()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);
    



    if(sec1 < 10){
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;
    
    

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if(sec2 < 10){
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;


   let progressBar = parseInt((music_curr / music_dur) * 100 ) ;
   seek.value = progressBar;
   let seekbar = seek.value;
   bar2.style.width = `${seekbar}%`;
   dot.style.left = `${seekbar}%`;

        
   if (music_curr == music.duration){
    master_play.classList.add('bi-play-fill');
    master_play.classList.remove('bi-pause-fill');  

}

});


seek.addEventListener('change', () =>{
    music.currentTime = seek.value * music.duration / 100;

    if (music_curr == music.duration ){
        master_play.classList.add('bi-play-fill');
        master_play.classList.remove('bi-pause-fill');  
    }
});





let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let bar2_vol = document.getElementsByClassName('bar2_vol')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', () => {

    let x = vol.value;
    music.volume = x / 100 ;
    bar2_vol.style.width = `${x}%`;
    vol_dot.style.left = `${x}%`;



    if (music.volume  == 0 ) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
    }
    else if ( (music.volume > 0) && (music.volume < 0.4)) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-off-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');       
    }

    else if ((music.volume >= 0.4) && (music.volume <= 0.7) ) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');       
    }
    else if (music.volume  > 0.7 ){
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');        
    }


});








let back = document.getElementById('back');
let next = document.getElementById('next');


back.addEventListener('click', () => {
    index -= 1;
    if (index < 1){
        index = Array.from(document.getElementsByClassName('song')).length;

    }
    music.src =  `/Albums/Artists/Coldplay/audio/${index}.mp3`;
        music.play();
    poster_master_play.src = `/Albums/Artists/Coldplay/images/${index}.jpg`;

    // Now we are linking the pause and play button with direct click 
    master_play.classList.remove('bi-play-fill');
    master_play.classList.add('bi-pause-fill');

  //  title ( id  sae > index value > aur uss sae >  jo array mil rahi hae use filter karwa rahe hae > aur vaha sae value show karwae gae)
    let songTitles = songs.filter((els) => {  
        return els.id == index;
    });


    songTitles.forEach(elss => {
        let { songName } = elss;
      //  Now from here we will go to the 3rd line after functionality of direct click and place our title code
        title.innerHTML = songName ;
    });



    //play button hover         we are on this part 
    makeAllBackground();
    Array.from(document.getElementsByClassName('song'))[index-1].style.background = 'rgb(68, 70, 71,1)';


    //download
    download_music.href =  `/Albums/Artists/Coldplay/audio/${index}.mp3`;

    //doenload title function
    songTitles.forEach(elss => {
        let { songName } = elss;
      //  Now from here we will go to the 3rd line after functionality of direct click and place our title code
        title.innerHTML = songName ;
        download_music.setAttribute('download', songName);
    });


});



next.addEventListener('click', ()=>{
    index ++;
    if (index > Array.from(document.getElementsByClassName('song')).length){
        index = 1 ;
    }
    music.src =  `/Albums/Artists/Coldplay/audio/${index}.mp3`;
    music.play();
    poster_master_play.src = `/Albums/Artists/Coldplay/images/${index}.jpg`;

    // Now we are linking the pause and play button with direct click 
    master_play.classList.remove('bi-play-fill');
    master_play.classList.add('bi-pause-fill');

  //  title ( id  sae > index value > aur uss sae >  jo array mil rahi hae use filter karwa rahe hae > aur vaha sae value show karwae gae)
    let songTitles = songs.filter((els) => {  
        return els.id == index;
    });


    songTitles.forEach(elss => {
        let { songName } = elss;
      //  Now from here we will go to the 3rd line after functionality of direct click and place our title code
        title.innerHTML = songName ;
    });



    //play button hover         we are on this part 
    makeAllBackground();
    Array.from(document.getElementsByClassName('song'))[index-1].style.background = 'rgb(68, 70, 71,1)';


    //download
    download_music.href = `/Albums/Artists/Coldplay/audio/${index}.mp3`;
    //download title function
    songTitles.forEach(elss => {
        let { songName } = elss;
      //  Now from here we will go to the 3rd line after functionality of direct click and place our title code
        title.innerHTML = songName ;
        download_music.setAttribute('download', songName);
    });
   
});





// Icon shuffle
let shuffle = document.getElementsByClassName('shuffle')[0];
shuffle.addEventListener('click', ()=> {
    let a = shuffle.innerHTML ;

    switch (a) {
        case `<p>next</p>` :
            shuffle.classList.add('bi-repeat-1');
            shuffle.classList.remove('bi-shuffle');
            shuffle.classList.remove('bi-repeat');
            shuffle.innerHTML = `<p>repeat1</p>` ;

    
            break;

        case `<p>repeat1</p>`:
            shuffle.classList.remove('bi-repeat-1');
            shuffle.classList.add('bi-shuffle');
            shuffle.classList.remove('bi-repeat');
            shuffle.innerHTML = `<p>random</p>` ;      

            break ;

        case `<p>random</p>`:
            shuffle.classList.remove('bi-repeat-1');
            shuffle.classList.remove('bi-shuffle');
            shuffle.classList.add('bi-repeat');
            shuffle.innerHTML = `<p>next</p>` ;     
            
            break ;
        }
});



 /****************************Auto Shuffle *******************/
 music.addEventListener('ended', () => {
// // by default shuffle here 
//     if (index == songs.length) {
//         index = 1 ;
//     }
//     else {
//         index = Math.floor((Math.random() * songs.length) + 1);
//     }


//     music.src = `audio/${index}.mp3`;
//     music.play();
//     poster_master_play.src = `images/${index}.jpg`;

//     // Now we are linking the pause and play button with direct click 
//     master_play.classList.remove('bi-play-fill');
//     master_play.classList.add('bi-pause-fill');

//     // Download music 
//     download_music.href = `audio/${index}.mp3`;


//     //  title ( id  sae > index value > aur uss sae >  jo array mil rahi hae use filter karwa rahe hae > aur vaha sae value show karwae gae)
//     let songTitles = songs.filter((els) => {  
//         return els.id == index;
//     });


//     songTitles.forEach(elss => {
//         let { songName } = elss;
//     //  Now from here we will go to the 3rd line after functionality of direct click and place our title code
//         title.innerHTML = songName ;
//         download_music.setAttribute('download', songName);
//     });



//     //play button hover         we are on this part 
//     makeAllBackground();
//     Array.from(document.getElementsByClassName('song'))[index-1].style.background = 'rgb(68, 70, 71,1)';


//     // makeAllplay();                   we will get back on this later 

});



//    1) shuffle
const shuffle_music = () => {
    

    if (index == songs.length) {
        index = 1 ;
    }
    else {
        index = Math.floor((Math.random() * songs.length) + 1);
    }
    music.src =  `/Albums/Artists/Coldplay/audio/${index}.mp3`;
    music.play();
    poster_master_play.src = `/Albums/Artists/Coldplay/images/${index}.jpg`;
     // Now we are linking the pause and play button with direct click 
    master_play.classList.remove('bi-play-fill');
    master_play.classList.add('bi-pause-fill');
    // Download music 
    download_music.href =  `/Albums/Artists/Coldplay/audio/${index}.mp3`;


    //  title ( id  sae > index value > aur uss sae >  jo array mil rahi hae use filter karwa rahe hae > aur vaha sae value show karwae gae)
    let songTitles = songs.filter((els) => {  
        return els.id == index;
    });


    songTitles.forEach(elss => {
        let { songName } = elss;
    //  Now from here we will go to the 3rd line after functionality of direct click and place our title code
        title.innerHTML = songName ;
        download_music.setAttribute('download', songName);
    });



    //play button hover         we are on this part 
    makeAllBackground();
    Array.from(document.getElementsByClassName('song'))[index-1].style.background = 'rgb(68, 70, 71,1)';


    // makeAllplay();                   we will get back on this later 
    

}
/*********************************/

//    2) next
const next_1 = () => {
    

    if (index == songs.length) {
        index = 1 ;
    }
    else {
        index++ ;
    }
    music.src =  `/Albums/Artists/Coldplay/audio/${index}.mp3`;
    music.play();
    poster_master_play.src =`/Albums/Artists/Coldplay/images/${index}.jpg`;

    // Now we are linking the pause and play button with direct click 
    master_play.classList.remove('bi-play-fill');
    master_play.classList.add('bi-pause-fill');

    // Download music 
    download_music.href = `/Albums/Artists/Coldplay/audio/${index}.mp3`;


    //  title ( id  sae > index value > aur uss sae >  jo array mil rahi hae use filter karwa rahe hae > aur vaha sae value show karwae gae)
    let songTitles = songs.filter((els) => {  
        return els.id == index;
    });


    songTitles.forEach(elss => {
        let { songName } = elss;
    //  Now from here we will go to the 3rd line after functionality of direct click and place our title code
        title.innerHTML = songName ;
        download_music.setAttribute('download', songName);
    });



    //play button hover         we are on this part 
    makeAllBackground();
    Array.from(document.getElementsByClassName('song'))[index-1].style.background = 'rgb(68, 70, 71,1)';


    // makeAllplay();                   we will get back on this later 
    

}
/*********************************/

//    3) repeat
const repeat1 = () => {
    index = index ; 

    music.src =  `/Albums/Artists/Coldplay/audio/${index}.mp3`;
    music.play();
    poster_master_play.src = `/Albums/Artists/Coldplay/images/${index}.jpg`;
    // Now we are linking the pause and play button with direct click 
    master_play.classList.remove('bi-play-fill');
    master_play.classList.add('bi-pause-fill');

    // Download music 
    download_music.href =  `/Albums/Artists/Coldplay/audio/${index}.mp3`;


    //  title ( id  sae > index value > aur uss sae >  jo array mil rahi hae use filter karwa rahe hae > aur vaha sae value show karwae gae)
    let songTitles = songs.filter((els) => {  
        return els.id == index;
    });


    songTitles.forEach(elss => {
        let { songName } = elss;
    //  Now from here we will go to the 3rd line after functionality of direct click and place our title code
        title.innerHTML = songName ;
        download_music.setAttribute('download', songName);
    });



    //play button hover         we are on this part 
    makeAllBackground();
    Array.from(document.getElementsByClassName('song'))[index-1].style.background = 'rgb(68, 70, 71,1)';


    // makeAllplay();                   we will get back on this later 
    

}
/*********************************/


music.addEventListener('ended', ()=> {
    let b = shuffle.innerHTML ;

    switch (b) {
        case `<p>repeat1</p>` :
            repeat1();
            break ; 

        case `<p>next</p>`:
            next_1() ;
            break ;
        
        case `<p>random</p>`:
            shuffle_music() ; 
            break ;
    }
})
