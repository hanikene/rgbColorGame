var squares = document.querySelectorAll(".squares");
var title = document.querySelector("h1 span");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.getElementById("reset");
var easyButton = document.getElementById("easy");
var hardButton = document.getElementById("hard");
var level = 6;

var colors = generateRandomColors(6);
var color = randomColor();
var colorPicked = colors[color];
title.textContent = colorPicked;
game(level);

easyButton.addEventListener("click", function() {
	if (easyButton.getAttribute("class") !== "selected") {
		for (var i = 3; i < 6; i++) {
			squares[i].style.display = "none";
		}
		level = 3;
		message.textContent = "";
		colors = generateRandomColors(level);
		color = randomColor();
		colorPicked = colors[color];
		title.textContent = colorPicked;
		h1.style.background = "steelblue";
		reset.textContent = "New Color?";
		easyButton.classList.add("selected");
		hardButton.classList.remove("selected");
		game(level);	
	}
});

hardButton.addEventListener("click", function() {
	if (hardButton.getAttribute("class") !== "selected") {
		for (var i = 3; i < 6; i++) {
			squares[i].style.display = "block";
		}
		level = 6;
		message.textContent = "";
		colors = generateRandomColors(level);
		color = randomColor();
		colorPicked = colors[color];
		title.textContent = colorPicked;
		h1.style.background = "steelblue";
		reset.textContent = "New Color?";
		easyButton.classList.remove("selected");
		hardButton.classList.add("selected");
		game(level);
	}
});

reset.addEventListener("click", function() {
	message.textContent = "";
	colors = generateRandomColors(6);
	color = randomColor();
	colorPicked = colors[color];
	title.textContent = colorPicked;
	h1.style.background = "steelblue";
	reset.textContent = "New Color?";
	game(level);
});

function game(level){
	for (var i = 0; i < level; i++) {
		squares[i].style.background = colors[i];
		squares[i].addEventListener("click", function() {
			if (this.style.background === colorPicked) {
				message.textContent = "Correct";
				colorChange(colorPicked);
				h1.style.background = colorPicked;
				reset.textContent = "Play Again?";

			} else {
				this.style.background = "#232323";
				message.textContent = "Wrong";
			}
		});
	}
}

function colorChange(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
}
function randomColor() {
	return Math.floor(Math.random() * level);
}

function generateRandomColors(n) {
	var arr = [];
	for (var i = 0; i < n; i++) {
		arr.push("0");
		var val1 = Math.floor(Math.random() * 256);
		var val2 = Math.floor(Math.random() * 256);
		var val3 = Math.floor(Math.random() * 256);
		arr[i] = "rgb(" + val1 + ", " + val2 + ", " + val3 + ")";
	}
	return arr;
}