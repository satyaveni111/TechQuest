// Array of quiz questions
const quiz =
[
    {
      "question": "In a common-emitter amplifier, if the collector resistor is increased, what happens to the voltage gain?",
      "options": {
        "A": "Voltage gain increases",
        "B": "Voltage gain decreases",
        "C": "Voltage gain stays the same",
        "D": "The amplifier stops working"
      },
      "correctAnswer": "A",
      "explanation": "The voltage gain of a common-emitter amplifier is approximately the ratio of the collector resistor (Rc) to the emitter resistor (Re). When Rc is increased, the voltage gain increases, assuming the emitter resistor (Re) stays the same."
    },
    {
      "question": "In an operational amplifier (op-amp) integrator circuit, what is the relationship between the input voltage and the output voltage?",
      "options": {
        "A": "The output voltage is the derivative of the input voltage",
        "B": "The output voltage is the integral of the input voltage",
        "C": "The output voltage is equal to the input voltage",
        "D": "The output voltage is in phase with the input voltage"
      },
      "correctAnswer": "B",
      "explanation": "In an op-amp integrator circuit, the output voltage is the integral of the input voltage with respect to time. The integrator uses a capacitor in the feedback loop to perform this operation."
    },
    {
      "question": "What is the main function of a transistor in an amplifier circuit?",
      "options": {
        "A": "To block DC signals",
        "B": "To convert AC to DC",
        "C": "To amplify the input signal",
        "D": "To store energy"
      },
      "correctAnswer": "C",
      "explanation": "In an amplifier circuit, a transistor is used to amplify the input signal, increasing its magnitude while maintaining the same waveform. This is essential in audio and RF amplification."
    },
    {
      "question": "In a phase-shift oscillator, how many RC sections are typically used to achieve a 180° phase shift?",
      "options": {
        "A": "One RC section",
        "B": "Two RC sections",
        "C": "Three RC sections",
        "D": "Four RC sections"
      },
      "correctAnswer": "C",
      "explanation": "A phase-shift oscillator typically uses three RC sections, each contributing a 60° phase shift, to achieve a total of 180° phase shift. The additional 180° phase shift is provided by the amplifier stage."
    },
    {
      "question": "In a differential amplifier, what is the main purpose of the common-mode rejection ratio (CMRR)?",
      "options": {
        "A": "To amplify both input signals equally",
        "B": "To reduce the effect of noise and interference",
        "C": "To decrease the gain of the circuit",
        "D": "To increase the input impedance"
      },
      "correctAnswer": "B",
      "explanation": "The common-mode rejection ratio (CMRR) of a differential amplifier quantifies how well the amplifier rejects common-mode signals (those that appear on both inputs). A higher CMRR indicates better rejection of noise and interference."
    },
    {
      "question": "In a low-pass filter, what happens to the output voltage as the frequency increases?",
      "options": {
        "A": "It increases",
        "B": "It decreases",
        "C": "It stays the same",
        "D": "It becomes zero"
      },
      "correctAnswer": "B",
      "explanation": "In a low-pass filter, as the frequency of the input signal increases, the output voltage decreases. The filter allows low-frequency signals to pass through, while attenuating higher frequencies."
    },
    {
      "question": "Which of the following components is typically used in a high-pass filter?",
      "options": {
        "A": "Resistor and inductor in series",
        "B": "Resistor and capacitor in series",
        "C": "Inductor and capacitor in parallel",
        "D": "Resistor and diode in parallel"
      },
      "correctAnswer": "B",
      "explanation": "A high-pass filter typically consists of a resistor and capacitor in series. The capacitor blocks low-frequency signals and passes high-frequency signals through the circuit."
    },
    {
      "question": "In a tuned amplifier circuit, what is the effect of changing the resonant frequency (f₀)?",
      "options": {
        "A": "It changes the bandwidth of the circuit",
        "B": "It increases the gain at the resonant frequency",
        "C": "It decreases the quality factor (Q) of the circuit",
        "D": "It decreases the frequency response"
      },
      "correctAnswer": "B",
      "explanation": "In a tuned amplifier, the resonant frequency (f₀) determines the frequency at which the amplifier operates with maximum gain. Changing the resonant frequency affects the circuit’s response and gain at that frequency."
    },
    {
      "question": "What is the primary characteristic of an active filter compared to a passive filter?",
      "options": {
        "A": "Active filters use only resistors and capacitors",
        "B": "Active filters require an external power supply",
        "C": "Active filters cannot amplify signals",
        "D": "Active filters are used only for high frequencies"
      },
      "correctAnswer": "B",
      "explanation": "Active filters use active components like op-amps or transistors in addition to resistors and capacitors. They require an external power supply and can provide amplification, which is not possible with passive filters that use only passive components."
    },
    {
      "question": "In a Schmitt trigger circuit, what is the effect of hysteresis on the output?",
      "options": {
        "A": "It reduces the input voltage range required for switching",
        "B": "It makes the output more sensitive to small changes in input",
        "C": "It causes the output to oscillate between high and low states",
        "D": "It introduces a delay in the output response"
      },
      "correctAnswer": "A",
      "explanation": "Hysteresis in a Schmitt trigger provides a threshold for input voltage that must be exceeded for the output to switch states. It prevents noise from causing false triggering, by widening the input range required to change the output state."
    },
    {
      "question": "In a transistor amplifier, what happens if the emitter resistor is bypassed with a capacitor?",
      "options": {
        "A": "The voltage gain decreases",
        "B": "The biasing stability improves",
        "C": "The AC voltage gain increases",
        "D": "The input impedance increases"
      },
      "correctAnswer": "C",
      "explanation": "By bypassing the emitter resistor with a capacitor, the AC signal sees a lower impedance path (effectively bypassing the emitter resistor at high frequencies). This increases the AC voltage gain because the emitter resistor, which reduces gain, is now not in the path of the AC signal."
    },
    {
      "question": "What is the function of a coupling capacitor in an amplifier circuit?",
      "options": {
        "A": "To increase the bandwidth of the amplifier",
        "B": "To block DC signals while allowing AC signals to pass",
        "C": "To stabilize the operating point of the amplifier",
        "D": "To provide feedback to the amplifier"
      },
      "correctAnswer": "B",
      "explanation": "A coupling capacitor is used to connect stages of an amplifier while blocking DC components and allowing the AC signal to pass through. This is important to prevent DC bias levels from affecting the subsequent stages in the amplifier."
    },
    {
      "question": "In a feedback amplifier, negative feedback helps to:",
      "options": {
        "A": "Increase the bandwidth and linearity",
        "B": "Decrease the input impedance",
        "C": "Increase the output impedance",
        "D": "Reduce the stability of the amplifier"
      },
      "correctAnswer": "A",
      "explanation": "Negative feedback in an amplifier reduces distortion, increases linearity, and extends the bandwidth. It stabilizes the gain and makes the amplifier less sensitive to changes in temperature or supply voltage. This is one of the main advantages of using negative feedback in amplifiers."
    },
    {
      "question": "For a differential amplifier, the common-mode rejection ratio (CMRR) is defined as the ratio of:",
      "options": {
        "A": "Differential gain to common-mode gain",
        "B": "Common-mode gain to differential gain",
        "C": "Input impedance to output impedance",
        "D": "Differential input voltage to output voltage"
      },
      "correctAnswer": "A",
      "explanation": "The Common-Mode Rejection Ratio (CMRR) is the ratio of the differential gain (the amplifier's ability to amplify the difference between two input signals) to the common-mode gain (the amplifier's response to identical signals at both inputs). A high CMRR indicates the amplifier is better at rejecting common-mode signals (such as noise) and amplifying only the differential signal."
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
