console.log("Hello world")
const resetButton = document.querySelector("#restart")
const squares = document.querySelectorAll(".square")

let counter = 0;

function count() {
    counter = counter + 1;
    console.log("Current clicks:" + counter);
}

const square = document.querySelector(".square");
const currentPlayer = document.querySelector("#current-player");

// function changeSquareValue() {
//     let squareValue = square.textContent;
//     if (squareValue == "X") {
//         changeToO();
//     } else {
//         changeToX();
//     }
// }

function switchPlayer() {
    if (currentPlayer.textContent === 'X') {
        currentPlayer.textContent = 'O';
    } else {
        currentPlayer.textContent = 'X';
    }
}

function playTurn(event) {
    const square = event.target;
    if (square.textContent === '') {
        square.textContent = currentPlayer.textContent;
    }
    switchPlayer()
}

// square.addEventListener("click", changeSquareValue);

for (const square of squares) {
    square.addEventListener("click", playTurn)
}

function resetGame() {
    for (const square of squares) {
        square.textContent = "";
        currentPlayer.textContent = "X";
    }
}
resetButton.addEventListener("click", resetGame)