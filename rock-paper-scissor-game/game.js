console.log("The developer of this site is Sayanta (you can call me Leo)");
let bulbBG = document.querySelector('#thebulb');
const winAlert = document.querySelector('.display');
const gameInfo = document.querySelector('.optionOutput');
let bColor = document.querySelector('.total');
let xNumber;
let computerChoice;
let userChoice;
bulbBG.setAttribute("fill", "#f0f8ff");
bColor.style.borderColor = "#00324b";
gameInfo.innerText = "press a button";
winAlert.innerText = "welcome!!";
let score = {
  win: 0,
  lose: 0,
  tie: 0,
};

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

function finalRclick() {
  userChoice = 'rock';
  ccgen();
  winMsg();
  gameInfo.innerText = `User chose ${userChoice} and Computer chose ${computerChoice}.
  Win:${score.win}, Lost:${score.lose}, Tie:${score.tie}.`;
};
function finalPclick() {
  userChoice = 'paper';
  ccgen();
  winMsg();
  gameInfo.innerText = `User chose ${userChoice} and Computer chose ${computerChoice}.
  Win:${score.win}, Lost:${score.lose}, Tie:${score.tie}.`;
};
function finalSclick() {
  userChoice = 'scissor';
  ccgen();
  winMsg();
  gameInfo.innerText = `User chose ${userChoice} and Computer chose ${computerChoice}.
  Win:${score.win}, Lost:${score.lose}, Tie:${score.tie}.`;
};