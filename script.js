var beginButton = document.querySelector("#begin");
var startScreen = document.querySelector("#welcome");
var questionEl =document.querySelector("#question");
var questionSubmit = document.querySelector("#submit");
var quizEnd = document.querySelector("#result");

beginButton.addEventListener("click",  onBegin);

function onBegin() {
    startScreen.classList.add("hidden");
    questionEl.classList.remove("hidden");
}

questionSubmit.addEventListener("click", onSubmit);
    
function onSubmit() {
    questionEl.classList.add("hidden");
    quizEnd.classList.remove("hidden");
}
