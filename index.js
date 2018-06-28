//main application logic flows from top to bottom and repeats

//define global variables for currentQuestionIndex & score that will iterate throughout logic
let currentQuestionIndex = 0;
let score = 0;


//listener to handle Get Started button & start the quiz
    //generates first question from STORE and hides the .start-page
$('.start-page').on('click', '.getstarted-btn', event => {
    generateQuestion(currentQuestionIndex);
    $('.start-page').toggleClass('hidden');
    $('.banner-title').addClass('hidden');
    $('.home-button').removeClass('hidden');
    $('body').addClass('body-gradient');

    //for debugging
    console.log('the quiz has started!');
})


//function to handle generation & rendering of question
    //set variables for questionText, answers & correctAnswer from questionsSTORE object per currentQuestionIndex
    //set .question-text & values of answer radios to relevant variables from STORE
function generateQuestion(currentQuestionIndex) {

    //pull data from STORE
    let questionText = questionsSTORE[currentQuestionIndex].question;
    let answer1 = questionsSTORE[currentQuestionIndex].answer1;
    let answer2 = questionsSTORE[currentQuestionIndex].answer2;
    let answer3 = questionsSTORE[currentQuestionIndex].answer3;
    let answer4 = questionsSTORE[currentQuestionIndex].answer4;
    correctAnswer = questionsSTORE[currentQuestionIndex].correctAnswer;

    //render data in HTML
    //Question text
    $('.question-number span').text(`${currentQuestionIndex + 1}`)
    $('.question-text').text(`${questionText}`);

    //Answer 1
    $('.question-form .answer1').text(`${answer1}`);
    $('#answer1').attr("value", `${answer1}`);
    $('#answer1').attr("checked", false);

    //Answer 2
    $('.question-form .answer2').text(`${answer2}`);
    $('#answer2').attr("value", `${answer2}`);
    $('#answer2').attr("checked", false);

    //Answer 3
    $('.question-form .answer3').text(`${answer3}`);
    $('#answer3').attr("value", `${answer3}`);
    $('#answer3').attr("checked", false);

    //Answer 4
    $('.question-form .answer4').text(`${answer4}`);
    $('#answer4').attr("value", `${answer4}`);
    $('#answer4').attr("checked", false);

    $('.question-number span').text(`${currentQuestionIndex + 1}`);

    //display question-container & tracker until results are shown
    $('.question-container').removeClass("hidden");
    $('.tracker').removeClass('hidden');
}


//listener to handle checking the answer to current question
    //event listener on submit button .preventDefault()
    //set variable per value of user answered radio and compare to correctAnswer from STORE
$('.question-form').on('submit', function (event) {
    event.preventDefault();
    
    let userAnswer = $('input:checked').attr("value");
    let answerType;

    if (userAnswer == correctAnswer) {
        answerType = true;
        //iterate global score on correct answer
        score++;
        $('.score span').text(`${score}`);
        //for debugging
        console.log(`Correct Answer!`);
    }
    else {
        answerType = false;
        //for debugging
        console.log(`Incorrect Answer`);
    }

    //iterate global index to prime for flow after feedback is given for current question
    currentQuestionIndex++;

    //for debugging
    console.log(`the user chose ${userAnswer}`);
    console.log(`the correct answer is ${correctAnswer}`);

    //trigger feedback display
    renderFeedbackContainer(answerType);
})


//function to render the question feedback container and data
    //take in answerType and render Correct or Incorrect accordingly
function renderFeedbackContainer (answerType) {
    
    //set correct answer text
    $('.correct-answer span').text(`${correctAnswer}`);

    if (answerType === true) {
        $('.answer-type span').text('Correct Answer!');
        $('.answer-type').addClass("correct");
        $('.answer-type').removeClass("incorrect");
        $('.correct-answer').addClass('hidden');

    }
    else {
        $('.answer-type span').text('Incorrect Answer');
        $('.answer-type').addClass("incorrect");
        $('.answer-type').removeClass("correct");
        
        //show correct answer to user
        $('.correct-answer').removeClass('hidden');
    }

    //hide question-container and show feedback-container
    $('.question-form').toggleClass("hidden");
    $('.feedback-container').toggleClass("hidden");

    //for debugging
    console.log(`score is ${score} / 10`);
}


//listener to handle clicking the next button after feedback
    //conditional checks if all questions have been answered and either generates next question or results container
$('.next-button').on('click', event => {
    $('.feedback-container').toggleClass( "hidden");
    $('.question-form').toggleClass("hidden");

    //next question starts logic from top again
    if (currentQuestionIndex <= questionsSTORE.length - 1) {
        generateQuestion(currentQuestionIndex);
        //for debugging
        //console.clear();
        console.log(`on to question # ${currentQuestionIndex + 1}`);
    }
    else {
        renderResultsContainer();
        //for debugging
        //console.clear();
        console.log('we made it to the end!');
    }
})


//function to handle rendering the results container
function renderResultsContainer() {
    $('.question-container').addClass("hidden");
    $('header').addClass('hidden');
    $('.final-score').text(`${score}`);
    $('.results-container').toggleClass("hidden");
}


//listener to handle restarting quiz on results container
    //resets currentQuestionIndex & score to 0 and generates first question again
$('.restart-btn').on('click', event => {
    currentQuestionIndex = 0;
    score = 0;
    $('.score span').text(`${score}`);

    //restart question logic from the top again
    generateQuestion(currentQuestionIndex);

    //hide results page
    $('.results-container').toggleClass("hidden");
    $('header').removeClass('hidden');

    //for debugging
    console.clear();
    console.log('the quiz has started!');
})


//listener to handle reloading page by clicking on home button with user confirmation
$('header').on('click', '.home-button', function() {
    let reStart = confirm('Are you sure you want to go home?');
    if (reStart == true) {
        location.reload ();
    }
})