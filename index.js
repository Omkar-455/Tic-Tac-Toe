let boxes = document.querySelectorAll(".box");
let turnO = true;
let msg = document.querySelector(".msg")
let msgText = document.querySelector(".msg-text")
let resetBtn = document.querySelector(".reset")
let newGame = document.querySelector(".msg-btn")
let conte = document.querySelector(".container")
let count = 0;
const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O"
            turnO = false;

        }
        else {
            box.innerText = "X"
            turnO = true;

        }
        box.disabled = true
        count++;
        let iswin = checkWinner();
        if (count === 9 && !iswin) {
            draw();
        }

    })


}
)
const checkWinner = () => {
    for (let pattern of winPattern) {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;
        if (val1 !== "" && val2 !== "" && val3 !== "") {
            if (val1 === val2 && val2 === val3) {
                showWinner(val1);
                return true;
            }
        }

    }
    return false;

}
const showWinner = (val1) => {
    msgText.innerText = `Congratulation! Winner is ${val1}`
    newGame.innerText = "New Game"
    msg.classList.remove("hide")
    conte.classList.add("hide")
    disabled()
}
const disabled = () => {
    for (let box of boxes) {
        box.disabled = true
    }
}
const enabled = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const startNewGame = () => {
    turnO = true;
    count = 0;
    conte.classList.remove("hide")
    msg.classList.add("hide")
  
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const draw = () => {
    msgText.innerText = `Draw`
    newGame.innerText = "Play Again"
    msg.classList.remove("hide")
    conte.classList.add("hide")
}
resetBtn.addEventListener("click", enabled)
newGame.addEventListener("click", startNewGame)

