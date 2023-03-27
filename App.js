// OBJECTS FOR EACH SONG DETAILS
const songs = [
    {
        id: '1',
        name: 'Dunsin Oyekan',
        title: 'Because He Is I am',
        artist: 'dunsin',
        category: "top",
        img: 'dunsin.jpeg'
    },
    {
        id: '2',
        name: 'Dunsin Oyekan',
        title: 'Stand In The Gap',
        artist: 'dunsin',
        genre: "gospel",
        img: 'dunsin.jpeg' 
    },
    {
        id: '3',
        name: 'Dunsin Oyekan',
        title: 'Crown of Souls',
        category: 'top',
        genre: 'gospel',
        artist: 'dunsin',
        img: 'dunsin.jpeg'
    },
    {
        id: '4',
        name: 'Dunsin Oyekan',
        title: 'Who Is On The Lord Side',
        artist: 'dunsin',
        genre: "gospel",
        img: 'dunsin.jpeg'
    },
    {
        id: '5',
        name: 'Dunsin Oyekan',
        title: 'Let Your Sound',
        artist: 'dunsin',
        img: 'dunsin.jpeg'
    },
    {
        id: '6',
        name: 'Dunsin Oyekan',
        title: 'When God Walks In',
        artist: 'dunsin',
        img: 'dunsin.jpeg'
    },
    {
        id: '7',
        name: 'Nathaniel Bassey',
        title: 'Tobechukwu',
        artist: 'nat',
        category: 'top',
        img: 'nat.jpeg'
    },
    {
        id: '8',
        name: 'Nathaniel Bassey',
        title: 'See What The Lord Has Done',
        artist: 'nat',
        genre: "gospel",
        img: 'nat.jpeg'
    },
    {
        id: '9',
        name: 'Nathaniel Bassey',
        title: 'Ruach Elohim',
        artist: 'nat',
        genre: "gospel",
        img: 'nat.jpeg'
    },
    {
        id: '10',
        name: 'Nathaniel Bassey',
        title: 'Like A Symphony',
        artist: 'nat',
        img: 'nat.jpeg'
    },
    {
        id: '11',
        name: 'Nathaniel Bassey',
        title: 'The Lord Is My Light',
        artist: 'nat',
        genre: 'gospel',
        category: 'top',
        img: 'nat.jpeg'
    },
    {
        id: '12',
        name: 'Nathaniel Bassey',
        title: 'Yeshua',
        artist: 'nat',
        genre: 'gospel',
        img: 'nat.jpeg'
    },
    {
        id: '13',
        name: 'Chike',
        title: 'Roju',
        artist: 'chike',
        category: 'top',
        genre: 'afro',
        img: 'chike.jpeg'
    },
    {
        id: '14',
        name: 'Chike',
        title: 'Out Of Love',
        genre: "afro",
        artist: 'chike',
        img: 'chike.jpeg'
    },
    {
        id: '15',
        name: 'Chike',
        title: 'Forgive',
        artist: 'chike',
        img: 'chike.jpeg'
    },
    {
        id: '16',
        name: 'Chike',
        title: 'Winner',
        artist: 'chike',
        img: 'chike.jpeg'
    },
    {
        id: '17',
        name: 'Chike',
        title: 'Pour Me A Drink',
        artist: 'chike',
        category: 'top',
        img: 'chike.jpeg'
    },
    {
        id: '18',
        name: 'Johnny Drille',
        title: 'How are You My Friend',
        artist: 'johnny',
        category: 'top',
        genre: "afro",
        img: 'johnny.jpeg'
    },
    {
        id: '19',
        name: 'Johnny Drille',
        title: 'Driving In The Rain',
        artist: 'johnny',
        img: 'johnny.jpeg',
        category: 'top'
    },
    {
        id: '20',
        name: 'Johnny Drille',
        title: 'Lies',
        artist: 'johnny',
        img: 'johnny.jpeg'
    },
    {
        id: '21',
        name: 'Johnny Drille',
        title: 'Loving Is Harder',
        artist: 'johnny',
        img: 'johnny.jpeg'
    },
    {
        id: '22',
        name: 'Johnny Drille',
        title: 'Ludo',
        artist: 'johnny',
        genre: "afro",
        img: 'johnny.jpeg'
    },
    {
        id: '23',
        name: 'Mavrick City',
        title: 'Miliion Little Miracles',
        artist: 'mavrick',
        category: 'top',
        img: 'mavrick.jpeg'
    },
    {
        id: '24',
        name: 'Mavrick City',
        title: 'Shall Not Want',
        artist: 'mavrick',
        img: 'mavrick.jpeg',
        genre: 'gospel'
    },
    {
        id: '25',
        name: 'Mavrick City',
        title: 'Talking To Jesus',
        artist: 'mavrick',
        genre: "gospel",
        img: 'mavrick.jpeg'
    },
    {
        id: '26',
        name: 'Mavrick City',
        title: 'Jireh',
        artist: 'mavrick',
        img: 'mavrick.jpeg',
        genre: 'gospel'
    },
    {
        id: '27',
        name: 'Travis Green',
        title: 'Made A Way',
        artist: 'travis',
        genre: "gospel",
        img: 'travis.jpeg'
    },
    {
        id: '28',
        name: 'Tu Face',
        title: 'Rain Drops',
        artist: 'tuface',
        genre: "afro",
        img: '14.jpeg'
    },
    {
        id: '29',
        name: 'Adekunle Gold',
        title: 'Five Star',
        category: 'top',
        genre: "afro",
        img: '13.jpg'
    },
    {
        id: '30',
        name: 'Adekunle Gold',
        title: 'Ire',
        img: '13.jpg',
        genre: 'afro'
    },
    {
        id: '31',
        name: 'Ayra Star',
        title: 'Sability',
        category: 'top',
        genre: "afro",
        img: 'ayra.jpeg'
    },
    {
        id: '32',
        name: 'Camidoh',
        title: 'Ghetto Love',
        category: 'top',
        genre: "afro",
        img: 'camidoh.jpeg'
    },
    {
        id: '33',
        name: 'Kiss Daniel',
        title: 'Cough',
        category: 'top',
        genre: "afro",
        img: 'kizz.jpeg'
    },
    {
        id: '34',
        name: 'Kiss Daniel',
        title: 'Oshe',
        genre: "afro",
        img: 'kizz.jpeg'
    },
    {
        id: '35',
        name: 'Kiss Daniel',
        title: 'RTID',
        category: 'top',
        genre: "afro",
        img: 'kizz.jpeg'
    },
    {
        id: '36',
        name: 'Moses Bliss',
        title: 'Miracles',
        category: 'top',
        img: 'bliss.jpeg',
        genre: 'gospel'
    },
    {
        id: '37',
        name: 'Rexxie',
        title: 'Abracadabra',
        category: 'top',
        genre: "afro",
        img: 'rexie.jpeg'
    },
    {
        id: '38',
        name: 'Ruger',
        title: 'Asiwaju',
        genre: "afro",
        img: 'ruger.jpeg'
    },
    {
        id: '39',
        name: 'Moses Bliss',
        title: 'Meditate',
        genre: 'gospel',
        img: 'bliss.jpeg'
    },
    {
        id: '40',
        name: 'Wizkid',
        title: 'Sugar',
        genre: 'afro',
        img: 'wizkiyy.jpg',
        category: 'top'
    },
    {
        id: '41',
        name: 'Davido',
        title: 'Stand Strong',
        genre: 'afro',
        img: '8.jpg'
    },
    {
        id: '42',
        name: 'Joeboy',
        title: 'Body and Soul',
        genre: 'afro',
        img: 'joeboy.jpeg'
    },
    {
        id: '43',
        name: 'Johnny Drille ft Don Jazzy',
        title: 'Ova',
        artist: " johnnn",
        genre: 'afro',
        img: 'johnny.jpeg'
    },
    {
        id: '44',
        name: 'JudiKay',
        title: 'Capable God',
        genre: 'gospel',
        img: '15.jpeg'
    },
    {
        id: '45',
        name: 'Akon',
        title: 'Sweetest girl',
        genre: 'classic',
        img: 'akon.jpeg'
    },
    {
        id: '46',
        name: 'Brandy',
        title: 'Have you ever',
        genre: 'classic',
        img: 'brandy.jpeg'
    },
    {
        id: '47',
        name: 'Celine Dion',
        title: 'I\'m alive',
        genre: 'classic',
        img: '5.jpg'
    },
    {
        id: '48',
        name: 'Celine Dion',
        title: 'Have you ever loved',
        genre: 'classic',
        img: '5.jpg'
    },
    {
        id: '49',
        name: 'Celine Dion',
        title: 'Mama',
        genre: 'classic',
        img: '5.jpg'
    },
    {
        id: '50',
        name: 'R Kelly',
        title: 'Storm\'s over',
        genre: 'classic',
        img: 'kelly.jpeg'
    },
    {
        id: '51',
        name: 'Sunny Ade',
        title: 'Ja funmi',
        genre: 'classic',
        img: 'sunny.jpg'
    },
    {
        id: '52',
        name: 'Sunny Ade',
        title: 'Appreciation',
        genre: 'classic',
        img: 'sunny.jpg'
    },
    {
        id: '53',
        name: 'Westlife',
        title: 'Nothing\'s gonna change',
        genre: 'classic',
        img: 'west.jpg'
    },
    {
        id: '54',
        name: 'Fela Kuti',
        title: 'Monday',
        genre: 'classic',
        img: 'fela.jpeg'
    },
    {
        id: '55',
        name: 'Fela Kuti',
        title: 'Sorry Sorry',
        genre: 'classic',
        img: 'fela.jpeg'
    },
    {
        id: '56',
        name: 'Wyclef',
        title: '911',
        genre: 'classic',
        img: 'clef.jpeg'
    },
    {
        id: '57',
        name: 'Charlie Parker',
        title: 'Little Suede',
        genre: 'jazz',
        img: 'charlie.jpeg'
    },
    {
        id: '58',
        name: 'Dave Koz',
        title: 'Careless Whisper',
        genre: 'jazz',
        category: 'top',
        img: '9.jpg'
    },
    {
        id: '59',
        name: 'Donald Hayes',
        title: 'Anytime Anyplace',
        genre: 'jazz',
        img: 'donald.jpeg'
    },
    {
        id: '60',
        name: 'Gerald Albright',
        title: 'We fall down',
        genre: 'jazz',
        img: 'gerald.jpeg'
    },
    {
        id: '61',
        name: 'Kirk Whalum',
        title: 'The wave',
        genre: 'jazz',
        img: 'kirk.jpg'
    },
    {
        id: '62',
        name: 'Kenny G',
        title: 'Jamin Flower',
        category: 'top',
        genre: 'jazz',
        img: 'kenny.jpeg'
    },
    {
        id: '63',
        name: 'Whitney Houston',
        title: 'Moment in Time',
        genre: 'classic',
        img: 'whitney.jpeg'
    },
    {
        id: '64',
        name: 'Whitney Houston',
        title: 'Always love You',
        genre: 'classic',
        img: 'whitney.jpeg'
    },
    {
        id: '65',
        name: 'Chic Correa',
        title: 'Got a Match?',
        category: 'top',
        genre: 'jazz',
        img: 'back.jpeg'
    },
    {
        id: '66',
        name: 'John Coltrane',
        title: 'In a Sentimental Mood',
        genre: 'jazz',
        img: 'back.jpeg'
    },
    
]
let songIndex = 1,
allSongs = document.querySelector('.allTracks'),
playName = document.querySelector('.playName'),
playTitle = document.querySelector('.playTitle'),
playImg = document.querySelector('.playImg'),
wave = document.getElementById('wavy'),
prevSong = document.getElementById('prev'),
nextSong = document.getElementById('next')
music = new Audio("audio/1.mp3"),
masterPlay = document.getElementById('masterPlay'),
shuffle = document.getElementById('shuffle'),
repeat = document.getElementById('repeat'),
startTime = document.getElementById('starTime'),
endTime = document.getElementById('endTime');
songDownload = document.querySelector('.downloadSong')


// SHOWING MUSIC ON LOADING WINDOW 
window.addEventListener('load', () => {
    loadMusic(songIndex);
    allTracks();
});
    
const loadMusic = (indexNum)=>{
    playName.innerText = songs[indexNum - 1].name
    playTitle.innerText = songs[indexNum - 1].title
    playImg.src = songs[indexNum - 1].img
    music.src = `audio/${indexNum}.mp3`
}


//CREATING FUNCTION FOR PREVIOUS AND NEXT SONG
function playNext() { //NEXT SONG ACCORDING TO INDEX NUMBER
    let randomBtn = shuffle.getAttribute('title');
    if(randomBtn === 'repeat'){
        songIndex;
    }
    else if(randomBtn === 'shuffle'){
        songIndex = Math.floor((Math.random() * songs.length) + 1)
    }
    else{
        songIndex++;
        if(songIndex > songs.length){
        songIndex = 1
        }
    }
   
    songPlaying();
    loadMusic(songIndex);
    playMusic();
    
    
}
function playPrev(){ //PREVIOUS SONG ACCORDING TO INDEX NUMBER
    let randomBtn = shuffle.getAttribute('title');
    if(randomBtn === 'repeat'){
        songIndex;
    }
    else if(randomBtn === 'shuffle'){
        songIndex = Math.floor((Math.random() * songs.length) - 1)
    }
    else{
        songIndex--;
        if(songIndex < 1){
            songIndex = songs.length
        }
    }
    songPlaying();
    loadMusic(songIndex);
    playMusic();
}

nextSong.addEventListener('click', () =>{
    playNext();
});
prevSong.addEventListener('click', ()=>{
    playPrev();
});

//CLICK FUNCTION FORPLAY/PAUSE CONTROL ICON
function playMusic(){
    masterPlay.classList.add("fa-circle-pause");
    music.play();
    wave.classList.add('active1');
}
function pauseMusic() {
    music.pause();
    wave.classList.remove('active1');
    masterPlay.classList.add("fa-circle-play");
    masterPlay.classList.remove("fa-circle-pause");
}

// RANDOM AND REPEAT SELECTION OF SONGS
const repeatSong = () => {
    songIndex;
    songPlaying();
    loadMusic(songIndex);
    playMusic();
}
const randomSong = () => {
    if (songIndex == songs.length) {
        songIndex = 1
    } else {
        songIndex = Math.floor((Math.random() * songs.length)+ 1)
    }
    songPlaying();
    loadMusic(songIndex);
    playMusic();
}
const noShuffle = () => {
    if (songIndex === songs.length) {
    songIndex = 1;
    }else{
        songIndex++;
    }
    songPlaying();
    loadMusic(songIndex);
    playMusic();
}
shuffle.addEventListener('click', ()=> {
    let shuffleBtn = shuffle.getAttribute('title');

    switch (shuffleBtn) {
        case "noshuffle":
            shuffle.style.color = "#2196f3"
            shuffle.setAttribute('title', 'shuffle')
            break;

        case "shuffle":
            shuffle.style.color = "#2196f3"
            shuffle.setAttribute('title', 'repeat')
            shuffle.classList.remove("fa-shuffle")
            shuffle.classList.add("fa-repeat")
        break;

        case "repeat":
            shuffle.style.color = "#fff"
            shuffle.setAttribute('title', 'noshuffle')
            shuffle.classList.remove("fa-repeat")
            shuffle.classList.add("fa-shuffle")
        break;
    }
})
music.addEventListener('ended', () => {
    let shuffleBtn = shuffle.getAttribute('title');

    switch (shuffleBtn) {
        case 'noshuffle':
            noShuffle();
            break;
    
        case 'shuffle' :
            randomSong();
            break;
        case 'repeat':
            repeatSong();
            break;
    }
})
// MUSIC TIME FUNCTION
music.addEventListener('timeupdate', (e) => {
    let currentTime = e.target.currentTime;
    let duration = e.target.duration
    let jumpTo = document.getElementById('jumpTo');
    let jumpToBar = document.getElementById('bar2')
    let timeCursor = document.getElementById('timeCursor');
    

    music.addEventListener('loadeddata', ()=> {
        //updating total time duration of current song
        let songDuration = music.duration,
        totalMin = Math.floor(songDuration / 60),
        totalSec = Math.floor(songDuration % 60)
        if(totalSec < 10){
            totalSec = `0${totalSec}`//adding 0 if total seconds of song is less than 10
        }
        endTime.innerText = `${totalMin}:${totalSec}`  
    });
    // Updating current time of current playing song
        let currentMin = Math.floor(currentTime / 60),
        currentSec = Math.floor(currentTime % 60)

        if(currentSec < 10){
            currentSec = `0${currentSec}`//adding 0 if total seconds of song is less than 10
        }
        startTime.innerText = `${currentMin}:${currentSec}`

    // Updating progress bar with song time
    let progressBar = parseInt((currentTime / duration) * 100);
    jumpToBar.style.width = `${progressBar}%`;
    timeCursor.style.left = `${progressBar}%`;
})
jumpTo.addEventListener('change', () => {
    music.currentTime = jumpTo.value * music.duration / 100;
});

// VOLUME ACTIONS AND CONTROL
volume.addEventListener('change', ()=>{ // Volume control functions
    let volume = document.getElementById('volume');
    let volBar = document.getElementById('volBar');
    let volIcon = document.getElementById('volIcon');
    let volumeCursor = document.getElementById('volCursor');

    if(volume.value == 0){
        volIcon.classList.remove('fa-volume-high');
        volIcon.classList.remove('fa-volume-low');
        volIcon.classList.add('fa-volume-off');
    }
    if(volume.value > 0 ){
        volIcon.classList.remove('fa-volume-high');
        volIcon.classList.add('fa-volume-low');
        volIcon.classList.remove('fa-volume-off');
    }
    if(volume.value > 50){
        volIcon.classList.add('fa-volume-high');
        volIcon.classList.remove('fa-volume-low');
        volIcon.classList.remove('fa-volume-off');
    }

    let volValue = volume.value
    volBar.style.width =  `${volValue}%`
    volumeCursor.style.left = `${volValue}%`;
    music.volume = volValue / 100;
});

masterPlay.addEventListener('click', () =>{//click function for play and pause current song
    if(music.paused || music.currentTime <= 0){
        playMusic();
    }
    else{
        pauseMusic();
    }
});



// SEARCH BAR FUNCTION
let searchInput = document.getElementById('search');

searchInput.addEventListener('input', (e)=>{
    let searchText = e.target.value.toLowerCase();
    newArr.forEach((musicItem) => {
        const isVisible = musicItem.name.toLowerCase().includes(searchText);//CHECKING IF THE SEARCHRESULTS  HAS THE VALUE INPUTED BY USER
        musicItem.element.classList.toggle('hide', !isVisible);
        allSongs.classList.toggle('active');
    });
    artist.classList.add('show');
    favorite.classList.remove('show')
});

let newArr = [];
const allTracks = () => {
    newArr = songs.map((x) => {
        let {id, name, img, title} = x;
        let searchName = document.createElement('div');
        const songCard = `<div class="track">
                     <div class="trackImg">
                         <img src="${img}" alt="">
                     </div>
                     <div class="trackTitle">
                         <p>${title}</p>
                         <span>${name}</span>
                     </div>
                     <div class="trackTime" id="${id}"></div>
                     <i class="fas playBtn fa-circle-play" title="play" id="${id}"></i>
                 </div>`
        searchName.innerHTML = songCard;
        allSongs.append(searchName);
        return {name: x.name, element: searchName}
    });
    songPlaying();
} 
// allTracks();
//SELECTING TRACK TO PLAY AND DISPLAY ITS DETAILS ON MASTERPLAY
const songPlaying = () => {
    const playSong = document.querySelectorAll('.playBtn');
    playSong.forEach((playBtn) => {    //LOOPING THROUGH EACH PLAY BUTTON
        playBtn.addEventListener('click', (btn) => {      //ADDING CLICK FUNCTION TO EACH BUTTON
             songIndex = btn.target.id     //TARGETTING ID OF SELECTED TRACK
            let search = songs.find((x) => x.id === songIndex) //SEARCHING THROUGH ALL SONG ARRAY TO FIND A SONG THAT MATCHES SONGINDEX 
            if(search.id === songIndex){    //IF ID OF SONG IS SAME AS SONG INDEX 
                playTitle.innerHTML = search.title
                playName.innerHTML = search.name
                playImg.src = search.img
                music.src = `audio/${songIndex}.mp3`;

                let play = btn.target.title
                if(play === "play"){
                    playMusic();
                    playBtn.setAttribute('title', '')
                    masterPlay.setAttribute('title', 'play')
                    playBtn.classList.add("fa-circle-pause")
                }else if(play === ''){
                    pauseMusic();
                    playBtn.setAttribute('title', 'play')
                    masterPlay.setAttribute('title', '')
                    playBtn.classList.remove("fa-circle-pause")
                }
            }
        });
    });
}
songPlaying();


// TOGGLE FUNCTION FOR NAVIGATION MENU ON SMALLER SCREEN
let menu = document.querySelector('.menu');
let navigation = document.querySelector('.navigation')
menu.addEventListener('click', () => {
    menu.classList.toggle('active')
    navigation.classList.toggle('active')
})

//TOGGLE FUNCTION FOR SIDEBAR NAVIGATION MENU
let toggle = document.querySelector('#toggle');
let sideBar = document.querySelector('.sideBar');
toggle.onclick = () => {
    sideBar.classList.toggle('active');
    toggle.classList.toggle('active')
}

// /FUNCTION FOR EACH SIDEBAR NAVIGATION MENU CONTENT 
let navList = document.querySelectorAll('.nav-list'),
home = document.querySelector('.content'),
album = document.querySelector('.albums'),
artist = document.querySelector('.artistes'),
favorite = document.querySelector('.favorite');

navList.forEach((nav) => {//LOOPING THROUGH EACH SIDEBAR NAVIGATION ICONS
    nav.addEventListener('click', () =>{//ADDING A FUNCTION ON EACH ICON CLICKED
        document.querySelector('.nav-list.active').classList.remove('active');
        nav.classList.add('active')


        if(nav.id === 'home'){
            home.classList.add('active')
            album.classList.remove('show')
           artist.classList.remove('show')
            favorite.classList.remove('show')
        }
        else if(nav.id === 'albums'){
            home.classList.remove('active')
            album.classList.add('show')
           artist.classList.remove('show')
            favorite.classList.remove('show')
        }
        else if(nav.id === 'artist'){
            home.classList.remove('active')
            album.classList.remove('show')
           artist.classList.add('show')
            favorite.classList.remove('show')
        }
        else{
            home.classList.remove('active')
            album.classList.remove('show')
           artist.classList.remove('show')
            favorite.classList.add('show')
        }
    })
});



//FUNCTION FOR CHANGING BACKGROUND FOR TOP NAVIGATION MENU
let link = document.querySelectorAll('.links');
function linkActive() {
    link.forEach((menuItem) =>
        menuItem.classList.remove('active'));
        this.classList.add('active');
}
link.forEach((menuItem) =>
menuItem.addEventListener('click', linkActive));

// DRAGGABLE/SCROLL FUNCTION FOR TRENDS SECTION
let btnLeft = document.querySelectorAll('.btnLeft');
let btnRight = document.querySelectorAll('.btnRight');
// console.log(btnLeft, btnRight)

let actionDrag = false;
let trend = document.querySelector('.trends');
let gospelSong = document.querySelector('.gospelSongs');
let afroSong = document.querySelector('.afroSongs');
let classicSong = document.querySelector('.classicSongs');
let jazzSong = document.querySelector('.jazzSongs');
let genre = document.querySelectorAll('.genre')

 genre.forEach((option) => {
    option.addEventListener("mousemove", (drag)=>{
        if(!actionDrag) return;
        option.scrollLeft -= drag.movementX
        console.log('seen')
    });
 });

document.addEventListener("mouseup", ()=>{
    actionDrag = false;
})
genre.forEach((option) => {
    option.addEventListener("mousedown", ()=>{
        actionDrag = true
    });
 });

// SCROLL BUTTONs FUNCTION
const visibleIcon = ()=>{ //MAKING SCROLL BUTTON INVISIBLE AND VISIBLE AT CERTAIN CONDITION 
    genre.forEach((opt) => {
        let scrollLeftValue = Math.ceil(opt.scrollLeft);
        let scrollableWidth = opt.scrollWidth - opt.clientWidth
        // btnLeft.forEach((left) => {
        //     // left.style.display = scrollLeftValue > 0 ? "block" : "" 
        //     // left.addEventListener('click', ()=>{
        //         if(left.id === 'top'){
        //             left.style.display = scrollLeftValue > 0 ? "block" : "none" 
        //         }
        //         else if(left.id === 'gospel'){
        //             left.style.display = scrollLeftValue > 0 ? "block" : "none" 
        //         }
        //         else if(left.id === 'afro'){
        //             left.style.display = scrollLeftValue > 0 ? "block" : "none" 
        //         }
        //         else if(left.id === 'classic'){
        //             left.style.display = scrollLeftValue > 0 ? "block" : "none" 
        //         }
        //         else{
        //             left.style.display = scrollLeftValue > 0 ? "block" : "none" 
        //         }
        //     // });
        // });
        // btnRight.forEach((right) => {
        //     right.style.display = scrollableWidth > scrollLeftValue ? "block" : "none"
        //     // right.addEventListener('click', ()=>{
        //         if(right.id === 'top'){
        //             right.style.display = scrollableWidth > scrollLeftValue ? "block" : "none"
        //         }
        //         else if(right.id === 'gospel'){
        //             right.style.display = scrollableWidth > scrollLeftValue ? "block" : "none"
        //         }
        //         else if(right.id === 'afro'){
        //             right.style.display = scrollableWidth > scrollLeftValue ? "block" : "none"
        //         }
        //         else if(right.id === 'classic'){
        //             right.style.display = scrollableWidth > scrollLeftValue ? "block" : "none"
        //         }
        //         else{
        //             right.style.display = scrollableWidth > scrollLeftValue ? "block" : "none"
        //         }
        //     });
        // });
    });
    
    
    // btnLeft.style.display = scrollLeftValue > 0 ? "block" : "none" 
    // btnRight.style.display = scrollableWidth > scrollLeftValue ? "block" : "none"
}

btnLeft.forEach((left) => {
    left.addEventListener('click', ()=>{
        if(left.id === 'top'){
            trend.scrollLeft -= 150;
        }
        else if(left.id === 'gospel'){
            gospelSong.scrollLeft -= 150;
        }
        else if(left.id === 'afro'){
            afroSong.scrollLeft -= 150;
        }
        else if(left.id === 'classic'){
            classicSong.scrollLeft -= 150;
        }
        else{
            jazzSong.scrollLeft -= 150;
        }
        // visibleIcon();
    });
})

btnRight.forEach((right) => {
    right.addEventListener('click', ()=>{
        if(right.id === 'top'){
            trend.scrollLeft += 150;
        }
        else if(right.id === 'gospel'){
            gospelSong.scrollLeft += 150;
        }
        else if(right.id === 'afro'){
            afroSong.scrollLeft += 150;
        }
        else if(right.id === 'classic'){
            classicSong.scrollLeft += 150;
        }
        else{
            jazzSong.scrollLeft += 150;
        }
        // visibleIcon();
    });
})

// FILTERING ALL TRACKS INTO DIFFERENT ALBUMS AND GENRES
let viewAlbum = document.querySelectorAll('.albumBtn');
let previewContainer = document.querySelector('.previewAlbum')
let preview = previewContainer.querySelectorAll('.preview');
let removePreview = document.querySelector('.fa-times');
let prevTrack = document.querySelectorAll('.prevTracks');

viewAlbum.forEach((each) => {//LOOPING THROUGH ALBUMS
    each.addEventListener('click', (a) => {
        previewContainer.classList.add('active')
        let albumId = a.target.id //TARGETING ALBUM ID
        preview.forEach((prev) => { //LOOPING THROUGH ALBUM PREVIEW SECTIONS
            if(albumId === prev.id){ //IF ID OF THE ALBUM SELECTED IS SAME AS THE ID OF ITS PREEVIEW PAGE
                document.querySelector('.preview.active').classList.remove('active');
                prev.classList.add('active');   
                prevTrack.forEach((p) => { //LOOPING THROUGH SECTIONS TO SHOW SELECTED ALBUM TRACKS
                    p.innerHTML = songs.filter((x)=> x.artist === prev.id).map((e) =>{ //FILTERING AND MAPPING THE 
                        //ARRAY TO MATCH ARTISTS NAME AND ALBUM PREVIEW ID
                        let {id,img, name, title} = e //DESTRUCTURING THE NEW ARRAY RETURNED
                        return `<div class="track">
                                    <div class="trackImg">
                                        <img src="${img}" alt="">
                                    </div>
                                    <div class="trackTitle">
                                        <p>${title}</p>
                                        <span>${name}</span>
                                    </div>
                                    <div class="trackTime"></div>
                                    <i class="fas playBtn fa-circle-play" title="play" id="${id}"></i>
                                </div>`
                        }).join('');
                    });
            }
                
        })
        songPlaying();
    })
});
removePreview.addEventListener('click', ()=> {
    previewContainer.classList.remove('active');
});


 //FILTERING SONGS INTO DIFERRENT GENRES
 let trendingSong = document.querySelector('.trends')
 
 const songTrends = () => {
    trendingSong.innerHTML = songs.filter((x) => x.category === 'top').sort((a,b) => { //sorting song names alphabetically
        let titleA = a.title.toUpperCase();
        let titleB = b.title.toUpperCase();
        if(titleA < titleB){
            return -1
        }
        if(titleA > titleB){
            return 1
        }
        return 0}).map(y => {
        let {name, title, img, id} = y
        return ` <div class="inline">
        <div class="trendSong">
            <div class="songImg">
                <img src="${img}" alt="">
            </div>
            <i class="fas playBtn fa-circle-play" title="play" id="${id}"></i>
            <div class="songTitle">
                <h4 class="notify"></h4>
                <p class="titles">${title}</p>
                <span class="singer">${name}</span>
            </div>
            <i class="fa-regular fa-heart" title="" id="${id}"></i>
        </div>
    </div>`
    }).join('')
}
songTrends();
const showGospel = () => {
    gospelSong.innerHTML = songs.filter((gospel) => gospel.genre === 'gospel').
    sort((a,b) =>{
        let titleA = a.title.toUpperCase();
        let titleB = b.title.toUpperCase();
        if(titleA < titleB){
            return -1
        }
        if(titleA > titleB){
            return 1
        }
        return 0}).map(y => {
        let {name, title, img, id} = y
        return ` <div class="inline">
        <div class="trendSong">
            <div class="songImg">
                <img src="${img}" alt="">
            </div>
            <i class="fas playBtn fa-circle-play" title="play" id="${id}"></i>
            <div class="songTitle">
                <h4 class="notify"></h4>
                <p class="titles">${title}</p>
                <span class="singer">${name}</span>
            </div>
            <i class="fa-regular fa-heart" title="" id="${id}"></i>
        </div>
    </div>`
    }).join('') 
}
showGospel();

const showAfro = () => {
    afroSong.innerHTML = songs.filter((afro) => afro.genre === 'afro').
    sort((a,b) =>{
        let titleA = a.title.toUpperCase();
        let titleB = b.title.toUpperCase();
        if(titleA < titleB){
            return -1
        }
        if(titleA > titleB){
            return 1
        }
        return 0}).map(y => {
        let {name, title, img, id} = y
        return ` <div class="inline">
        <div class="trendSong">
            <div class="songImg">
                <img src="${img}" alt="">
            </div>
            <i class="fas playBtn fa-circle-play" title="play" id="${id}"></i>
            <div class="songTitle">
                <h4 class="notify"></h4>
                <p class="titles">${title}</p>
                <span class="singer">${name}</span>
            </div>
            <i class="fa-regular fa-heart" title="" id="${id}"></i>
        </div>
    </div>`
    }).join('') 
}
showAfro();

const showClassic = () => {
    classicSong.innerHTML = songs.filter((classic) => classic.genre === 'classic').
    sort((a,b) =>{
        let titleA = a.title.toUpperCase();
        let titleB = b.title.toUpperCase();
        if(titleA < titleB){
            return -1
        }
        if(titleA > titleB){
            return 1
        }
        return 0}).map(y => {
        let {name, title, img, id} = y
        return ` <div class="inline">
        <div class="trendSong">
            <div class="songImg">
                <img src="${img}" alt="">
            </div>
            <i class="fas playBtn fa-circle-play" title="play" id="${id}"></i>
            <div class="songTitle">
                <h4 class="notify"></h4>
                <p class="titles">${title}</p>
                <span class="singer">${name}</span>
            </div>
            <i class="fa-regular fa-heart" title="" id="${id}"></i>
        </div>
    </div>`
    }).join('') 
}
showClassic();

const showJazz = () => {
    jazzSong.innerHTML = songs.filter((jazz) => jazz.genre === 'jazz').
    sort((a,b) =>{
        let titleA = a.title.toUpperCase();
        let titleB = b.title.toUpperCase();
        if(titleA < titleB){
            return -1
        }
        if(titleA > titleB){
            return 1
        }
        return 0}).map(y => {
        let {name, title, img, id} = y
        return ` <div class="inline">
        <div class="trendSong">
            <div class="songImg">
                <img src="${img}" alt="">
            </div>
            <i class="fas playBtn fa-circle-play" title="play" id="${id}"></i>
            <div class="songTitle">
                <h4 class="notify"></h4>
                <p class="titles">${title}</p>
                <span class="singer">${name}</span>
            </div>
            <i class="fa-regular fa-heart" title="" id="${id}"></i>
        </div>
    </div>`
    }).join('') 
}
showJazz();

//COLLAPSING AND FOLDING MASTERPLAY FOR SMALLER SCREEN
let collapse = document.querySelector('.fa-chevron-up');
let playControl = document.querySelector('.masterPlay')
collapse.addEventListener('click', () => {
    playControl.classList.toggle('expand')
    let open = collapse.getAttribute('title')
    if(open === 'open'){ 
        collapse.classList.add('fa-chevron-down');
        collapse.setAttribute('title', '')
    }else if(open === ''){
        collapse.classList.remove('fa-chevron-down');
        collapse.classList.add('fa-chevron-up');
       collapse.setAttribute('title', 'open')
    }
})

// ADDING SELECTED SONG TO FAVORITE SECTION
const addBtn = document.querySelectorAll('.fa-heart')
let folder = [] ;

for(let btn of addBtn){ 
    btn.addEventListener('click', (el) =>{
        let btnClicked = el.target;
        let playId = btnClicked.id
        let songAdded = btnClicked.parentElement
        let titles = songAdded.getElementsByClassName('titles')[0].innerText
        let singer = songAdded.getElementsByClassName('singer')[0].innerText
        let img = songAdded.getElementsByTagName('img')[0].src
        let notify = songAdded.getElementsByClassName('notify')[0];

        let search = folder.find((x) => x.id === playId);
        //SEARCHING THROUGH FOLDER ARRAY
        
        if(search === undefined){ //ADDING SELECTED ITEM TO FOLDER IF NOT INITIALLY FOUND
            folder.push({
                id: playId,
                name: titles,
                item: 1
            });
            document.querySelector('.favHeader').innerHTML = 'You have added'
        }
        else{
            search.item += 0;
            notify.innerHTML= 'Song already added'
            setTimeout(() => {
                notify.innerHTML= ''
            }, 3000); 
            return;
        }
        document.querySelector('.songNumber').innerHTML = folder.map((x) => x.item).reduce((x,y) => x+y, 0);//DISPLAY THE NUMBER OF ITEMS IN THE BASKET SELECTED ON THE CART
        addToFavorite(titles, singer, img, playId);
    });
}

const addToFavorite = (titles, singer, img, playId) => {
    let songShown = document.createElement('div');
    let favContent = document.getElementsByClassName('favContent')[0];
    let newSongAdded = `<div class="track">
        <div class="trackImg">
            <img src="${img}" alt="">
        </div>
        <div class="trackTitle">
            <p>${titles}</p>
            <span>${singer}</span>
        </div>
        <i class="fas playBtn fa-circle-play" title="play" id="${playId}"></i>
        <i class="fa fa-trash-can" id=${playId}></i>
    </div>`
    songShown.innerHTML = newSongAdded;
    favContent.append(songShown);

    let removeBtn = document.querySelectorAll('.fa-trash-can');
    removeBtn.forEach((icon) => {//LOOPING THROUGH EACH REMOVE BUTTON 
        icon.addEventListener('click', (btn) =>{//EVENT LISTENER TO REMOVE ITEM FROM CART PAGE
            let iconSelected = btn.target;
            iconSelected.parentElement.remove();
            iconSelected = folder.find((x) => x.id === iconSelected.id)//MATCHING SELECTED/CLICKED ITEM AGAINST ITEMS IN THE BASKET ARRAY
            if(iconSelected === undefined){
                return;
            }
            else{
                let index = folder.indexOf(iconSelected)//FINDING INDEX OF SELECTED ITEM IN THE BASKET IF IT EXIST
                folder.splice(index, 1)
            }
            if(folder.length === 0){
                document.querySelector('.favHeader').innerHTML = 'Get your favorites'
            }
            document.querySelector('.songNumber').innerHTML = folder.map((x) => x.item).reduce((x,y) => x+y, 0)
            
        });
    });
    songPlaying();
}
