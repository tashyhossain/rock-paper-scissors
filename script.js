function computerPlay() {
  const options = ["Rock", "Paper", "Scissors"];
  let random = Math.floor(Math.random() * 3);
  return options[random];
}

function round(playerMove, computerMove) {
  let win = true;
  let lowercase = playerMove.toLowerCase();
  playerMove = lowercase.slice(0, 1).toUpperCase() + lowercase.slice(1);
  if (playerMove === computerMove) {
    return `You Draw with ${playerMove}`;
  } else {
    if (computerMove === "rock") {
      if (playerMove === "paper") win = true;
      if (playerMove === "scissor") win = false;
    } else if (computerMove === "paper") {
      if (playerMove === "scissor") win = true;
      if (playerMove === "rock") win = false; 
    } else if (computerMove === "scissors") {
      if (playerMove === "rock") win = true;
      if (playerMove === "paper") win = false;
    }
    let res = win ? `You Win! ${playerMove} beats ${computerMove}` :
                    `You Lose! ${computerMove} beats ${playerMove}`;
    return res;
  }
}

function game(rounds = 5) {
  while(rounds > 0) {
    let playerPlay = prompt("Rock Paper Scissors Shoot");
    console.log(round(playerPlay, computerPlay()));
    rounds--;
  }
}

game();