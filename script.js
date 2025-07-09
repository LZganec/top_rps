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

function getHumanChoice() {
  return prompt("Please enter your choice: ");
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  function getResult() {
    if (humanChoice === computerChoice) {
      console.log("It's a draw!");
      return;
    }

    let victoryMessage = `You have won, ${humanChoice} beats ${computerChoice}!`;
    let lossMessage = `You have lost, ${computerChoice} beats ${humanChoice}!`;

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

function playGame() {
  do {
    let computerSelection = getComputerChoice();
    let humanSelection = getHumanChoice();
    playRound(humanSelection, computerSelection);
    console.log(
      `The score is: human: ${humanScore} - computer: ${computerScore}`
    );
  } while (humanScore < 5 && computerScore < 5);
  function getWinner() {
    if (humanScore === 5) {
      return "Human";
    } else return "Computer";
  }

  let theWinner = getWinner();
  console.log(`The winner is: ${theWinner}`);
}

playGame();
