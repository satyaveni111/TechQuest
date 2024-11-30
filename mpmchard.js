// Array of quiz questions
const quiz =[{
        "question": "in the 8086 microprocessor, what is the maximum memory addressing capacity?",
        "options": {
          "A": "64 KB",
          "B": "256 KB",
          "C": "1 MB",
          "D": "4 GB"
        },
        "correctAnswer": "C",
        "explanation": "the 8086 microprocessor has a 20-bit address bus, allowing it to address up to 1 MB of memory."
      },
      {
        "question": "what is the function of the segment registers in the 8086 microprocessor?",
        "options": {
          "A": "to hold general-purpose data",
          "B": "to store the base addresses of different segments of memory",
          "C": "to perform arithmetic operations",
          "D": "to control i/o operations"
        },
        "correctAnswer": "B",
        "explanation": "segment registers hold the base addresses of code, data, stack, and extra segments, facilitating segmented memory addressing."
      },
      {
        "question": "which technique does a microprocessor use to prioritize multiple interrupts?",
        "options": {
          "A": "polling",
          "B": "daisy chaining",
          "C": "interrupt masking",
          "D": "all of the above"
        },
        "correctAnswer": "D",
        "explanation": "polling, daisy chaining, and interrupt masking are techniques used by microprocessors to prioritize and handle multiple interrupts efficiently."
      },
      {
        "question": "in a pipelined processor, what is a control hazard?",
        "options": {
          "A": "a condition where instructions depend on data not yet available",
          "B": "a situation where the control flow of instructions is altered due to branching",
          "C": "a conflict arising from simultaneous access to the same resource",
          "D": "an error in arithmetic calculations"
        },
        "correctAnswer": "B",
        "explanation": "control hazards occur when the pipeline makes wrong predictions about branch instructions, causing a delay in instruction execution."
      },
      {
        "question": "in the context of microprocessors, what is the purpose of the alu (arithmetic logic unit)?",
        "options": {
          "A": "to manage memory operations",
          "B": "to control input/output operations",
          "C": "to perform arithmetic and logical operations",
          "D": "to execute instruction fetch and decode operations"
        },
        "correctAnswer": "C",
        "explanation": "the alu is responsible for carrying out all arithmetic and logical operations within the microprocessor."
      },
    
      {
        "question": "what is the primary function of a watchdog timer in a microcontroller?",
        "options": {
          "A": "to monitor the cpu temperature",
          "B": "to reset the system in case of software faults",
          "C": "to control power supply",
          "D": "to manage peripheral devices"
        },
        "correctAnswer": "B",
        "explanation": "the watchdog timer resets the microcontroller if it detects that the system is stuck, ensuring reliable operation."
      },
      {
        "question": "which of the following is a characteristic of the harvard architecture used in many microcontrollers?",
        "options": {
          "A": "combined instruction and data paths",
          "B": "separate instruction and data paths",
          "C": "single bus for both instructions and data",
          "D": "simplified control unit design"
        },
        "correctAnswer": "B",
        "explanation": "harvard architecture has separate memory and bus systems for instructions and data, allowing simultaneous access to both."
      },
      {
        "question": "in microcontroller programming, what is the purpose of an interrupt vector table?",
        "options": {
          "A": "to store data in memory",
          "B": "to hold the addresses of interrupt service routines",
          "C": "to manage serial communication",
          "D": "to convert analog signals to digital"
        },
        "correctAnswer": "B",
        "explanation": "the interrupt vector table contains the addresses of the interrupt service routines, allowing the microcontroller to quickly respond to interrupts."
      },
      {
        "question": "what is the main advantage of using pwm (pulse width modulation) in microcontrollers?",
        "options": {
          "A": "to increase processing speed",
          "B": "to generate precise analog signals from digital signals",
          "C": "to manage memory operations",
          "D": "to simplify instruction execution"
        },
        "correctAnswer": "B",
        "explanation": "pwm is used to create analog output signals by varying the duty cycle of a digital pulse, useful in controlling devices like motors and leds."
      },
      {
        "question": "which type of memory in microcontrollers is typically used for storing firmware?",
        "options": {
          "A": "ram",
          "B": "flash",
          "C": "eeprom",
          "D": "cache"
        },
        "correctAnswer": "B",
        "explanation": "flash memory is non-volatile and is commonly used to store firmware in microcontrollers."
      },
      {
        "question": "what is the primary purpose of the gpio (general-purpose input/output) pins in a microcontroller?",
        "options": {
          "A": "to perform analog-to-digital conversion",
          "B": "to interface with external devices and peripherals",
          "C": "to execute instructions",
          "D": "to manage power supply"
        },
        "correctAnswer": "B",
        "explanation": "gpio pins allow a microcontroller to interact with external devices and peripherals, providing input and output functionality."
      },
      {
        "question": "which communication protocol is commonly used for long-distance data transmission between a microcontroller and other devices?",
        "options": {
          "A": "uart",
          "B": "i2c",
          "C": "spi",
          "D": "can"
        },
        "correctAnswer": "D",
        "explanation": "the can (controller area network) protocol is designed for robust long-distance communication in automotive and industrial applications."
      },
      {
        "question": "what is the function of the adc (analog-to-digital converter) in a microcontroller?",
        "options": {
          "A": "to convert digital signals to analog signals",
          "B": "to convert analog signals to digital signals",
          "C": "to control the power supply",
          "D": "to manage serial communication"
        },
        "correctAnswer": "B",
        "explanation": "an adc converts analog signals into digital values that the microcontroller can process."
      },
      {
        "question": "in the arm cortex-m series of microcontrollers, what does the 'm' stand for?",
        "options": {
          "A": "microprocessor",
          "B": "microcontroller",
          "C": "memory",
          "D": "mixed-signal"
        },
        "correctAnswer": "B",
        "explanation": "the 'm' in arm cortex-m stands for microcontroller, indicating that these processors are designed specifically for embedded and microcontroller applications."
      },
      {
        "question": "in microcontroller development, what is the purpose of an ide (integrated development environment)?",
        "options": {
          "A": "to manage hardware components",
          "B": "to provide tools for code development, debugging, and simulation",
          "C": "to control power supply",
          "D": "to execute machine code directly"
        },
        "correctAnswer": "B",
        "explanation": "an ide offers a comprehensive environment for writing, debugging, and simulating code, making the development process more efficient."
      }]
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
                <p>${item.Explanation}</p>
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
