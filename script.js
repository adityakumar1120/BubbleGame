var timer = 60
var score = 0
var hitrn = 0

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score
}

function makeBubble(){
    let clutter = ""
for (var i = 1; i <= 152; i++) {
    let rn1 = Math.floor(Math.random()*255)
    let rn2 = Math.floor(Math.random()*255)
    let rn3 = Math.floor(Math.random()*255)
    var rn = Math.floor(Math.random()*10)
     clutter += `<div class="bubble" id="bubble" style="background-color:rgb(${rn1},${rn2},${rn3});">${rn}</div>`
     // document.querySelector("#bubble").style.backgroundColor = 'red'
    }
    
    document.querySelector("#panelbottom").innerHTML = clutter
    
}

document.querySelector("#increase").addEventListener(
    'click', function(){
        // timer += 0
        timer += 60
        document.querySelector("#increase").style.backgroundColor = 'black'
        document.querySelector("#increase").style.color = 'white'
        }
)

document.querySelector("#increase").addEventListener('mouseleave',
    function(){
        document.querySelector("#increase").style.backgroundColor = 'white'
        document.querySelector("#increase").style.color = 'black'
    }
)
document.querySelector("#decrease").addEventListener(
    'click', function(){
        // timer += 0
        timer -= 60
         document.querySelector("#decrease").style.backgroundColor = 'black'
        document.querySelector("#decrease").style.color = 'white'
        }
)
document.querySelector("#decrease").addEventListener('mouseleave',
    function(){
        document.querySelector("#decrease").style.backgroundColor = 'white'
        document.querySelector("#decrease").style.color = 'black'
    }
)

function runTimer(){
    var timerint = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timervalue").textContent = timer
        }
        else{
            clearInterval(timerint)
            document.querySelector('#panelbottom').innerHTML = `<h1>Game Over</h1>`;
        }
    },1000)
}

function newHit(){
    hitrn = Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent = hitrn
}

document.querySelector("#panelbottom").addEventListener('click',
    function(dets){
        var clickedNum = (Number(dets.target.textContent))
        if(clickedNum === hitrn){
        increaseScore()
        makeBubble()
        newHit()
        }
    }
)

runTimer()
makeBubble()
newHit()

let panel = document.querySelector('#paneltop')
let main = document.querySelector('#main')
function panelcolor(){
    let rn1 = Math.floor(Math.random()*255)
    let rn2 = Math.floor(Math.random()*255)
    let rn3 = Math.floor(Math.random()*255)
    panel.style.backgroundColor = `rgb(${rn1},${rn2},${rn3})`
}
function maincolor(){
    let rn1 = Math.floor(Math.random()*255)
    let rn2 = Math.floor(Math.random()*255)
    let rn3 = Math.floor(Math.random()*255)
    main.style.backgroundColor = `rgb(${rn1},${rn2},${rn3})`
}

maincolor()
panelcolor()