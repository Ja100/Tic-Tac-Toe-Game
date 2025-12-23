
// DOM Manip
const containerDiv = document.querySelector('.container')
const headerTitle = document.createElement('h1');
const gameIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>nintendo-game-boy</title><path d="M7 1C5.9 1 5 1.9 5 3V21C5 22.11 5.9 23 7 23H14C16.76 23 19 20.76 19 18V3C19 1.9 18.11 1 17 1H7M8 4H16V11H8V4M9 14H10V16H12V17H10V19H9V17H7V16H9V14M16 15C16.55 15 17 15.45 17 16C17 16.55 16.55 17 16 17C15.45 17 15 16.55 15 16C15 15.45 15.45 15 16 15M14 17C14.55 17 15 17.45 15 18C15 18.55 14.55 19 14 19C13.45 19 13 18.55 13 18C13 17.45 13.45 17 14 17Z" /></svg>`
headerTitle.innerHTML = 'Tic Tac Toe Game ' + gameIcon 
const playerTurn = document.createElement('h2');
const arrowSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>arrow-right-bold</title><path d="M4,15V9H12V4.16L19.84,12L12,19.84V15H4Z" /></svg>`
playerTurn.innerHTML = "Player's Turn " + arrowSvg + " Player's Name"

const sideBarDiv = document.createElement('div');
const gameInterfaceDiv = document.createElement('div');
const winnerDiv = document.createElement('div');








sideBarDiv.classList.add ('sideBar');
const infoPragraph = document.createElement('p');
const playerSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>card-account-details</title><path d="M2,3H22C23.05,3 24,3.95 24,5V19C24,20.05 23.05,21 22,21H2C0.95,21 0,20.05 0,19V5C0,3.95 0.95,3 2,3M14,6V7H22V6H14M14,8V9H21.5L22,9V8H14M14,10V11H21V10H14M8,13.91C6,13.91 2,15 2,17V18H14V17C14,15 10,13.91 8,13.91M8,6A3,3 0 0,0 5,9A3,3 0 0,0 8,12A3,3 0 0,0 11,9A3,3 0 0,0 8,6Z" /></svg>`
infoPragraph.innerHTML = 'Players Info ' + playerSvg;
const playerName1Input = document.createElement('input')
const playerName2Input = document.createElement('input')
playerName1Input.placeholder = 'Player 1 Name'
playerName2Input.placeholder = 'Player 2 Name'

const startButton = document.createElement('button')
const startIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>power-standby</title><path d="M13,3H11V13H13V3M17.83,5.17L16.41,6.59C18.05,7.91 19,9.9 19,12A7,7 0 0,1 12,19C8.14,19 5,15.88 5,12C5,9.91 5.95,7.91 7.58,6.58L6.17,5.17C2.38,8.39 1.92,14.07 5.14,17.86C8.36,21.64 14.04,22.1 17.83,18.88C19.85,17.17 21,14.65 21,12C21,9.37 19.84,6.87 17.83,5.17Z" /></svg>`
startButton.classList.add('start-btn')
startButton.innerHTML = 'START ' + startIcon

const reStartButton = document.createElement('button');
const restartIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>restart</title><path d="M12,4C14.1,4 16.1,4.8 17.6,6.3C20.7,9.4 20.7,14.5 17.6,17.6C15.8,19.5 13.3,20.2 10.9,19.9L11.4,17.9C13.1,18.1 14.9,17.5 16.2,16.2C18.5,13.9 18.5,10.1 16.2,7.7C15.1,6.6 13.5,6 12,6V10.6L7,5.6L12,0.6V4M6.3,17.6C3.7,15 3.3,11 5.1,7.9L6.6,9.4C5.5,11.6 5.9,14.4 7.8,16.2C8.3,16.7 8.9,17.1 9.6,17.4L9,19.4C8,19 7.1,18.4 6.3,17.6Z" /></svg>`

reStartButton.classList.add('restart-btn')
reStartButton.innerHTML = 'RESTART ' + restartIcon;


sideBarDiv.append(infoPragraph, playerName1Input, playerName2Input, startButton);


gameInterfaceDiv.classList.add ('content')
gameInterfaceDiv.textContent = 'Game Interface';

winnerDiv.classList.add ('displayRslt');
winnerDiv.textContent = 'Result / Winner'
const winnerText = document.createElement('p');
winnerText.textContent ='The Winner is : Player Name';
winnerDiv.appendChild(winnerText)

containerDiv.append(sideBarDiv, gameInterfaceDiv, winnerDiv);

document.body.append(headerTitle,playerTurn, containerDiv, reStartButton)





