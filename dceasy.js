// Array of quiz questions
const quiz = [
    {
      "question": "In a baseband transmission, the signal is:",
      "options": {
        "A": "Frequency modulated",
        "B": "Amplitude modulated",
        "C": "Transmitted at the original frequency range",
        "D": "Converted to high frequency before transmission"
      },
      "correct_answer": "C",
      "explanation": "In baseband transmission, the signal is transmitted at its original frequency range without modulation to higher frequencies. The signal stays in its original form, typically used in wired communication systems."
    },
    {
      "question": "What is the purpose of the carrier signal in amplitude modulation (AM)?",
      "options": {
        "A": "To increase the frequency of the signal",
        "B": "To reduce the bandwidth of the signal",
        "C": "To transmit the signal over long distances",
        "D": "To convert the baseband signal into a higher frequency"
      },
      "correct_answer": "D",
      "explanation": "In amplitude modulation, the carrier signal is used to shift the baseband signal to a higher frequency, enabling the transmission of the signal over long distances through radio waves."
    },
    {
      "question": "Which of the following is the main advantage of frequency modulation (FM) over amplitude modulation (AM)?",
      "options": {
        "A": "Greater power efficiency",
        "B": "Better noise immunity",
        "C": "Simpler transmitter design",
        "D": "Lower bandwidth requirement"
      },
      "correct_answer": "B",
      "explanation": "FM offers better immunity to noise and interference compared to AM because noise typically affects the amplitude, while FM is based on frequency variations, making it more robust in noisy environments."
    }
  ]
  [
    {
      "question": "Which modulation scheme is used in television broadcasting for transmitting video signals?",
      "options": {
        "A": "Frequency Modulation (FM)",
        "B": "Phase Modulation (PM)",
        "C": "Amplitude Modulation (AM)",
        "D": "Quadrature Amplitude Modulation (QAM)"
      },
      "correct_answer": "A",
      "explanation": "FM is used for broadcasting television audio signals because it offers better noise immunity, while AM is often used for video signals. FM is particularly useful for transmitting high-quality audio in television broadcasting."
    },
    {
      "question": "What is the bandwidth required for an AM signal with a message bandwidth of 10 kHz?",
      "options": {
        "A": "5 kHz",
        "B": "10 kHz",
        "C": "20 kHz",
        "D": "30 kHz"
      },
      "correct_answer": "C",
      "explanation": "For an AM signal, the total bandwidth is twice the message bandwidth. So, if the message bandwidth is 10 kHz, the required bandwidth will be 2×10 kHz = 20 kHz."
    },
    {
      "question": "In a communication system, what is the function of the demodulator?",
      "options": {
        "A": "To increase the signal strength",
        "B": "To convert the signal from analog to digital",
        "C": "To extract the original information from the modulated carrier signal",
        "D": "To reduce the noise in the signal"
      },
      "correct_answer": "C",
      "explanation": "A demodulator extracts the original baseband signal from the modulated carrier signal. It essentially reverses the modulation process, recovering the transmitted information."
    }
  ]
  [
    {
      "question": "Which of the following is true for Frequency Division Multiplexing (FDM)?",
      "options": {
        "A": "Multiple signals are combined in time.",
        "B": "Each signal is assigned a separate frequency band.",
        "C": "It requires a single carrier frequency.",
        "D": "It uses digital signaling for communication."
      },
      "correct_answer": "B",
      "explanation": "In Frequency Division Multiplexing (FDM), multiple signals are transmitted simultaneously over the same channel but each signal is allocated a different frequency band, thus preventing interference between them."
    },
    {
      "question": "In the context of digital communication, what does the term 'bit rate' refer to?",
      "options": {
        "A": "The number of bits per unit time transmitted over a channel",
        "B": "The signal power in the channel",
        "C": "The bandwidth of the communication channel",
        "D": "The maximum data rate achievable in the system"
      },
      "correct_answer": "A",
      "explanation": "The bit rate refers to the number of bits that can be transmitted per second (bps) over a communication channel. It indicates the data transmission speed of a digital communication system."
    },
    {
      "question": "Which modulation technique is commonly used for digital data transmission over telephone lines?",
      "options": {
        "A": "Amplitude Modulation (AM)",
        "B": "Frequency Modulation (FM)",
        "C": "Phase Modulation (PM)",
        "D": "Quadrature Amplitude Modulation (QAM)"
      },
      "correct_answer": "D",
      "explanation": "Quadrature Amplitude Modulation (QAM) is widely used in digital communication systems, including over telephone lines (e.g., DSL), because it efficiently encodes multiple bits per symbol, providing higher data rates."
    }
  ]
  [
    {
      "question": "What is the primary function of a low-pass filter in a communication system?",
      "options": {
        "A": "To remove high-frequency noise from the signal",
        "B": "To combine multiple signals into one",
        "C": "To modulate the carrier signal",
        "D": "To amplify the signal"
      },
      "correct_answer": "A",
      "explanation": "A low-pass filter allows low-frequency signals to pass while attenuating high-frequency components. It is commonly used to remove unwanted high-frequency noise in communication systems, ensuring the signal quality."
    },
    {
      "question": "What is the main advantage of Frequency Modulation (FM) over Amplitude Modulation (AM)?",
      "options": {
        "A": "FM has a constant amplitude",
        "B": "FM signals occupy less bandwidth",
        "C": "FM is less affected by noise",
        "D": "FM signals are easier to generate"
      },
      "correct_answer": "C",
      "explanation": "FM is less susceptible to noise than AM because it modulates the frequency, not the amplitude, of the carrier. Noise generally affects the amplitude, so AM signals are more prone to noise interference, whereas FM signals are more robust."
    },
    {
      "question": "In a communication system, what does the term 'bandwidth' refer to?",
      "options": {
        "A": "The total power of the transmitted signal",
        "B": "The range of frequencies over which the system operates",
        "C": "The signal's amplitude variation",
        "D": "The modulation index used in the system"
      },
      "correct_answer": "B",
      "explanation": "Bandwidth refers to the range of frequencies that a communication channel can transmit or the range of frequencies occupied by a signal. It is an important factor in determining the data rate of a communication system."
    }
  ]
  [
    {
      "question": "In Amplitude Modulation (AM), the carrier frequency is 1 MHz, and the modulating signal has a frequency of 10 kHz. What is the total bandwidth required for this AM signal?",
      "options": {
        "A": "10 kHz",
        "B": "20 kHz",
        "C": "1 MHz",
        "D": "2 MHz"
      },
      "correct_answer": "B",
      "explanation": "In AM, the total bandwidth required is twice the frequency of the modulating signal. For a modulating signal frequency of 10 kHz, the required bandwidth will be 2×10kHz=20kHz."
    },
    {
      "question": "Which of the following is true for Binary Phase Shift Keying (BPSK)?",
      "options": {
        "A": "It uses three distinct phases",
        "B": "It encodes one bit per symbol",
        "C": "It requires a high bandwidth efficiency",
        "D": "It modulates the amplitude of the carrier"
      },
      "correct_answer": "B",
      "explanation": "BPSK is a binary modulation technique that uses two distinct phases (0° and 180°) to represent two binary symbols (0 and 1). It encodes one bit per symbol, making it a simple and energy-efficient modulation scheme."
    },
    {
      "question": "In a digital communication system, the signal-to-noise ratio (SNR) is used to measure:",
      "options": {
        "A": "The power of the signal",
        "B": "The ratio of signal power to noise power",
        "C": "The bandwidth of the signal",
        "D": "The modulation scheme used"
      },
      "correct_answer": "B",
      "explanation": "The signal-to-noise ratio (SNR) measures the strength of the signal relative to the noise. It is expressed as the ratio of signal power to noise power, and it is a key parameter in determining the quality of communication systems. A higher SNR indicates a better quality signal."
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
