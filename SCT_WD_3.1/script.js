const questions = [
  {
    type: "single",
    question: "What does CPU stand for?",
    options: ["Central Processing Unit", "Computer Personal Unit", "Central Print Unit", "Control Processing Unit"],
    answer: "Central Processing Unit"
  },
  {
    type: "single",
    question: "Which language is primarily used for web development?",
    options: ["Python", "JavaScript", "C++", "Java"],
    answer: "JavaScript"
  },
  {
    type: "multi",
    question: "Select all input devices:",
    options: ["Keyboard", "Monitor", "Mouse", "Printer"],
    answer: ["Keyboard", "Mouse"]
  },
  {
    type: "fill",
    question: "The brain of the computer is called the _____",
    answer: "CPU"
  },
  {
    type: "single",
    question: "Which part stores data permanently?",
    options: ["RAM", "Hard Drive", "CPU", "GPU"],
    answer: "Hard Drive"
  },
  {
    type: "multi",
    question: "Which of these are operating systems?",
    options: ["Windows", "Linux", "Chrome", "MacOS"],
    answer: ["Windows", "Linux", "MacOS"]
  },
  {
    type: "single",
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyperlink Text Mark Language", "Hyper Tool Markup Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    type: "fill",
    question: "_____ is a software that helps you browse the internet.",
    answer: "Browser"
  },
  {
    type: "single",
    question: "Which device is used to display output on the screen?",
    options: ["Printer", "Monitor", "Scanner", "Speaker"],
    answer: "Monitor"
  },
  {
    type: "multi",
    question: "Select the programming languages:",
    options: ["HTML", "Python", "CSS", "Java"],
    answer: ["Python", "Java"]
  }
];

let currentQuestionIndex = 0;
let score = 0;
const userAnswers = []; // to store user answers for showing later

const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const resultContainer = document.getElementById("result-container");
const submitBtn = document.getElementById("submit-btn");

/* Created By Yash kumar Banjare... */

function showQuestion() {
  const current = questions[currentQuestionIndex];
  questionContainer.innerText = current.question;
  optionsContainer.innerHTML = "";
  resultContainer.innerText = "";

  if (current.type === "single") {
    current.options.forEach(option => {
      const btn = document.createElement("div");
      btn.className = "option";
      btn.innerHTML = `<input type="radio" name="answer" value="${option}"> ${option}`;
      optionsContainer.appendChild(btn);
    });
  } else if (current.type === "multi") {
    current.options.forEach(option => {
      const btn = document.createElement("div");
      btn.className = "option";
      btn.innerHTML = `<input type="checkbox" name="answer" value="${option}"> ${option}`;
      optionsContainer.appendChild(btn);
    });
  } else if (current.type === "fill") {
    const input = document.createElement("input");
    input.type = "text";
    input.id = "fill-answer";
    optionsContainer.appendChild(input);
  }
}

submitBtn.addEventListener("click", () => {
  const current = questions[currentQuestionIndex];
  let userAnswer;
/* Created By Yash kumar Banjare... */

  if (current.type === "single") {
    const selected = document.querySelector('input[name="answer"]:checked');
    if (!selected) return alert("Please select an answer!");
    userAnswer = selected.value;
    userAnswers.push(userAnswer);
    if (userAnswer === current.answer) score++;
  }
  else if (current.type === "multi") {
    const checkboxes = document.querySelectorAll('input[name="answer"]:checked');
    if (checkboxes.length === 0) return alert("Please select at least one option!");
    userAnswer = Array.from(checkboxes).map(cb => cb.value);
    userAnswers.push(userAnswer);
    const correct = current.answer.slice().sort().join();
    const selected = userAnswer.slice().sort().join();
    if (correct === selected) score++;
  }
  else if (current.type === "fill") {
    const input = document.getElementById("fill-answer").value.trim();
    if (!input) return alert("Please type an answer!");
    userAnswer = input;
    userAnswers.push(userAnswer);
    if (input.toLowerCase() === current.answer.toLowerCase()) score++;
  }
/* Created By Yash kumar Banjare... */

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  questionContainer.innerHTML = "";
  optionsContainer.innerHTML = "";
  submitBtn.style.display = "none";

  let resultHTML = `<h2>🎉 You scored ${score} out of ${questions.length}!</h2><hr>`;
  resultHTML += `<h3>Correct Answers:</h3>`;

  questions.forEach((q, i) => {
    let userAns = userAnswers[i];
    let correctAns = q.answer;
/* Created By Yash kumar Banjare... */

    // Format answers nicely
    if (Array.isArray(userAns)) userAns = userAns.join(", ");
    if (Array.isArray(correctAns)) correctAns = correctAns.join(", ");

    // Highlight if correct or wrong
    const isCorrect = (Array.isArray(q.answer) 
                       ? q.answer.slice().sort().join() === userAnswers[i].slice().sort().join()
                       : (q.answer.toString().toLowerCase() === userAnswers[i].toString().toLowerCase()));

    resultHTML += `
      <div style="margin-bottom:15px;">
        <strong>Q${i + 1}:</strong> ${q.question}<br/>
        <span>Your answer: <span style="color:${isCorrect ? 'green' : 'red'}">${userAns}</span></span><br/>
        <span>Correct answer: <strong>${correctAns}</strong></span>
      </div>
    `;
  });

  resultContainer.innerHTML = resultHTML;
}

showQuestion();


/* Created By Yash kumar Banjare... */