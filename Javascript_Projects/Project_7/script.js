const inp = document.querySelector(".inp");
const btn = document.querySelector(".btn");
const res = document.querySelector(".res");
const chancesLeft = document.querySelector(".chancesLeft");
let ran = Math.floor(Math.random() * 100 + 1);

let chances = 3;

function getNumber() {
  const inpValue = parseInt(inp.value.trim(), 10);
  if (isNaN(inpValue)) {
    res.textContent = "Enter a Valid Number 😐!!";
  } else if (inpValue == ran) {
    res.textContent = "Congratulations🎉🎊";
      clear();
      resetGame();
  } else if (inpValue < ran) {
    res.textContent = "Too Low 😂";
    chances--;
    updateChance();
    clear();
  } else if (inpValue > ran) {
    res.textContent = "Too High 🤣";
    chances--;
    updateChance();
    clear();
  }
  if (chances === 0) {
      res.textContent = "You Lost!!!";
      resetGame();
  }
}

function updateChance() {
  chancesLeft.textContent = chances;
}


function clear() {
    inp.value = "";
    inp.textContent = "";
}

function resetGame() {
    ran = Math.floor(Math.random() * 100 + 1);
    chances = 3;
    res.textContent = '';
    chancesLeft.textContent = chances;
    inp.value = '';
}
// event
btn.addEventListener("click", () => {
  getNumber();
});