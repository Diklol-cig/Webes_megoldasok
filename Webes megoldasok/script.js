const choices = document.querySelectorAll('.choice');

const userChoiceSpan = document.getElementById('userChoice');

const computerChoiceSpan = document.getElementById('computerChoice');

const outcomeSpan = document.getElementById('outcome');

const choicesArray = ['rock', 'paper', 'scissors'];

let WIN = 0;
let LOSE = 0;
let TIE = 0;

choices.forEach(choice => choice.addEventListener('click', e => {
	userChoice = e.target.id;
	console.log(userChoice);
	userChoiceSpan.textContent = userChoice;
	computerChoice = choicesArray[Math.floor(Math.random() * choicesArray.length)];
	computerChoiceSpan.textContent = computerChoice;
	outcome = determineOutcome(userChoice, computerChoice);
	outcomeSpan.textContent = outcome;
	
	if(userChoice==="rock"){
        document.getElementById("player-image").src = "rock.png";
    }
    else if(userChoice==="paper"){
        document.getElementById("player-image").src = "paper.png";
    }
    else if(userChoice==="scissors"){
        document.getElementById("player-image").src = "scissors.png";
    }

    if(computerChoice==="rock"){
        document.getElementById("computer-image").src = "rock.png";
    }
    else if(computerChoice==="paper"){
        document.getElementById("computer-image").src = "paper.png";
    }
    else if(computerChoice==="scissors"){
        document.getElementById("computer-image").src = "scissors.png";
    }
}));

function determineOutcome(userChoice, computerChoice) {
	if (userChoice === computerChoice) {
		TIE++;
		document.getElementById("TIE").innerHTML = TIE;

		return "Döntetlen!";
	} 
	else if ((userChoice === "rock" && computerChoice === "scissors") || 
			   (userChoice === "paper" && computerChoice === "rock") ||
			   (userChoice === "scissors" && computerChoice === "paper")) {
			WIN++;
			document.getElementById("WIN").innerHTML = WIN;
			return "Gratulálok, nyertél!";
	} 
	else {
		LOSE++;
		document.getElementById("LOSE").innerHTML = LOSE;
		return "Vesztettél!";
	}
}
function resetGame() {
	userChoiceSpan.textContent = "";
    computerChoiceSpan.textContent = "";
    outcomeSpan.textContent = "";
    WIN = 0;
    LOSE = 0;
    TIE = 0;
}

