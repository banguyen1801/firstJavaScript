
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  }else {
    console.log("Error, please enter appropriate input");
  }
}
function getComputerChoice() {
  var comChoice = Math.floor(Math.random()*3);
  switch (comChoice) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === 'bomb'){
      return 'the user won.';
      }
  if (userChoice === computerChoice){
    return 'The game was a tie.';
  }
  if(userChoice === 'rock') {
    if(computerChoice === 'paper'){
      return 'the computer won.';
    }else {
      return 'the user won.';
    }
  }
  if(userChoice === 'paper') {
    if(computerChoice === 'scissors'){
      return 'the computer won.';
    }else {
      return 'the user won.';
    }
  }
  if(userChoice === 'scissors') {
    if(computerChoice === 'rock'){
      return 'the computer won.';
    }else {
      return 'the user won.';
    }
  }
}
function playGame(){
  var userChoice = getUserChoice('rock');
  var computerChoice = getComputerChoice();
  console.log(userChoice, computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}
playGame();