
// make bubble start
// make bubble code ko ek function ke andar rakh diya
function makeBubble(){
     
// this code make the bubble 
var clutter = '';

for (var i = 1; i <= 170; i++) {
    var rn = Math.floor(Math.random() * 10)
    clutter += `<div class="bubble">${rn}</div>`;
  
}


document.querySelector("#pbtm").innerHTML = clutter;


}
// make bubble end


// hit section start 
var hitrn = 0;
function hit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent = hitrn;
}
// hit section end



// timer js start 
// ye function jop timer hey uske liye hey = iss function se vo time chalega 

function runTimer(){
    var timer = 60; //local variable
    var timerint = setInterval(function(){
        if(timer > 0){
            timer--; // vaha pe humne timer ki value ko minus minus kar r ahe hey
            document.querySelector("#timerValue").textContent = timer;
        }else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1><button id="Again" onClick="playAgain()">Play Again</button> `;
              
        }
          
    }, 1000);  // 1000 miliseconds = 1seconds
}
// timer js end




// score section start
var score = 0;
function increaseScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}
// score section end 



// game section start
document.querySelector("#pbtm").addEventListener("click", 
  function(dets){
     var clickednum = Number(dets.target.textContent);
     if(clickednum === hitrn){
        increaseScore();
        makeBubble();
        hit();
     }
});
// game section end




// play again section start
function playAgain(){
    makeBubble();
    runTimer();
};

// play again section end



function startGame(){
     runTimer();
     makeBubble();
     hit();
}





// // function calling part section 
// runTimer(); // timer function called
// makeBubble(); // to make bubbles use this function = iss function ke andar bubble print karvane ka pura code hey
//  hit(); // calling hit function 




