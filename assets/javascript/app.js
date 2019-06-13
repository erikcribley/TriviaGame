//Question arrays
const questions = [
    {
        question: "Who was the first WWF World Heavyweight Champion?",
        a: "Buddy Rogers",
        b: "Bruno Sammartino",
        c: "Lou Thesz",
        d: "Pat O'Connor",
        correct: "Buddy Rogers",
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
function isCorrect(val, num) {
    if (val === questions[num].correct) {
        correct++;
        $('#question-display')
            .empty()
            .text("CORRECT!")
        $('.answer-btn')
            .hide()
            console.log(val)
            console.log(num)
    } else {
        incorrect++;
        $('#question-display')
            .empty()
            .text("INCORRECT")
        $('.answer-btn')
            .hide()
    }
    let newNum = num += 1 
    setTimeout(quiz, 1000, newNum)
}

//quiz
function quiz (num) {
    $('.answer-btn').show()
    let countDown = setInterval(timer, 1000)
        $('#timer-display').text(time + ' Seconds Remaining')
        $('#question-display').text(questions[num].question)
        $('#answer-1').text(questions[num].a)
        $('#answer-2').text(questions[num].b)
        $('#answer-3').text(questions[num].c)
        $('#answer-4').text(questions[num].d)

    //Click events for answer buttons
    $('#answer-1').on("click", function (){
        let userGuess = $('#answer-1').text()
        clearInterval(countDown);
        isCorrect(userGuess, num);
    })
    $('#answer-2').on("click", function (){
        let userGuess = $('#answer-2').text()
        clearInterval(countDown);
        isCorrect(userGuess, num);
    })
    $('#answer-3').on("click", function (){
        let userGuess = $('#answer-3').text()
            clearInterval(countDown);
            isCorrect(userGuess, num);
    })
    $('#answer-4').on("click", function (){
        let userGuess = $('#answer-4').text()
            clearInterval(countDown);
            isCorrect(userGuess, num);
    })
}

$('.answer-btn').hide()

//start button
$('#start').on("click", function () {
    $('#start').hide();
    quiz(0)    
});