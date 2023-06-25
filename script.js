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

// questions and answers js code

var quiz = [
    {
    question: "This is the first question",
    a: "yes",
    b: "no",
    c: "maybe",
    d: "all the above",
    correct: "c"
},

{
    question: "This is the second question",
    a: "yes",
    b: "no",
    c: "maybe",
    d: "all the above",
    correct: "c"
},

{
    question: "This is the third question",
    a: "yes",
    b: "no",
    c: "maybe",
    d: "all the above",
    correct: "c"
},

{
    question: "This is the forth question",
    a: "yes",
    b: "no",
    c: "maybe",
    d: "all the above",
    correct: "c"
},
]

function displayQuiz() 