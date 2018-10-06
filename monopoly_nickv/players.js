let playersTurn = 0;

function players()
{
	let playerCount = [4];

	let player[0] = {
		name: "Player 1",
		properties: 0,
		money: 1000
	};
	let player[1] = {
		name: "Player 2",
		properties: 0,
		money: 1000
	};
	let player[2] = {
		name: "Player 3",
		properties: 0,
		money: 1000
	};
	let player[3] = {
		name: "Player 4",
		properties: 0,
		money: 1000
	};
}
function checkPlayerTurn() {
	
	if(playersTurn ==0)
	playersTurn++;
	if (playersTurn == 1) 
	playersTurn++; 
	if (playersTurn == 2) 
	playersTurn++; 
	if (playersTurn == 3)	
	playersTurn = 0;
	return playersTurn;
}
function rollDice() {
	let diceRolled = Math.floor((Math.random() * 11) + 1);
	return diceRolled;
}
