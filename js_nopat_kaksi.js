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
let doubles = 0;
let doubles2 = 0;
const playerOne = [];
const playerTwo = [];

let link = document.getElementById("linkBtn");
link.addEventListener(event);

function page1() {
  location.href = "zikanoppayhdellä.html";
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
  const secondNum = Math.floor(Math.random() * 6) +1;
  const imgDiceOne = 'Dices/noppa' + firstNum + '.png';
  document.querySelectorAll('img')[0].setAttribute('src', imgDiceOne);
  const imgDiceTwo = 'Dices/noppa' + secondNum + '.png';
  document.querySelectorAll('img')[1].setAttribute('src', imgDiceTwo);

if (firstNum !== 1 && secondNum !== 1) {
   document.getElementById("diceNums").innerHTML = "Heitit luvut " + firstNum + " ja " + secondNum;
   var sum = firstNum + secondNum;
   roundCountPlayer1 += sum;
   displayRoundPoints();
   displayPoints1();
}
if (firstNum == 1 && secondNum == 1) {
   document.getElementById("diceNums").innerHTML = "Tupla ykköset 25 pistettä";
   roundCountPlayer1 += 25;
   displayRoundPoints();
   displayPoints1();
   doubles += 1;
   checkDoubles();
}
if (firstNum == 2 && secondNum == 2) {
   document.getElementById("diceNums").innerHTML = "Tupla kakkoset 8 pistettä";
   roundCountPlayer1 += 8;
   displayRoundPoints();
   displayPoints1();
   doubles += 1;
   checkDoubles();
}
if (firstNum == 3 && secondNum == 3) {
   document.getElementById("diceNums").innerHTML = "Tupla kolmoset 12 pistettä";
   roundCountPlayer1 += 12;
   displayRoundPoints();
   displayPoints1();
   doubles += 1;
   checkDoubles();
}
if (firstNum == 4 && secondNum == 4) {
   document.getElementById("diceNums").innerHTML = "Tupla neloset 16 pistettä";
   roundCountPlayer1 += 16;
   displayRoundPoints();
   displayPoints1();
   doubles += 1;
   checkDoubles();
}
if (firstNum == 5 && secondNum == 5) {
   document.getElementById("diceNums").innerHTML = "Tupla vitoset 20 pistettä";
   roundCountPlayer1 += 20;
   displayRoundPoints();
   displayPoints1();
   doubles += 1;
   checkDoubles();
}
if (firstNum == 6 && secondNum == 6) {
   document.getElementById("diceNums").innerHTML = "Tupla neloset 24 pistettä";
   roundCountPlayer1 += 24;
   displayRoundPoints();
   displayPoints1();
   doubles += 1;
   checkDoubles();
}
if (firstNum == 1 && secondNum !== 1) {
   roundCountPlayer1 = 0;
   displayRoundPoints();
   displayPoints1();
   shift1();
}
if (firstNum !== 1 && secondNum == 1) {
   roundCountPlayer1 = 0;
   displayRoundPoints();
   displayPoints1();
   shift1();
  }
}

function checkDoubles() { 
if (doubles == 3) {
   roundCountPlayer1 = 0;
   displayRoundPoints();
   displayPoints1();
   shift1Double();
  }
}

function displayRoundPoints() {
  document.getElementById("roundScores1").innerHTML = "Kierroksen pisteet: " + roundCountPlayer1;
}

function displayPoints1() {
  document.getElementById("scores1").innerHTML = "Pistesaldo: " + totalScorePlayer1 + " /100 ";
}

function shift1Double() {
  document.getElementById("diceNums").innerHTML = "Kolme tuplaa peräkkäin, kierroksen pisteen 0";
  document.getElementById("pass1").style.visibility = "hidden";
  document.getElementById("roll1").style.visibility = "hidden";
  document.getElementById("pass2").style.visibility = "visible";
  document.getElementById("roll2").style.visibility = "visible";
  roundCountPlayer1 = 0;
  doubles = 0;  
}

function shift1() {
  document.getElementById("diceNums").innerHTML = "Nopassa silmäluku yksi. Kierroksen pisteet 0";
  document.getElementById("pass1").style.visibility = "hidden";
  document.getElementById("roll1").style.visibility = "hidden";
  document.getElementById("pass2").style.visibility = "visible";
  document.getElementById("roll2").style.visibility = "visible";
  roundCountPlayer1 = 0;
  doubles = 0;  
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
  doubles = 0;  
}

//pelaaja kaksi 
let roll2Btn = document.getElementById("roll2");
roll2Btn.addEventListener(click, rollPlayer2());

function rollPlayer2() {
  const firstNum2 = Math.floor(Math.random() * 6) +1;
  const secondNum2 = Math.floor(Math.random() * 6) +1;
  const imgDiceOne2 = 'Dices/noppa' + firstNum2 + '.png';
  document.querySelectorAll('img')[0].setAttribute('src', imgDiceOne2);
  const imgDiceTwo2 = 'Dices/noppa' + secondNum2 + '.png';
  document.querySelectorAll('img')[1].setAttribute('src', imgDiceTwo2);

if (firstNum2 !== 1 && secondNum2 !== 1) {
   document.getElementById("diceNums").innerHTML = "Heitit luvut " + firstNum2 + " ja " + secondNum2;
   var sum2 = firstNum2 + secondNum2;
   roundCountPlayer2 += sum2;
   displayRoundPoints2();
   displayPoints2();
}
if (firstNum2 == 1 && secondNum2 == 1) {
   document.getElementById("diceNums").innerHTML = "Tupla ykköset 25 pistettä";
   roundCountPlayer2 += 25;
   displayRoundPoints2();
   displayPoints2();
   doubles2 += 1;
   checkDoubles2();
}
if (firstNum2 == 2 && secondNum2 == 2) {
   document.getElementById("diceNums").innerHTML = "Tupla kakkoset 8 pistettä";
   roundCountPlayer2 += 8;
   displayRoundPoints2();
   displayPoints2();
   doubles2 += 1;
   checkDoubles2();
}
if (firstNum2 == 3 && secondNum2 == 3) {
   document.getElementById("diceNums").innerHTML = "Tupla kolmoset 12 pistettä";
   roundCountPlayer2 += 12;
   displayRoundPoints2();
   displayPoints2();
   doubles2 += 1;
   checkDoubles2();
}
if (firstNum2 == 4 && secondNum2 == 4) {
   document.getElementById("diceNums").innerHTML = "Tupla neloset 16 pistettä";
   roundCountPlayer2 += 16;
   displayRoundPoints2();
   displayPoints2();
   doubles2 += 1;
   checkDoubles2();
}
if (firstNum2 == 5 && secondNum2 == 5) {
   document.getElementById("diceNums").innerHTML = "Tupla vitoset 20 pistettä";
   roundCountPlayer2 += 20;
   displayRoundPoints2();
   displayPoints2();
   doubles2 += 1;
   checkDoubles2();
}
if (firstNum2 == 6 && secondNum2 == 6) {
   document.getElementById("diceNums").innerHTML = "Tupla neloset 24 pistettä";
   roundCountPlayer2 += 24;
   displayRoundPoints2();
   displayPoints2();
   doubles2 += 1;
   checkDoubles2();
}
if (firstNum2 == 1 && secondNum2 !== 1) {
   roundCountPlayer2 = 0;
   displayRoundPoints2();
   displayPoints2();
   shift2();
}
if (firstNum2 !== 1 && secondNum2 == 1) {
   roundCountPlayer2 = 0;
   displayRoundPoints2();
   displayPoints2();
   shift2();
  }
}

function checkDoubles2() { 
if (doubles2 == 3) {
   roundCountPlayer2 = 0;
   displayRoundPoints2();
   displayPoints2();
   shift2Double();
  }
}

function displayRoundPoints2() {
  document.getElementById("roundScores2").innerHTML = "Kierroksen pisteet: " + roundCountPlayer2;
}

function displayPoints2() {
  document.getElementById("scores2").innerHTML = "Pistesaldo: " + totalScorePlayer2 + " /100 ";
}

function shift2Double() {
  document.getElementById("diceNums").innerHTML = "Kolme tuplaa peräkkäin, kierroksen pisteen 0";
  document.getElementById("pass1").style.visibility = "visible";
  document.getElementById("roll1").style.visibility = "visible";
  document.getElementById("pass2").style.visibility = "hidden";
  document.getElementById("roll2").style.visibility = "hidden";
  roundCountPlayer2 = 0;
  doubles2 = 0;  
}

function shift2() {
  document.getElementById("diceNums").innerHTML = "Nopassa silmäluku yksi. Kierroksen pisteet 0";
  document.getElementById("pass2").style.visibility = "hidden";
  document.getElementById("roll2").style.visibility = "hidden";
  document.getElementById("pass1").style.visibility = "visible";
  document.getElementById("roll1").style.visibility = "visible";
  roundCountPlayer2 = 0;
  doubles2 = 0;  
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
  doubles2 = 0;  
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

