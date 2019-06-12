//Question arrays
const questions = [
    {
        question: "Who was the first WWF World Heavyweight Champion?",
        a: "Buddy Rogers",
        b: "Bruno Sammartino",
        c: "Lou Thesz",
        d: "Pat O'Connor",
        correct: "Buddy Rogers"
    },
    {
        question: "Who was the longest reigning WWF World Heavyweight Champion?",
        a: "Hulk Hogan",
        b: "Bruno Sammartino",
        c: "Bob Backlund",
        d: "Pedro Morales",
        correct: "Bruno Sammartino"
    },
    {
        question: "Who was the first WWF Intercontinental Champion?",
        a: "Ken Patera",
        b: "Don Muraco",
        c: "Pat Patterson",
        d: "Pedro Morales",
        correct: "Pat Patterson",
    },
    {
        question: "Who was the longest reigning WWF Intercontinental Champion?",
        a: "The Ultimate Warrior",
        b: "Randy Savage",
        c: "The Honky Tonk Man",
        d: "Pedro Morales",
        correct: "The Honky Tonk Man",
    },
    {
        question: "Who was first to hold the WWF World Heavyweight Championship and the WWF Intercontnental Championship concurrently?",
        a: "The Ultimate Warrior",
        b: "Randy Savage",
        c: "Hulk Hogan",
        d: "Pedro Morales",
        correct: "The Ultimate Warrior"
    }
]

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

//function to check answer and display results
function isCorrect(val) {
    if (val === questions[0].correct) {
        correct++;
        $('#question-display')
            .empty()
            .text("CORRECT!")
        $('.answer-btn').hide()

    } else {
        incorrect++;
        $('#question-display')
            .empty()
            .text("No, Idiot!")
        $('.answer-btn').hide()
       
    }
}

//quiz
function quiz () {
    $('.answer-btn').show()
    let guess = []
    let countDown = setInterval(timer, 1000)
        $('#timer-display').text(time + ' Seconds Remaining')
        $('#question-display').text(questions[0].question)
        $('#answer-1').text(questions[0].a)
        $('#answer-2').text(questions[0].b)
        $('#answer-3').text(questions[0].c)
        $('#answer-4').text(questions[0].d)

    //Click events for answer buttons
    $('#answer-1').on("click", function (){
        let userGuess = $('#answer-1').text()
        clearInterval(countDown);
        isCorrect(userGuess);
    })
    $('#answer-2').on("click", function (){
        let userGuess = $('#answer-2').text()
        clearInterval(countDown);
        isCorrect(userGuess);
    })
    $('#answer-3').on("click", function (){
        let userGuess = $('#answer-3').text()
            clearInterval(countDown);
            isCorrect(userGuess);
    })
    $('#answer-4').on("click", function (){
        let userGuess = $('#answer-4').text()
            clearInterval(countDown);
            isCorrect(userGuess);
    })
}

$('.answer-btn').hide()

//start button
$('#start').on("click", function () {
    $('#start').hide();
    quiz()    
});