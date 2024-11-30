// Array of quiz questions
const quiz = [
    {
        "question": "What is the primary difference between 'wire' and 'reg' data types in Verilog?",
        "options": {
            "A": "'wire' holds value in procedural blocks, 'reg' in continuous assignments",
            "B": "'wire' is for continuous assignments, 'reg' is for procedural assignments",
            "C": "Both are used for continuous assignments",
            "D": "Both are used for procedural blocks"
        },
        "correctAnswer": "B",
        "explanation": "A 'wire' is used for continuous assignments (connections), while 'reg' is used in procedural assignments, such as inside an 'always' or 'initial' block."
    },
    {
        "question": "In Verilog, what does the 'parameter' keyword allow you to do?",
        "options": {
            "A": "Define a constant value",
            "B": "Declare a wire",
            "C": "Drive continuous assignments",
            "D": "Instantiate a module"
        },
        "correctAnswer": "A",
        "explanation": "The 'parameter' keyword defines constant values that cannot be changed during simulation but can be overridden during module instantiation."
    },
    {
        "question": "How do you instantiate a module in Verilog?",
        "options": {
            "A": "Using the 'mod' keyword",
            "B": "Using the 'module' keyword",
            "C": "Using the 'instance' keyword",
            "D": "Using the module's name"
        },
        "correctAnswer": "D",
        "explanation": "A module is instantiated by using its name followed by its instance name and port connections. Keywords like 'mod' or 'instance' are not part of Verilog syntax."
    },
    {
        "question": "What is the difference between 'blocking' and 'non-blocking' assignments in Verilog?",
        "options": {
            "A": "Blocking executes concurrently, non-blocking executes sequentially",
            "B": "Blocking executes sequentially, non-blocking executes concurrently",
            "C": "Blocking can only be used in always blocks, non-blocking can be used anywhere",
            "D": "No difference, both are equivalent"
        },
        "correctAnswer": "B",
        "explanation": "Blocking ('=') executes sequentially, meaning one statement must finish before the next starts. Non-blocking ('<=') executes concurrently, making it suitable for modeling flip-flop behavior."
    },
    {
        "question": "Which of the following is true about the 'initial' block in Verilog?",
        "options": {
            "A": "It is executed repeatedly",
            "B": "It is executed once at the start of simulation",
            "C": "It requires a clock signal to execute",
            "D": "It cannot contain delays"
        },
        "correctAnswer": "B",
        "explanation": "The 'initial' block runs once at the start of the simulation, typically used for initializing values or running testbenches."
    },
    {
        "question": "What does the $monitor system task do in Verilog?",
        "options": {
            "A": "Displays signal values whenever they change",
            "B": "Checks for errors during simulation",
            "C": "Stops the simulation",
            "D": "Assigns values to signals"
        },
        "correctAnswer": "A",
        "explanation": "$monitor continuously displays the values of signals whenever they change, unlike $display, which shows them only once when called."
    },
    {
        "question": "How is a 'generate' block used in Verilog?",
        "options": {
            "A": "To create sequential logic",
            "B": "To instantiate multiple instances of a module",
            "C": "To generate loops",
            "D": "To conditionally instantiate hardware"
        },
        "correctAnswer": "D",
        "explanation": "The 'generate' block is used to conditionally or iteratively instantiate hardware. It's helpful for parameterized designs and creating multiple instances of modules."
    },
    {
        "question": "What is the significance of the 'synthesis' directive in Verilog?",
        "options": {
            "A": "It helps in writing testbenches",
            "B": "It optimizes the code for simulation",
            "C": "It provides hints to the synthesis tool",
            "D": "It ensures the design compiles faster"
        },
        "correctAnswer": "C",
        "explanation": "The synthesis directive provides hints or constraints to synthesis tools, like ignoring certain blocks or setting specific conditions for optimization."
    },
    {
        "question": "Which of the following statements is true regarding 'inout' ports in Verilog?",
        "options": {
            "A": "They are always driven by the module",
            "B": "They cannot be used for bidirectional signals",
            "C": "They can be driven by either the module or external sources",
            "D": "They are used only for output signals"
        },
        "correctAnswer": "C",
        "explanation": "'inout' ports are bidirectional and can be driven either by the module or by external sources. Careful handling is required to avoid conflicts."
    },
    {
        "question": "What does the keyword 'posedge' specifically describe in a sensitivity list?",
        "options": {
            "A": "A signal change from low to high",
            "B": "A signal change from high to low",
            "C": "A constant high level",
            "D": "A constant low level"
        },
        "correctAnswer": "A",
        "explanation": "The 'posedge' keyword detects a rising edge in a signal, which is a transition from 0 to 1 (low to high)."
    },
    {
        "question": "How can you prevent latch inference in a combinational always block?",
        "options": {
            "A": "Always use non-blocking assignments",
            "B": "Always assign a default value to outputs",
            "C": "Use an 'initial' block",
            "D": "Use 'posedge' in sensitivity lists"
        },
        "correctAnswer": "B",
        "explanation": "To prevent latch inference, always assign a default value to all outputs in a combinational block, ensuring that every possible condition is covered."
    },
    {
        "question": "In Verilog, which keyword is used to define a constant delay?",
        "options": {
            "A": "always",
            "B": "parameter",
            "C": "#",
            "D": "wire"
        },
        "correctAnswer": "C",
        "explanation": "The '#' symbol is used in Verilog to define a constant delay in timing simulations."
    },
    {
        "question": "What is the role of 'task' in Verilog?",
        "options": {
            "A": "It declares functions inside modules",
            "B": "It defines procedural blocks that can be called multiple times",
            "C": "It assigns values to registers",
            "D": "It monitors signals"
        },
        "correctAnswer": "B",
        "explanation": "A 'task' in Verilog is used to define a reusable procedural block that can contain delays and perform operations across multiple statements."
    },
    {
        "question": "Which of the following is NOT a valid way to end a module in Verilog?",
        "options": {
            "A": "endmodule",
            "B": "endmod",
            "C": "end",
            "D": "None of the above"
        },
        "correctAnswer": "B",
        "explanation": "'endmodule' is the correct keyword to end a module in Verilog. 'endmod' is not valid."
    },
    {
        "question": "What does the keyword 'casex' do in Verilog?",
        "options": {
            "A": "It performs a case-insensitive comparison",
            "B": "It performs a case with don't-care bits",
            "C": "It executes the first matching case",
            "D": "It terminates a process"
        },
        "correctAnswer": "B",
        "explanation": "'casex' allows don't-care bits (x or z) in case comparisons, making it useful for flexible matching in conditional logic."
    }
]

;

let currentQuestionIndex = 0;
let correctScore = 0;
let wrongScore = 0;
let timeLeft = 600;

function loadQuestion() {
let options = document.querySelectorAll('input[name="answer"]');
options.forEach(option => {
option.checked = false; // Uncheck all options
});

// Reset background color and text color of all labels
let labels = document.querySelectorAll('label');
labels.forEach(label => {
label.style.backgroundColor = ''; // Reset background color of the labels
label.style.color = ''; // Reset text color of the labels
});

let currentQuestion = quiz[currentQuestionIndex];
document.getElementById('question').textContent = currentQuestion.question;
document.getElementById('labelA').textContent = currentQuestion.options.A;
document.getElementById('labelB').textContent = currentQuestion.options.B;
document.getElementById('labelC').textContent = currentQuestion.options.C;
document.getElementById('labelD').textContent = currentQuestion.options.D;
document.getElementById('queCount').textContent = currentQuestionIndex;

// Add event listener for each option to check the answer immediately
options.forEach(option => {
option.addEventListener('change', function () {
    checkAnswerImmediately(option);
});
});
}

// Function to check the answer immediately when an option is selected
function checkAnswerImmediately(selectedOption) {
let correctAnswer = quiz[currentQuestionIndex].correctAnswer;
let label = document.querySelector(`label[for=${selectedOption.id}]`);

// Reset background color of all labels
let labels = document.querySelectorAll('label');
labels.forEach(label => {
label.style.backgroundColor = ''; // Reset background color of all labels
label.style.color = '';
});

// Highlight the selected answer immediately
if (selectedOption.value === correctAnswer) {
label.style.color = "green"; // Correct answer in green
} else {
label.style.color = "red"; // Wrong answer in red
}
}



// Function to check the answer and highlight the options
function checkAnswer() {
    let selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        let answer = selectedOption.value;
        let correctAnswer = quiz[currentQuestionIndex].correctAnswer;
        // Highlight the selected answer
        let label = document.querySelector(`label[for=${selectedOption.id}]`);
        if (answer === correctAnswer) {
            label.style.color = "green"; // Correct answer in green
            correctScore += 1;
        } else {
            label.style.color = "red"; // Wrong answer in red
            wrongScore += 1;
        }

        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < quiz.length) {
                loadQuestion();
            } else {
                endAssessment(); 
            }
        }, 1000)
    } else {
        document.getElementById('feedback').textContent = "Please select an option!";
        setTimeout(() =>{
            document.getElementById('feedback').textContent = "";
        },2000)
    }
}

// End assessment functiona
function endAssessment() {
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('sub').style.display = 'none';
    document.getElementById('diffcultyLevel').style.display = 'none';
    document.getElementById('verilog').style.display = 'none';
    document.getElementById('easy').style.display = 'none';
    document.getElementById('endAssessmentBtn').style.display = 'none';
    document.getElementById('timer').style.display = 'none';
    document.getElementById('time').style.display = 'none';
    document.getElementById('scoreCard').style.display = 'block';
    document.getElementById('noOfQuestions').style.display = 'none';
    document.getElementById('logo').style.display = 'none';
    document.getElementById('logo2').style.display = 'none';
    document.getElementById('TechQuestHeading').style.display = 'none';
    let noOfQue = correctScore + wrongScore;
    // Display the correct and wrong scores
    document.getElementById('score').textContent = "SCORE : " + correctScore; 
    document.getElementById('correctAnswerScore').textContent = "Correct Answers : " + correctScore;
    document.getElementById('wrongAnswerScore').textContent = "Wrong Answers : " + wrongScore;
    document.getElementById('noofquestionsAttempted').textContent = "No Of Questions Attempted : " + noOfQue;
    document.getElementById('noOfQues').style.display = 'none';
    let appreciationText = '';
    if (correctScore === quiz.length) {
        appreciationText = "Outstanding! You got a perfect score! 🌟";
    } else if (correctScore >= quiz.length * 0.8) {
        appreciationText = "Great job! You scored really well! 👍";
    } else if (correctScore >= quiz.length * 0.5) {
        appreciationText = "Good effort! You’re halfway there! 😊";
    } else {
        appreciationText = "Don’t worry! Keep practicing, you’ll do better next time! 💪";
    }
    

    document.getElementById('appreciation').textContent = appreciationText;
}

// Timer function
function startTimer() {
    const timerDisplay = document.getElementById('time');

    const timerInterval = setInterval(() => {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        
        timerDisplay.textContent = `${minutes}:${seconds}`;

        
        if (timeLeft === 0) {
            clearInterval(timerInterval);
            endAssessment(); 
        }

        timeLeft--;
    }, 1000);
}

window.onload = function () {
    shuffleQuiz(quiz); 
    loadQuestion();   
    startTimer();    
    localStorage.setItem("userAnswers", JSON.stringify(userAnswers));
    localStorage.setItem("quizQuestions", JSON.stringify(quiz));

};

// Function to shuffle the quiz questions
function shuffleQuiz(quizArray) {
    for (let i = quizArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [quizArray[i], quizArray[j]] = [quizArray[j], quizArray[i]]; // Swap
    }
    return quizArray;
}

function clickHome(){
    window.location.href = "index.html"
}

let answeredQuestions = []; // To store all answered questions with details
function checkAnswer() {
    let selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        let answer = selectedOption.value;
        let currentQuestion = quiz[currentQuestionIndex];
        let correctAnswer = currentQuestion.correctAnswer;

        // Highlight the selected answer
        let label = document.querySelector(`label[for=${selectedOption.id}]`);
        let isCorrect = answer === correctAnswer;

        if (isCorrect) {
            label.style.color = "green"; // Correct answer in green
            correctScore += 1;
        } else {
            label.style.color = "red"; // Wrong answer in red
            wrongScore += 1;
        }

        // Store details of the question, answer, and explanation
        answeredQuestions.push({
            question: currentQuestion.question,
            selectedAnswer: answer,
            correctAnswer: correctAnswer,
            explanation: currentQuestion.explanation,
            isCorrect: isCorrect
        });

        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < quiz.length) {
                loadQuestion();
            } else {
                endAssessment();
            }
        }, 1000);
    } else {
        document.getElementById('feedback').textContent = "Please select an option!";
        setTimeout(() => {
            document.getElementById('feedback').textContent = "";
        }, 2000);
    }
}
function showReviewPage() {
    // Hide the scorecard
    document.getElementById('scoreCard').style.display = 'none';

    // Display the review page
    document.getElementById('reviewPage').style.display = 'block';

    let mistakesContainer = document.getElementById('mistakesContainer');
    mistakesContainer.innerHTML = ""; // Clear previous content

    if (answeredQuestions.length === 0) {
        mistakesContainer.innerHTML = "<p>No questions to review. 🎉</p>";
    } else {
        answeredQuestions.forEach((item, index) => {
            let questionBlock = document.createElement('div');
            questionBlock.style.marginBottom = "20px";

            // Generate options list
            let optionsList = Object.entries(quiz[index].options)
                .map(([key, value]) => `<li><strong>${key}:</strong> ${value}</li>`)
                .join("");

            questionBlock.innerHTML = `
                <h3>Question ${index - 1}:</h3>
                <p>${item.question}</p>
                <ul>${optionsList}</ul>
                <p><strong>Your Answer:</strong> ${item.selectedAnswer}</p>
                <p><strong>Correct Answer:</strong> ${item.correctAnswer}</p>
                <p><strong>Explanation:</strong></p>
                <p>${item.explanation}</p>
                <p><strong>Status:</strong> ${item.isCorrect ? "<span style='color: green; font-weight: bold;'>Correct</span>" : "<span style='color: red; font-weight: bold;'>Incorrect</span>"}</p>
                <hr>
            `;
            mistakesContainer.appendChild(questionBlock);
        });
    }
}


function goBackToScoreCard() {
    document.getElementById('reviewPage').style.display = 'none';
    document.getElementById('scoreCard').style.display = 'block';
}

let reviewIndex = 0; // Current question index for review

// Function to load a question based on the reviewIndex
function loadReviewQuestion() {
    if (reviewIndex < 0 || reviewIndex >= answeredQuestions.length) return;

    let currentReview = answeredQuestions[reviewIndex];
    let optionsList = Object.entries(quiz[reviewIndex].options)
        .map(([key, value]) => `<li><strong>${key}:</strong> ${value}</li>`)
        .join("");

    document.getElementById('reviewQuestionContent').innerHTML = `
        <h3>Question ${reviewIndex + 1}:</h3>
        <p>${currentReview.question}</p>
        <ul>${optionsList}</ul>
        <p><strong>Your Answer:</strong> ${currentReview.selectedAnswer}</p>
        <p><strong>Correct Answer:</strong> ${currentReview.correctAnswer}</p>
        <p><strong>Explanation:</strong> ${currentReview.explanation}</p>
        <p><strong>Status:</strong> ${
            currentReview.isCorrect
                ? "<span style='color: green;'>Correct</span>"
                : "<span style='color: red;'>Incorrect</span>"
        }</p>
    `;

    // Disable/Enable buttons based on the index
    document.getElementById('previousReviewButton').disabled = reviewIndex === 0;
    document.getElementById('nextReviewButton').disabled =
        reviewIndex === answeredQuestions.length - 1;
}

// Load the next review question
function loadNextReviewQuestion() {
    if (reviewIndex < answeredQuestions.length - 1) {
        reviewIndex++;
        loadReviewQuestion();
    }
}

// Load the previous review question
function loadPreviousReviewQuestion() {
    if (reviewIndex > 0) {
        reviewIndex--;
        loadReviewQuestion();
    }
}

// Show the review page with one question at a time
let currentReviewIndex = 0; // Track the current question index in the review

function showReviewPage() {
    
        document.getElementById("reviewPage").style.display = "block"; // Show the review page
        document.getElementById("scoreCard").style.display = "none"; // Hide the score card
       
    // Initialize the review with the first question
    currentReviewIndex = 0;
    displayReviewQuestion();
}

function displayReviewQuestion() {
    let reviewContainer = document.getElementById('mistakesContainer');
    reviewContainer.innerHTML = ""; // Clear previous content

    let item = answeredQuestions[currentReviewIndex];
    let optionsList = Object.entries(quiz[currentReviewIndex].options)
        .map(([key, value]) => `<li><strong>${key})</strong> ${value}</li>`)
        .join("");

    reviewContainer.innerHTML = `
        <div class = "question-side">
            <h2 class = "question-seq-head"> ${currentReviewIndex + 1})</h2>
            <p class = "rev-question">${item.question}</p>
        </div>
        <ul class="no-style-list">${optionsList}</ul>
        <div class = "yrcranswer">
            <p><strong>Your Answer:</strong> ${item.selectedAnswer}</p>
            <p><strong>Correct Answer:</strong> ${item.correctAnswer}</p>
            <p><strong>Status:</strong> ${item.isCorrect ? "<span style='color: green;'>Correct</span>" : "<span style='color: red;'>Incorrect</span>"}</p>
        </div>
        <div class = "explanation-container">
            <p class = "explanation-heading"><strong>Explanation:</strong></p>
            <p class = "explanation-text">${item.explanation}</p>
        </div>
    `;

    // Update the visibility of navigation buttons
    document.getElementById('prevQuestion').style.display = currentReviewIndex > 0 ? 'inline-block' : 'none';
    document.getElementById('nextQuestion').style.display = currentReviewIndex < answeredQuestions.length - 1 ? 'inline-block' : 'none';
    document.getElementById('finishReview').style.display = currentReviewIndex === answeredQuestions.length - 1 ? 'inline-block' : 'none';
}

document.getElementById('prevQuestion').addEventListener('click', () => {
    if (currentReviewIndex > 0) {
        currentReviewIndex--;
        displayReviewQuestion();
    }
});

document.getElementById('nextQuestion').addEventListener('click', () => {
    if (currentReviewIndex < answeredQuestions.length - 1) {
        currentReviewIndex++;
        displayReviewQuestion();
    }
});



function goBackToScoreCard() {
    document.getElementById('reviewPage').style.display = 'none';
    document.getElementById('scoreCard').style.display = 'block';
}




//to prevent paste option for the website 

document.addEventListener('keydown', function(event) {
    if ((event.ctrlKey || event.metaKey) && 
        (event.key === 'x' || event.key === 'c' || event.key === 'v')) {
        event.preventDefault();
        alert("Cut, copy, and paste are disabled!");
    }
});
 
//to prevent right click option 

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    alert("Right-click is disabled on this page.");
});
 

// to prevent oncut,oncopy onpaste

document.addEventListener('cut', function(event) {
    event.preventDefault();
    alert("Cut operation is disabled!");
});

document.addEventListener('copy', function(event) {
    event.preventDefault();
    alert("Copy operation is disabled!");
});

document.addEventListener('paste', function(event) {
    event.preventDefault();
    alert("Paste operation is disabled!");
});
