// Array of quiz questions
const quiz = [
    {
      "question": "What is the Laplace transform of a ramp function r(t) = tu(t)?",
      "options": {
        "A": "1/s^2",
        "B": "1/s",
        "C": "1/s^3",
        "D": "s/(s^2+1)"
      },
      "correct_answer": "A",
      "explanation": "The Laplace transform of the ramp function r(t) = tu(t) is 1/s^2, which can be derived using the standard Laplace transform tables."
    },
    {
      "question": "Which of the following is true about the frequency response of a linear time-invariant (LTI) system?",
      "options": {
        "A": "It depends on the initial conditions of the system",
        "B": "It is determined by the system's impulse response",
        "C": "It is determined by the system's step response",
        "D": "It is the inverse of the system’s transfer function"
      },
      "correct_answer": "B",
      "explanation": "The frequency response of an LTI system is the Fourier transform of the system’s impulse response. It characterizes the system's response to sinusoidal inputs at different frequencies."
    },
    {
      "question": "In a continuous-time system, what does the region of convergence (ROC) in the s-plane correspond to?",
      "options": {
        "A": "The set of values for which the system is stable",
        "B": "The frequencies at which the system resonates",
        "C": "The values of s for which the Laplace transform of the system exists",
        "D": "The locations of the poles in the transfer function"
      },
      "correct_answer": "C",
      "explanation": "The ROC of a system’s Laplace transform indicates the values of s for which the transform converges, determining the stability and behavior of the system."
    },
    {
      "question": "What is the result of the convolution of two signals x(t) and h(t)?",
      "options": {
        "A": "The Laplace transform of the signal",
        "B": "The Fourier transform of the signal",
        "C": "The time-domain output of the system for input x(t) and impulse response h(t)",
        "D": "The inverse Laplace transform of the signal"
      },
      "correct_answer": "C",
      "explanation": "The convolution of x(t) and h(t) gives the output of an LTI system, where x(t) is the input and h(t) is the system’s impulse response."
    },
    {
      "question": "Which of the following is a necessary condition for the stability of a continuous-time LTI system?",
      "options": {
        "A": "All poles of the transfer function must lie in the left half of the s-plane",
        "B": "The system must have at least one zero",
        "C": "The transfer function must be rational",
        "D": "The impulse response must be periodic"
      },
      "correct_answer": "A",
      "explanation": "For a continuous-time LTI system to be stable, all poles of its transfer function must lie in the left half of the s-plane (i.e., they must have negative real parts)."
    },
    {
      "question": "For a discrete-time system, the Z-transform of x[n] = r[n], where r[n] is the unit step function, is:",
      "options": {
        "A": "1/(1 − z^−1)",
        "B": "z/(z − 1)",
        "C": "z/(1 − z^−1)",
        "D": "z/(z + 1)"
      },
      "correct_answer": "A",
      "explanation": "The Z-transform of the unit step function r[n] is 1/(1 − z^−1), which is a standard result derived from the definition of the Z-transform."
    },
    {
      "question": "Which of the following signals is an example of a non-periodic signal?",
      "options": {
        "A": "A sinusoidal signal",
        "B": "A rectangular pulse train",
        "C": "A triangular wave",
        "D": "A step function"
      },
      "correct_answer": "D",
      "explanation": "A step function is a non-periodic signal because it does not repeat over time, whereas sinusoidal signals, rectangular pulse trains, and triangular waves are periodic."
    },
    {
      "question": "The transfer function H(s) = 10/(s^2 + 6s + 25) represents which type of system behavior?",
      "options": {
        "A": "Low-pass filter",
        "B": "High-pass filter",
        "C": "Band-pass filter",
        "D": "Band-stop filter"
      },
      "correct_answer": "C",
      "explanation": "The transfer function H(s) = 10/(s^2 + 6s + 25) is in the form of a second-order system, and it represents a band-pass filter due to its resonance at a particular frequency."
    },
    {
      "question": "In the context of signal systems, what does the term 'causal system' mean?",
      "options": {
        "A": "The system output depends only on past and present inputs",
        "B": "The system output depends on both future and past inputs",
        "C": "The system output depends only on future inputs",
        "D": "The system is unstable"
      },
      "correct_answer": "A",
      "explanation": "A causal system is one where the output at any time depends only on the present and past inputs, not on future inputs."
    },
    {
      "question": "If the Laplace transform of a signal x(t) is X(s), what is the Laplace transform of e^at x(t)?",
      "options": {
        "A": "X(s)e^as",
        "B": "X(s + a)",
        "C": "X(s − a)",
        "D": "e^as X(s)"
      },
      "correct_answer": "B",
      "explanation": "The Laplace transform of e^at x(t) is X(s + a). This shift property of the Laplace transform indicates that multiplying the signal by an exponential term shifts the complex frequency s."
    },
        {
          "question": "What is the Laplace transform of a ramp function r(t) = tu(t)?",
          "options": {
            "A": "1/s^2",
            "B": "1/s",
            "C": "1/s^3",
            "D": "s/(s^2+1)"
          },
          "correct_answer": "A",
          "explanation": "The Laplace transform of the ramp function r(t) = tu(t) is 1/s^2, which can be derived using the standard Laplace transform tables."
        },
        {
          "question": "Which of the following is true about the frequency response of a linear time-invariant (LTI) system?",
          "options": {
            "A": "It depends on the initial conditions of the system",
            "B": "It is determined by the system's impulse response",
            "C": "It is determined by the system's step response",
            "D": "It is the inverse of the system’s transfer function"
          },
          "correct_answer": "B",
          "explanation": "The frequency response of an LTI system is the Fourier transform of the system’s impulse response. It characterizes the system's response to sinusoidal inputs at different frequencies."
        },
        {
          "question": "In a continuous-time system, what does the region of convergence (ROC) in the s-plane correspond to?",
          "options": {
            "A": "The set of values for which the system is stable",
            "B": "The frequencies at which the system resonates",
            "C": "The values of s for which the Laplace transform of the system exists",
            "D": "The locations of the poles in the transfer function"
          },
          "correct_answer": "C",
          "explanation": "The ROC of a system’s Laplace transform indicates the values of s for which the transform converges, determining the stability and behavior of the system."
        },
        {
          "question": "What is the result of the convolution of two signals x(t) and h(t)?",
          "options": {
            "A": "The Laplace transform of the signal",
            "B": "The Fourier transform of the signal",
            "C": "The time-domain output of the system for input x(t) and impulse response h(t)",
            "D": "The inverse Laplace transform of the signal"
          },
          "correct_answer": "C",
          "explanation": "The convolution of x(t) and h(t) gives the output of an LTI system, where x(t) is the input and h(t) is the system’s impulse response."
        },
        {
          "question": "Which of the following is a necessary condition for the stability of a continuous-time LTI system?",
          "options": {
            "A": "All poles of the transfer function must lie in the left half of the s-plane",
            "B": "The system must have at least one zero",
            "C": "The transfer function must be rational",
            "D": "The impulse response must be periodic"
          },
          "correct_answer": "A",
          "explanation": "For a continuous-time LTI system to be stable, all poles of its transfer function must lie in the left half of the s-plane (i.e., they must have negative real parts)."
        },
        {
          "question": "For a discrete-time system, the Z-transform of x[n] = r[n], where r[n] is the unit step function, is:",
          "options": {
            "A": "1/(1 − z^−1)",
            "B": "z/(z − 1)",
            "C": "z/(1 − z^−1)",
            "D": "z/(z + 1)"
          },
          "correct_answer": "A",
          "explanation": "The Z-transform of the unit step function r[n] is 1/(1 − z^−1), which is a standard result derived from the definition of the Z-transform."
        },
        {
          "question": "Which of the following signals is an example of a non-periodic signal?",
          "options": {
            "A": "A sinusoidal signal",
            "B": "A rectangular pulse train",
            "C": "A triangular wave",
            "D": "A step function"
          },
          "correct_answer": "D",
          "explanation": "A step function is a non-periodic signal because it does not repeat over time, whereas sinusoidal signals, rectangular pulse trains, and triangular waves are periodic."
        },
        {
          "question": "The transfer function H(s) = 10/(s^2 + 6s + 25) represents which type of system behavior?",
          "options": {
            "A": "Low-pass filter",
            "B": "High-pass filter",
            "C": "Band-pass filter",
            "D": "Band-stop filter"
          },
          "correct_answer": "C",
          "explanation": "The transfer function H(s) = 10/(s^2 + 6s + 25) is in the form of a second-order system, and it represents a band-pass filter due to its resonance at a particular frequency."
        },
        {
          "question": "In the context of signal systems, what does the term 'causal system' mean?",
          "options": {
            "A": "The system output depends only on past and present inputs",
            "B": "The system output depends on both future and past inputs",
            "C": "The system output depends only on future inputs",
            "D": "The system is unstable"
          },
          "correct_answer": "A",
          "explanation": "A causal system is one where the output at any time depends only on the present and past inputs, not on future inputs."
        },
        {
          "question": "If the Laplace transform of a signal x(t) is X(s), what is the Laplace transform of e^at x(t)?",
          "options": {
            "A": "X(s)e^as",
            "B": "X(s + a)",
            "C": "X(s − a)",
            "D": "e^as X(s)"
          },
          "correct_answer": "B",
          "explanation": "The Laplace transform of e^at x(t) is X(s + a). This shift property of the Laplace transform indicates that multiplying the signal by an exponential term shifts the complex frequency s."
        },
        {
          "question": "The Laplace transform of a unit step function u(t) is:",
          "options": {
            "A": "1/s",
            "B": "1/(s + 1)",
            "C": "1/s^2",
            "D": "1/(s^2 + 1)"
          },
          "correct_answer": "A",
          "explanation": "The unit step function u(t) has a Laplace transform of 1/s, as derived from the standard table of Laplace transforms. The Laplace transform of u(t) is straightforward because the function is 0 for t < 0 and 1 for t ≥ 0."
        },
        {
          "question": "Which of the following is true for an ideal low-pass filter?",
          "options": {
            "A": "The output is a scaled version of the input",
            "B": "The gain is constant for all frequencies",
            "C": "The gain decreases for high frequencies",
            "D": "The cutoff frequency is infinite"
          },
          "correct_answer": "C",
          "explanation": "An ideal low-pass filter allows signals with frequencies below a certain cutoff frequency to pass with little to no attenuation, while attenuating signals with frequencies above the cutoff frequency. Thus, the gain decreases for high frequencies beyond the cutoff."
        },
        {
          "question": "The impulse response h(t) of a system is given by h(t) = e^−tu(t), where u(t) is the unit step function. What is the transfer function H(s) of the system?",
          "options": {
            "A": "H(s) = 1/(s + 1)",
            "B": "H(s) = s/(s + 1)",
            "C": "H(s) = 1/(s + 2)",
            "D": "H(s) = 1/(s^2 + 1)"
          },
          "correct_answer": "A",
          "explanation": "To find the transfer function H(s), take the Laplace transform of the impulse response h(t). The Laplace transform of h(t) = e^−tu(t) is 1/(s + 1). Thus, the transfer function H(s) = 1/(s + 1)."
        },
        {
          "question": "Which of the following is a characteristic of a system described by the transfer function H(s) = (s^2 + 2s + 1)/s?",
          "options": {
            "A": "The system has one pole at s = −1",
            "B": "The system is unstable",
            "C": "The system has two poles at s = 1",
            "D": "The system has a zero at s = 0"
          },
          "correct_answer": "A",
          "explanation": "The transfer function H(s) = (s^2 + 2s + 1)/s can be rewritten as H(s) = (s + 1)^2/s. It indicates one zero at s = −1 (multiplicity 2) and one pole at s = 0. The system is stable as all poles have non-positive real parts."
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
