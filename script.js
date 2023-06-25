// questions and answers js code
var quizIndex = 0
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
var allChoices = []
var possibleAnswers = document.getElementById("possibleAnswers")



function displayQuiz()  {

    // for (var i=0 ; i<quiz.length ; i++) {
        questionAsked.innerHTML = quiz[quizIndex].question
        buttonA.innerHTML = quiz[quizIndex].a
        buttonB.innerHTML = quiz[quizIndex].b
        buttonC.innerHTML = quiz[quizIndex].c
        buttonD.innerHTML = quiz[quizIndex].d

        // correctPick.innerHTML = quiz[i].correct
       console.log(quiz[quizIndex])

       

// }
}

//event delagation
possibleAnswers.addEventListener('click', function(event){
    //if the users clicks a button
    if (event.target.matches(".btn")) {

// if button id matches the quiz[quizIndex].correct
        //
        quizIndex++
        displayQuiz()

}
}
)












// timer code
var timer = document.querySelector(".timer")
var bgColor = document.querySelector("body")
var count = 30
var intervalId

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

