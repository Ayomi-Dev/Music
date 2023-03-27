// const music = new Audio("audio/1.mp3");
// // music.play()

// if(document.readyState == 'loading'){
//     document.addEventListener('DOMContentLoaded', ready);
// }
// else{
//     ready();
// }
// function ready() {
//     var removeSong = document.getElementsByClassName('fa-trash-can');
//     for(var i = 0; i < removeSong.length; i++) {
//         var favBtn = removeSong[i];
//         favBtn.addEventListener('click', removeFavorite)        
//     }

//     var addSong = document.getElementsByClassName('fa-heart');
//     for(var i = 0; i < addSong.length; i++){
//         var addBtn = addSong[i];
//         addBtn.addEventListener('click', addFvorite)
//     }
// }    
// function addFvorite(event) {//elements to be targetted to favorite song section when button is clicked
//     var addBtnClicked = event.target;
//     var showAdd = addBtnClicked.parentElement.parentElement.parentElement;
//     var imgsrc = showAdd.getElementsByTagName('img')[0].src;
//     var title = showAdd.getElementsByClassName('title')[0].innerHTML;
//     var subtitle = showAdd.getElementsByClassName('subtitle')[0].innerHTML;
//     var icons = showAdd.getElementsByClassName('songIcn')[0].innerHTML;
//     addToFavorite(imgsrc, title, icons, subtitle);//calling the function 
// }
// function removeFavorite(event){
//     var favBtnClicked = event.target;
//     favBtnClicked.parentElement.remove(); //click function to remove song from favorite list
// };



// function for selected song


// function addToFavorite(imgsrc, title, icons, subtitle){
//         var songShown = document.createElement('div');
//         let notify = document.getElementById('notify');
//         var favContent = document.getElementsByClassName('favorite-content')[0];
//         var songName = favContent.getElementsByClassName('title');//variable to check when song is selected multiple times
//         for(var i=0; i < songName.length; i++) {
//             if(songName[i].innerHTML == title){
//                 alert("Song already added");
//                 return;
//             }
//         }
//         var songContent = `<li class="songItem">
//         <img src=${imgsrc} alt="">
//         <h5>
//             <div class="title">${title}</div>
//             <div class="subtitle">${subtitle}</div>
//         </h5>
//         <i class="fa playSong fa-circle-play"></i>
//         <i class="fa fa-trash-can"></i>
//         </li>`
//         songShown.innerHTML = songContent;
//         favContent.append(songShown);
//         songShown.getElementsByClassName('fa-trash-can')[0].addEventListener('click', removeFavorite) 
//         songShown.getElementsByClassName('playSong')[0].addEventListener('click', showSong)          
//     }
    // showSong();



// FUNCTION FOR SONG CONTROLS
let prev = document.getElementById('prev');
let next = document.getElementById('next');

prev.addEventListener('click', () =>{  //call function to go to previous song
    index--;
    if (index < 1) {
        index = songs.length;
    }
    music.src = `audio/${index}.mp3`;
    songImg.src = allSongs[index - 1].poster//adding image of selected track
    music.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    wave.classList.add('active1');

    let trackTitle = allSongs.filter((track) => {//function for individually changing title of selected track
        return track.id == index;
    });

    trackTitle.forEach(tracks => {
        let {name} = tracks;
        songTitle.innerHTML = name;
    })
});
next.addEventListener('click', () =>{  //call function to next song from array
    index++;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
    }
    music.src = `audio/${index}.mp3`;
    songImg.src = allSongs[index - 1].poster//adding image of selected track
    music.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    wave.classList.add('active1');

    let trackTitle = allSongs.filter((track) => {//calling function to  chagne title of selected track corresponding with selected track
        return track.id == index;
    });

    trackTitle.forEach(tracks => {
        let {name} = tracks;
        songTitle.innerHTML = name;
    })
})

//SONG TIME AND VOLUME FUNCTION
let startTime = document.getElementById('starTime');
let endTime = document.getElementById('endTime');
let jumpTo = document.getElementById('jumpTo');
let jumpToBar = document.getElementById('bar2')
let timeCursor = document.getElementById('timeCursor');
let volume = document.getElementById('volume');
let volBar = document.getElementById('volBar');
let volIcon = document.getElementById('volIcon');
let volumeCursor = document.getElementById('volCursor');

music.addEventListener('timeupdate', () =>{
    let songCurrTime = music.currentTime;
    let songDurTime = music.duration;
    let songStartMin = Math.floor(songDurTime / 60);
    let songStartSec = Math.floor(songDurTime % 60);
    
    //counting song time in minutes and seconds once it starts playing
    if(songStartSec < 10){
        songStartSec = `0${songStartSec}`;
    }
    endTime.innerText = `${songStartMin}:${songStartSec}`


    let songEndMin = Math.floor(songCurrTime / 60);
    let songEndSec = Math.floor(songCurrTime % 60);
    if(songEndSec < 10){
        songEndSec = `0${songEndSec}`;
    }
    startTime.innerText = `${songEndMin}:${songEndSec}`;

    //selecting or jumping to selected time while song is playing
    


})
jumpTo.addEventListener('change', () => {
    music.currentTime = jumpTo.value * music.duration / 100;
});

volume.addEventListener('change', ()=>{ // Volume control functions
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

//FUNCTION TO SHUFFLE, REPEAT AND SELECT RANDOM SONG
let shuffle = document.getElementById('shuffle');
let repeat = document.getElementById('repeat');

shuffle.addEventListener('click', ()=> {
    let songAction = shuffle.innerHTML;
    
    switch (songAction) {// getting the innertext of the icon according to when icon is changed
        case "shuffle":
            shuffle.style.color = 'rgb(8, 255, 255)' 
            shuffle.innerHTML = 'shuffle on' 
            shuffle.setAttribute('title', 'shuffle on') //if the icon is clicked at first, it changes color and text
            break;
    
        case "shuffle on":
            shuffle.style.color = 'rgb(8, 255, 255)'   //if icon is clicked again, color changes to white and text changes to shuffle
            shuffle.innerHTML = 'repeat on'
            shuffle.setAttribute('title', 'repeat on')
            shuffle.classList.remove('fa-shuffle')
            shuffle.classList.add('fa-repeat')
            break;

        case "repeat on":
            shuffle.style.color = '#fff'    //if icon is clicked again, color changes to white and text changes to shuffle
            shuffle.innerHTML = 'shuffle'
            shuffle.setAttribute('title', 'shuffle')
            shuffle.classList.add('fa-shuffle')
            shuffle.classList.remove('fa-repeat')
            break;
    }
});





const noShuffle = () => {
    if (index == allSongs.length) {
        index = 1;
    }else{
        index++;
    }
    music.src = `audio/${index}.mp3`;
    songDownload.href = `audio/${index}.mp3`
    songImg.src = allSongs[index - 1].poster//adding image of selected track
    music.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    wave.classList.add('active1');

    let trackTitle = allSongs.filter((track) => {//calling function to  chagne title of selected track corresponding with selected track
        return track.id == index;
    });

    trackTitle.forEach(tracks => {
        let {name} = tracks;
        songTitle.innerHTML = name;
        songDownload.setAttribute('download', name)
    })
}

const repeatSong = () =>{
    index;
    music.src = `audio/${index}.mp3`;
    songDownload.href = `audio/${index}.mp3`
    songImg.src = allSongs[index - 1].poster//adding image of selected track
    music.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    wave.classList.add('active1');

    let trackTitle = allSongs.filter((track) => {//calling function to  chagne title of selected track corresponding with selected track
        return track.id == index;
    });

    trackTitle.forEach(tracks => {
        let {name} = tracks;
        songTitle.innerHTML = name;
        songDownload.setAtrribute('download', name);
    })
}

const randomSong = () => {
    if (index == allSongs.length) {
        index = 1
    } else {
        index = Math.floor((Math.random() * allSongs.length)+ 1)
    }
    music.src = `audio/${index}.mp3`;
    songDownload.href = `audio/${index}.mp3`
    songImg.src = allSongs[index - 1].poster//adding image of selected track
    music.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    wave.classList.add('active1');

    let trackTitle = allSongs.filter((track) => {//calling function to  chagne title of selected track corresponding with selected track
        return track.id == index;
    });

    trackTitle.forEach(tracks => {
        let {name} = tracks;
        songTitle.innerHTML = name;
        songDownload.setAtrribute('donload', name);
    })
}


music.addEventListener('ended', () => {
    let shuffleAction = shuffle.innerText;

    switch (shuffleAction) {
        case 'shuffle' :
            noShuffle();
            break;
    
        case 'shuffle on' :
            randomSong();
            break;
        case 'repeat on':
            repeatSong();
            break;
    }
})

