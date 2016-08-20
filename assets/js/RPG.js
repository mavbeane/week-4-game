$(document).ready(function(){


	//Global Variable
	var yourCharacter;
	var playerDiv;

	//Create objects for characters
	var player = []
	player[0] = {
		name: 'blue',
		healthPoints: 100,
		attackPower: 10,
		counterPower: 8,	
		image: 'assets/images/player-blue.png',
	}
	player[1] = {	
		name: 'green',
		healthPoints: 120,
		attackPower: 8,
		counterPower: 16,
		image: 'assets/images/player-green.png',
	}
	player[2] = {
		name: 'purple',
		healthPoints: 130,
		attackPower: 15,
		counterPower: 18,
		image: 'assets/images/player-purple.png',
	}
	player[3] = {
		name: 'yellow',
		healthPoints: 140,
		attackPower: 12,
		counterPower: 15,
		image: 'assets/images/player-yellow.png',
	}

		//TO DO: Create function start game

		for (var i = 0; i < player.length; i++) {

			var listItem = $('<div>').attr('value', [i]).html('<p>' + player[i].name + '</p>' + '<img src="' + player[i].image + '">' + '<p id="healthpoints">' + player[i].healthPoints + '</p>').addClass('player').attr('id', player[i].name);	
			$('#characters').append(listItem);

		};
	
		var characterChosen = false;
		var defenderChosen = false;
	
		$('.player').on("click", function() {

			var yourDefender;
			
			if (characterChosen == false && defenderChosen == false) {
				
				//Define Your character + get stats
				yourCharacter = $(this).attr('value');
				characterHealthPoints = player[yourCharacter].healthPoints;
				characterAttackPower = player[yourCharacter].attackPower;
				characterName = player[yourCharacter].name;
				characterBasePower = player[yourCharacter].attackPower;

				$(this).removeClass('player').addClass('character');
				console.log('Your character: ' + yourCharacter);
				console.log('Character Health Points: ' + characterHealthPoints);
				console.log('Character Attack Power: ' + characterAttackPower);
				console.log('Character Base Power: ' + characterBasePower);
				console.log('____________');

				//Move enemies
				$('.player').detach().appendTo('#enemies');
				$('.character-title').text('YOU');	
				$('.enemies-title').text('Choose Your Enemy');
				
				characterChosen = true;
				console.log('Character chosen: ' + characterChosen);

			} else if (characterChosen == true && defenderChosen == false) {
				
				//Chose Defender + get stats
				yourDefender = $(this).attr('value');
				defenderHealthPoints = player[yourDefender].healthPoints;
				defenderCounterPower = player[yourDefender].counterPower;
				defenderName = player[yourDefender].name;


				//yourDefender = player(value);
				console.log('Your defender: ' + yourDefender);
				console.log('Defender Healthpoints: ' + defenderHealthPoints);
				console.log('Defender Attack Power: ' + defenderCounterPower);
				console.log('____________');

				$(this).removeClass('enemies').addClass('defender');
				$('.defender').detach().appendTo('#defender');
				$('#defender').addClass('fight');
				$('#characters').addClass('fight');
				$('.defender-title').text('Your Defender');
				$('.enemies-title').text('Remaining Enemies');

				$('<button>').appendTo('#attack').html('attack').addClass('attack');
				$('#attack').addClass('show');
				$('.attack-title').text('VS.');
				defenderChosen = true;
			
			};

			console.log('Defender chosen: ' + defenderChosen);

			$('.attack').on("click", function() {

				if (characterHealthPoints > 0 && defenderHealthPoints > 0 ) {

				console.log('Attack Made!');
				
				//Update health stats + 
				characterHealthPoints = characterHealthPoints - defenderCounterPower; 
				defenderHealthPoints = defenderHealthPoints - characterAttackPower;
				characterAttackPower = characterAttackPower + characterBasePower;


				console.log('Character Health Points: ' + characterHealthPoints);
				console.log('Character Attack Power: ' + characterAttackPower);
				console.log('____________');

				console.log('Defender Healthpoints: ' + defenderHealthPoints);
				console.log('Defender Attack Power: ' + defenderCounterPower);
				console.log('____________');
			

				// Messages:  You attacked Defender for XX damage //  Defender attacked you for XX damage
				$('#instructions').html('<p>' + 'You attacked ' + defenderName + ' for ' + characterAttackPower + ' damages!</p>' + '<p>' + defenderName + ' attacked you for ' + defenderCounterPower + ' damages!</p>');

			} else if (characterHealthPoints <= 0) {
				
				//Enemy defeated message
				$('#instructions').html('<p>' + defenderName + ' beat you!! You lost!</p>');

				// ToDo: Restart Game 

			} else if (defenderHealthPoints <= 0) {

				//Enemy win message
				$('#instructions').html('<p>You beat ' + defenderName + '!</p>' + '<p>Pick another enemy below.</p>');
				$('.attack').addClass('hide'); 

				//Enemy taken off of board
				$('#defender div').addClass('hide'); 

				//Allow new defender to be selected
				defenderChosen = false;
			
			};

			// TO DO: Add if you beat all enemies

			});



		});

		
});
