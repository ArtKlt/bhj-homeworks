//let time = 60;

let hours = 0;
let minutes = 1;
let seconds = 5;
function UpdateTimer (){
    seconds--;
    if (seconds < 0) {
        if (minutes <= 0){
            if (hours <= 0)
            {
                alert('Вы победили в конкурсе!');
            }
            else
            {
                minutes += 60;
                hours--;
            }
        }
        else
        {
            seconds += 60;
            minutes--;
        }
    } 
    
        setTimeout(UpdateTimer, 1000);
        document.getElementById('timer').innerText = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
    
    
}
UpdateTimer();