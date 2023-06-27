var questionAsked = document.getElementById("quizQuestion")
var buttonA = document.getElementById("a")
var buttonB = document.getElementById("b")
var buttonC = document.getElementById("c")
var buttonD = document.getElementById("d")

// var allChoices = []
var possibleAnswers = document.getElementById("possibleAnswers")
var main = document.querySelector("main")
var usersPick = document.getElementById("usersPick")
var welcome = document.querySelector("section")
var quizIndex = 0
var start = document.querySelector(".start-button")
var reset = document.querySelector(".reset-button")
var score = document.getElementById("usersScore")


main.style = ("display: none;")
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


var points = 0
function handleAnswerButtonClick(event) {
    //if the users clicks a button

    if (event.target.matches(".btn")) {
        // if button id matches the quiz[quizIndex].correct
        if (event.target.id === quiz[quizIndex].correct) {
            usersPick.innerText = "Correct"
            usersPick.style = "color: green;"
            score.innerText = points += 5
        }
        else {
            usersPick.innerText = "Incorrect"
            usersPick.style = "color: red;"
            score.innerText = points -= 2
        }
        quizIndex++
        displayQuiz()

    }
}


//event delagation
possibleAnswers.addEventListener('click', handleAnswerButtonClick)


// timer code
var timer = document.querySelector(".timer")
var bgColor = document.querySelector("body")
var count = 5
var intervalId

// Quiz Start Button
start.onclick = function () {

    displayQuiz()

    timer.innerText = "Ready... Set..."

    intervalId = setInterval(function () {
        timer.innerText = count
        if (count === 0) {
            clearInterval(intervalId)
            timer.innerText = "Time's Up!"
            bgColor.style.backgroundColor = "red"
        }
        count--
    }, 1000)
    main.style = "display: ;"
    welcome.style = "display: none"

}


reset.onclick = function () {
    timer.innerText = "Timer"
    welcome.style = "display: ;"
    main.style = "display: none;"
    bgColor.style.backgroundColor = "white"
    clearInterval(intervalId)
    count = 5
    quizIndex = 0
    score.innerText = ""
    points = 0

}
