// Array of quiz questions
const quiz =[
    {
      "question": "Which logic gate produces an output of 1 only when all its inputs are 1?",
      "options": {
        "A": "OR gate",
        "B": "AND gate",
        "C": "NOT gate",
        "D": "NAND gate"
      },
      "correctAnswer": "B",
      "explanation": "An AND gate outputs 1 only when all its inputs are 1."
    },
    {
      "question": "What is the binary representation of the decimal number 5?",
      "options": {
        "A": "1001",
        "B": "1100",
        "C": "0011",
        "D": "0101"
      },
      "correctAnswer": "D",
      "explanation": "The binary representation of the decimal number 5 is 0101."
    },
    {
      "question": "Which component is used to store a single bit of data?",
      "options": {
        "A": "Decoder",
        "B": "Flip-flop",
        "C": "Multiplexer",
        "D": "Register"
      },
      "correctAnswer": "B",
      "explanation": "A flip-flop is a digital memory circuit used to store one bit of data."
    },
    {
      "question": "What does the OR gate do?",
      "options": {
        "A": "Outputs 1 only if all inputs are 1",
        "B": "Outputs 1 if at least one input is 1",
        "C": "Inverts the input",
        "D": "Outputs 0 only if all inputs are 0"
      },
      "correctAnswer": "B",
      "explanation": "An OR gate outputs 1 if at least one of its inputs is 1."
    },
    {
      "question": "What is the hexadecimal representation of the binary number 1010?",
      "options": {
        "A": "A",
        "B": "B",
        "C": "C",
        "D": "D"
      },
      "correctAnswer": "A",
      "explanation": "The binary number 1010 converts to hexadecimal A."
    },
    {
      "question": "What is the purpose of a NOT gate in digital circuits?",
      "options": {
        "A": "To combine multiple inputs into one output",
        "B": "To invert the input signal",
        "C": "To perform addition",
        "D": "To store data"
      },
      "correctAnswer": "B",
      "explanation": "A NOT gate inverts the input signal; if the input is 1, the output is 0, and vice versa."
    },
    {
      "question": "Which of the following is a 4-bit binary number?",
      "options": {
        "A": "100",
        "B": "10101",
        "C": "1110",
        "D": "11011"
      },
      "correctAnswer": "C",
      "explanation": "A 4-bit binary number consists of four digits; 1110 is a 4-bit binary number."
    },
    {
      "question": "What is the result of adding binary numbers 110 and 001?",
      "options": {
        "A": "111",
        "B": "101",
        "C": "1001",
        "D": "1000"
      },
      "correctAnswer": "A",
      "explanation": "Adding binary numbers 110 and 001 gives 111."
    },
    {
      "question": "What does a decoder do in digital electronics?",
      "options": {
        "A": "Converts binary code to a recognizable form",
        "B": "Encodes data into binary format",
        "C": "Stores data",
        "D": "Adds binary numbers"
      },
      "correctAnswer": "A",
      "explanation": "A decoder converts binary code into a recognizable or specific form."
    },
    {
      "question": "Which gate is known as the universal gate?",
      "options": {
        "A": "OR gate",
        "B": "AND gate",
        "C": "NAND gate",
        "D": "NOT gate"
      },
      "correctAnswer": "C",
      "explanation": "The NAND gate is known as the universal gate because it can be used to create any other type of logic gate."
    },
    {
      "question": "What is the decimal equivalent of the binary number 1011?",
      "options": {
        "A": "7",
        "B": "9",
        "C": "10",
        "D": "11"
      },
      "correctAnswer": "D",
      "explanation": "The binary number 1011 converts to the decimal number 11."
    },
    {
      "question": "Which logic gate outputs 1 only when both inputs are different?",
      "options": {
        "A": "AND gate",
        "B": "OR gate",
        "C": "XOR gate",
        "D": "NOR gate"
      },
      "correctAnswer": "C",
      "explanation": "An XOR (Exclusive OR) gate outputs 1 only when the inputs are different (one is 0 and the other is 1)."
    },
    {
      "question": "What is the primary function of a register in digital electronics?",
      "options": {
        "A": "To store multiple bits of data",
        "B": "To add binary numbers",
        "C": "To invert input signals",
        "D": "To perform logical operations"
      },
      "correctAnswer": "A",
      "explanation": "A register is used to store multiple bits of data in digital circuits."
    },
    {
      "question": "What is the output of a NAND gate when both inputs are 1?",
      "options": {
        "A": "0",
        "B": "1",
        "C": "Undefined",
        "D": "Depends on the inputs"
      },
      "correctAnswer": "A",
      "explanation": "A NAND gate outputs 0 only when both inputs are 1."
    },
    {
      "question": "Which logic gate outputs 0 only when all its inputs are 0?",
      "options": {
        "A": "AND gate",
        "B": "OR gate",
        "C": "NOR gate",
        "D": "NAND gate"
      },
      "correctAnswer": "B",
      "explanation": "An OR gate outputs 0 only when all its inputs are 0."
    },
    {
      "question": "Which logic gate outputs 1 only when all its inputs are 0?",
      "options": {
        "A": "NAND gate",
        "B": "NOR gate",
        "C": "AND gate",
        "D": "OR gate"
      },
      "correctAnswer": "B",
      "explanation": "A NOR gate outputs 1 only when all its inputs are 0."
    },
    {
      "question": "What is the decimal equivalent of the binary number 11001?",
      "options": {
        "A": "21",
        "B": "22",
        "C": "23",
        "D": "25"
      },
      "correctAnswer": "A",
      "explanation": "The binary number 11001 converts to the decimal number 21."
    },
    {
      "question": "What is the primary function of a multiplexer in digital circuits?",
      "options": {
        "A": "To store data",
        "B": "To combine multiple inputs into one output",
        "C": "To add binary numbers",
        "D": "To perform logical operations"
      },
      "correctAnswer": "B",
      "explanation": "A multiplexer selects one of many input signals and forwards it to a single output line."
    },
    {
      "question": "Which logic gate is the inverse of an AND gate?",
      "options": {
        "A": "NOR gate",
        "B": "NAND gate",
        "C": "OR gate",
        "D": "XOR gate"
      },
      "correctAnswer": "B",
      "explanation": "The NAND gate is the inverse of the AND gate; it outputs 0 only when both inputs are 1."
    },
    {
      "question": "Which logic gate outputs 0 when at least one input is 1?",
      "options": {
        "A": "AND gate",
        "B": "OR gate",
        "C": "NAND gate",
        "D": "NOR gate"
      },
      "correctAnswer": "D",
      "explanation": "A NOR gate outputs 0 when at least one input is 1."
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
