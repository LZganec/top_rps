// this function generates the computer's choice
function getComputerChoice() {
  let randomInt = Math.floor(Math.random() * 3) + 1;
  switch (randomInt) {
    case 1:
      return "ROCK";
      break;
    case 2:
      return "PAPER";
      break;
    case 3:
      return "SCISSORS";
      break;
  }
}

// prompts the player for their choice
function getHumanChoice() {
  return prompt("Please enter your choice: ");
}

// scoreboard
let humanScore = 0;
let computerScore = 0;

// play a round of RPS
function playRound(humanChoice, computerChoice) {
  // lower cases the choices to match
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  // compares the choices and returns a result
  function getResult() {
    // status messages
    let victoryMessage = `You have won, ${humanChoice} beats ${computerChoice}!`;
    let lossMessage = `You have lost, ${computerChoice} beats ${humanChoice}!`;

    // draw
    if (humanChoice === computerChoice) {
      console.log("It's a draw!");
      return;
    }

    // handles the scoring and logs the status, the else statement is possible because we exit the function if it's a draw
    switch (humanChoice) {
      case "rock":
        if (computerChoice === "scissors") {
          humanScore++;
          console.log(victoryMessage);
        } else {
          computerScore++;
          console.log(lossMessage);
        }
        break;
      case "paper":
        if (computerChoice === "rock") {
          humanScore++;
          console.log(victoryMessage);
        } else {
          computerScore++;
          console.log(lossMessage);
        }
        break;
      case "scissors":
        if (computerChoice === "paper") {
          humanScore++;
          console.log(victoryMessage);
        } else {
          computerScore++;
          console.log(lossMessage);
        }
        break;
    }
  }
  getResult();
}

// play a game of RPS for multiple rounds
function playGame(numberOfRoundsWon) {
  do {
    // prompts the user for their choice for each round, selects a new choice for the computer as well
    let computerSelection = getComputerChoice();
    let humanSelection = getHumanChoice();

    // plays a round
    playRound(humanSelection, computerSelection);
    console.log(
      `The score is: human: ${humanScore} - computer: ${computerScore}`
    );
    // does this until one of the scores reaches the input number of victories
  } while (humanScore < numberOfRoundsWon && computerScore < numberOfRoundsWon);
  function getWinner() {
    if (humanScore === numberOfRoundsWon) {
      return "Human";
    } else return "Computer";
  }

  let theWinner = getWinner();
  console.log(`The winner is: ${theWinner}`);
}

playGame(3);
