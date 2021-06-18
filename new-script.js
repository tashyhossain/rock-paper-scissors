const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

let info = document.querySelector('#select-info');
let result = document.querySelector('#result');
let summary = document.querySelector('#summary');
let computerTotal = document.querySelector('#comp');
let playerTotal = document.querySelector('#you');
let computerWin = document.querySelector('#comp-score');
let playerWin = document.querySelector('#you-score');

computerTotal.textContent = '0';
playerTotal.textContent = '0';

function select(choice) {
  info.textContent = `Select ${choice}`;
  this.removeEventListener('mouseout', () => select());
}

rock.onmouseover = () => select("Rock");
// rock.onmouseout = () => removeSelect();
paper.onmouseover = () =>  select("Paper");
// paper.onmouseout = () => removeSelect();
scissors.onmouseover = () =>  select("Scissors");
// scissors.onmouseout = () => removeSelect();

function computerPlay() {
  const options = ["Rock", "Paper", "Scissors"];
  let random = Math.floor(Math.random() * 3);
  return options[random];
}

function play(player, opponent) {
  const results = ['You Win!', 'You Lose!'];
  const conditions = ['Paper covers Rock', 'Rock breaks Scissors', 'Scissors cut Paper'];
  
  let computerScore = parseInt(computerTotal.textContent);
  let playerScore = parseInt(playerTotal.textContent);

  let final = { r: results, c: conditions };
  if (playerScore < 4 && computerScore < 4) {
    if (opponent === player) {
      result.textContent = `You Draw!`;
      summary.textContent = `Standoff with ${player}`;
    } else {
      if (opponent === 'Rock') {
        if (player === 'Paper') {
          final = { r: results[0], c: conditions[0] };
          playerScore++;
        } else {
          final = { r: results[1], c: conditions[1] };
          computerScore++;
        }
      } else if (opponent === 'Paper') {
        if (player === 'Scissors') {
          final = { r: results[0], c: conditions[2] };
          playerScore++;
        } else {
          final = { r: results[1], c: conditions[0] };
          computerScore++;
        }
      } else {
        if (player === 'Rock') {
          final = { r: results[0], c: conditions[1] };
          playerScore++;
        } else {
          final = { r: results[1], c: conditions[2] };
          computerScore++;
        }
      }
    result.textContent = final.r;
    summary.textContent = final.c;
    playerTotal.textContent = playerScore;
    computerTotal.textContent = computerScore;
    } 
  } else {
    if (playerScore === 5) {
      playerWin.textContent = 'Winner :)';
    } else if (computerScore === 5) {
      playerWin.textContent = 'Loser :(';
    }
    info.innerHTML = '<a href="#">Play Again!</a>';
  }
} 

  rock.addEventListener('click', () => {
      play("Rock", computerPlay());
  });

  paper.addEventListener('click', () => {
    play("Paper", computerPlay());
  });

  scissors.addEventListener('click', () => {
    play("Scissors", computerPlay());
  });
