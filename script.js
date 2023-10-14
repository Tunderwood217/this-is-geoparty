var beginButton = document.querySelector("#begin");
var startScreen = document.querySelector("#welcome");
var questionEl = document.querySelector("#question");
var questionSubmit = document.querySelector("#submit");
var quizEnd = document.querySelector("#result");
var questionIndex = 0;
var questionsArray = [
  {
    prompt: "Question Holder",
    options: ["a1", "a2", "a3", "a4"],
    correctAnswer: 2,
  },
  {
    prompt: "Question Box",
    options: ["b1", "b2", "b3", "b4"],
    correctAnswer: 0,
  },
  {
    prompt: "Question Bag",
    options: ["c1", "c2", "c3", "c4"],
    correctAnswer: 3,
  },
];
var promptEl = questionEl.querySelector("h2");
var optionEl1 = document.querySelector("#option1");
var optionEl2 = document.querySelector("#option2");
var optionEl3 = document.querySelector("#option3");
var optionEl4 = document.querySelector("#option4");

beginButton.addEventListener("click", onBegin);
function populateQuestionPanel() {
  promptEl.textContent = questionsArray[questionIndex].prompt;
  optionEl1.textContent = questionsArray[questionIndex].options[0];
  optionEl2.textContent = questionsArray[questionIndex].options[1];
  optionEl3.textContent = questionsArray[questionIndex].options[2];
  optionEl4.textContent = questionsArray[questionIndex].options[3];
}
function onBegin() {
  populateQuestionPanel();
  startScreen.classList.add("hidden");
  questionEl.classList.remove("hidden");
}

questionSubmit.addEventListener("click", onSubmit);

function onSubmit() {
  questionEl.classList.add("hidden");
  quizEnd.classList.remove("hidden");
}
