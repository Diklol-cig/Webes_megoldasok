const choices = document.querySelectorAll('.choice');
const userChoiceSpan = document.getElementById('userChoice');
const computerChoiceSpan = document.getElementById('computerChoice');
const outcomeSpan = document.getElementById('outcome');

const choicesArray = ['rock', 'paper', 'scissors'];

choices.forEach(choice => choice.addEventListener('click', e => {
	const userChoice = e.target.id;
	userChoiceSpan.textContent = userChoice;
	const computerChoice = choicesArray[Math.floor(Math.random() * choicesArray.length)];
	computerChoiceSpan.textContent = computerChoice;
	const outcome = determineOutcome(userChoice, computerChoice);
	outcomeSpan.textContent = outcome;
}));

function determineOutcome(userChoice, computerChoice) {
	if (userChoice === computerChoice) {
		return "Döntetlen!";
	} else if ((userChoice === 'rock' && computerChoice === 'scissors') || 
			   (userChoice === 'paper' && computerChoice === 'rock') ||
			   (userChoice === 'scissors' && computerChoice === 'paper')) {
		return "Gratulálok, nyertél!";
	} else {
		return "Sajnos vesztettél, próbáld újra!";
	}
}