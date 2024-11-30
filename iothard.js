// Array of quiz questions
const quiz =[
    {
      "Question": "Which of the following is a common microprocessor?",
      "options": {
        "A": "ARM Cortex-M",
        "B": "AVR",
        "C": "Intel 8086",
        "D": "PIC"
      },
      "correctAnswer": "C",
      "Explanation": "Intel 8086 is a well-known microprocessor used in early personal computers."
    },
    {
      "Question": "What is the function of the ALU (Arithmetic Logic Unit) in a microprocessor?",
      "options": {
        "A": "Managing memory",
        "B": "Performing arithmetic and logical operations",
        "C": "Controlling input/output operations",
        "D": "Storing data"
      },
      "correctAnswer": "B",
      "Explanation": "The ALU performs mathematical calculations and logical operations within the CPU."
    },
    {
      "Question": "Which register in the 8086 microprocessor holds the address of the next instruction to be executed?",
      "options": {
        "A": "Accumulator",
        "B": "Program Counter",
        "C": "Stack Pointer",
        "D": "Instruction Register"
      },
      "correctAnswer": "B",
      "Explanation": "The Program Counter (PC) holds the address of the next instruction to be executed."
    },
    {
      "Question": "In microprocessor terminology, what does the term 'clock cycle' refer to?",
      "options": {
        "A": "The speed at which a processor executes instructions",
        "B": "The time taken to complete one instruction",
        "C": "The frequency of the processor",
        "D": "The time interval between two instructions"
      },
      "correctAnswer": "A",
      "Explanation": "A clock cycle is a single tick of the processor's clock, during which one or more instructions can be executed."
    },
    {
      "Question": "Which of the following is a characteristic of RISC (Reduced Instruction Set Computer) architecture?",
      "options": {
        "A": "Complex instructions",
        "B": "Many addressing modes",
        "C": "Simple instructions and fast execution",
        "D": "High-level language support"
      },
      "correctAnswer": "C",
      "Explanation": "RISC architecture uses a small set of simple instructions that can be executed quickly."
    },
    {
      "Question": "What is a microcontroller?",
      "options": {
        "A": "A device that converts analog signals to digital signals",
        "B": "A small computer on a single integrated circuit containing a processor, memory, and programmable input/output peripherals",
        "C": "A digital circuit that performs logical operations",
        "D": "A type of memory"
      },
      "correctAnswer": "B",
      "Explanation": "Microcontrollers are integrated circuits designed for specific control applications."
    },
    {
      "Question": "Which microcontroller is commonly used in hobbyist projects like Arduino?",
      "options": {
        "A": "ATmega328",
        "B": "PIC16F877",
        "C": "8051",
        "D": "Intel 8086"
      },
      "correctAnswer": "A",
      "Explanation": "The ATmega328 microcontroller is used in many Arduino boards."
    },
    {
      "Question": "In a microcontroller, what is the function of an ADC (Analog-to-Digital Converter)?",
      "options": {
        "A": "To convert digital signals to analog signals",
        "B": "To convert analog signals to digital signals",
        "C": "To control the power supply",
        "D": "To manage memory allocation"
      },
      "correctAnswer": "B",
      "Explanation": "An ADC converts analog signals into digital values that the microcontroller can process."
    },
    {
      "Question": "Which of the following is an example of an 8-bit microcontroller?",
      "options": {
        "A": "ARM Cortex-M4",
        "B": "Intel 8051",
        "C": "PIC32MX",
        "D": "AT91SAM7X256"
      },
      "correctAnswer": "B",
      "Explanation": "The Intel 8051 is a widely used 8-bit microcontroller."
    },
    {
      "Question": "What is the purpose of the watchdog timer in a microcontroller?",
      "options": {
        "A": "To keep track of time",
        "B": "To reset the microcontroller if it gets stuck in an infinite loop",
        "C": "To monitor input/output operations",
        "D": "To manage power consumption"
      },
      "correctAnswer": "B",
      "Explanation": "The watchdog timer is used to detect and recover from software malfunctions."
    },
    {
      "Question": "Which programming language is commonly used for programming microcontrollers?",
      "options": {
        "A": "HTML",
        "B": "C",
        "C": "SQL",
        "D": "JavaScript"
      },
      "correctAnswer": "B",
      "Explanation": "The C programming language is commonly used for programming microcontrollers due to its efficiency and control over hardware."
    },
    {
      "Question": "In microcontrollers, what does PWM stand for?",
      "options": {
        "A": "Pulse Width Modulation",
        "B": "Power Wave Modulation",
        "C": "Peripheral Wave Modulation",
        "D": "Pulse Wave Modification"
      },
      "correctAnswer": "A",
      "Explanation": "PWM is a technique used to control the power delivered to electrical devices, such as motors and LEDs."
    },
    {
      "Question": "What is an interrupt in the context of microcontrollers?",
      "options": {
        "A": "A signal that causes the processor to stop the current task and execute a specific piece of code",
        "B": "A command to increase the processor speed",
        "C": "A technique to store data",
        "D": "A method to communicate with other devices"
      },
      "correctAnswer": "A",
      "Explanation": "Interrupts allow the processor to respond quickly to important events by executing an interrupt service routine."
    },
    {
      "Question": "Which of the following microcontrollers is part of the PIC family?",
      "options": {
        "A": "ATmega328",
        "B": "STM32F103",
        "C": "PIC16F877",
        "D": "MSP430"
      },
      "correctAnswer": "C",
      "Explanation": "PIC16F877 is a microcontroller from the PIC family, produced by Microchip Technology."
    },
    {
      "Question": "What is the primary use of a UART (Universal Asynchronous Receiver-Transmitter) in microcontrollers?",
      "options": {
        "A": "To control motor speed",
        "B": "To interface with analog sensors",
        "C": "To provide serial communication",
        "D": "To manage power supply"
      },
      "correctAnswer": "C",
      "Explanation": "UART is used for serial communication between the microcontroller and other devices, such as computers and other microcontrollers."
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
