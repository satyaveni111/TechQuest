// Array of quiz questions
const quiz =[
    {
      "question": "Which number system has a base 16?",
      "options": {
        "A": "Hexadecimal",
        "B": "Octal",
        "C": "Binary",
        "D": "Decimal"
      },
      "correctAnswer": "A",
      "explanation": "Hexadecimal is a number system with a base 16. We can divide the word HEXA+DECIMAL for better understanding; it means 6 and 10 make 16. It is the easiest way to write and count numbers represented in terms of base 16. There are sixteen distinct digits in the hexadecimal system, it starts from 0, 1,2,3,4,5,6,7,8,9, A, B, C, D, E and end to F. Where A= 10, B=11, C=12, D=13, E=14, F=15. It is usually represented by 4 bits in binary number system by 8421 code."
    },
    {
      "question": "What is a digital-to-analog converter?",
      "options": {
        "A": "It stores digital data on the computer.",
        "B": "It converts alternating current (AC) into direct current (DC).",
        "C": "It converts electrical power into mechanical power.",
        "D": "It takes the digital data from an audio CD and converts it to a useful form."
      },
      "correctAnswer": "D",
      "explanation": "A 'digital-to-analog converter' or DAC refers to an electronic device that converts the digital signals (discrete-time signal) to an analog signal (Continuous-time signal). In other words, we can say that an electronic device converts the signal of 0 and 1 (Binary) into the analog form. For example, the amplitude of the output signal varies according to the input values."
    },
    {
      "question": "The following hexadecimal number (1E.43)16 is equivalent to?",
      "options": {
        "A": "(36.506)8",
        "B": "(36.206)8",
        "C": "(35.506)8",
        "D": "(35.206)8"
      },
      "correctAnswer": "B",
      "explanation": "If you want to convert a hexadecimal number into an octal number, the first thing you need to do is convert a hexadecimal number into binary form by writing the binary equivalent of each digit in the form of 4 bits. Once you write the number into binary form, you need to group the binary equivalent in 3 bits, then for each of the three bits, the respective digit is written."
    },
    {
      "question": "How many entries will be in the truth table of a 4-input NAND gate?",
      "options": {
        "A": "6",
        "B": "8",
        "C": "32",
        "D": "16"
      },
      "correctAnswer": "D",
      "explanation": "A NAND gate is a universal logic gate that performs the negation (NOT) of an AND logic operation in digital circuits. As we know, Y = 2^n where n is the number of inputs."
    },
    {
      "question": "How many bits are needed to store one BCD digit?",
      "options": {
        "A": "2 bits",
        "B": "4 bits",
        "C": "3 bits",
        "D": "1 bit"
      },
      "correctAnswer": "B",
      "explanation": "BCD stands for Binary Coded Decimal. It is a type of binary encoding where each decimal digit is represented by a fixed number of bits, usually 4. It is also called 8421 code to represent the maximum number 15. BCD can encode only from 0-9. For example, Decimal number 456, its equivalent BCD code is 0100 0101 0110."
    },
    {
      "question": "Convert (312)8 into decimal?",
      "options": {
        "A": "(201)10",
        "B": "(202)10",
        "C": "(203)10",
        "D": "(204)10"
      },
      "correctAnswer": "B",
      "explanation": "Octal to decimal conversion is usually obtained by multiplying 8 to the power of the base along with the value at the index position. (312)8 = 3 * 8^2 + 1 * 8^1 + 2 * 8^0 = 192 + 8 + 2 = (202)10."
    },
    {
      "question": "Which semiconductor device is not a current triggering device?",
      "options": {
        "A": "TRIAC",
        "B": "MOSFET",
        "C": "GTO",
        "D": "Thyristor"
      },
      "correctAnswer": "B",
      "explanation": "MOSFET stands for Metal Oxide Semiconductor Field Effect Transistor. It is a semiconductor device that is extensively used for switching and amplifying the signals in digital devices. The MOSFET is the main part of any integrated circuit and can be designed in a single chip because of its small size. It is a four-terminal device: source (S), gate (G), drain (D), and body (B)."
    },
    {
      "question": "Which of these sets of logic gates are known as universal gates?",
      "options": {
        "A": "XOR, NAND, OR",
        "B": "OR, NOT, XOR",
        "C": "NOR, NAND, XNOR",
        "D": "NOR, NAND"
      },
      "correctAnswer": "D",
      "explanation": "NAND or NOR gates are used to design all other logic gates, so they are termed universal gates."
    },
    {
      "question": "What is the addition of the binary number 101001 + 010011?",
      "options": {
        "A": "010100",
        "B": "111100",
        "C": "000111",
        "D": "101110"
      },
      "correctAnswer": "B",
      "explanation": "To add binary numbers, you need to follow binary addition rules: 0 + 1 = 1, 1 + 0 = 1, 0 + 0 = 0, and 1 + 1 = 0 (with carry 1). 101001 + 010011 = 111100."
    },
    {
      "question": "What is the binary subtraction of 101001 - 010110?",
      "options": {
        "A": "010011",
        "B": "100110",
        "C": "011001",
        "D": "010010"
      },
      "correctAnswer": "A",
      "explanation": "To subtract binary numbers, you need to follow binary subtraction rules: 1 - 0 = 1, 0 - 1 = 1 (with borrow 1), 0 - 0 = 0, and 1 - 1 = 0. 101001 - 010110 = 010011."
    },
    {
      "question": "In the toggle mode, a JK flip-flop has?",
      "options": {
        "A": "J = 0, K = 1",
        "B": "J = 1, K = 1",
        "C": "J = 0, K = 0",
        "D": "J = 1, K = 0"
      },
      "correctAnswer": "B",
      "explanation": "Toggling means switching between two states, where the output changes to its complement on applying a clock signal. Both J and K should be 1 for toggle in JK flip-flop."
    },
    {
      "question": "A classification of integrated circuits with complexities of 30 to 300 equivalent gates on a single chip is known as?",
      "options": {
        "A": "VLSI",
        "B": "SSI",
        "C": "LSI",
        "D": "MSI"
      },
      "correctAnswer": "D",
      "explanation": "The terminologies like MSI, SSI, LSI, and VLSI came out of the complexity of integrated circuits, which refers to the number of gates fabricated on a single chip. MSI (Medium Scale Integration) = 30 - 300 gates/chip."
    },
    {
      "question": "What is the binary multiplication of 10100 * 01011?",
      "options": {
        "A": "011011000",
        "B": "011001100",
        "C": "011011100",
        "D": "011100011"
      },
      "correctAnswer": "C",
      "explanation": "Binary multiplication follows rules similar to decimal multiplication but based on binary values."
    },
    {
      "question": "DeMorgan's Law states that?",
      "options": {
        "A": "(A+B)' = A'*B",
        "B": "(AB)' = A' + B'",
        "C": "(AB)' = A' + B",
        "D": "(AB)' = A + B"
      },
      "correctAnswer": "B",
      "explanation": "DeMorgan's theorems give equivalency between logic gates, and there are two forms: (AB)' = A' + B' and (A+B)' = A'B'."
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
