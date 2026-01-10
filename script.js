
// DOM Manip
const containerDiv = document.querySelector('.container')
const headerTitle = document.createElement('h1');
const gameIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>nintendo-game-boy</title><path d="M7 1C5.9 1 5 1.9 5 3V21C5 22.11 5.9 23 7 23H14C16.76 23 19 20.76 19 18V3C19 1.9 18.11 1 17 1H7M8 4H16V11H8V4M9 14H10V16H12V17H10V19H9V17H7V16H9V14M16 15C16.55 15 17 15.45 17 16C17 16.55 16.55 17 16 17C15.45 17 15 16.55 15 16C15 15.45 15.45 15 16 15M14 17C14.55 17 15 17.45 15 18C15 18.55 14.55 19 14 19C13.45 19 13 18.55 13 18C13 17.45 13.45 17 14 17Z" /></svg>`
headerTitle.innerHTML = 'Tic-Tac-Toe Game ' + gameIcon + `<br><i>(Jallen's Touch!)</i>`; 
const sideBarDiv = document.createElement('div');

sideBarDiv.classList.add ('sideBar');
const infoParagraph = document.createElement('p');
const playerSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>card-account-details</title><path d="M2,3H22C23.05,3 24,3.95 24,5V19C24,20.05 23.05,21 22,21H2C0.95,21 0,20.05 0,19V5C0,3.95 0.95,3 2,3M14,6V7H22V6H14M14,8V9H21.5L22,9V8H14M14,10V11H21V10H14M8,13.91C6,13.91 2,15 2,17V18H14V17C14,15 10,13.91 8,13.91M8,6A3,3 0 0,0 5,9A3,3 0 0,0 8,12A3,3 0 0,0 11,9A3,3 0 0,0 8,6Z" /></svg>`
infoParagraph.innerHTML = 'Players Info ' + playerSvg;


const startButton = document.createElement('button')
const startIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>power-standby</title><path d="M13,3H11V13H13V3M17.83,5.17L16.41,6.59C18.05,7.91 19,9.9 19,12A7,7 0 0,1 12,19C8.14,19 5,15.88 5,12C5,9.91 5.95,7.91 7.58,6.58L6.17,5.17C2.38,8.39 1.92,14.07 5.14,17.86C8.36,21.64 14.04,22.1 17.83,18.88C19.85,17.17 21,14.65 21,12C21,9.37 19.84,6.87 17.83,5.17Z" /></svg>`
startButton.classList.add('start-btn')
startButton.innerHTML = 'START ' + startIcon

const reStartButton = document.createElement('button');
    const restartIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>restart</title><path d="M12,4C14.1,4 16.1,4.8 17.6,6.3C20.7,9.4 20.7,14.5 17.6,17.6C15.8,19.5 13.3,20.2 10.9,19.9L11.4,17.9C13.1,18.1 14.9,17.5 16.2,16.2C18.5,13.9 18.5,10.1 16.2,7.7C15.1,6.6 13.5,6 12,6V10.6L7,5.6L12,0.6V4M6.3,17.6C3.7,15 3.3,11 5.1,7.9L6.6,9.4C5.5,11.6 5.9,14.4 7.8,16.2C8.3,16.7 8.9,17.1 9.6,17.4L9,19.4C8,19 7.1,18.4 6.3,17.6Z" /></svg>`
    reStartButton.classList.add('restart-btn')
    reStartButton.innerHTML = 'RESTART ' + restartIcon;
    reStartButton.classList.add('hidden'); //hide restart button on load

sideBarDiv.append(infoParagraph, startButton);


const GameBoard =  (() => { // Game Board factory function
    let board = ["", "", "", "", "","", "", "", ""]; // The board stored as an array
    
    const getBoard = () => board; // currentState of the Board

    const placeMarker = (index, marker) => {
        if(board[index] == ''){
            board[index] = marker;
            return true;
        }
        return false;
    };

    const resetBoard = () => {
        for (let i = 0; i < board.length; i++){
            board[i] = ''
        }
    };
    
    return {getBoard, placeMarker, resetBoard};
})();

const Players = (name, marker) => {
    return {name, marker}
}


const DisplayController = (() => {
    
    const statusMessage = document.createElement('h2');

    const updateStatus = (message) => {
        if(statusMessage){
            statusMessage.textContent = message
        }
        // console.log(message); // Message for Console Log
        
    };

    const gameInterfaceDiv = document.createElement('div');
    gameInterfaceDiv.classList.add ('content');
    

    //function to create 3x3 grid
    const createGrid = () => {
        gameInterfaceDiv.innerHTML = "";
        for (let i = 0; i < 9; i++){
            const cellDiv = document.createElement('div');
            
            cellDiv.classList.add('cell');
            cellDiv.dataset.index = i;

            gameInterfaceDiv.appendChild(cellDiv);   
        }
    };

    const highlightWinner = (indices) => {
        const cells = document.querySelectorAll('.cell');
        indices.forEach(index => {
            cells[index].classList.add('winner-cell');
        })
    };
    const resetDisplay = () => {
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            cell.classList.remove('winner-cell');
        })
    }

    //function to sync HTML text with Gameboard array
    const updateDisplay = () => {
        
        const board = GameBoard.getBoard();
        const cells = document.querySelectorAll('.cell');
        cells.forEach((cell,i) => {
            cell.textContent = board[i]

            //Adding different color on each marker
            if(board[i] === 'X'){
                cell.classList.add('x-marker');
            }else if(board[i] === 'O'){
                cell.classList.add('o-marker');
            }
        });
    };

    //function for EventListeners
    const addListeners = () => {
        gameInterfaceDiv.addEventListener('click', (e) => {
            if(e.target.classList.contains("cell")){
                const index = e.target.dataset.index;
                GameController.playRound(index);
            }
        });
        if(reStartButton){
            reStartButton.addEventListener('click', () => {
                reStartButton.classList.add("hidden");
                GameController.resetGame();
                updateDisplay();
            });
        }
    };
    createGrid();
    addListeners();

    containerDiv.append(sideBarDiv, gameInterfaceDiv);
    document.body.append(headerTitle, statusMessage, containerDiv, reStartButton);
    return{updateStatus, updateDisplay, highlightWinner, resetDisplay}
    

})();

   //////////////////////////////////////////////

const GameController = (() => {
    let players = [];
    let activePlayerIndex = 0;
    let isGameOver = false;
    
    let playerName1, playerName2;
    
    const startGame = () => {
        const startGameBtn = document.querySelector('.start-btn');
        playerName1 = document.createElement('input');
        playerName2 = document.createElement('input');
        playerName1.placeholder = "Enter Your Name...";
        playerName2.placeholder = "Enter Your Name...";

        sideBarDiv.insertBefore(playerName1, startButton);
        sideBarDiv.insertBefore(playerName2, startButton)

        startGameBtn.addEventListener('click', () =>{
            const name1 = playerName1.value || "Player 1"; // used for to not to let a blank value at a Display
            const name2 = playerName2.value || "Player 2";

            players = [
            { name: name1, marker: "X"},
            { name: name2, marker: "O"}
            ];
            activePlayerIndex = 0;
            isGameOver = false;

            sideBarDiv.classList.add('hidden');
            reStartButton.classList.remove("hidden");
            
            DisplayController.updateStatus(`${players[activePlayerIndex].name}'s Turn`);

        });
 
    };

    const getActivePlayer = () => players[activePlayerIndex];

    const playRound = (index) => {
        
        if(isGameOver || players.length === 0) return;

        const currentPlayer = getActivePlayer();        

        if(GameBoard.placeMarker(index, currentPlayer.marker)){
            DisplayController.updateDisplay();

            const winCombo = checkWinner();
            if(winCombo){
                isGameOver =  true;
                DisplayController.updateStatus(`${currentPlayer.name} Wins!`);
                DisplayController.highlightWinner(winCombo);

            } else if(!GameBoard.getBoard().includes("")){
                isGameOver = true;
                DisplayController.updateStatus("It's a Tie!")
            } else{
                activePlayerIndex = activePlayerIndex === 0 ? 1 : 0;
                DisplayController.updateStatus(`${getActivePlayer().name}'s Turn`)
                
            }  
        } 
    };
 
    const checkWinner = () => {
        const board = GameBoard.getBoard();
        const winConditions = [
            [0,1,2], [3,4,5], [6,7,8], // rows wins
            [0,3,6], [1,4,7], [2,5,8], // column wins
            [0,4,8],[2,4,6]            // diagonal wins 
        ];
        
        const winningCombination = winConditions.find(condition => {
            const [a, b, c] = condition;
            return board[a] !== "" && board[a] === board[b] && board[a] === board[c];
        });
        return winningCombination;

    };
    
    const resetGame = () => {
        GameBoard.resetBoard();
        activePlayerIndex = 0;
        isGameOver = false;

        DisplayController.resetDisplay();
        
        sideBarDiv.classList.remove('hidden');

        if(playerName1 && playerName2){
            playerName1.value = "";
            playerName2.value = "";
        }

        DisplayController.updateStatus("")
    }
    

    return {playRound, startGame, resetGame}

})();
GameController.startGame();