// timer code
var timer = document.querySelector(".timer")

// Quiz Start Button
var start = document.querySelector(".start-button")

start.addEventListener('click', function() {
    
        setTimeout(function() {
           timer.innerHTML = "Time's Up!"
       }, 3000)
       
})


// Quiz codes
var yearAnswer = ["1989","1991","1995","1998"]
var answers = [a1,a2,a3,a4]

for (var i = 0 ; i < yearAnswer.length; i++) {
answers[i].innerText = yearAnswer [i]
}
