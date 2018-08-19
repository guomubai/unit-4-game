// FIrst, get the document ready so that everything loads before we enter the Javascript
$(document).ready(function () {
	// set out the counter
	var counter = 0;
	// set out the variables that will hold wins and losses.
	var wins = " ";
	var losses = " ";
	// Next, we will set the goal number as a random nunber betweenm 19 and 120, first by setting out the function
	function randomIntFromInterval(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);

	}
	// and attach it to a variable, make sure to set the right two numbers as parameters
	var goal = randomIntFromInterval(19, 120)
	// console log it to check - and it works!
	console.log("The computer chooses: " + goal)

	// let's now show this number on the screen under "voltage"
	$("#voltage").text(goal)

	// Let's also set a counter to compare this to the goal variable -- and it works!
	var counter = 0;

	// Let's create an array for the crystals


	var crystalNumbers = [
		randomIntFromInterval(1, 12),
		randomIntFromInterval(1, 12),
		randomIntFromInterval(1, 12),
		randomIntFromInterval(1, 12)
	]

	// Then, log it out to check - it works!
	console.log(crystalNumbers);

	// THen we add the cyrstalNUmbers array value to the different crystal image eleements
	$("#crystals-1").attr("crystalValue", crystalNumbers[0]);
	$("#crystals-2").attr("crystalValue", crystalNumbers[1]);
	$("#crystals-3").attr("crystalValue", crystalNumbers[2]);
	$("#crystals-4").attr("crystalValue", crystalNumbers[3]);



	// set out what happens when you click on the crystal image
	$(".crystal-image").on("click", function () {
		// create a new variable to add the crystal value to
		var crystalVoltage = ($(this).attr("crystalValue"));
		// get the interger of that cyrstal value
		crystalVoltage = parseInt(crystalVoltage);
		// make the value of the crystal accmulate on the total
		counter += crystalVoltage;
		// then put the total on the game board
		$("#current-voltage").html("<p>" + counter + "</p>");

		// then we set out what happens if you win or lose
		if (counter === goal) {
			console.log(counter);
			console.log(goal)
			// add a win
			wins++;
			console.log("Wins: " + wins);
			// alert the win
			alert("You did it! You went back to 1982!");
			// add it to the total on the screen
			$("#winCount").html("<p>" + wins + "</p>")
			resetGame();
		}
		else if (counter > goal) {
			console.log(counter);
			console.log(goal)
			// Add a loss
			losses++;
			console.log("Losses: " + losses);
			// alert the loss
			alert("You lose! Ahh this thing doesn't even work!");
			// add it to the total on the screen
			$("#loseCount").html("<p>" + losses + "</p>")
			resetGame();
		}

		// the below function is to reset the game. I basically redid the goal number, array numbers, and set the counter back to 0
		function resetGame() {
			goal = randomIntFromInterval(19, 120)
			console.log("The computer chooses: " + goal)
			$("#voltage").text(goal)

			counter = 0;

			var crystalNumbers = [
				randomIntFromInterval(1, 12),
				randomIntFromInterval(1, 12),
				randomIntFromInterval(1, 12),
				randomIntFromInterval(1, 12)
			]

			console.log(crystalNumbers);

			$("#crystals-1").attr("crystalValue", crystalNumbers[0]);
			$("#crystals-2").attr("crystalValue", crystalNumbers[1]);
			$("#crystals-3").attr("crystalValue", crystalNumbers[2]);
			$("#crystals-4").attr("crystalValue", crystalNumbers[3]);

			
		}

		

	})

});