var beginButton = document.querySelector("#begin");
var startScreen = document.querySelector("#welcome");
var questionEl = document.querySelector("#question");
var questionSubmit = document.querySelector("#submit");
var quizEnd = document.querySelector("#result");
var questionIndex = 0;
var questionsArray = [
  {
    prompt: "What will the following code produce? PRINT 'Afrikom Computer School'?",
    options: ["Apaper printed with Afrikom Computer School", "A screen printed with Afrikom Computer School", "none of the above", "An error indicated on the screen"],
    correctAnswer: 1,
  },
  {
    prompt: "If the English language follows formats and rules on grammar, what does QBasic follow as a counterpart?",
    options: ["Syntax", "Strings", "Grammer", "All of the above"],
    correctAnswer: 0,
  },
  {
    prompt: "'Name$' is known as a ",
    options: ["Stringer", "Constant", "Input driver", "Variable"],
    correctAnswer: 3,
  },
];
var secondsRemaining = 45;
var timerEl = document.querySelector("#timer");
var timerInterval;
var promptEl = questionEl.querySelector("h2");
var optionEl1 = document.querySelector("#option1");
var optionEl2 = document.querySelector("#option2");
var optionEl3 = document.querySelector("#option3");
var optionEl4 = document.querySelector("#option4");
var finalScoreEl = document.querySelector("#score");
var scoreEl = 0;
var resetButton = document.querySelector("#reset");
var recordButton = document.querySelector("#record");
var highScoreButton = document.querySelector("#highscore");
var initials = document.querySelector("#initials");
// var highScoreEl = document.querySelector("#highscore");

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
    // alert("Correct");
    scoreEl += 10;
  } else {
    // alert("Incorrect");
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
  finalScoreEl.textContent = scoreEl;
}

recordButton.addEventListener("click", onRecord);

function onRecord() {
  var initialsValue = initials.value;
  localStorage.setItem("score", JSON.stringify(scoreEl));
  console.log(scoreEl);
  localStorage.setItem("initials", JSON.stringify(initialsValue));
  console.log(initialsValue);
}

// highScoreButton.addEventListener("click", onHighScore); {
//     localStorage.getItem("score", finalScoreEl);
// }

resetButton.addEventListener("click", onReset); 

function onReset(){
    quizEnd.classList.add("hidden");
    startScreen.classList.remove("hidden");
    questionIndex = 0;
    scoreEl = 0;
    secondsRemaining = 60;
    timerEl.textContent = secondsRemaining;
}