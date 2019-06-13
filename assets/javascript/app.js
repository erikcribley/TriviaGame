//Question array
const questions = [
    {
        question: "Who was the first WWF World Heavyweight Champion?",
        a: "Buddy Rogers",
        b: "Bruno Sammartino",
        c: "Lou Thesz",
        d: "Pat O'Connor",
        correct: "Buddy Rogers",
        info: "Buddy Rogers was recognized as first WWF Champion on April, 11 1963."
    },
    {
        question: "Who was the longest reigning WWF World Heavyweight Champion?",
        a: "Hulk Hogan",
        b: "Bruno Sammartino",
        c: "Bob Backlund",
        d: "Pedro Morales",
        correct: "Bruno Sammartino",
        info: "Bruno Sammartino's first reign lasted 2,803 days."
    },
    {
        question: "Who was the first WWF Intercontinental Champion?",
        a: "Ken Patera",
        b: "Don Muraco",
        c: "Pat Patterson",
        d: "Pedro Morales",
        correct: "Pat Patterson",
        info: "Pat Patterson unified the North American and South American Championships on September 1, 1979."
    },
    {
        question: "Who was the longest reigning WWF Intercontinental Champion?",
        a: "The Ultimate Warrior",
        b: "Randy Savage",
        c: "The Honky Tonk Man",
        d: "Pedro Morales",
        correct: "The Honky Tonk Man",
        info: "The Honky Tonk Man held the Intercontinental Championship for 454 days."
    },
    {
        question: "Who was first to hold the WWF World Heavyweight Championship and the WWF Intercontnental Championship concurrently?",
        a: "The Ultimate Warrior",
        b: "Randy Savage",
        c: "Hulk Hogan",
        d: "Pedro Morales",
        correct: "The Ultimate Warrior",
        info: "The Ultimate Warrior was Intercontinental Champion when he defeated Hulk Hogan for the WWF Championship at Wrestlemania VI."
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

function gameOver() {
    $('#question-display')
        .text("GAME OVER")
    $('.answer-btn')
        .hide()
    $('#answer-info')
        .empty()
        .append('<p>', "Correct " + correct)
        .append('<p>', "Incorrect " + incorrect)
        .append('<p>', "Time Up " + unanswered)
        .append("<p> Play Again? </p>")
    $('#start').show();  
}

//function to check answer and display results
function isCorrect(val, num) {
    if (val === "timeout") {        
        unanswered++;
        $('#question-display')
            .text("TIME'S UP")
        $('.answer-btn')
            .hide()
        $('#answer-info')
            .show()
            .text(questions[num].info)
    } else if (val === questions[num].correct) {
        correct++;
        $('#question-display')
            .text("CORRECT!")
        $('.answer-btn')
            .hide()
        $('#answer-info')
            .show()
            .text(questions[num].info)
    } else {
        incorrect++;
        $('#question-display')
            .text("INCORRECT")
        $('.answer-btn')
            .hide()
        $('#answer-info')
            .show()
            .text(questions[num].info)
    }
    let newNum = num += 1 
    if (newNum === 5) {
        gameOver()
    } else {
    setTimeout(quiz, 5000, newNum)
    }
}


//quiz
function quiz (num) {

    $('#answer-info')
        .empty()
    $('.answer-btn')
        .show()
    time = 10
    let countDown = setInterval(timer, 1000);
    $('#timer-display')
        .text(time + ' Seconds Remaining')
    $('#question-display')
        .text(questions[num].question)
    $('#answer-1')
        .text(questions[num].a)
    $('#answer-2')
        .text(questions[num].b)
    $('#answer-3')
        .text(questions[num].c)
    $('#answer-4')
        .text(questions[num].d)
    
    let timeUp = setTimeout(isCorrect, 10000, "timeout", num)

    //Click events for answer buttons
    $('#answer-1').on("click", function (){
        let userGuess = $('#answer-1').text()
        clearInterval(countDown);
        clearTimeout(timeUp);
        isCorrect(userGuess, num);
    })
    $('#answer-2').on("click", function (){
        let userGuess = $('#answer-2').text()
        clearInterval(countDown);
        clearTimeout(timeUp);
        isCorrect(userGuess, num);
    })
    $('#answer-3').on("click", function (){
        let userGuess = $('#answer-3').text()
        clearInterval(countDown)
        clearTimeout(timeUp);
        isCorrect(userGuess, num);
    })
    $('#answer-4').on("click", function (){
        let userGuess = $('#answer-4').text()
        clearInterval(countDown);
        clearTimeout(timeUp);
        isCorrect(userGuess, num);
    })
}

//hide answer buttons
$('.answer-btn').hide()

//start & reset button
$('#start').on("click", function () {
    $('#start').hide();
    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;
    let time = 10;
    quiz(0) 
});