console.log("The developer of this site is Sayanta (you can call me Leo)");
let bulbBG = document.querySelector('#thebulb');
const winAlert = document.querySelector('.display');
const gameInfo = document.querySelector('.optionOutput');
const finalGreet = document.querySelector('#greetingMsg');
let bColor = document.querySelector('.total');
let xNumber;
let computerChoice;
let userChoice;
bulbBG.setAttribute("fill", "#f0f8ff");
bColor.style.borderColor = "#00324b";
gameInfo.innerText = "press a button";
winAlert.innerText = "welcome!!";
finalGreet.innerText = getGreeting();
let score;
let scoreStr = localStorage.getItem('localScore');
resetScore(scoreStr);
function resetScore(scoreStr){
  score = scoreStr ? JSON.parse(scoreStr) : {win: 0, lose: 0, tie: 0,};
  score.displayScore = function(){
    return `Win:${score.win}, Lost:${score.lose}, Tie:${score.tie}.`;
  };
}
//computer choice validator
function ccgen() {
  xNumber = Math.random() * 9;
if (0 < xNumber && 3 > xNumber) {
  computerChoice = 'rock'
} else if (3 < xNumber && 6 > xNumber) {
  computerChoice = 'paper'
} else if (6 < xNumber) {
  computerChoice = 'scissor'
}
};
//time based greeting
function getGreeting() {
  const now = new Date();
  const hour = now.getHours();

  if (hour >= 5 && hour < 12) {
   return "Good Morning,";
  } else if (hour >= 12 && hour < 17) {
     return "Good Afternoon,";
   } else if (hour >= 17 && hour < 21) {
     return "Good Evening,";
   } else {
     return "Good Night,";
   }
};

function winMsg() {
if (computerChoice == userChoice){
  winAlert.innerText = "it's a tie!!";
  score.tie++;
  bulbBG.setAttribute("fill", "#00c8ff");
  bColor.style.borderColor = "#00c8ff";
}
else if (userChoice == 'rock' && computerChoice =='paper'){
winAlert.innerText = "computer won!!";
score.lose++;
bulbBG.setAttribute("fill", "#f0794a");
bColor.style.borderColor = "#f0794a";
}
else if (userChoice == 'rock' && computerChoice =='scissor'){
winAlert.innerText = "user won!!";
score.win++;
bulbBG.setAttribute("fill", "#f0d246");
bColor.style.borderColor = "#f0d246";
}
else if (userChoice == 'paper' && computerChoice =='rock'){
winAlert.innerText = "user won!!";
score.win++;
bulbBG.setAttribute("fill", "#f0d246");
bColor.style.borderColor = "#f0d246";
}
else if (userChoice == 'paper' && computerChoice =='scissor'){
winAlert.innerText = "computer won!!";
score.lose++;
bulbBG.setAttribute("fill", "#f0794a");
bColor.style.borderColor = "#f0794a";
}
else if (userChoice == 'scissor' && computerChoice =='rock'){
winAlert.innerText = "computer won!!";
score.lose++;
bulbBG.setAttribute("fill", "#f0794a");
bColor.style.borderColor = "#f0794a";
}
else if (userChoice == 'scissor' && computerChoice =='paper'){
winAlert.innerText = "user won!!";
score.win++;
bulbBG.setAttribute("fill", "#f0d246");
bColor.style.borderColor = "#f0d246";
}
};

function lastInfo(){
  gameInfo.innerText = `User chose ${userChoice} and Computer chose ${computerChoice}.
  ${score.displayScore()}`;
  localStorage.setItem('localScore', JSON.stringify(score));
}

function finalRclick() {
  userChoice = 'rock';
  ccgen();
  winMsg();
  lastInfo();
};
function finalPclick() {
  userChoice = 'paper';
  ccgen();
  winMsg();
  lastInfo();
};
function finalSclick() {
  userChoice = 'scissor';
  ccgen();
  winMsg();
  lastInfo();
};
function finalRemover(){
  localStorage.clear; 
  resetScore();
  gameInfo.innerText = `Game has been reset.`;
  bulbBG.setAttribute("fill", "#f0f8ff");
  bColor.style.borderColor = "#00324b";
  winAlert.innerText = `New Game!!`;
  localStorage.setItem('localScore', JSON.stringify(score));
};