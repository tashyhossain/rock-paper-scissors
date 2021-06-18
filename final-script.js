let result = document.querySelector('#result');
let summary = document.querySelector('#summary');
let playerScore = document.querySelector('#player');
let computerScore = document.querySelector('#computer');

function computerPlay() {
  const options = ["Rock", "Paper", "Scissors"];
  let random = Math.floor(Math.random() * 3);
  return options[random];
}

function playRound(player, computer) {
  const res = { won: 'You Win!', lost: 'You Lose!', tied: 'You Draw!' };
  const msg = { 
    paper: 'Paper Covers Rock', 
    rock: 'Rock breaks Scissors',
    scissors: 'Scissors cut Paper', 
    draw: `Standoff with ${player}` 
  };

  let won;
  let final = { res: res, msg: msg, won: won };
  if (player == computer) {
    final = { res: res.tied, msg: msg.draw, won: null };
  } else {
    if (computer == 'Rock') {
      if (player == 'Paper') {
        final = { res: res.won, msg: msg.paper, won: true };
      } else {
        final = { res: res.lost, msg: msg.rock, won: false };
      }
    } else if (computer == 'Paper') {
      if (player == 'Scissors') {
        final = { res: res.won, msg: msg.scissors, won: true };
      } else { 
        final = { res: res.lost, msg: msg.paper, won: false };
      }
    } else if (computer == 'Scissors') {
      if (player == 'Rock') {
        final = { res: res.won, msg: msg.rock, won: true };
      } else {
        final = { res: res.lost, msg: msg.scissors, won: false };
      }
    }
  }
  return { res: final.res, sum: final.msg, won: final.won };
}

function update(round) {
  let {res, sum, won} = round;
  let player = parseInt(playerScore.textContent);
  let computer = parseInt(computerScore.textContent);
  if (round.won) {
    player++;
  } else if (round.won == false) {
    computer++;
  }
  playerScore.textContent = player;
  computerScore.textContent = computer;
  result.textContent = round.res;
  summary.textContent = round.sum;
}

playerScore.textContent = '0';
computerScore.textContent = '0';

function playGame(player) {
  const rock = document.querySelector('#rock');
  const paper = document.querySelector('#paper');
  const scissors = document.querySelector('#scissors');

  let playerPlay = '';
  let score1 = parseInt(playerScore.textContent);
  let score2 = parseInt(computerScore.textContent);
  let info = document.querySelector('#select-info');
  let playerWin = document.querySelector('#player-score');

  if (score1 <= 4 && score2 <= 4) {
    update(playRound(player, computerPlay()));
  } else {
    if (score1 == 5) playerWin.textContent = 'Winner :)';
    else if (score2 == 5) playerWin.textContent = 'Loser :(';
    info.textContent = 'Refresh to Play Again!';
  }
}

rock.addEventListener('click', () => {
  playGame('Rock');
});
paper.addEventListener('click', () => {
  playGame('Paper');
});
scissors.addEventListener('click', () => {
  playGame('Scissors');
});