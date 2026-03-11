const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");

let currentPlayer = "X";
let gameActive = true;

let gameState = ["","","","","","","","",""];

let xScore = 0;
let oScore = 0;

const winConditions = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];

cells.forEach(cell => {
    cell.addEventListener("click", cellClick);
});


function cellClick(){

    const index = this.getAttribute("data-index");

    if(gameState[index] !== "" || !gameActive){
        return;
    }

    gameState[index] = currentPlayer;
    this.textContent = currentPlayer;

    checkWinner();
}


function checkWinner(){

    let roundWon = false;

    for(let i=0;i<winConditions.length;i++){

        const [a,b,c] = winConditions[i];

        if(
            gameState[a] &&
            gameState[a] === gameState[b] &&
            gameState[a] === gameState[c]
        ){

            roundWon = true;

            cells[a].classList.add("win");
            cells[b].classList.add("win");
            cells[c].classList.add("win");

            break;
        }
    }

    if(roundWon){

        statusText.textContent = "Player " + currentPlayer + " Wins!";
        gameActive = false;

        if(currentPlayer === "X"){
            xScore++;
            document.getElementById("xScore").textContent = xScore;
        }else{
            oScore++;
            document.getElementById("oScore").textContent = oScore;
        }

        return;
    }

    if(!gameState.includes("")){
        statusText.textContent = "It's a Draw!";
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.textContent = "Player " + currentPlayer + " Turn";
}


function resetGame(){

    gameState = ["","","","","","","","",""];
    gameActive = true;
    currentPlayer = "X";

    statusText.textContent = "Player X Turn";

    cells.forEach(cell => {
        cell.textContent = "";
        cell.classList.remove("win");
    });

}