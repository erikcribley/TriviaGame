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
        unanswered += 1;
        $('#question-display')
            .text("TIME'S UP")
        $('.answer-btn')
            .hide()
        $('#answer-info')
            .show()
            .text(questions[num].info)
    } else if (val === questions[num].correct) {
        correct += 1;
        $('#question-display')
            .text("CORRECT!")
        $('.answer-btn')
            .hide()
        $('#answer-info')
            .show()
            .text(questions[num].info)
    } else {
        incorrect += 1;
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
        setTimeout(gameOver, 3000)
    } else {
        setTimeout(quiz, 3000, newNum)
    }
}

//quiz
function quiz (num) {
    $('#answer-info')
        .empty()
    $('.answer-btn')
        .show()
    time = 10
    let countDown = setInterval(timer, 1000)
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
    
    const timeUp = setTimeout(isCorrect, 10000, "timeout", num)

    //Click events for answer buttons
    $('#answer-1').on("click", function (){
        let userGuess = $('#answer-1').text()
        clearInterval(countDown)
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
        clearInterval(countDown)
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

// What's not working and how I intend to fix it 

// 1. The setInterval function for the countdown clock multiplies on later questions. I remembered a method to avoid this 
// from the in-class Stopwatch excercise, putting the setInterval inside of a function containing an if statement that would 
// check if the setInterval was still running and only executing if it returned false. This did not work because of a scope 
// issue, clearInterval would not work on a setInterval variable called in a function. I appeared to use the same syntax as 
// the Stopwatch excercise and am not sure why it worked in one case and not the other.

// I plan to continue experimenting with placement of the setInterval within and without functions and if statements, I've
// tried several options already which haven't worked but I may have missed something or not found the right combination. I 
// think this issue might be leading to my other issues, which seem to be loop related.

// 2. The incorrect counter increases by multiples. I end up with a score of incorrect: 26, even if every selected answer 
// is correct. Somehow incorrect is being increased when it shouldn't be, likely an issue with my click events, my isCorrect
// function, or both, and being exacerbated by the loop issues. I've been consumed with the timeout issues and haven't even 
// had an opportunity to effectively troubleshoot this. 

// I think the values of previous guesses are being carried over into the next question. I plan to figure out if, when, and
// how this is happening and clear the values.

// 3. The gameOver function is supposed to remain static until the start button is clicked, however the coundown timer still
// counts down and the screen returns to question five after 10 seconds. The setTimeout in the quiz function calls the 
// isCorrectfunction after 10 seconds, but I don't know why this is occuring here or in this fashion.

// My issues are that timeouts continue to run after being cleared and parameters are being passed repeatedly through the 
// loop and not being cleared. My game does not contain a for loop, I did not think I would need one and thought it would be 
// less complex to iterate through the question array by other means. Rewriting the code to contain a for loop may work and 
// I will try it. I may also attempt to code the entire game as an object, as I saw on an example of the same project online. 
// Furthermore, I think I could get this to work if the entire game was contained in one function, but I'd rather not build
// a function that large or complex.

// I plan to continue working on these issues until resolved. Regretfully, I was unable to style the page with CSS, as these
// javascript issues persisted and functionality took precedence over aesthetics.