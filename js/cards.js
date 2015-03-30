document.getElementById("img").onclick = function() {
	if (document.getElementById("em").className.indexOf("ema ") >-1) {
		document.getElementById("em").className = document.getElementById("em").className.replace('ema ','em ');
		document.getElementById("card").className = "card";
	} else {
		document.getElementById("em").className = document.getElementById("em").className.replace('em ','ema ');
		document.getElementById("card").className = "cardh";
	}
}