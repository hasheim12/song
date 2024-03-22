var audio = document.getElementById('audio');
var playPauseBTN = document.getElementById('playPauseBTN');
var count = 0;

function playpause(){
    if(count == 0){
        count = 1;
        audio.play();
        playPauseBTN.innerhtml ="pause &#9208;";
    }else{
        count = 0;
        audio.pause();
        playPauseBTN.innerhtml ="pause &#9658;";
    }
}