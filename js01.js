window.onload = newWinLinks;

function newWinLinks() {
	for (var i=0; i<document.links.length; i++) {
		if (document.links[i].className == "newWin") {
			document.links[i].onclick = newWindow;
		}
	}
}

function newWindow() {
	var catWindow = window.open("jiangxi.html", "catWin", "resizable=no,width=1080,height=500");
	return false;
}
