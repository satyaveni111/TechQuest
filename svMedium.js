// Array of quiz questions
const quiz = 
    [
        {
          "Question": "What is the primary function of a multiplexer (MUX)?",
          "options": {
            "A": "To convert analog signals to digital signals",
            "B": "To select one input from multiple inputs and forward it to the output",
            "C": "To store data temporarily",
            "D": "To perform arithmetic operations"
          },
          "correctAnswer": "B",
          "Explanation": "A multiplexer (MUX) selects one of several input signals and forwards the chosen input to a single output line."
        },
        {
          "Question": "In digital electronics, what is the purpose of a flip-flop?",
          "options": {
            "A": "To perform logical operations",
            "B": "To act as a binary counter",
            "C": "To store one bit of data",
            "D": "To amplify signals"
          },
          "correctAnswer": "C",
          "Explanation": "A flip-flop is a bistable circuit that can store one bit of data, maintaining a binary state until changed by an input signal."
        },
        {
          "Question": "What is the binary representation of the decimal number 13?",
          "options": {
            "A": "1010",
            "B": "1101",
            "C": "1110",
            "D": "1001"
          },
          "correctAnswer": "B",
          "Explanation": "The binary representation of the decimal number 13 is 1101."
        },
        {
          "Question": "Which of the following logic gates is known as a universal gate?",
          "options": {
            "A": "AND gate",
            "B": "OR gate",
            "C": "NOT gate",
            "D": "NAND gate"
          },
          "correctAnswer": "D",
          "Explanation": "The NAND gate is considered a universal gate because it can be used to implement any Boolean function."
        },
        {
          "Question": "In a Karnaugh map, what is the minimum number of cells that can form a valid group?",
          "options": {
            "A": "1",
            "B": "2",
            "C": "3",
            "D": "4"
          },
          "correctAnswer": "A",
          "Explanation": "In a Karnaugh map, a valid group can be a single cell representing a single minterm."
        },
        {
          "Question": "What is the function of a decoder in digital electronics?",
          "options": {
            "A": "To encode data into a different format",
            "B": "To select one input from multiple inputs",
            "C": "To convert coded data into a familiar or useful form",
            "D": "To perform arithmetic operations"
          },
          "correctAnswer": "C",
          "Explanation": "A decoder converts coded input data into a more understandable or useful form, such as binary to decimal."
        },
        {
          "Question": "Which of the following is a characteristic of a synchronous counter?",
          "options": {
            "A": "All flip-flops are clocked simultaneously",
            "B": "Flip-flops are clocked at different times",
            "C": "It uses only JK flip-flops",
            "D": "It cannot be cascaded"
          },
          "correctAnswer": "A",
          "Explanation": "In a synchronous counter, all flip-flops are clocked simultaneously with a common clock signal, ensuring synchronized state changes."
        },
        {
          "Question": "What is the hexadecimal representation of the binary number 10101100?",
          "options": {
            "A": "5C",
            "B": "9A",
            "C": "AC",
            "D": "B4"
          },
          "correctAnswer": "C",
          "Explanation": "The binary number 10101100 converts to hexadecimal AC."
        },
        {
          "Question": "Which component is used to implement a full adder in digital circuits?",
          "options": {
            "A": "Multiplexer",
            "B": "Decoder",
            "C": "Half adder",
            "D": "Flip-flop"
          },
          "correctAnswer": "C",
          "Explanation": "A full adder can be implemented using two half adders and an OR gate to handle the carry bit."
        },
        {
          "Question": "In Boolean algebra, what does the expression A + A' equal?",
          "options": {
            "A": "0",
            "B": "1",
            "C": "A",
            "D": "A'"
          },
          "correctAnswer": "B",
          "Explanation": "In Boolean algebra, the expression A + A' (A OR NOT A) always equals 1, as one of the terms will always be true."
        },
        {
          "Question": "What is the primary purpose of a D flip-flop in digital circuits?",
          "options": {
            "A": "To perform arithmetic operations",
            "B": "To act as a memory element",
            "C": "To multiplex signals",
            "D": "To decode instructions"
          },
          "correctAnswer": "B",
          "Explanation": "A D flip-flop is used as a memory element to store a single bit of data, with the output following the input on the triggering edge of the clock signal."
        },
        {
          "Question": "Which of the following is an example of a combinational logic circuit?",
          "options": {
            "A": "Register",
            "B": "Counter",
            "C": "Multiplexer",
            "D": "Flip-flop"
          },
          "correctAnswer": "C",
          "Explanation": "A multiplexer is a combinational logic circuit that selects one of several input signals and forwards it to the output."
        },
        {
          "Question": "In a digital circuit, what does the term 'setup time' refer to?",
          "options": {
            "A": "The minimum time required for the input signal to stabilize before the clock edge",
            "B": "The time it takes for the clock signal to stabilize",
            "C": "The time required for the output signal to stabilize after the clock edge",
            "D": "The total time taken for a full clock cycle"
          },
          "correctAnswer": "A",
          "Explanation": "Setup time is the minimum time required for the input signal to be stable before the clock edge to ensure correct data capture."
        },
        {
          "Question": "Which of the following devices is used for frequency division in digital circuits?",
          "options": {
            "A": "Encoder",
            "B": "Multiplexer",
            "C": "Flip-flop",
            "D": "Decoder"
          },
          "correctAnswer": "C",
          "Explanation": "Flip-flops can be used to divide the frequency of an input clock signal by producing an output signal at half the frequency."
        },
        {
          "Question": "What is the primary function of an ALU (Arithmetic Logic Unit) in digital systems?",
          "options": {
            "A": "To store data",
            "B": "To perform arithmetic and logical operations",
            "C": "To control data flow",
            "D": "To manage input/output operations"
          },
          "correctAnswer": "B",
          "Explanation": "The ALU is responsible for performing arithmetic calculations and logical operations in digital systems."
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
document.getElementById('question').textContent = currentQuestion.Question;
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
