















//TOGGLE SIDEBAR MENU
let toggle = document.querySelector('#toggle');
let sideBar = document.querySelector('.sideBar');
toggle.onclick = () => {
    sideBar.classList.toggle('active');
    toggle.classList.toggle('active')
}

//ACTIVE LEFT NAVIGATION MENU
let navList = document.querySelectorAll('.nav-list');
let link = document.querySelectorAll('.links');
function activeLink() {
    navList.forEach((item) => 
        item.classList.remove('active'));
        this.classList.add('active');
}
navList.forEach((item) =>
    item.addEventListener('click', activeLink)
);

function linkActive() {
    link.forEach((menuItem) =>
        menuItem.classList.remove('active'));
        this.classList.add('active');
}
link.forEach((menuItem) =>
    menuItem.addEventListener('click', linkActive));


    //PLAYLIST APPEARANCE
    let playlist = document.querySelector('#playlist');
    let plays = document.getElementById('playLists');
    let albums = document.querySelector('#albums');
    let showAlbum = document.getElementById('showAlbums');
    let home = document.getElementById('home');
    let showHome = document.getElementById('showHome');
    
    showHome.onclick = () =>{
        plays.classList.remove('appear');
        albums.classList.remove('show');
        home.classList.add('active');
    }
    playlist.onclick = () =>{
        home.classList.remove('active');
        albums.classList.remove('show');
        plays.classList.add('appear');
    }
    
    showAlbum.onclick = () =>{
        home.classList.remove('active');
        plays.classList.remove('appear');
        albums.classList.add('show');
    }
    
    // RIGHT NAVIGATION MENU
    let navMenu = document.getElementById('nav-menu');
    let favorite = document.querySelector('.favorite');

    navMenu.onclick = () => {
        favorite.classList.toggle('active');
        navMenu.classList.toggle('active');
    }

    //SCROLL FUNCTION FOR LATEST SONGS
    let btnLeft = document.getElementById('btnLeft');
    let btnRight = document.getElementById('btnRight');
    let collection = document.querySelector('.collections');
    let latest = document.getElementById('latest')
    let currentPosition = 0;
    let scrollAmount = 200;
    let maxScroll = -collection.offsetWidth + latest.offsetWidth;
    btnLeft.style.opacity = 0;

    function swipe(val) {
        currentPosition += (val * scrollAmount);
        if(currentPosition > 0){
            currentPosition = 0;
            btnLeft.style.opacity = 0
        }
        else{
            btnLeft.style.opacity = 1;
        }

        if(currentPosition < maxScroll){
            currentPosition = maxScroll;
            btnRight.style.opacity = 0;
        }
        else{
            btnRight.style.opacity = 1;
        }

        collection.style.left = currentPosition + 'px'
    }

    // ARTIST TRACKs DISPLAY SECTION
    let artItem = document.querySelector('.artItem');
    let tracks = document.querySelector('.tracks');
    // function activeTrack() {
    //     artItem.forEach((track) => {
    //         track.classList.remove('active');
    //         this(tracks).classList.add('active');
    //     });
    // }
    // artItem.forEach((track) =>
    //     track.addEventListener('click', activeTrack)
    // );
