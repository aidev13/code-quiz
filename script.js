var questionAsked = document.getElementById("quizQuestion")
var buttonA = document.getElementById("a")
var buttonB = document.getElementById("b")
var buttonC = document.getElementById("c")
var buttonD = document.getElementById("d")
var correct = document.getElementById("correctPick")
// var allChoices = []
var possibleAnswers = document.getElementById("possibleAnswers")
var main = document.querySelector("main")

// main.style = ("display: none;")

var quizIndex = 0

// questions and answers js code
var quiz = [

    {
        question: "This is the first question",
        a: "yes",
        b: "no",
        c: "c",
        d: "all the above",
        correct: "c"
    },

    {
        question: "This is the second question",
        a: "yes",
        b: "no",
        c: "1",
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
    }
]



function displayQuiz() {

    questionAsked.innerHTML = quiz[quizIndex].question

    buttonA.innerHTML = quiz[quizIndex].a
    buttonB.innerHTML = quiz[quizIndex].b
    buttonC.innerHTML = quiz[quizIndex].c
    buttonD.innerHTML = quiz[quizIndex].d



}



function handleAnswerButtonClick(event) {
console.log(event.target)
    //if the users clicks a button

    if (event.target.matches(".btn")) {
        console.log(event.target.id)
        console.log(quiz[quizIndex].correct)
        // if button id matches the quiz[quizIndex].correct
        if (event.target.id === quiz[quizIndex].correct) {
            console.log("correct")
        }
        else {
            console.log("incorrect")
        }
        
        quizIndex++
        displayQuiz()

    }
}


//event delagation
possibleAnswers.addEventListener('click', handleAnswerButtonClick )


// timer code
var timer = document.querySelector(".timer")
var bgColor = document.querySelector("body")
var count = 5
var intervalId

// Quiz Start Button
var start = document.querySelector(".start-button")

start.onclick = function () {

    displayQuiz()

    timer.innerText = ""

    intervalId = setInterval(function () {
        timer.innerText = count
        if (count === 0) {
            clearInterval(intervalId)
            timer.innerText = "Time's Up!"
            bgColor.style = "background-color: red;"
        }
        count--
    }, 1000)
    main.style = "display: ;"



}


