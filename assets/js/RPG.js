$(document).ready(function(){

// Start Game

//variables and objects
var playerDiv = document.createElement('div');
var yourCharacter;
var defender;




//Create four chracters – include health points, attack power, counter attack power


	var player = []
	player[0] = {
		name: 'blue',
		healthPoints: 150,
		attackPower: 50,
		counterPower: 30,	
		image: 'assets/images/player-blue.png',
		
	}
	player[1] = {
		
		name: 'green',
		healthPoints: 130,
		attackPower: 50,
		counterPower: 30,
		image: 'assets/images/player-green.png',
	}
	player[2] = {
		name: 'purple',
		healthPoints: 140,
		attackPower: 50,
		counterPower: 30,
		image: 'assets/images/player-purple.png',
		
	}
	player[3] = {
		name: 'yellow',
		healthPoints: 120,
		attackPower: 50,
		counterPower: 30,
		image: 'assets/images/player-yellow.png',
		
	}

//console.log(player[0].element);
//console.log(healthPoints[0]);
	

		// Health Points 
		// Attack Power –– Used when selected chracter
		// Counter Attack Power –– Used when enemy – never


for (var i = 0; i < player.length; i++) {

	var listItem = $('<div>').html('<p>' + player[i].name + '</p>' + '<img src="' + player[i].image + '">' + '<p>' + player[i].healthPoints + '</p>').addClass('player').attr('id', player[i].name);
	
	$('#characters').append(listItem);

}
	
	// 1 Choose a character to play 

			//on click – add atrribute id – Character // remove class (chracterOptions)
			//.class – append to 
			//on click 

//if ()
$('.player').one("click", function() {

	yourCharacter = $(this).attr('id');
	$(this).removeClass('player').addClass('character');
	console.log(yourCharacter);
	$('.player').detach().appendTo('#enemies');
	$('.character-title').text('Your Character');
});
	

//	$(".roll").on("click", function() {
//  dieNum = $(this).html();
//  rollDie(dieNum);
//});	

	// Remaining charcters become Enemies 


			//Push enemies below

	// 2 Click Enemy to attack

	$('.enemies').one("click", function() {

		yourEnemy = $(this).attr('id');
		$(this).removeClass('enemies').addClass('defender');
		console.log(yourEnemy);
		$('#remaining').html('Remaining Enemies');

		$('.enemies').detach().appendTo('#remaining');
	});

	// 3 Click Attack button



			// Auto message to show results

					// You attacked __ for 8 damage
					// __ attached you back for 25 damage

				//Subtract these numbers from health scores of each

				// Attack power increases by base attack power

			//Click attack again

				// Your attacks increases (by same number) in number with each attack
				// Enemies remain the same each time

	//If - You win 

			//Enemy defeated message
			//Enemy taken off of board

			//If you hit attack and no enemy selected – "no enemy" message

			//If all chracters attacked – You win the game

	// If enemy wins – You lose

		// You are defeated message // game over

		//Restart game button
});
