let result = document.querySelector('#result').textContent;
let summary = document.querySelector('#summary').textContent;
let playerScore = document.querySelector('#player').textContent;
let computerScore = document.querySelector('#computer').textContent;

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
    none: '\t' 
  };

  let won;
  let final = { res: res, msg: msg, won: won };

  if (player == computer) {
    final = { res: res.tied, msg: msg.none, won: false };
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
  return { result: final.res, summary: final.msg, won: final.won };
}

console.log(playRound('Rock', computerPlay()));

function playGame(max) {
  let 
}

