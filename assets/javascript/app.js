//Question&Answer Objects
const questions = {
    q1: "What's 2 + 2?",
    q2: "Question2",
    q3: "Question3",
    q4: "Question4",
    q5: "Question5"
}

const options = {
    q1: ["4", "22", "undefined", "NaN"],
    q2: ["Answer1", "Answer2", "Answer3", "Answer4"],
    q3: ["Answer1", "Answer2", "Answer3", "Answer4"],
    q4: ["Answer1", "Answer2", "Answer3", "Answer4"],
    q5: ["Answer1", "Answer2", "Answer3", "Answer4"],
}

const correctAnswer = {
    q1: "4",
    q2: 2,
    q3: 1,
    q4: 1,
    q5: 0
}

//global variables
let correct = 0;
let incorrect = 0;
let unanswered = 0;
let time = 10;
let guess = []

//countdown
function timer () {
    time--;
    $('#timer-display').text(time + ' Seconds Remaining')
}

//function to check answer and display results
function isCorrect() {
    if (guess[0] === correctAnswer.q1) {
        correct++;
    } else {
        incorrect++;
    }
}

//quiz
function quiz () {
    $('.answer-btn').show()
    let guess = []
    let countDown = setInterval(timer, 1000)
        $('#timer-display').text(time + ' Seconds Remaining')
        $('#question-display').text(questions.q1)
        $('#answer-1').text(options.q1[0])
        $('#answer-2').text(options.q1[1])
        $('#answer-3').text(options.q1[2])
        $('#answer-4').text(options.q1[3])
    //Click events for answer buttons
    $('#answer-1').on("click", function (){
        let userGuess = $('#answer-1').text()
        guess.push(userGuess);
        clearInterval(countDown);
        isCorrect();
    })
    $('#answer-2').on("click", function (){
        let userGuess = $('#answer-1').text()
        guess.push(userGuess);
        clearInterval(countDown);
        isCorrect();
    })
    $('#answer-3').on("click", function (){
        let userGuess = $('#answer-1').text()
            guess.push(userGuess);
            clearInterval(countDown);
            isCorrect();
    })
    $('#answer-4').on("click", function (){
        let userGuess = $('#answer-1').text()
        guess.push(userGuess);
            clearInterval(countDown);
            isCorrect();
    })
}

$('.answer-btn').hide()

//start button
$('#start').on("click", function () {
    $('#start').hide();
    quiz()    
});