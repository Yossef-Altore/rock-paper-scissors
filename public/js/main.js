// get all the elements that i need to update during the game
let roundCounter = document.getElementById("roundCounter");
let playerWinCounter = document.getElementById("playerWinCounter");
let tiesCounter = document.getElementById("tiesCounter");
let computerWinCounter = document.getElementById("computerWinCounter");
let playerHandImage = document.getElementById("playerHandImage");
let computerHandImage = document.getElementById("computerHandImage");
let rockIcon = document.getElementById("rockIcon");
let paperIcon = document.getElementById("paperIcon");
let scissorsIcon = document.getElementById("scissorsIcon");
let computerHandImages = [
  "./images/rock-rtl.png",
  "./images/paper-rtl.png",
  "./images/scissor-rtl.jpg",
];
let theChosenComputerImage;
let playerWinCounterli = document.getElementById("playerWinCounterli");
let tiesCounterli = document.getElementById("tiesCounterli");
let computerWinCounterli = document.getElementById("computerWinCounterli");
let mainDivInSecond100vh = document.getElementById("mainDivInSecond100vh");
let playTheGameIcon = document.getElementById("playTheGameIcon");
let playerDiv = document.getElementById("playerDiv");
let computerDiv = document.getElementById("computerDiv");
let howMuchDegHandRotate = 40;
// function to smoth scrollig on clicking on the play icon
playTheGameIcon.addEventListener("click", () => {
  mainDivInSecond100vh.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
});
function changeBgcToWinCounterWithHighScore() {
  setTimeout(() => {
    let playerValue = playerWinCounter.innerText;
    let computerValue = computerWinCounter.innerText;
    playerValue = parseInt(playerValue, 10);
    computerValue = parseInt(computerValue, 10);
    if (playerValue > computerValue) {
      playerWinCounterli.style.backgroundColor = "green";
      computerWinCounterli.style.backgroundColor = "red";
      playerWinCounterli.style.color = "white";
      computerWinCounterli.style.color = "white";
    } else if (playerValue < computerValue) {
      computerWinCounterli.style.backgroundColor = "green";
      playerWinCounterli.style.backgroundColor = "red";
      playerWinCounterli.style.color = "white";
      computerWinCounterli.style.color = "white";
    } else {
      computerWinCounterli.style.backgroundColor = "yellow";
      playerWinCounterli.style.backgroundColor = "yellow";
      playerWinCounterli.style.color = "black";
      computerWinCounterli.style.color = "black";
    }
  }, 600);
}
//function to update the round number
function updateRoundCounter() {
  let value = roundCounter.innerText;
  value = parseInt(value, 10);
  value = value + 1;
  roundCounter.innerText = value;
}

//change player hand by clicking on the icons
// 1-rock icon
function changePlayerHandToRock() {
  playerHandImage.style.transform = "rotate(-15deg)";
  setTimeout(() => {
    playerHandImage.src = "./images/rock-ltr.jpg";
    playerHandImage.style.transform = "rotate(0deg)";
  }, 100);
}
//-2 paper icon
function changePlayerHandToPaper() {
  playerHandImage.style.transform = "rotate(-15deg)";
  setTimeout(() => {
    playerHandImage.src = "./images/paper-ltr.jpg";
    playerHandImage.style.transform = "rotate(0deg)";
  }, 100);
}
//-3 scissors icon
function changePlayerHandToScissors() {
  playerHandImage.style.transform = "rotate(-15deg)";
  setTimeout(() => {
    playerHandImage.src = "./images/scissor-ltr.png";
    playerHandImage.style.transform = "rotate(0deg)";
  }, 100);
}
/* randomly change the computer hand image    */
function changeComputerHandImageRandomly() {
  theChosenComputerImage = Math.floor(
    Math.random() * computerHandImages.length
  );
  computerHandImage.style.transform = "rotate(15deg)";
  setTimeout(() => {
    computerHandImage.src = computerHandImages[theChosenComputerImage];
    computerHandImage.style.transform = "rotate(0deg)";
  }, 100);
}
// update the player win counter
function updatePlayerWinCounter() {
  let valueOfPlayerWinCounter = playerWinCounter.innerText;
  valueOfPlayerWinCounter = parseInt(valueOfPlayerWinCounter, 10);
  valueOfPlayerWinCounter = valueOfPlayerWinCounter + 1;
  playerWinCounter.innerText = valueOfPlayerWinCounter;
  playerDiv.style.border = "5px solid green";
  computerDiv.style.border = "5px solid red";
  setTimeout(() => {
    playerDiv.style.border = "";
    computerDiv.style.border = "";
  }, 200);
}
// update the tie counter
function updateTiesCounter() {
  let valueOfTiesCounter = tiesCounter.innerText;
  valueOfTiesCounter = parseInt(valueOfTiesCounter, 10);
  valueOfTiesCounter = valueOfTiesCounter + 1;
  tiesCounter.innerText = valueOfTiesCounter;
  tiesCounterli.style.background = "yellow";
  playerDiv.style.border = "5px solid yellow";
  computerDiv.style.border = "5px solid yellow";
  setTimeout(() => {
    playerDiv.style.border = "";
    computerDiv.style.border = "";
    tiesCounterli.style.background = "";
  }, 200);
}
//update of computer win counter
function updateComputerWinCounter() {
  let valueOfComputerWinCounter = computerWinCounter.innerText;
  valueOfComputerWinCounter = parseInt(valueOfComputerWinCounter, 10);
  valueOfComputerWinCounter = valueOfComputerWinCounter + 1;
  computerWinCounter.innerText = valueOfComputerWinCounter;
  playerDiv.style.border = "5px solid red";
  computerDiv.style.border = "5px solid green";
  setTimeout(() => {
    playerDiv.style.border = "";
    computerDiv.style.border = "";
  }, 200);
}
//main functions-events on clicking on icons
rockIcon.addEventListener("click", () => {
  changePlayerHandToRock();
  updateRoundCounter();
  changeComputerHandImageRandomly();
  setTimeout(() => {
    if (theChosenComputerImage == 0) {
      updateTiesCounter();
    }
    if (theChosenComputerImage == 1) {
      updateComputerWinCounter();
    }
    if (theChosenComputerImage == 2) {
      updatePlayerWinCounter();
    }
  }, 500);
  changeBgcToWinCounterWithHighScore();
});
paperIcon.addEventListener("click", () => {
  changePlayerHandToPaper();
  updateRoundCounter();
  changeComputerHandImageRandomly();
  setTimeout(() => {
    if (theChosenComputerImage == 1) {
      updateTiesCounter();
    }
    if (theChosenComputerImage == 2) {
      updateComputerWinCounter();
    }
    if (theChosenComputerImage == 0) {
      updatePlayerWinCounter();
    }
  }, 500);
  changeBgcToWinCounterWithHighScore();
});
scissorsIcon.addEventListener("click", () => {
  changePlayerHandToScissors();
  updateRoundCounter();
  changeComputerHandImageRandomly();
  setTimeout(() => {
    if (theChosenComputerImage == 2) {
      updateTiesCounter();
    }
    if (theChosenComputerImage == 0) {
      updateComputerWinCounter();
    }
    if (theChosenComputerImage == 1) {
      updatePlayerWinCounter();
    }
  }, 500);
  changeBgcToWinCounterWithHighScore();
});
/*  start of rock paper scissors spock lizard                              */
//
//get elements

let menuHamburgerSign = document.getElementById("menuHamburgerSign");
let slidingPageOnClickingOnTheHamburger = document.getElementById(
  "slidingPageOnClickingOnTheHamburger"
);
let circledXicon = document.getElementById("circledXicon");
let mainDiv = document.getElementById("mainDiv");

// on clicking on menuHamburgerSign page will get display block;
menuHamburgerSign.addEventListener("click", () => {
  slidingPageOnClickingOnTheHamburger.style.display = "block";
  slidingPageOnClickingOnTheHamburger.style.opacity = "100";
  slidingPageOnClickingOnTheHamburger.style.animation = "";
  mainDiv.style.display = "flex";
  mainDiv.style.animation = "slideFromLeft 2s linear";
  circledXicon.style.display = "block";
  circledXicon.style.animation = "fromOpacity0To100 4s linear";
});
// on clicking on circledXicon page will get display block;
circledXicon.addEventListener("click", () => {
  slidingPageOnClickingOnTheHamburger.style.animation = "fromOpacity100To0 3s";
  setTimeout(() => {
    slidingPageOnClickingOnTheHamburger.style.display = "none";
  }, 2900);
});
