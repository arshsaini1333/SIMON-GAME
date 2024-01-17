//Creating our sequence Array
let gameSeq = [];
let userSeq = [];

let start = false; //Tells game start or not now game is not start so its false
let level = 0;
//High Score
let high = document.querySelector(".highScore");
let highS = 0;
//Selecting Elements
let body = document.querySelector("body");
let h3 = document.querySelector("h3");

//All Buttons

let colours = ["red", "green", "blue", "yellow"];

//Starting Game
body.addEventListener("keypress", gameStart);

function gameStart() {
  h3.style.color = "black";
  if (start == false) {
    // h3.innerText = "Level 1";
    console.log("Game Start");
    start = true;
    levelUp();
  }
}

//Level Up Function
function levelUp() {
  userSeq = [];
  level++;
  h3.innerText = `Level ${level}`;

  //Random Colour Generator
  let i = Math.floor(Math.random() * 3);

  gameSeq.push(colours[i]);
  console.log(gameSeq);
  let randBtn = document.querySelector(`.${colours[i]}`);
  buttonFlash(randBtn);
}

//To flash button for one second
function buttonFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

//Checking Sequence
function checkSequence(index) {
  if (gameSeq[index] === userSeq[index]) {
    if (userSeq.length === gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h3.innerHTML = `Game Over!! Your Score was <b> ${
      level - 1
    } </b>. <br>  Press Any Key to start`;
    if (level > highS) {
      high.innerText = `High Score is: ${level - 1}`;
      highS = level;
    }
    h3.style.color = "red";
    //body.addEventListener("keypress", reset);
    reset();
  }
}
//Button Pressed By User
function btnPress() {
  let btn = this;

  let userColor = btn.getAttribute("id");

  userSeq.push(userColor);
  buttonFlash(btn);
  checkSequence(userSeq.length - 1);
}
let btns = document.querySelectorAll(".btn");
for (let btn of btns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  start = false;

  gameSeq = [];
  userSeq = [];
  level = 0;
}
