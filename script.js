//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech];

	window.onload = function() {
		var userName = prompt("Hello! Please enter your name.", "Barney");
	if (userName !== "" || userName !== false) {
		console.log ("Hi " + userName + "!");
	} else {
		if (userName === "" || userName === false) {
			console.log ("Ok, I’ll just call you User.");
		}
	}
}

document.getElementById('BtnDonate').addEventListener('click', function(){
	var favoriteAuthor = prompt("Which author is your favorite? Churchill, Ghandi, or Demosthenes?");
	switch(favoriteAuthor) {
	case "Churchill" : 
		console.log (churchillSpeech.author + " was " + churchillSpeech.authorAge + " during this speech.");
		break;
	case "Ghandi" :
		console.log (ghandiSpeech.author + " was " + ghandiSpeech.authorAge + " during this speech.");
		break;
	case "Demosthenes" :
		console.log (demosthenesSpeech.author + " was " + demosthenesSpeech.authorAge + " during this speech.");
		break;
	default :
		console.log ("It's OK to not have a favorite.");
		break;
	}
  //Code in here executes when the user clicks the "Donate" button.
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
	console.log ("This speech was written by " + churchillSpeech.author + " in " + churchillSpeech.year + ".");
	if (churchillSpeech.year >= 1600) {
		console.log ("This speech took place during the common era.");
	} else {
		console.log ("This speech took place before the common era.");
	}	
  //Code in here executes when the user clicks the "Churchill" button.
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
	console.log ("This speech was written by " + ghandiSpeech.author + " in " + ghandiSpeech.year + ".");
	if (ghandiSpeech.year >= 1600) {
		console.log ("This speech took place during the common era.");
	} else {
		console.log ("This speech took place before the common era.");
	}
  //Code in here executes when the user clicks the "Ghandi" button.
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
	console.log ("This speech was written by " + demosthenesSpeech.author + " in " + demosthenesSpeech.year + ".");
	if (demosthenesSpeech.year >= 1600) {
		console.log ("This speech took place during the common era.");
	} else {
		console.log ("This speech took place before the common era.");
	}
  //Code in here executes when the user clicks the "Demosthenes" button.
});