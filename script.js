var questionAsked = document.getElementById("quizQuestion")
var buttonA = document.getElementById("a")
var buttonB = document.getElementById("b")
var buttonC = document.getElementById("c")
var buttonD = document.getElementById("d")
var points = 0
// var allChoices = []
var possibleAnswers = document.getElementById("possibleAnswers")
var main = document.querySelector("main")
var usersPick = document.getElementById("usersPick")
var welcome = document.querySelector("section")
var quizIndex = 0
var start = document.querySelector(".start-button")
var reset = document.querySelector(".reset-button")
var score = document.getElementById("usersScore")
var endOfGame = document.getElementById("gameOver")
var timer = document.querySelector(".timer")
var bgColor = document.querySelector("body")
var count = 15
var intervalId

main.style = ("display: none;")
endOfGame.style = ("display: none;")

// questions and answers js code
var quiz = [

   {
        question: "How do you create a function?",
        a: "function:myFunction()",
        b: "function=myFunction()",
        c: "function myFunction()",
        d: "myFunction():function",
        correct: "c"
    },

    {
        question: 'What is the correct JavaScript syntax to write "Hello World"?',
        a: 'response.write("Hello World")',
        b: '"Hello World"',
        c: 'document.write("Hello World")',
        d: '("Hello World")',
        correct: "c"
    },

    {
        question: "Where is the correct place to insert a JavaScript?",
        a: "Both the <head> section and the <body> section are correct",
        b: "The <body> section",
        c: "The <head> section",
        d: "None of the above",
        correct: "a"
    },

    {
        question: 'How does a "for" loop start?',
        a: "for (i = 0; i <= 5)",
        b: "for (i = 0; i <= 5; i++)",
        c: "for i = 1 to 5",
        d: "for (i <= 5; i++)",
        correct: "b"
    },
]


function displayQuiz() {
    questionAsked.innerHTML = quiz[quizIndex].question
    buttonA.innerHTML = quiz[quizIndex].a
    buttonB.innerHTML = quiz[quizIndex].b
    buttonC.innerHTML = quiz[quizIndex].c
    buttonD.innerHTML = quiz[quizIndex].d
    
}

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
            count = count - 2
        }
        quizIndex++
        displayQuiz()
    }
}

//event delagation
possibleAnswers.addEventListener('click', handleAnswerButtonClick)


// Quiz Start Button
start.onclick = function () {

    displayQuiz()

    timer.innerText = "Ready... Set..."

    intervalId = setInterval(function () {
        timer.innerText = count
        if (count === 0 || count < 0) {
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
    endOfGame.style = ("display: none;")
    bgColor.style.backgroundColor = "white"
    clearInterval(intervalId)
    count = 5
    quizIndex = 0
    score.innerText = ""
    points = 0
    usersPick.innerText = ""


}
