console.log("Hello world")
const resetButton = document.querySelector("#restart")
const squares = document.querySelectorAll(".square")
const square = document.querySelector(".square");
const currentPlayer = document.querySelector("#current-player");
const winAlert = document.querySelector("#win-alert");
const messageText = document.querySlector("#message");

let counter = 0;
let moves = 1;

function count() {
    counter = counter + 1;
    console.log("Current clicks:" + counter);
}

const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function switchPlayer() {
    if (currentPlayer.textContent === 'X') {
        currentPlayer.textContent = 'O';
    } else {
        currentPlayer.textContent = 'X';
    }
}

function checkWinners() {
    for (line of winningLines) {
        first = squares[line[0]].textContent;
        second = squares[line[1]].textContent;
        third = squares[line[2]].textContent;
        if (first !== "" && first === second && first === third) {
            winAlert.textContent = first + " Wins!!"
            return;
        }
    }
    if (moves == 9) {
        winAlert.textContent = "Draw";
    }
}

function playTurn(event) {
    const square = event.target;
    if (square.textContent === '') {
        square.textContent = currentPlayer.textContent;
        moves = moves +1;
    }
    checkWinners()
    switchPlayer()
}

for (const square of squares) {
    square.addEventListener("click", playTurn)
}

function resetGame() {
    for (const square of squares) {
        square.textContent = "";
        currentPlayer.textContent = "X";
        winAlert.textContent = ""
        moves = 0;
    }
}

resetButton.addEventListener("click", resetGame)