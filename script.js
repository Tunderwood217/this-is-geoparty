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
var secondsRemaining = 60;
var timerEl = document.querySelector("#timer");
var timerInterval;
var promptEl = questionEl.querySelector("h2");
var optionEl1 = document.querySelector("#option1");
var optionEl2 = document.querySelector("#option2");
var optionEl3 = document.querySelector("#option3");
var optionEl4 = document.querySelector("#option4");
var scoreEl = 0;

beginButton.addEventListener("click", onBegin);
function populateQuestionPanel() {
  promptEl.textContent = questionsArray[questionIndex].prompt;
  optionEl1.textContent = questionsArray[questionIndex].options[0];
  optionEl2.textContent = questionsArray[questionIndex].options[1];
  optionEl3.textContent = questionsArray[questionIndex].options[2];
  optionEl4.textContent = questionsArray[questionIndex].options[3];
  optionEl1.addEventListener("click", onOptionClick);
  optionEl2.addEventListener("click", onOptionClick);
  optionEl3.addEventListener("click", onOptionClick);
  optionEl4.addEventListener("click", onOptionClick);
}
function onBegin() {
  populateQuestionPanel();
  timerEl.textContent = secondsRemaining;
  timerInterval = setInterval(function(){
    secondsRemaining--;
    if(secondsRemaining<=0){
        onEnd();
    }
    timerEl.textContent = secondsRemaining
  }, 1000)
  startScreen.classList.add("hidden");
  questionEl.classList.remove("hidden");
}

// questionSubmit.addEventListener("click", function(){
//     if(questionIndex >= questionsArray.length-1){
//         onEnd();
//     }
//     else{
//         questionIndex++
//         populateQuestionPanel();
//     }
// });

function onOptionClick(event) {
  var selectedOption = event.target.textContent;
  var correctAnswer = questionsArray[questionIndex].options[
    questionsArray[questionIndex].correctAnswer
  ];
  if (selectedOption === correctAnswer) {
    alert("Correct");
    scoreEl += 10;
  } else {
    alert("Incorrect");
    secondsRemaining -= 10;
  }
  if (questionIndex >= questionsArray.length - 1) {
    onEnd();
  }
  else{
      questionIndex++
      populateQuestionPanel();
  }
}

function onEnd() {
    clearInterval(timerInterval);
  questionEl.classList.add("hidden");
  quizEnd.classList.remove("hidden");
  scoreEl.textContent = scoreEl;
}
