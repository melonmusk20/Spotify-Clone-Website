console.log("Welcome to Spotify");

// Intialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Mat Kar Maya Ko Ahankar - Song by Kabir Café ‧ 2016", filePath:"songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Monta Re - Song by Amit Trivedi, Amitabh Bhattacharya, and Swanand Kirkire ‧ 2013", filePath:"songs/2.mp3)", coverPath: "covers/2.jpg"},
    {songName: "Bavra Mann - Song by Swanand Kirkire ‧ 2003", filePath:"songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Thunder - Song by Imagine Dragons", filePath:"songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Aadmi Chutiya Hai - Song by Rahgir ‧ 2019" , filePath:"songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Do Din Ki Zindagi - Song by Kabir Café ‧ 2022", filePath:"songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sathiya - Song by Sonu Nigam ‧ 2002", filePath:"songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Kanmani - Soundtrack ‧ 1994", filePath:"songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Khoon Choose Le - Song by Arjun Kanungo, Priya Saraiya, and Suraj Jagan ‧ 2013", filePath:"songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Manchala - Song by Nupur Pant, Shafqat Amanat Ali, and Vishal–Shekhar ‧ 2016", filePath:"songs/10.mp3", coverPath: "covers/10.jpg"},
    {songName: "Ishq Bulaava - Song by Goldy Desi Crew ‧ 2014", filePath:"songs/11.mp3", coverPath: "covers/11.jpg"},
    {songName: "Zehnaseeb - Song by Chinmayi, Shekhar Ravjiani, and Vishal–Shekhar ‧ 2014", filePath:"songs/12.mp3", coverPath: "covers/12.jpg"},
]
songItems.forEach((element, i)=>{
   element.getElementsByTagName("img")[0].src = songs[i].coverPath;
   element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})
// Listen to Events
 audioElement.addEventListener('timeupdate', ()=>{
  console.log('timeupdate');
  // Update Seekbar
  progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
  myProgressBar.value = progress;

})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
 Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove('fa-circle-play');
      e.target.classList.add('fa-circle-pause');
      audioElement.src = `songs/${songIndex+1}.mp3`;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0 ;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove('fa-circle-play');
      masterPlay.classList.add('fa-circle-pause');
      
    })
}) 

document.getElementById('next').addEventListener('click',()=>{
  if(songIndex>=11){
    songIndex = 0
}
else{
    songIndex += 1;
}
      audioElement.src = `songs/${songIndex+1}.mp3`;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0 ;
      audioElement.play();
      masterPlay.classList.remove('fa-circle-play');
      masterPlay.classList.add('fa-circle-pause');

})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
      songIndex = 0
  }
  else{
      songIndex -= 1;
  }
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0 ;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
  
  })


