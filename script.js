function getComputerChoice(){
  const temp=Math.random()
  let choice;
  if (temp>=0 && temp<(1/3)){
    choice="ROCK";
  }
  else if (temp>=(1/3) && temp<(2/3)){
    choice="PAPER";
  }
  else{
    choice="SCISSORS";
  }

  return choice;
}

function getUserChoice(){
  const choice=prompt("Enter your choice(Rock, Paper or Scissor):").toUpperCase();
  return choice
}
let computerScore = 0;
let humanScore = 0;
let msg;
function playRound(humanChoice, computerChoice) {

    if (((humanChoice === 'ROCK') & (computerChoice === 'SCISSORS')) ||
        ((humanChoice === 'SCISSORS') & (computerChoice === 'PAPER')) ||
        ((humanChoice === 'PAPER') & (computerChoice === 'ROCK'))) {
        msg=`${humanChoice} beats ${computerChoice}. You win this round!`;
        humanScore++
    }
    else if (humanChoice === computerChoice) {
        msg=`You both chose ${humanChoice}. This round is a Tie!`;
    }
    else {
        msg=`${computerChoice} beats ${humanChoice}. You lose this round!`;
        computerScore++
    }
    alert(
      `${msg}
      ===SCOREBOARD===
        Player: ${humanScore}
        Computer: ${computerScore}`);
        console.log(
      `${msg}
      ===SCOREBOARD===
        Player: ${humanScore}
        Computer: ${computerScore}`);
}

function playGame(){
  for (let i=0; i<5;i++){
    const humanSelection=getUserChoice();
    const computerSelection=getComputerChoice();
    playRound(humanSelection, computerSelection)
  }
  if (computerScore > humanScore) {
        console.log('COMPUTER WINS THE GAME')
    }
    else if (humanScore > computerScore) {
        console.log('PLAYER WINS THE GAME!')
    }
    else {
        console.log('THE GAME WAS TIED!')
}

}

playGame()

