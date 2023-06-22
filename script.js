// timer code
var pTimer = document.querySelector(".timer")
var seconds = 5


setInterval(function() {
    // console.log('running!')
    pTimer.innerText = seconds
    seconds--
}, 1000)

setTimeout(function() {
    pTimer.innerHTML = "Time's Up!"
}, 5000)

// Quiz codes
var yearAnswer = ["1989","1991","1995","1998"]
var answers = [a1,a2,a3,a4]

for (var i = 0 ; i < yearAnswer.length; i++) {
answers[i].innerText = yearAnswer [i]
}
