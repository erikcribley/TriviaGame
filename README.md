# TriviaGame

This is a failed attempt at the multipage trivia game for Unit 5. It uses jQuery for DOM manipulation of the HTML elements
and the setTimeout and setInterval functions for timing events.

Questions and answers are taken from an array of objects. These values are assigned and displayed through the quiz
function. The selected answer is checked against the correct response through the isCorrect function, which displays the
correct answer, updates the correct, incorrect, and unanswered counters, and either loads the next question in the array 
for the quiz function or, if all questions have been asked, calls the gameOver function, which displays the score and 
button to start the game again.

Unfortunately I came across many issues that I was unable to resolve before the project was due. Below I will explain these
issues, my attempts to solve them, and my plans to correct them going forward.

1. The setInterval function for the countdown clock multiplies on later questions. I remembered a method to avoid this from 
the in-class Stopwatch excercise, putting the setInterval inside of a function containing an if statement that would check
if the setInterval was still running and only executing if it returned false. This did not work because of a scope issue,
clearInterval would not work on a setInterval variable called in a function. I appeared to use the same syntax as the 
Stopwatch excercise and am not sure why it worked in one case and not the other.

I plan to continue experimenting with placement of the setInterval within and without functions and if statements, I've
tried several options already which haven't worked but I may have missed something or not found the right combination. I 
think this issue might be leading to my other issues, which seem to be loop related.

2. The incorrect counter increases by multiples. I end up with a score of incorrect: 26, even if every selected answer 
is correct. Somehow incorrect is being increased when it shouldn't be, likely an issue with my click events, my isCorrect
function, or both, and being exacerbated by the loop issues. I've been consumed with the timeout issues and haven't even 
had an opportunity to effectively troubleshoot this. 

I think the values of previous guesses are being carried over into the next question. I plan to figure out if, when, and
how this is happening and clear the values.

3. The gameOver function is supposed to remain static until the start button is clicked, however the coundown timer still
counts down and the screen returns to question five after 10 seconds. The setTimeout in the quiz function calls the isCorrect
function after 10 seconds, but I don't know why this is occuring here or in this fashion.

My issues are that timeouts continue to run after being cleared and parameters are being passed repeatedly through the loop
and not being cleared. My game does not contain a for loop, I did not think I would need one and thought it would be less 
complex to iterate through the question array by other means. Rewriting the code to contain a for loop may work and I will 
try it. I may also attempt to code the entire game as an object, as I saw on an example of the same project online. 
Furthermore, I think I could get this to work if the entire game was contained in one function, but I'd rather not build
a function that large or complex.

I plan to continue working on these issues until resolved. Regretfully, I was unable to style the page with CSS, as these
javascript issues persisted and functionality took precedence over aesthetics.