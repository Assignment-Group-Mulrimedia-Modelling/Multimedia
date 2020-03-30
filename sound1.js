var audio= new Audio("adventure.mp3");

function playsound(){
	audio.loop = true;
	audio.play();
}	

function stopsound(){
	audio.loop = false;
	audio.pause();
}	



function toggle(el){
    if(el.className=="pause")
    {
        el.src='soundOn.png';
        el.className="play";
        playsound();
    }
   else if(el.className!="pause")
    {
        el.src='soundOff.png';
        el.className="pause";
        stopsound();
    }

    return false;
}  
