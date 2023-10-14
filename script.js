var beginButton = document.querySelector("#begin");
var startScreen = document.querySelector("#welcome");
var questionEl =document.querySelector("#question");

beginButton.addEventListener("click", function(){
    startScreen.classList.add("hidden");
    questionEl.classList.remove("hidden");
})
    

