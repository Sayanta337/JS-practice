console.log("The developer of this site is Sayanta")
const bulbBG = document.querySelector('#thebulb')
const winAlert = document.querySelector('.display')
const gameInfo = document.querySelector('.optionOutput')
const rockbtn = document.querySelector('#rock')
const paperbtn = document.querySelector('#paper')
const scissorbtn = document.querySelector('#scissor')

bulbBG.setAttribute("fill", "#f0f8ff")
winAlert.innerText = "you won"
gameInfo.innerText = "you chose rock"

function glowTheBulb() {
  bulbBG.setAttribute("fill", "#f0d246")
}