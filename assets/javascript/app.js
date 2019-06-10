//Question&Answer Objects
const questions = {
    q1: "Question1",
    q2: "Question2",
    q3: "Question3",
    q4: "Question4",
    q5: "Question5"
}

const options = {
    q1: ["Answer1", "Answer2", "Answer3", "Answer4"],
    q2: ["Answer1", "Answer2", "Answer3", "Answer4"],
    q3: ["Answer1", "Answer2", "Answer3", "Answer4"],
    q4: ["Answer1", "Answer2", "Answer3", "Answer4"],
    q5: ["Answer1", "Answer2", "Answer3", "Answer4"],
}

const correctAnswer = {
    q1: "Answer1",
    q2: "Answer3",
    q3: "Answer2",
    q4: "Answer2",
    q5: "Answer1"
}

//global variables
let correct = 0;
let incorrect = 0;
let unanswered = 0;
let time = 30;

//countdown
function timer () {
    time--;
    $('#timer-display').text(time + ' Seconds Remaining')
}

//quiz
function quiz () {
    setInterval(timer, 1000)
    $('#timer-display').text(time + ' Seconds Remaining')
    $('#question-display').text(questions.q1)
    for (i = 0; i < options.q1.length; i++) {
        $('#answers-display').append($('<button>' + options.q1[i] + '</button>')).addClass()
    }

}

// start button
$('#start').on("click", function () {
    $('#start').hide();
    quiz()    
});