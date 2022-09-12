const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ""
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! we chose ${DEFAULT_USER_CHOICE} for You!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

// if (cChoice === pChoice) {
//   return RESULT_DRAW
// } else if
//   (cChoice === ROCK && pChoice === PAPER ||
//   cChoice === PAPER && pChoice === SCISSORS ||
//   cChoice === SCISSORS && pChoice === ROCK
//   ) {
//   return RESULT_PLAYER_WINS
// } else {
//   return RESULT_COMPUTER_WINS
// }

startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is Striting...");
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  let winner;
  if (playerChoice) {
    const winner = getWinner(computerChoice, playerChoice);
  } else {
    winner = getWinner(computerChoice, playerChoice);
  }
  let message = `You picked ${
    playerChoice || DEFAULT_USER_CHOICE
  }, computer picked ${computerChoice}, therefore you had a draw.`;
  if (winner === RESULT_DRAW) {
    message = message + "had a draw";
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + "won";
  } else {
    message = message + "lost";
  }
  alert(message);
  gameIsRunning = false;
});

const combine = (resultHandler, operation, ...numbers) => {
  const vaildateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };

  let sum = 0;
  for (const num of numbers) {
    if (operation === "ADD") {
      sum += vaildateNumber(num);
    } else {
      sum -= vaildateNumber(num);
    }
  }
  resultHandler(sum, "The result after adding all number is");
};

const subtractUp = function (resultHandler, ...numbers) {
  let sum = 0;
  for (const num of numbers) {
    sum -= num;
  }
  resultHandler(sum, "The result after adding all number is");
};

const showResult = (messageText, result) => {
  alert(messageText + " " + result);
};

combine(
  showResult.bind(this, "The result after adding all number is:"),
  "ADD",
  5,
  10,
  -3,
  6,
  10
);
combine(
  showResult.bind(this, "The result after adding all number is:"),
  "ADD",
  5,
  10,
  -3,
  6,
  10,
  25,
  88
);
combine(
  showResult.bind(this, "The result after subtracting all number is:"),
  "SUBSTRACK",
  10,
  15,
  20
);
