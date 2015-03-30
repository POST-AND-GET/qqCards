document.getElementById("img").onclick = function() {
			if (document.getElementById("em").className == "ema") {
				document.getElementById("em").className = "em";
				document.getElementById("w").className = "ww";
			} else {
				document.getElementById("em").className = "ema";
				document.getElementById("w").className = "wwa";
			}
		}