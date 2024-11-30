// Array of quiz questions
const quiz =[
    {
      "question": "Which of the following modulation schemes is used in digital communication systems to represent both amplitude and phase variations of the carrier signal?",
      "options": {
        "A": "Amplitude Modulation (AM)",
        "B": "Frequency Modulation (FM)",
        "C": "Phase Modulation (PM)",
        "D": "Quadrature Amplitude Modulation (QAM)"
      },
      "correct_answer": "D",
      "explanation": "QAM is a modulation scheme that combines both amplitude and phase variations of the carrier signal. It is widely used in digital communication systems like cable modems and Wi-Fi because it allows the transmission of multiple bits per symbol."
    },
    {
      "question": "For an ideal Amplitude Modulated (AM) signal, what is the total bandwidth required if the message signal has a bandwidth of 15 kHz?",
      "options": {
        "A": "15 kHz",
        "B": "30 kHz",
        "C": "45 kHz",
        "D": "60 kHz"
      },
      "correct_answer": "B",
      "explanation": "The total bandwidth required for an AM signal is twice the bandwidth of the message signal. If the message bandwidth is 15 kHz, the total AM bandwidth will be 2×15kHz=30kHz."
    },
    {
      "question": "What is the primary disadvantage of Frequency Modulation (FM) compared to Amplitude Modulation (AM)?",
      "options": {
        "A": "Requires less bandwidth",
        "B": "More complex transmitter and receiver design",
        "C": "Poor noise immunity",
        "D": "Less power consumption"
      },
      "correct_answer": "B",
      "explanation": "FM requires more complex transmitter and receiver designs due to the need to handle frequency variations. In contrast, AM is simpler to implement. However, FM offers better noise immunity than AM."
    },
    {
      "question": "In a Communication System, what is the effect of increasing the signal-to-noise ratio (SNR)?",
      "options": {
        "A": "Reduced data rate",
        "B": "Increased data rate",
        "C": "Reduced bandwidth",
        "D": "Higher probability of error"
      },
      "correct_answer": "B",
      "explanation": "Increasing the SNR improves the quality of the signal, which allows for higher data transmission rates. A higher SNR means less noise and distortion, making it possible to transmit data at faster rates with fewer errors."
    },
    {
      "question": "In a baseband transmission system, what is the role of the Nyquist rate?",
      "options": {
        "A": "To define the bandwidth of the signal",
        "B": "To determine the minimum sampling rate required to avoid aliasing",
        "C": "To calculate the maximum data rate",
        "D": "To filter the signal before transmission"
      },
      "correct_answer": "B",
      "explanation": "The Nyquist rate is the minimum sampling rate required to reconstruct a signal without aliasing. According to the Nyquist-Shannon sampling theorem, the sampling rate must be at least twice the highest frequency component of the signal."
    },
    {
      "question": "Which of the following is the primary characteristic of Orthogonal Frequency Division Multiplexing (OFDM)?",
      "options": {
        "A": "It uses a single high-frequency carrier",
        "B": "It transmits data over multiple frequency channels simultaneously",
        "C": "It requires a large bandwidth for operation",
        "D": "It uses amplitude modulation for signal transmission"
      },
      "correct_answer": "B",
      "explanation": "OFDM is a modulation technique that divides a high-data-rate stream into several lower-rate streams, transmitted over multiple orthogonal frequency channels. It is widely used in broadband communication systems like Wi-Fi, LTE, and digital TV."
    },
    {
      "question": "In Quadrature Amplitude Modulation (QAM), what does the term 'quadrature' refer to?",
      "options": {
        "A": "Two signals are modulated using the same frequency but with a phase difference of 90°",
        "B": "The signal is modulated with both amplitude and frequency variations",
        "C": "Four carriers are used for modulation",
        "D": "The carrier frequency is quadratically modulated"
      },
      "correct_answer": "A",
      "explanation": "In QAM, two signals are modulated using the same carrier frequency but with a phase difference of 90°, known as quadrature. This allows both amplitude and phase to be varied to encode data, resulting in efficient transmission."
    },
    {
      "question": "What is the primary advantage of using a Gaussian Minimum Shift Keying (GMSK) modulation technique?",
      "options": {
        "A": "Higher bandwidth efficiency",
        "B": "Low power consumption",
        "C": "Constant envelope, making it immune to nonlinear distortion",
        "D": "Simpler receiver design"
      },
      "correct_answer": "C",
      "explanation": "GMSK is a constant-envelope modulation technique, meaning that the amplitude of the signal remains constant during transmission. This property makes it less susceptible to nonlinear distortion, which is beneficial in wireless communication."
    }
  ]
  [
    {
      "question": "In a communication system, what does the term 'bandwidth efficiency' refer to?",
      "options": {
        "A": "The amount of bandwidth required for a given data rate",
        "B": "The number of frequencies available for transmission",
        "C": "The data rate divided by the signal power",
        "D": "The ratio of bandwidth to signal power"
      },
      "correct_answer": "A",
      "explanation": "Bandwidth efficiency refers to the amount of data transmitted per unit of bandwidth. It is a measure of how effectively a communication system uses available bandwidth to transmit data. Higher bandwidth efficiency means more data is transmitted with less bandwidth."
    },
    {
      "question": "In a communication system, which modulation technique is most commonly used for transmitting data in satellite communication?",
      "options": {
        "A": "Amplitude Modulation (AM)",
        "B": "Frequency Modulation (FM)",
        "C": "Phase Modulation (PM)",
        "D": "Frequency Division Multiplexing (FDM)"
      },
      "correct_answer": "D",
      "explanation": "In satellite communication, FDM is commonly used because it allows multiple signals to be transmitted simultaneously over different frequency channels, efficiently utilizing the available bandwidth. This technique is essential for handling large volumes of data in satellite communication systems."
    },
    {
      "question": "In a Frequency Modulation (FM) system, the modulation index β is defined as:",
      "options": {
        "A": "= Δf / fm",
        "B": "= Δf / fs",
        "C": "= βfc / fm",
        "D": "= Δf / fc"
      },
      "correct_answer": "A",
      "explanation": "The modulation index β in Frequency Modulation (FM) is defined as the ratio of the frequency deviation Δ to the frequency of the message signal fm. The modulation index determines the bandwidth and the characteristics of the FM signal."
    },
    {
      "question": "For a digital communication system using Binary Phase Shift Keying (BPSK), the minimum bit error rate (BER) occurs when the signal-to-noise ratio (SNR) is:",
      "options": {
        "A": "0 dB",
        "B": "5 dB",
        "C": "10 dB",
        "D": "Infinite"
      },
      "correct_answer": "C",
      "explanation": "For BPSK, the bit error rate (BER) decreases as the signal-to-noise ratio (SNR) increases. The minimum BER for BPSK occurs when the SNR is high enough to achieve reliable communication, and it reaches a near-optimal value around 10 dB. At infinite SNR, the BER would be zero, but practical systems aim for an SNR of about 10 dB to minimize errors."
    },
    {
      "question": "Which of the following modulation techniques is most suitable for a system where both power efficiency and bandwidth efficiency are important?",
      "options": {
        "A": "Amplitude Modulation (AM)",
        "B": "Frequency Modulation (FM)",
        "C": "Quadrature Amplitude Modulation (QAM)",
        "D": "Phase Modulation (PM)"
      },
      "correct_answer": "C",
      "explanation": "QAM combines both amplitude and phase modulation, which allows multiple bits to be transmitted per symbol. It provides a good balance between power efficiency and bandwidth efficiency, making it suitable for modern communication systems like Wi-Fi, LTE, and cable modems."
    },
    {
      "question": "What is the bandwidth required for a signal modulated using 16-QAM if the symbol rate is 5000 symbols per second?",
      "options": {
        "A": "1000 Hz",
        "B": "5000 Hz",
        "C": "10000 Hz",
        "D": "20000 Hz"
      },
      "correct_answer": "C",
      "explanation": "For 16-QAM, the bandwidth requirement is approximately equal to the symbol rate. Since each symbol represents 4 bits, and assuming no pulse shaping, the bandwidth required for 16-QAM is typically the same as the symbol rate. Hence, for a symbol rate of 5000 symbols per second, the bandwidth required is around 10000 Hz, due to the requirement to accommodate the multiple amplitude and phase combinations."
    },
    {
      "question": "In a communication system, the probability of error (Pe) for an M-ary signaling scheme is given by the formula: Pe = Q(√(SNR/M)). For an M-ary system, as the value of M increases, which of the following is true regarding the error probability?",
      "options": {
        "A": "Error probability increases",
        "B": "Error probability decreases",
        "C": "Error probability remains the same",
        "D": "Error probability becomes zero"
      },
      "correct_answer": "A",
      "explanation": "As the value of M increases, the symbols are spaced closer together in the signal constellation, which means that there is less separation between symbols. This leads to a higher likelihood of errors, particularly as noise increases, thus causing the error probability to increase with higher M values in the system."
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
