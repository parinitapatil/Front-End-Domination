const scissor = document.querySelector('.scissor');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
let a = '';
scissor.addEventListener('click', () => playGame('scissor'));
rock.addEventListener('click', () => playGame('rock'));
paper.addEventListener('click', () => playGame('paper'));

function computerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    const choose = Math.floor(Math.random() * choices.length);
    return choices[choose];
}



function playGame(userchoice) {
    a = userchoice;
    const comp = computerChoice();
    const result = matchChoices(a, comp);
    alert(`You chose: ${a}\nComputer chose: ${comp}\n${result}`)
}
// rock, paper,scissor=> click✅
// choice (user)✅
// computer (computer)✅
// match choices
function matchChoices(user, computer) {
    if (user === computer) {
        return 'Tie'
    }
    if ((user === 'rock' && computer === 'scissor') || (user === 'paper' && computer === 'rock') || (user === 'scissor' && computer === 'paper')){
        return 'You win'
    }
    else {
        return 'You Lose'
    }
}
// win lose tie