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

//countdown
function timer () {
    time--;
    $('#timer-display').text(time + ' Seconds Remaining')
}

//quiz
function quiz () {
    $('.answer-btn').show()
    let countDown = setInterval(timer, 1000)
    $('#timer-display').text(time + ' Seconds Remaining')
    $('#question-display').text(questions.q1)
    $('#answer-1').text(options.q1[0])
    $('#answer-2').text(options.q1[1])
    $('#answer-3').text(options.q1[2])
    $('#answer-4').text(options.q1[3])
    $('#answer-1').on("click", function (){
        if ($('#answer-1').text() === correctAnswer.q1) {
            clearInterval(countDown);
            correct++;
        } else {
            clearInterval(countDown);
            incorrect++;
        }
    })
    $('#answer-2').on("click", function (){
        if ($('#answer-2').text() === correctAnswer.q1) {
            clearInterval(countDown);
            correct++;
        } else {
            clearInterval(countDown);
            incorrect++;
        }
    })
    $('#answer-3').on("click", function (){
        if ($('#answer-3').text() === correctAnswer.q1) {
            clearInterval(countDown); 
            correct++;
        } else {
            clearInterval(countDown);
            incorrect++;
        }
    })
    $('#answer-4').on("click", function (){
        if ($('#answer-4').text() === correctAnswer.q1) {
            clearInterval(countDown);
            correct++;
        } else {
            clearInterval(countDown);
            incorrect++;
        }
    })
}

$('.answer-btn').hide()

//start button
$('#start').on("click", function () {
    $('#start').hide();
    quiz()    
});