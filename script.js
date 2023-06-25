// timer code
var timer = document.querySelector(".timer")
var bgColor = document.querySelector("body")
var count = 30
var intervalId


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
    correct: "d"
},

{
    question: "This is the third question",
    a: "yes",
    b: "no",
    c: "maybe",
    d: "all the above",
    correct: "a"
},

{
    question: "This is the forth question",
    a: "yes",
    b: "no",
    c: "maybe",
    d: "all the above",
    correct: "b"
},
]

var questionAsked = document.getElementById("quizQuestion")
var buttonA = document.getElementById("a")
var buttonB = document.getElementById("b")
var buttonC = document.getElementById("c")
var buttonD = document.getElementById("d")
var correctPick = quiz.correct
var button = document.getElementsByClassName("btn")





function displayQuiz()  {

    for (var i=0 ; i<quiz.length ; i++) {
        questionAsked.innerHTML = quiz[i].question
        buttonA.innerHTML = quiz[i].a
        buttonB.innerHTML = quiz[i].b
        buttonC.innerHTML = quiz[i].c
        buttonD.innerHTML = quiz[i].d

        // correctPick.innerHTML = quiz[i].correct

}
}




// Quiz Start Button
var start = document.querySelector(".start-button")

start.onclick =  function() {

    displayQuiz()

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
