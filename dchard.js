// Array of quiz questions
const quiz =[
    {
      "question": "In a communication system, the power spectral density (PSD) of a white noise is constant. The noise bandwidth is:",
      "options": {
        "A": "Infinite",
        "B": "Zero",
        "C": "Equal to the bandwidth of the signal",
        "D": "Finite and determined by the system characteristics"
      },
      "correct_answer": "A",
      "explanation": "White noise has a constant power spectral density (PSD) over all frequencies. The bandwidth of white noise is theoretically infinite because it contains components at all frequencies. In practical systems, noise is often filtered, but in an idealized sense, the bandwidth of white noise is infinite."
    },
    {
      "question": "Which of the following is the main advantage of using Frequency Modulation (FM) over Amplitude Modulation (AM) for radio broadcasting?",
      "options": {
        "A": "Larger bandwidth",
        "B": "Better noise immunity",
        "C": "Higher power efficiency",
        "D": "Simpler transmitter design"
      },
      "correct_answer": "B",
      "explanation": "FM is less susceptible to amplitude noise compared to AM because FM encodes information in the frequency variations rather than amplitude. Therefore, it provides better noise immunity, which is especially important in radio broadcasting where interference can occur."
    },
    {
      "question": "In a Binary Phase Shift Keying (BPSK) system, if the transmitted signal is Acos(2πfct) for bit 1 and − cos(2πfct) for bit 0, what is the phase shift between the two symbols?",
      "options": {
        "A": "0°",
        "B": "90°",
        "C": "180°",
        "D": "270°"
      },
      "correct_answer": "C",
      "explanation": "In BPSK, the two symbols are represented by a phase shift of 180°. The transmitted signal for bit 1 is Acos(2πfct), and for bit 0, it is −Acos(2πfct), which is effectively a 180° phase shift."
    },
    {
      "question": "What is the bandwidth required for an FM signal with a frequency range of 10 kHz, if the modulation index is 5?",
      "options": {
        "A": "50 kHz",
        "B": "100 kHz",
        "C": "150 kHz",
        "D": "200 kHz"
      },
      "correct_answer": "B",
      "explanation": "The bandwidth of an FM signal can be approximated using Carson’s Rule, which states that the bandwidth is approximately equal to 2 × (f_m + Δf), where f_m is the message bandwidth and Δf is the frequency deviation. With a modulation index of 5 and a message bandwidth of 10 kHz, the bandwidth is approximately 100 kHz."
    },
    {
      "question": "The ideal signal-to-noise ratio (SNR) required for a digital communication system to achieve a bit error rate (BER) of 10−5 in the presence of Gaussian noise is approximately:",
      "options": {
        "A": "10 dB",
        "B": "20 dB",
        "C": "30 dB",
        "D": "40 dB"
      },
      "correct_answer": "B",
      "explanation": "To achieve a bit error rate (BER) of 10−5 in a digital communication system with Gaussian noise, the required SNR is typically around 20 dB, depending on the modulation scheme and other system parameters."
    },
    {
      "question": "For a communication system using Quadrature Amplitude Modulation (QAM), how many bits are represented by each symbol in 16-QAM?",
      "options": {
        "A": "1 bit",
        "B": "2 bits",
        "C": "4 bits",
        "D": "16 bits"
      },
      "correct_answer": "C",
      "explanation": "In 16-QAM, there are 16 different symbols, and since 16 = 2^4, each symbol represents 4 bits of information."
    }
  ]
  [
    {
      "question": "In the context of digital communication, which modulation scheme is commonly used for bandwidth-efficient transmission?",
      "options": {
        "A": "Amplitude Modulation (AM)",
        "B": "Frequency Modulation (FM)",
        "C": "Quadrature Amplitude Modulation (QAM)",
        "D": "Phase Modulation (PM)"
      },
      "correct_answer": "C",
      "explanation": "QAM is a bandwidth-efficient modulation technique used in digital communication. It allows transmission of multiple bits per symbol by varying both the amplitude and phase of the carrier signal, making it suitable for high-speed communication."
    },
    {
      "question": "What is the bandwidth efficiency of a communication system if 4-QAM is used and the symbol rate is 1000 symbols per second?",
      "options": {
        "A": "1 bps/Hz",
        "B": "2 bps/Hz",
        "C": "4 bps/Hz",
        "D": "8 bps/Hz"
      },
      "correct_answer": "B",
      "explanation": "In 4-QAM, each symbol represents 2 bits. The bandwidth efficiency is given by the ratio of bits per symbol to the bandwidth required. Since each symbol represents 2 bits and the symbol rate is 1000 symbols per second, the bandwidth efficiency is 2 bps/Hz."
    },
    {
      "question": "In a communication system, if the signal power is 10 mW and the noise power is 1 μW, what is the signal-to-noise ratio (SNR) in dB?",
      "options": {
        "A": "10 dB",
        "B": "20 dB",
        "C": "30 dB",
        "D": "40 dB"
      },
      "correct_answer": "B",
      "explanation": "The signal-to-noise ratio (SNR) in dB is given by the formula: SNR(dB) = 10log10(Psignal/Pnoise). Substituting signal = 10 mW = 10^1 mW and Pnoise = 1 μW = 10^-6 W: SNR (dB) = 10 log10(10^-6 / 10) = 10 log10(10^7) = 10 × 7 = 70 dB. Therefore, the SNR is approximately 20 dB."
    },
    {
      "question": "Which of the following is the primary reason for using a pilot signal in a communication system?",
      "options": {
        "A": "To enhance the data rate",
        "B": "To help synchronize the receiver",
        "C": "To improve signal quality",
        "D": "To reduce the bandwidth"
      },
      "correct_answer": "B",
      "explanation": "A pilot signal is a known signal transmitted along with the information-bearing signal, and it is primarily used for synchronization purposes. It helps the receiver to estimate parameters like frequency, phase, and timing, enabling proper signal recovery and demodulation."
    },
    {
      "question": "In a Binary Phase Shift Keying (BPSK) system, if the signal power is 1 W and the noise power is 0.01 W, what is the signal-to-noise ratio (SNR) in dB?",
      "options": {
        "A": "10 dB",
        "B": "20 dB",
        "C": "30 dB",
        "D": "40 dB"
      },
      "correct_answer": "B",
      "explanation": "The SNR in dB is given by the formula: SNR (dB) = 10 log10(Psignal/Pnoise). Substituting Psignal = 1 W and Pnoise = 0.01 W: SNR (dB) = 10 log10(1 / 0.01) = 10 log10(100) = 10 × 2 = 20 dB."
    },
    {
      "question": "In an ideal Amplitude Modulation (AM) system, if the carrier frequency is 1 MHz and the message bandwidth is 50 kHz, what is the total bandwidth required for the AM signal?",
      "options": {
        "A": "50 kHz",
        "B": "100 kHz",
        "C": "150 kHz",
        "D": "200 kHz"
      },
      "correct_answer": "B",
      "explanation": "In an AM system, the total bandwidth required is twice the bandwidth of the message signal. So, if the message bandwidth is 50 kHz, the required bandwidth will be 2 × 50 kHz = 100 kHz."
    },
    {
      "question": "In Frequency Modulation (FM), which of the following factors directly affects the frequency deviation of the signal?",
      "options": {
        "A": "Message signal frequency",
        "B": "Carrier frequency",
        "C": "Modulation index",
        "D": "Signal power"
      },
      "correct_answer": "C",
      "explanation": "The frequency deviation in FM is directly related to the modulation index, which is the ratio of the frequency deviation to the message signal frequency. A higher modulation index results in a larger frequency deviation."
    }
  ]
  [
    {
      "question": "In a digital communication system using 16-QAM, if the signal-to-noise ratio (SNR) is 30 dB, what is the bit error rate (BER) approximation for the system?",
      "options": {
        "A": "10^-6",
        "B": "10^-3",
        "C": "10^-2",
        "D": "10^-1"
      },
      "correct_answer": "B",
      "explanation": "For 16-QAM, the bit error rate (BER) approximation can be expressed as e ≈ (3/2) * (1 - 1/√M) * exp(-SNR / 2 * (M - 1)), where M is the modulation order. At 30 dB SNR, the BER is approximately 10^-3 for 16-QAM, though it can vary based on channel conditions."
    },
    {
      "question": "Which of the following is true for Quadrature Phase Shift Keying (QPSK)?",
      "options": {
        "A": "It can transmit 2 bits per symbol",
        "B": "It uses two carriers with a 90° phase difference",
        "C": "It requires a bandwidth twice that of Binary Phase Shift Keying (BPSK)",
        "D": "It modulates only the phase of the carrier signal"
      },
      "correct_answer": "A",
      "explanation": "In QPSK, each symbol represents 2 bits, which is achieved by using 4 different phase shifts (45°, 135°, 225°, and 315°). This allows the system to transmit twice the data rate of BPSK while using the same bandwidth."
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
