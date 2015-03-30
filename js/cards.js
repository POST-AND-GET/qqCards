function getDomId(id){
	return document.getElementById(id);
}
getDomId("img").onclick = function() {
	if (getDomId("em").className.indexOf("ema ") >-1) {
		getDomId("em").className = getDomId("em").className.replace('ema ','em ');
		getDomId("card").className = "card";
	} else {
		getDomId("em").className = getDomId("em").className.replace('em ','ema ');
		getDomId("card").className = "cardh";
	}
}