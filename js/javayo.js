var snd = new Audio("../muziko/evilLaugh.mp3");
snd.play();
snd.currentTime = 0; //så den spelar skrattet en gång först

// Jens oändliga dag
window.type = function type(text, i) {
	document.getElementsByTagName('p')[0].innerHTML += text[i];

	i++;
	if(text[i] == '<') while(text[i - 1] != '>') i++; // ignorera <br>

	if(i < text.length) {
		setTimeout(type, Math.floor(Math.random() * 80), text, i);
    } else {
		var new_text = arr[Math.floor(Math.random() * arr.length)];
		if(new_text[0] == new_text[0].toUpperCase()) {
			document.getElementsByTagName('p')[0].innerHTML += '. ';
			if(Math.floor(Math.random() * 4) == 2) document.getElementsByTagName('p')[0].innerHTML += "<br><br>";
		} else if(Math.round(Math.random())) {
			document.getElementsByTagName('p')[0].innerHTML += ', ';
		} else {
			document.getElementsByTagName('p')[0].innerHTML += " et ";
		}

		setTimeout(type, Math.floor(Math.random() * 80), new_text, 0);
    }
}
