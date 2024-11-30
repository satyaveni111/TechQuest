// Array of quiz questions
const quiz =[
    {
      "Question": "Which of the following is an advantage of Harvard architecture over Von Neumann architecture?",
      "options": {
        "A": "Simplified design and lower cost",
        "B": "Improved performance due to parallel instruction and data paths",
        "C": "Increased programmability",
        "D": "Reduced memory access times"
      },
      "correctAnswer": "B",
      "Explanation": "Harvard architecture allows separate memory and data buses, enabling simultaneous access to instructions and data, thus improving performance."
    },
    {
      "Question": "What is the primary purpose of the TLB (Translation Lookaside Buffer) in virtual memory systems?",
      "options": {
        "A": "To store frequently used data",
        "B": "To speed up the translation of virtual addresses to physical addresses",
        "C": "To manage page faults",
        "D": "To allocate memory to processes"
      },
      "correctAnswer": "B",
      "Explanation": "The TLB is a cache that stores recent translations of virtual memory to physical memory, speeding up memory access."
    },
    {
      "Question": "In a pipelined processor, what is a data hazard?",
      "options": {
        "A": "A situation where instructions depend on data from the same memory location",
        "B": "A condition where the data required by one instruction is not yet available due to pipeline delays",
        "C": "A situation where multiple instructions execute in parallel",
        "D": "An error in data processing"
      },
      "correctAnswer": "B",
      "Explanation": "Data hazards occur when an instruction depends on the result of a previous instruction that has not yet completed."
    },
    {
      "Question": "Which of the following is a characteristic of a CISC (Complex Instruction Set Computing) processor?",
      "options": {
        "A": "Small number of complex instructions",
        "B": "Large number of simple instructions",
        "C": "High-level language support",
        "D": "Multiple pipeline stages"
      },
      "correctAnswer": "A",
      "Explanation": "CISC processors have a small number of complex instructions that can perform multiple operations in a single instruction."
    },
    {
      "Question": "What is the role of the branch prediction unit in modern CPUs?",
      "options": {
        "A": "To improve the accuracy of arithmetic operations",
        "B": "To predict the outcome of branch instructions to reduce pipeline stalls",
        "C": "To manage memory accesses",
        "D": "To schedule tasks for execution"
      },
      "correctAnswer": "B",
      "Explanation": "The branch prediction unit predicts the direction of branch instructions to minimize pipeline stalls and improve CPU performance."
    },
    {
      "Question": "In the context of cache memory, what is a 'write-back' policy?",
      "options": {
        "A": "Writing data to main memory immediately upon modification",
        "B": "Writing data to cache memory only",
        "C": "Delaying write operations until the cache line is replaced",
        "D": "Writing data to both cache and main memory simultaneously"
      },
      "correctAnswer": "C",
      "Explanation": "In a write-back policy, data is written to main memory only when the corresponding cache line is replaced, reducing the number of write operations."
    },
    {
      "Question": "Which of the following best describes the concept of 'speculative execution'?",
      "options": {
        "A": "Executing instructions that are predicted to be used in the future",
        "B": "Executing instructions out of order",
        "C": "Delaying instruction execution to avoid hazards",
        "D": "Executing multiple instructions in parallel"
      },
      "correctAnswer": "A",
      "Explanation": "Speculative execution involves predicting and executing future instructions to improve performance, especially in branch prediction."
    },
    {
      "Question": "What is the main purpose of a reorder buffer in modern CPU architectures?",
      "options": {
        "A": "To increase the size of cache memory",
        "B": "To manage out-of-order execution and ensure in-order completion",
        "C": "To control the CPU clock speed",
        "D": "To manage power consumption"
      },
      "correctAnswer": "B",
      "Explanation": "The reorder buffer allows instructions to be executed out of order while ensuring they are completed and retired in the correct order."
    },
    {
      "Question": "Which scheduling algorithm is most suitable for real-time systems?",
      "options": {
        "A": "First-Come-First-Served (FCFS)",
        "B": "Shortest Job Next (SJN)",
        "C": "Round Robin",
        "D": "Earliest Deadline First (EDF)"
      },
      "correctAnswer": "D",
      "Explanation": "EDF scheduling is used in real-time systems as it prioritizes tasks with the earliest deadlines, ensuring timely task completion."
    },
    {
      "Question": "In CPU design, what is the primary role of a branch predictor?",
      "options": {
        "A": "To predict the outcome of arithmetic operations",
        "B": "To predict the direction of branches to improve pipeline efficiency",
        "C": "To manage memory allocation",
        "D": "To control input/output operations"
      },
      "correctAnswer": "B",
      "Explanation": "The branch predictor improves pipeline efficiency by predicting the direction of branch instructions, reducing the number of pipeline stalls."
    },
    {
      "Question": "In the context of memory hierarchy, which memory level has the shortest access time?",
      "options": {
        "A": "Hard Disk",
        "B": "Main Memory (RAM)",
        "C": "Cache Memory",
        "D": "Registers"
      },
      "correctAnswer": "D",
      "Explanation": "Registers have the shortest access time as they are located within the CPU and can be accessed almost instantaneously."
    },
    {
      "Question": "What is the key feature of an associative memory (content-addressable memory)?",
      "options": {
        "A": "It stores data permanently",
        "B": "It allows data retrieval by content rather than by address",
        "C": "It is slower than other types of memory",
        "D": "It requires more power than other types of memory"
      },
      "correctAnswer": "B",
      "Explanation": "Associative memory enables data retrieval based on content, which is efficient for certain types of searches."
    },
    {
      "Question": "Which of the following cache replacement policies is known for its simplicity and effectiveness?",
      "options": {
        "A": "Least Recently Used (LRU)",
        "B": "Most Recently Used (MRU)",
        "C": "First-In-First-Out (FIFO)",
        "D": "Random Replacement"
      },
      "correctAnswer": "A",
      "Explanation": "LRU is a simple and effective cache replacement policy that replaces the least recently used cache line, optimizing cache performance."
    },
    {
      "Question": "In virtual memory systems, what is the role of the page replacement algorithm?",
      "options": {
        "A": "To increase the physical memory size",
        "B": "To manage the mapping of virtual addresses to physical addresses",
        "C": "To decide which pages to remove from memory when new pages are needed",
        "D": "To allocate memory to new processes"
      },
      "correctAnswer": "C",
      "Explanation": "Page replacement algorithms determine which pages to swap out of physical memory to make room for new pages, optimizing memory usage."
    },
    {
      "Question": "Which of the following best describes the 'memory-mapped I/O' method?",
      "options": {
        "A": "Using separate memory and I/O spaces",
        "B": "Using the same address space for both memory and I/O devices",
        "C": "Using dedicated instructions for I/O operations",
        "D": "Using a separate bus for I/O operations"
      },
      "correctAnswer": "B",
      "Explanation": "Memory-mapped I/O allows I/O devices to be accessed in the same way as memory, using the same address space."
    }
  ]
  

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
