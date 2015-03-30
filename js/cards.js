document.getElementById("img").onclick = function() {
	if (document.getElementById("em").className == "ema") {
		document.getElementById("em").className = "em";
		document.getElementById("card").className = "card";
	} else {
		document.getElementById("em").className = "ema";
		document.getElementById("card").className = "cardh";
	}
}