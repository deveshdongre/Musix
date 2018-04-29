alert('javascript linked');
function setLocation(percentage){
    activeSong.currentTime = activeSong.duration * percentage;
}


function setSongPosition(obj,e){
    //Gets the offset from the left so it gets the exact location.
    var songSliderWidth = obj.offsetWidth;
    var evtobj=window.event? event : e;
    clickLocation =  evtobj.layerX - obj.offsetLeft;

    var percentage = (clickLocation/songSliderWidth);
    //Sets the song location with the percentage.
    setLocation(percentage);
}

function playPause(id){
    //Sets the active song since one of the functions could be play.
    activeSong = document.getElementById(id);
    //Checks to see if the song is paused, if it is, play it from where it left off otherwise pause it.
    if (activeSong.paused){
         activeSong.play();
    }else{
         activeSong.pause();
    }
}
