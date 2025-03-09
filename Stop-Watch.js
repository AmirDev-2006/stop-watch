const second1 = document.getElementById('second1')
const second2 = document.getElementById('second2')
const minute1 = document.getElementById('min1')
const minute2 = document.getElementById('min2')
const hour1 = document.getElementById('hour1')
const hour2 = document.getElementById('hour2')
const Start = document.getElementById('Start')
const Stop = document.getElementById('Stop')
const Clear = document.getElementById('Clear')
let mi;
let hou;
let timer;
let color;
function randcolor(){
    let rand =Math.floor(Math.random()*256) ;
    return rand
}

function rGb(){
    return `rgb(${randcolor()} , ${randcolor()} , ${randcolor()})`
}

function changeColor(){
    second1.style.color = rGb();
    second2.style.color = rGb();
    minute1.style.color = rGb();
    minute2.style.color = rGb();
    hour1.style.color = rGb();
    hour2.style.color = rGb();
}
// Start.addEventListener('click' , changeColor)

Start.addEventListener('click', (event)=>{
timer = setInterval(clock , 1000)
color = setInterval(changeColor ,1000 )
event.preventDefault();
if(Start.onclick == true){
    event.preventDefault();
}
})

Stop.addEventListener('click' , ()=>{
    clearInterval(timer)
    clearInterval(color)
})

Clear.addEventListener('click' , ()=>{
    second1.innerHTML = '0'
    second2.innerHTML = '0'
    min1.innerHTML = '0'
    hour1.innerHTML = '0'
    hour2.innerHTML = '0'
    clearInterval(timer)
    clearInterval(color)
})

function clock(){
    let sec1 = Number(second1.innerHTML) + 1;
    second1.innerHTML = sec1;
    if(second1.innerHTML == 10){
        let sec2 =Number(second2.innerHTML) +1;
        second2.innerHTML = sec2;
        second1.innerHTML = '0' 
    }
    if(second2.innerHTML == 6){
        let min1 = Number(minute1.innerHTML) + 1;
        minute1.innerHTML = min1
        second2.innerHTML = '0'
    }
    if(minute1.innerHTML == 10){
        let min2 = Number(minute2.innerHTML) + 1;
        minute2.innerHTML = min2;
        minute1.innerHTML = '0'
    }
    if(minute2.innerHTML == 6){
        let hou1 = Number(hour1.innerHTML) + 1;
        hour1.innerHTML = hou1
        minute2.innerHTML = '0'
    }
}


