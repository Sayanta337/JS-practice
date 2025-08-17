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

//computer choice validator
function ccgen() {
  xNumber = Math.random() * 6;
if (0 < xNumber && 2 > xNumber) {
  computerChoice = 'rock'
} else if (2 < xNumber && 4 > xNumber) {
  computerChoice = 'paper'
} else if (4 < xNumber) {
  computerChoice = 'scissor'
}
};

function finalRclick() {
  userChoice = 'rock';
  ccgen();
  gameInfo.innerText = `User chose ${userChoice} and Computer chose ${computerChoice}.`;
  winMsg();
};
function finalPclick() {
  userChoice = 'paper';
  ccgen();
  gameInfo.innerText = `User chose ${userChoice} and Computer chose ${computerChoice}.`;
  winMsg();
};
function finalSclick() {
  userChoice = 'scissor';
  ccgen();
  gameInfo.innerText = `User chose ${userChoice} and Computer chose ${computerChoice}.`;
  winMsg();
};

function winMsg() {
if (computerChoice == userChoice){
  winAlert.innerText = "it's a tie!!";
  bulbBG.setAttribute("fill", "#00c8ff");
  bColor.style.borderColor = "#00c8ff";
}
else if (userChoice == 'rock' && computerChoice =='paper'){
winAlert.innerText = "computer won!!";
bulbBG.setAttribute("fill", "#f0794a");
bColor.style.borderColor = "#f0794a";
}
else if (userChoice == 'rock' && computerChoice =='scissor'){
winAlert.innerText = "user won!!";
bulbBG.setAttribute("fill", "#f0d246");
bColor.style.borderColor = "#f0d246";
}
else if (userChoice == 'paper' && computerChoice =='rock'){
winAlert.innerText = "user won!!";
bulbBG.setAttribute("fill", "#f0d246");
bColor.style.borderColor = "#f0d246";
}
else if (userChoice == 'paper' && computerChoice =='scissor'){
winAlert.innerText = "computer won!!";
bulbBG.setAttribute("fill", "#f0794a");
bColor.style.borderColor = "#f0794a";
}
else if (userChoice == 'scissor' && computerChoice =='rock'){
winAlert.innerText = "computer won!!";
bulbBG.setAttribute("fill", "#f0794a");
bColor.style.borderColor = "#f0794a";
}
else if (userChoice == 'scissor' && computerChoice =='paper'){
winAlert.innerText = "user won!!";
bulbBG.setAttribute("fill", "#f0d246");
bColor.style.borderColor = "#f0d246";
}
};