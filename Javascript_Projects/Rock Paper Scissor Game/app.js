// Choices 
const choices = ['rock', 'paper', 'scissor'];

// select
const playerChoice = document.querySelectorAll('#player img');
const computerChoice = document.querySelector('#computer img');
const reset = document.querySelector('#reset');
const playerScore = document.querySelector('#y');
const computerScore = document.querySelector('#c');
const result = document.querySelector('#result p');

let pScore = 0;
let cScore = 0;

// computer choice
function getComputerchoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// result
function getResult(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "🏮It's A Draw🏮";
    }
    if((playerChoice==='rock' && computerChoice==='scissor')||
    (playerChoice==='scissor' && computerChoice==='paper')||
    (playerChoice === 'paper' && computerChoice === 'rock')) {
        pScore++;
        return "🎉You Win🎉"
    }
    cScore++;
    return "🎉Computer Wins🎉"
    
}
function display(res) {
    result.textContent = res;
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
}

// playerchoice
playerChoice.forEach(img => {
    img.addEventListner('click', () => {
        const p = img.id;
        const c = getComputerchoice();

        // computer choice update
        computerChoice.src = `/Javascript_Projects/Rock Paper Scissor Game/${c}.png`;

        const r = getResult(p, c);
        display(r);
    });
})

reset.addEventListner('click', () => {
  pScore = 0;
  cScore = 0;
  display("⭐Choose Weapon⭐");
  computerChoiceImg.src =
    "/Javascript_Projects/Rock Paper Scissor Game/rock.png"; // Reset computer's image
})
