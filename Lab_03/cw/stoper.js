time = 0;
var intervalId;
running = false;

function start(){
    if(!intervalId){
        intervalId = setInterval(tick, 1000);
    }
}

function stop(){
    clearInterval(intervalId);
    intervalId = false;
}

function reset(){
    stop();
    time = 0;
    updateDisplay();
}

function updateDisplay(){
    seconds = time%60;
    minutes = Math.floor(time/60);
    if(minutes >= 1){
        displayedText = minutes + "min " + seconds + "s";
    } else{
        displayedText = seconds + "s";
    }
    document.querySelector("h1").innerHTML = displayedText;
}

function tick(){
    time = time + 1;
    updateDisplay();
}
