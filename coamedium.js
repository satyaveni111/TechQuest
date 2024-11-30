// Array of quiz questions
const quiz =[
    {
      "question": "in a computer, what does dma stand for?",
      "options": {
        "A": "direct memory access",
        "B": "direct module access",
        "C": "direct memory allocation",
        "D": "direct module allocation"
      },
      "correctAnswer": "A",
      "explanation": "dma allows peripherals to directly transfer data to/from memory without involving the cpu, thus improving performance."
    },
    {
      "question": "what is the primary function of the control unit in the cpu?",
      "options": {
        "A": "perform arithmetic operations",
        "B": "store data",
        "C": "fetch and decode instructions",
        "D": "manage system power"
      },
      "correctAnswer": "C",
      "explanation": "the control unit is responsible for fetching instructions from memory and decoding them to execute the necessary operations."
    },
    {
      "question": "what does the term 'pipelining' refer to in cpu design?",
      "options": {
        "A": "executing multiple instructions in a single clock cycle",
        "B": "executing one instruction at a time",
        "C": "storing data sequentially",
        "D": "improving cache performance"
      },
      "correctAnswer": "A",
      "explanation": "pipelining allows multiple instruction stages to be processed simultaneously, enhancing cpu efficiency."
    },
    {
      "question": "which of the following is a characteristic of risc architecture?",
      "options": {
        "A": "complex instruction set",
        "B": "multiple addressing modes",
        "C": "few instructions and simple addressing modes",
        "D": "high-level language support"
      },
      "correctAnswer": "C",
      "explanation": "risc (reduced instruction set computer) architecture focuses on a smaller set of simple instructions for efficiency."
    },
    {
      "question": "what is the role of a cache memory in a computer system?",
      "options": {
        "A": "to store data permanently",
        "B": "to provide backup storage",
        "C": "to speed up access to frequently used data and instructions",
        "D": "to manage input/output operations"
      },
      "correctAnswer": "C",
      "explanation": "cache memory stores frequently accessed data to reduce the time it takes for the cpu to retrieve this information."
    },
    {
      "question": "which of the following addressing modes uses the value in the address field of the instruction as an address?",
      "options": {
        "A": "direct addressing mode",
        "B": "immediate addressing mode",
        "C": "indirect addressing mode",
        "D": "indexed addressing mode"
      },
      "correctAnswer": "A",
      "explanation": "in direct addressing mode, the address field contains the address of the operand."
    },
    {
      "question": "what is the main advantage of a harvard architecture over a von neumann architecture?",
      "options": {
        "A": "higher data transfer rates",
        "B": "simplified design",
        "C": "separate pathways for instruction and data storage",
        "D": "larger memory capacity"
      },
      "correctAnswer": "C",
      "explanation": "harvard architecture has separate memory and pathways for instructions and data, allowing simultaneous access."
    },
    {
      "question": "in microprocessors, what is the main function of the stack pointer (sp)?",
      "options": {
        "A": "to store return addresses",
        "B": "to store local variables",
        "C": "to point to the top of the stack",
        "D": "to manage input/output operations"
      },
      "correctAnswer": "C",
      "explanation": "the stack pointer indicates the top of the stack, allowing for efficient management of stack operations."
    },
    {
      "question": "what is the primary purpose of using a page table in virtual memory management?",
      "options": {
        "A": "to manage cpu registers",
        "B": "to map logical addresses to physical addresses",
        "C": "to store frequently accessed data",
        "D": "to handle input/output devices"
      },
      "correctAnswer": "B",
      "explanation": "the page table maps logical (virtual) addresses used by programs to physical addresses in memory."
    },
    {
      "question": "what is a tlb (translation lookaside buffer) used for?",
      "options": {
        "A": "to store cpu instructions",
        "B": "to enhance cache performance",
        "C": "to speed up virtual address translation",
        "D": "to manage system interrupts"
      },
      "correctAnswer": "C",
      "explanation": "the tlb caches recent translations of virtual addresses to physical addresses, speeding up memory access."
    },
    {
      "question": "in a cpu, what is the function of the program counter (pc)?",
      "options": {
        "A": "to perform arithmetic operations",
        "B": "to point to the next instruction to be executed",
        "C": "to store the current instruction",
        "D": "to manage memory"
      },
      "correctAnswer": "B",
      "explanation": "the program counter holds the address of the next instruction to be fetched and executed by the cpu."
    },
    {
      "question": "what is the purpose of an instruction register in the cpu?",
      "options": {
        "A": "to store data temporarily",
        "B": "to hold the instruction currently being executed",
        "C": "to manage input/output operations",
        "D": "to perform arithmetic calculations"
      },
      "correctAnswer": "B",
      "explanation": "the instruction register stores the instruction that is currently being decoded and executed."
    },
    {
      "question": "which scheduling algorithm is most suitable for real-time systems?",
      "options": {
        "A": "first-come-first-served (fcfs)",
        "B": "shortest job next (sjn)",
        "C": "round robin",
        "D": "earliest deadline first (edf)"
      },
      "correctAnswer": "D",
      "explanation": "edf scheduling is used in real-time systems as it prioritizes tasks with the earliest deadlines, ensuring timely task completion."
    },
    {
      "question": "in a memory hierarchy, which memory has the shortest access time?",
      "options": {
        "A": "hard disk",
        "B": "main memory (ram)",
        "C": "cache memory",
        "D": "registers"
      },
      "correctAnswer": "D",
      "explanation": "registers have the shortest access time as they are located within the cpu and can be accessed almost instantaneously."
    },
    {
      "question": "what is the key feature of an associative memory (content-addressable memory)?",
      "options": {
        "A": "it stores data permanently",
        "B": "it allows data retrieval by content rather than by address",
        "C": "it is slower than other types of memory",
        "D": "it requires more power than other types of memory"
      },
      "correctAnswer": "B",
      "explanation": "associative memory enables data retrieval based on content, which is efficient for certain types of searches."
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
