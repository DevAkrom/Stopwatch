const h1 = document.querySelector('.time')
const startBtn = document.querySelector('.startBtn')
const pauseBtn = document.querySelector('.pauseBtn')
const sec = document.querySelector('.sec')
const dog = document.querySelector('.minutte')
const milli = document.querySelector('.milli')
const resetBtn = document.querySelector('.resetBtn')
const audio = document.querySelector('.audio')

startBtn.addEventListener('click', changeTime)

let milliy  =0
let seconds = 0
let minutes = 0

function changeTime(){
    audio.play()
    audio.loop = true
    let interval = setInterval(() => {
    milliy++
    if(milliy<9){
    milli.innerText ='0'+ milliy
    }
    if(milliy>9){
        milli.innerText = milliy
    }
    if(milliy >99){
       
    }
    if(milliy==99){
        console.log(milliy)
        milliy = 0
        seconds++
        if(seconds<=9){
            sec.innerText = '0'+seconds
        }
        if(seconds>9){
            sec.innerText = seconds
        }
    } 
    if(seconds==59){
        sec.innerText = '00'
        seconds = 0
        minutes++
        if(minutes<9){
            dog.innerText = '0'+minutes
        }
        if(minutes>9){
            dog.innerText = minutes
        }
    } 
    }, 10);
    startBtn.disabled = true
    pauseBtn.addEventListener('click', function(){
        clearInterval(interval)
        startBtn.disabled = false
        audio.pause()
    })
    
    resetBtn.addEventListener('click', function(){
        clearInterval(interval)
        milliy = 0
        seconds = 0
        minutes = 0
        milli.innerText = '00'
        sec.innerText = '00'
        dog.innerText = '00'
        startBtn.disabled = false
        audio.pause()
    })
    
}
