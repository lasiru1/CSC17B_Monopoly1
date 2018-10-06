
function cCards(randomCard)
{
	
	let cCardDisplay = document.creatElement("0.png");
	cCardDisplay.width = 200;
	cCardDisplay.height = 100;

	let cardGenerator = Math.floor((Math.random() * 16) -1);

	cCardDisplay = document.creatElement((cardGenerator) + ".png");
	document.getElementById("cCardDisplayOnScreen").innerHTML=cCardDisplay;

	return cardGenerator;
}

function cCardEffect()
{
	alert("hello");
	let cardGeneratorFinal = cCards();
	switch(cardGeneratorFinal)
	{
		case "0":

		break;
		case "1":

		break;
		case "2":

		break;
		case "3":

		break;
		case "4":

		break;
		case "5":

		break;
		case "6":

		break;
		case "7":

		break;
		case "8":

		break;
		case "9":

		break;
		case "10":

		break;
		case "11":

		break;
		case "12":

		break;
		case "13":

		break;
		case "14":

		break;
		case "15":

		break;
		default:

		break;

	}

}