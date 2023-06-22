// timer code
var timer = document.querySelector(".timer")
var bgColor = document.querySelector("body")
var count = 2
var intervalId
// Quiz Start Button
var start = document.querySelector(".start-button")

start.onclick =  function() {

    timer.innerText = ""
    
        intervalId = setInterval(function() {
           timer.innerText = count
           if(count=== 0) {
               clearInterval(intervalId)
               timer.innerText = "Time's Up!"
               bgColor.style = "background-color: red;"
            }
            count--
       }, 1000)

}



// Quiz codes
var yearAnswer = ["1989","1991","1995","1998"]
var answers = [a1,a2,a3,a4]

for (var i = 0 ; i < yearAnswer.length; i++) {
answers[i].innerText = yearAnswer [i]
}
