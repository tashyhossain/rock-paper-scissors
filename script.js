function computerPlay() {
  const options = ["Rock", "Paper", "Scissors"];
  let random = Math.floor(Math.random() * 3);
  return options[random];
}

function playerChoose() {
  return input = prompt("Rock. Paper. Scissors. Shoot!");
}

function playRound(player, opponent) {
  let win;
  let lowercase = player.toLowerCase();
  player = lowercase.slice(0, 1).toUpperCase() + lowercase.slice(1);
  if (opponent === player) {
    return `You Draw with ${opponent}`;
  } else {
    if (opponent === "Rock") {
      player === "Paper" ? win = true : win = false;
    } else if (opponent === "Paper") {
      player === "Scissors" ? win = true : win = false;
    } else if (opponent === "Scissors") {
      player === "Rock" ? win = true : win = false;
    }
    return win === true ? `You Win! ${player} beats ${opponent}` : 
                          `You Lose! ${opponent} beats ${player}`;
  }
}

function game(rounds = 5) {
  while (rounds > 0) {
    console.log(playRound(playerChoose(), computerPlay()));
    rounds--;
  }
}

game();
