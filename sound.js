var audio= new Audio("adventure.mp3");

function playsound(){
	audio.loop = true;
	audio.play();
}	

function stopsound(){
	audio.loop = false;
	audio.pause();
}	


