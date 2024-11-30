// Array of quiz questions
const quiz = [
    
        {
          "question": "What is the issue with the following SystemVerilog code, and how can it be corrected?\n\n```systemverilog\nmodule counter(input clk, output logic [3:0] count);\nalways_ff @(posedge clk) begin\n  count = count + 1;\nend\nendmodule\n```",
          "options": {
            "A": "The counter will not work correctly due to the use of blocking assignment.",
            "B": "The counter will work, but it may cause latch inference due to the missing initialization of `count`.",
            "C": "The counter will work as expected, using blocking assignments.",
            "D": "The counter will fail to compile due to incorrect use of the `always_ff` block."
          },
          "correctAnswer": "B",
          "explanation": "In sequential logic, non-blocking assignments (`<=`) should be used inside always blocks triggered by clock edges. Blocking assignments (`=`) can cause race conditions, leading to incorrect behavior."
        },
        {
          "question": "What will be the output of the following SystemVerilog code?\n\n```systemverilog\nmodule test;\nlogic [3:0] a, b, result;\ninitial begin\n  a = 4'b1101;\n  b = 4'b1010;\n  result = a ^ b;\n  $display(\"Result: %b\", result);\nend\nendmodule\n```",
          "options": {
            "A": "0011",
            "B": "1111",
            "C": "1101",
            "D": "1010"
          },
          "correctAnswer": "A",
          "explanation": "The `^` operator performs a bitwise XOR. For the given values, `1101 ^ 1010 = 0011`."
        },
        {
          "question": "What will happen when the following SystemVerilog code is simulated?\n\n```systemverilog\nmodule latch(input logic d, input logic en, output logic q);\nalways_ff @(en or d)\n  if (en)\n    q <= d;\nendmodule\n```",
          "options": {
            "A": "The latch will work correctly",
            "B": "The latch will not synthesize correctly",
            "C": "The latch will always output 0",
            "D": "Latch inference will occur causing race conditions"
          },
          "correctAnswer": "A",
          "explanation": "This is a simple latch described with `always_ff` and triggers on `en` or `d`. It will correctly store the value of `d` when `en` is true."
        },
        {
          "question": "Identify the issue in the following SystemVerilog code.\n\n```systemverilog\nmodule adder(input logic [3:0] a, input logic [3:0] b, output logic [3:0] sum);\nalways_ff @(a or b)\n  sum = a + b + 1'b1;\nendmodule\n```",
          "options": {
            "A": "Incorrect bit-width of the sum, it should be [4:0] to handle overflow",
            "B": "The addition operation is not supported in SystemVerilog",
            "C": "Blocking assignment should be used instead of non-blocking",
            "D": "The always block is missing a clock edge trigger"
          },
          "correctAnswer": "A",
          "explanation": "Adding two 4-bit numbers plus a carry bit can result in a 5-bit sum. `sum` should be declared as [4:0] to avoid overflow."
        },
        {
          "question": "What is the result of simulating the following SystemVerilog code?\n\n```systemverilog\nmodule test;\nlogic clk;\nlogic [3:0] count;\ninitial begin\n  clk = 0;\n  count = 4'b0000;\n  forever #5 clk = ~clk;\nend\nalways_ff @(posedge clk) begin\n  count <= count + 1;\n  if(count == 4'b1010)\n    $display(\"Count reached 10\");\nend\nendmodule\n```",
          "options": {
            "A": "The counter will increment and display \"Count reached 10\"",
            "B": "The counter will not increment",
            "C": "The counter will increment indefinitely but will not display anything",
            "D": "The simulation will fail due to a syntax error"
          },
          "correctAnswer": "A",
          "explanation": "The code implements a counter using the clock signal. When the count reaches 10 (binary 1010), the condition in the `if` statement is satisfied and the message \"Count reached 10\" is displayed."
        },
        {
          "question": "Which of the following modifications will prevent latch inference in this SystemVerilog code?\n\n```systemverilog\nmodule mux(input logic a, input logic b, input logic sel, output logic y);\nalways_ff @(a or b or sel)\n  if (sel)\n    y <= a;\nendmodule\n```",
          "options": {
            "A": "Assign a default value to `y` at the beginning of the always block",
            "B": "Change the sensitivity list to `posedge clk`",
            "C": "Use non-blocking assignments instead of blocking",
            "D": "Nothing, the code is correct"
          },
          "correctAnswer": "A",
          "explanation": "Without a default value for `y`, the synthesized design may infer a latch to retain the value of `y` when `sel` is not true. Adding a default value ensures no latch is inferred."
        },
        {
          "question": "What is the result of simulating the following SystemVerilog code?\n\n```systemverilog\nmodule test;\nlogic [7:0] data;\ninteger i;\ninitial begin\n  data = 8'b11001010;\n  for (i = 0; i < 8; i = i + 1)\n    $display(\"data[%0d] = %b\", i, data[i]);\nend\nendmodule\n```",
          "options": {
            "A": "The output will display each bit of the data from MSB to LSB",
            "B": "The output will display each bit of the data from LSB to MSB",
            "C": "There will be an error due to the incorrect for loop syntax",
            "D": "The output will be random"
          },
          "correctAnswer": "B",
          "explanation": "In SystemVerilog, bit indexing starts from the least significant bit (LSB), so the loop will display the bits from LSB to MSB."
        },
        {
          "question": "How many flip-flops will the following SystemVerilog code synthesize?\n\n```systemverilog\nmodule shift_register(input logic clk, input logic d, output logic [3:0] q);\nalways_ff @(posedge clk)\n  q <= {q[2:0], d};\nendmodule\n```",
          "options": {
            "A": "1 flip-flop",
            "B": "4 flip-flops",
            "C": "2 flip-flops",
            "D": "3 flip-flops"
          },
          "correctAnswer": "B",
          "explanation": "This code describes a 4-bit shift register. Each bit of the `q` register is implemented using a flip-flop, resulting in 4 flip-flops."
        },
        {
          "question": "What is the output after simulating the following SystemVerilog code?\n\n```systemverilog\nmodule test;\nlogic [3:0] a, b;\nlogic [3:0] sum;\nassign sum = a + b;\ninitial begin\n  a = 4'b1010;\n  b = 4'b0111;\n  #10;\n  $display(\"Sum: %b\", sum);\nend\nendmodule\n```",
          "options": {
            "A": "Sum: 10000",
            "B": "Sum: 0001",
            "C": "Sum: 1111",
            "D": "Sum: 1110"
          },
          "correctAnswer": "A",
          "explanation": "The addition of `1010` (10 in decimal) and `0111` (7 in decimal) results in `10001` (17 in decimal). Since `sum` is a 4-bit wire, the result will truncate to `0001`."
        },
        {
          "question": "What does the following SystemVerilog code describe?\n\n```systemverilog\nmodule full_adder(input logic a, input logic b, input logic cin, output logic sum, output logic cout);\n  assign {cout, sum} = a + b + cin;\nendmodule\n```",
          "options": {
            "A": "A half adder",
            "B": "A full adder",
            "C": "A 4-bit adder",
            "D": "A 4:1 multiplexer"
          },
          "correctAnswer": "B",
          "explanation": "This code implements a full adder, which computes the sum (`sum`) and carry-out (`cout`) for three input bits: `a`, `b`, and `cin`."
        },
        {
          "question": "Which of the following SystemVerilog features allows an interface to be instantiated in a module?",
          "options": {
            "A": "Dynamic arrays",
            "B": "Modports",
            "C": "Clocking blocks",
            "D": "Interfaces"
          },
          "correctAnswer": "D",
          "explanation": "In SystemVerilog, interfaces allow groups of related signals to be packaged together. Interfaces can be instantiated in modules to organize signal sets."
        },
        {
          "question": "What does the following code demonstrate about SystemVerilog data types?\n\n```systemverilog\nmodule test;\nlogic [7:0] byte;\ninteger count;\ninitial begin\n  byte = 8'hFF;\n  count = 10;\n  $display(\"Byte: %h, Count: %d\", byte, count);\nend\nendmodule\n```",
          "options": {
            "A": "This shows correct use of unsigned data types",
            "B": "This shows mixing of binary and hexadecimal types",
            "C": "This shows SystemVerilog's ability to display both hexadecimal and decimal values",
            "D": "This shows an error because hexadecimal and decimal can't be mixed"
          },
          "correctAnswer": "C",
          "explanation": "In SystemVerilog, the `%h` format specifier is used to display hexadecimal, and `%d` is used for decimal. Both can be mixed in a `$display` call."
        },
        {
          "question": "What does the following SystemVerilog code simulate?\n\n```systemverilog\nmodule test;\nlogic [7:0] a, b, result;\nassign result = a & b;\ninitial begin\n  a = 8'b11001100;\n  b = 8'b10101010;\n  #10;\n  $display(\"Result: %b\", result);\nend\nendmodule\n```",
          "options": {
            "A": "Bitwise AND operation",
            "B": "Bitwise OR operation",
            "C": "Addition of two numbers",
            "D": "Subtraction of two numbers"
          },
          "correctAnswer": "A",
          "explanation": "The `&` operator in SystemVerilog performs a bitwise AND operation. For the given values, `11001100 & 10101010 = 10001000`."
        },
            {
              "question": "What is the problem with the following code, and how can it be fixed?\n\n```systemverilog\nmodule counter(input logic clk, reset, output logic [7:0] count);\nalways_ff @(posedge clk or posedge reset) begin\n  if (reset)\n    count = 8'b0;\n  else\n    count = count + 1;\nend\nendmodule\n```",
              "options": {
                "A": "The assignment should use non-blocking assignments (`<=`) instead of blocking assignments (`=`).",
                "B": "The reset should be implemented using an `always_comb` block, not an `always_ff` block.",
                "C": "There is no issue with the code; it will function correctly.",
                "D": "The reset condition should be checked before the `posedge clk` sensitivity list."
              },
              "correctAnswer": "A",
              "explanation": "In sequential logic, non-blocking assignments (`<=`) should be used inside always blocks triggered by clock edges to avoid race conditions. Using blocking assignments (`=`) could lead to incorrect results."
            },
            {
              "question": "What is the output when the following code is simulated?\n\n```systemverilog\nmodule shift_register(input logic clk, input logic d, output logic [3:0] q);\nalways_ff @(posedge clk) begin\n  q <= {q[2:0], d};\nend\nendmodule\n```",
              "options": {
                "A": "The 4-bit shift register will shift the bits left with each clock cycle.",
                "B": "The 4-bit shift register will shift the bits right with each clock cycle.",
                "C": "The 4-bit shift register will retain the previous value at `q[3]` and update the other bits.",
                "D": "The code will result in an error as `<=` cannot be used with a concatenation."
              },
              "correctAnswer": "C",
              "explanation": "This code describes a 4-bit shift register where each clock cycle shifts the bits to the left and updates the least significant bit (`q[0]`) with the new `d` value."
            },
            {
              "question": "What does the following SystemVerilog code demonstrate about `modport`?\n\n```systemverilog\ninterface bus;\n  logic [7:0] data;\n  modport master (input data);\n  modport slave (output data);\nendinterface\nmodule top;\n  bus m_bus();\n  master master_inst(m_bus);\n  slave slave_inst(m_bus);\nendmodule\n```",
              "options": {
                "A": "The code demonstrates the use of `modport` to define directional constraints for signals in an interface.",
                "B": "The code will result in an error because the `data` signal cannot have multiple directional constraints.",
                "C": "The code demonstrates how to connect different modules using `modport` in SystemVerilog.",
                "D": "There is no issue in the code, and the design will function correctly."
              },
              "correctAnswer": "A",
              "explanation": "`modport` in SystemVerilog is used to specify the input or output direction for signals in an interface. In this case, `master` is defined with `input data` and `slave` with `output data`."
            },
            {
              "question": "What does the following SystemVerilog code accomplish?\n\n```systemverilog\nmodule test(input logic [3:0] a, input logic [3:0] b, output logic [7:0] prod);\nalways_comb begin\n  prod = a * b;\nend\nendmodule\n```",
              "options": {
                "A": "It multiplies the inputs `a` and `b`, and stores the result in `prod`.",
                "B": "It adds the inputs `a` and `b`, and stores the result in `prod`.",
                "C": "It performs a bitwise AND operation between `a` and `b` and stores the result in `prod`.",
                "D": "It performs a bitwise OR operation between `a` and `b` and stores the result in `prod`."
              },
              "correctAnswer": "A",
              "explanation": "The `*` operator in SystemVerilog is used for multiplication. In this case, the code multiplies the 4-bit inputs `a` and `b`, and stores the 8-bit result in `prod`."
            },
            {
              "question": "What is the primary purpose of a `clocking block` in SystemVerilog?\n\n```systemverilog\nmodule test(input logic clk, input logic rst, output logic data);\n  clocking cb @(posedge clk);\n    output data;\n  endclocking\nendmodule\n```",
              "options": {
                "A": "A `clocking block` is used to define a group of signals that are synchronized to a specific clock edge.",
                "B": "A `clocking block` is used to store clock signals for timing analysis.",
                "C": "A `clocking block` is used to define the module's reset behavior.",
                "D": "A `clocking block` is not valid in SystemVerilog."
              },
              "correctAnswer": "A",
              "explanation": "A `clocking block` in SystemVerilog is used to group signals that are synchronized to a specific clock edge, ensuring consistency in timing behavior."
            }
                    
      
];

let currentQuestionIndex = 0;
let correctScore = 0;
let wrongScore = 0;
let timeLeft = 600;

function loadQuestion() {
let options = document.querySelectorAll('input[name="answer"]');
document.getElementById('queCount').textContent = currentQuestionIndex;

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
if (currentQuestion.question.includes("```systemverilog")) {
    // Extract the code block and replace markdown-style formatting
    let parts = currentQuestion.question.split("```systemverilog");
    let questionText = parts[0].trim(); // Text before the code
    let codeBlock = parts[1].split("```")[0].trim(); // The Verilog code block

    // Format the question with code
    document.getElementById('question').innerHTML = `
        <div class="question-text">${questionText}</div>
        <pre class="code-block"><code>${codeBlock}</code></pre>
    `;
} else {
    // Regular question display
    document.getElementById('question').innerHTML = `
        <div class="question-text">${currentQuestion.question}</div>
    `;
}



document.getElementById('labelA').textContent = currentQuestion.options.A;
document.getElementById('labelB').textContent = currentQuestion.options.B;
document.getElementById('labelC').textContent = currentQuestion.options.C;
document.getElementById('labelD').textContent = currentQuestion.options.D;

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

// End assessment function
function endAssessment() {
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('sub').style.display = 'none';
    document.getElementById('diffcultyLevel').style.display = 'none';
    document.getElementById('verilog').style.display = 'none';
    document.getElementById('easy').style.display = 'none';
    document.getElementById('endAssessmentBtn').style.display = 'none';
    document.getElementById('timer').style.display = 'none';
    document.getElementById('time').style.display = 'none';
    document.getElementById('logo').style.display = 'none';
    document.getElementById('logo2').style.display = 'none';
    document.getElementById('TechQuestHeading').style.display = 'none';
    document.getElementById('noOfQues').style.display = 'none';
    document.getElementById('noOfQuestions').style.display = 'none';
    document.getElementById('scoreCard').style.display = 'block';
    let noOfQue = correctScore + wrongScore;
    // Display the correct and wrong scores
    document.getElementById('score').textContent = "SCORE : " + correctScore; 
    document.getElementById('correctAnswerScore').textContent = "Correct Answers : " + correctScore;
    document.getElementById('wrongAnswerScore').textContent = "Wrong Answers : " + wrongScore;
    document.getElementById('noofquestionsAttempted').textContent = "No Of Questions Attempted : " + noOfQue;
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
