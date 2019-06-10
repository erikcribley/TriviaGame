//question array
const questions = [
    "Question 1",
    "Question 2",
    "Question 3",
    "Question 4",
    "Question 5"
]

//global variable
let correct = 0;
let incorrect = 0;
let unanswered = 0;
let time = 30;

function timer (){
    time--;
    $('#timer-display').text(time + ' Seconds Remaining')
}

function nextQuestion (){

}

function answer (){

}

function quiz () {
    setInterval(timer, 1000)
    $('#timer-display').text(time + ' Seconds Remaining')
    $('#question-display').text(questions[0]);
    $('#answers-display')
}

// start button
$('#start').on("click", function () {
    $('#start').hide();
    quiz()    
});