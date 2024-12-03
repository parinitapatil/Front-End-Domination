const scissor = document.querySelector('.scissor');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
let a = '';
let userscore = 0;
let computerscore = 0;
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
        return `Tie 😐\nYour Score:${userscore} Computer Score:${computerscore}`
    }
    if ((user === 'rock' && computer === 'scissor') || (user === 'paper' && computer === 'rock') || (user === 'scissor' && computer === 'paper')){
        userscore++;
        return `You Win 🎉⭐\nYour Score : ${userscore} Computer Score : ${computerscore}`;
    }
    else {
        computerscore++;
        return `You Lose 😕\nYour Score : ${userscore} Computer Score : ${computerscore}`;
    }
}
// win lose tie