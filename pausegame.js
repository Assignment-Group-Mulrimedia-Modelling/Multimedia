var pauses = false;


function paused(){
    pauses = !pauses;           
}


function toggles(el){
    if(el.className=="pause")
    {
        el.src='play.png';
        el.className="play";
        paused();
    }
   else if(el.className!="pause")
    {
        el.src='pause.png';
        el.className="pause";
        paused();
    }

    return false;
}  
