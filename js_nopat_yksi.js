document.getElementById("newGame").style.display = "none";
document.getElementById("diceNums").innerHTML = "Aloita lisäämällä pelaajan 1 nimi";
document.getElementById("player1Name").style.display = "";
document.getElementById("first").style.display = "";
document.getElementById("player2Name").style.display = "";
document.getElementById("second").style.display = "";
document.getElementById("pass1").style.display = "none";
document.getElementById("pass2").style.display = "none";
document.getElementById("roll1").style.display = "none";
document.getElementById("roll2").style.display = "none";

let totalScorePlayer1 = 0;
let totalScorePlayer2 = 0;
let roundCountPlayer1 = 0;
let roundCountPlayer2 = 0;
const playerOne = [];
const playerTwo = [];

let link = document.getElementById("linkBtn");
link.addEventListener(event);

function page2() {
  location.href = "zikanoppakahdella.html";
}

function winnerIs() {
  if (totalScorePlayer1 >= 100) {
  winner1();
  }
  if (totalScorePlayer2 >= 100) {
  winner2();
  }
}

function winner1() {
   document.getElementById("diceNums").innerHTML = "Voittaja on pelaaja 1. Pistemäärä " + totalScorePlayer1 + " /100 pistettä ";
   hide();
}

function winner2() {
   document.getElementById("diceNums").innerHTML = "Voittaja on pelaaja 2. Pistemäärä " + totalScorePlayer2 + " /100 pistettä ";
   hide();
}

function checkArray1() {
  let size1 = playerOne.lenght;
  if (size1 !== 0) {
     document.getElementById("diceNums").innerHTML = "Lisää pelaajan 2 nimi";
     document.getElementById("player1Name").style.display = "none";
     document.getElementById("first").style.display = "none";
     document.getElementById("pass1").style.display = "";
     document.getElementById("roll1").style.display = "";
  }
}

function checkArray2() {
  let size2 = playerTwo.lenght;
  if (size2 !== 0) {
     document.getElementById("diceNums").innerHTML = "Jompikumpi pelaajista aloittaa pelin";
     document.getElementById("player2Name").style.display = "none";
     document.getElementById("second").style.display = "none";
     document.getElementById("pass2").style.display = "";
     document.getElementById("roll2").style.display = "";
  }
}

//lisää pelaaja yksi
var addName1Btn = document.getElementById("first");
addName1Btn.addEventListener('click', addPlayer1());

function addPlayer1() {
  var name1 = document.getElementById("player1Name").value;
  document.getElementById("pl1").innerHTML = name1;
  document.getElementById("name1info").innerHTML = name1;
  playerOne.push(name1);
  player1Name.value = ''; 
}

//lisää pelaaja kaksi
var addName2Btn = document.getElementById("second");
addName2Btn.addEventListener('click', addPlayer2());

function addPlayer2() {
  var name2 = document.getElementById("player2Name").value;
  document.getElementById("pl2").innerHTML = name2;
  document.getElementById("name2info").innerHTML = name2;
  playerOne.push(name2);
  player2Name.value = '';
}

//pelaaja yksi
let roll1Btn = document.getElementById("roll1");
roll1Btn.addEventListener(click, rollPlayer1());

function rollPlayer1() {
  const firstNum = Math.floor(Math.random() * 6) +1;
  const imgDiceOne = 'Dices/noppa' + firstNum + '.png';
  document.querySelectorAll('img')[0].setAttribute('src', imgDiceOne);

if (firstNum !== 1) {
   document.getElementById("diceNums").innerHTML = "Heitit luvun " + firstNum;
   roundCountPlayer1 += firstNum;
   displayRoundPoints();
   displayPoints1();
}
if (firstNum == 1) {
   roundCountPlayer1 = 0;
   displayRoundPoints();
   displayPoints1();
   shift1();
  }
}

function displayRoundPoints() {
  document.getElementById("roundScores1").innerHTML = "Kierroksen pisteet: " + roundCountPlayer1;
}

function displayPoints1() {
  document.getElementById("scores1").innerHTML = "Pistesaldo: " + totalScorePlayer1 + " /100 ";
}

function shift1() {
  document.getElementById("diceNums").innerHTML = "Nopassa silmäluku yksi. Kierroksen pisteet 0";
  document.getElementById("pass1").style.visibility = "hidden";
  document.getElementById("roll1").style.visibility = "hidden";
  document.getElementById("pass2").style.visibility = "visible";
  document.getElementById("roll2").style.visibility = "visible";
  roundCountPlayer1 = 0;  
}

function stopAndpass1() {
  totalScorePlayer1 += roundCountPlayer1;
  displayPoints1();
  document.getElementById("diceNums").innerHTML = "Vuoro siirtyy pelaajalle 2";
  document.getElementById("pass1").style.visibility = "hidden";
  document.getElementById("roll1").style.visibility = "hidden";
  document.getElementById("pass2").style.visibility = "visible";
  document.getElementById("roll2").style.visibility = "visible";
  roundCountPlayer1 = 0;  
}

//pelaaja kaksi 
let roll2Btn = document.getElementById("roll2");
roll2Btn.addEventListener(click, rollPlayer2());

function rollPlayer2() {
  const firstNum2 = Math.floor(Math.random() * 6) +1;
  const imgDiceOne2 = 'Dices/noppa' + firstNum2 + '.png';
  document.querySelectorAll('img')[0].setAttribute('src', imgDiceOne2);

if (firstNum2 !== 1) {
  document.getElementById("diceNums").innerHTML = "Heitit luvun " + firstNum2;
  roundCountPlayer2 += firstNum2;
  displayRoundPoints2();
  displayPoints2();
}
if (firstNum2 == 1) {
  roundCountPlayer2 = 0;
  displayRoundPoints2();
  displayPoints2();
  shift2();
  }
}

function displayRoundPoints2() {
  document.getElementById("roundScores2").innerHTML = "Kierroksen pisteet: " + roundCountPlayer2;
}

function displayPoints2() {
  document.getElementById("scores2").innerHTML = "Pistesaldo: " + totalScorePlayer2 + " /100 ";
}

function shift2() {
  document.getElementById("diceNums").innerHTML = "Nopassa silmäluku yksi. Kierroksen pisteet 0";
  document.getElementById("pass2").style.visibility = "hidden";
  document.getElementById("roll2").style.visibility = "hidden";
  document.getElementById("pass1").style.visibility = "visible";
  document.getElementById("roll1").style.visibility = "visible";
  roundCountPlayer2 = 0;  
}

function stopAndpass2() {
  totalScorePlayer2 += roundCountPlayer2;
  displayPoints2(); 
  document.getElementById("diceNums").innerHTML = "Vuoro siirtyy pelaajalle 1";
  document.getElementById("pass2").style.visibility = "hidden";
  document.getElementById("roll2").style.visibility = "hidden";
  document.getElementById("pass1").style.visibility = "visible";
  document.getElementById("roll1").style.visibility = "visible";
  roundCountPlayer2 = 0;  
}

function hide() {
  document.getElementById("pass1").style.visibility = "hidden";
  document.getElementById("roll1").style.visibility = "hidden";
  document.getElementById("pass2").style.visibility = "hidden";
  document.getElementById("roll2").style.visibility = "hidden";
  document.getElementById("newGame").style.display = "";
  document.getElementById("resetAll").style.display = "";
}

function startNew() {
  totalScorePlayer1 = 0;
  totalScorePlayer2 = 0;
  roundCountPlayer1 = 0;
  roundCountPlayer2 = 0;
  document.getElementById("newGame").style.display = "none";
  document.getElementById("pass2").style.visibility = "visible";
  document.getElementById("roll2").style.visibility = "visible";
  document.getElementById("pass1").style.visibility = "visible";
  document.getElementById("roll1").style.visibility = "visible";
  document.getElementById("diceNums").innerHTML = "Hävinnyt pelaaja aloittaa";
}

