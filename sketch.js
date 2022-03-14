// Membuat Variabel
var balon = [];
var total = 15;
var font;
var foto, background;
var txt = "HAPPY BIRTHDAY";
var nama = "TO YOU";
var sound;

// Membuat load didalam function preload
function preload() {
	foto = loadImage("src/img/foto.jpg"); // menampilkan foto
	background = loadImage("src/img/jkt-01.png"); // menampilkan background
	font = loadFont("src/font/FredokaOne.ttf"); // menampilkan font
	sound = loadSound("src/sfx/pop.mp3"); // menampilkan sound effect
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	for (let i = 0; i < total; i++) {
		balon.push(new Ballon());
	}
}

function draw() {
	
	image(background, 0, 0, width, height);

	push();
		var imgX = width / 2;
		var imgY = height / 2;

		// foto
		translate(imgX + (-mouseX + width / 2) / 30, imgY + (-mouseY + height / 2) / 30);
		imageMode(CENTER);
		image(foto, 0, 0, 200, 200);

		// noFill();
		// stroke(250, 150);
		// strokeWeight(10);
		// ellipse(0, 0, 210, 210);
	pop();

	push();
		fill(255);
		stroke(45, 28, 82);
		strokeWeight(7);
		textFont(font);
		textSize(50);
		textAlign(CENTER);

		// nama
		text(nama, imgX + (mouseX - width / 2) / 30, imgY + 200 + (mouseY - height / 2) / 30);

		// txt
		text(txt, imgX + (mouseX - width / 2) / 30, imgY - 150 + (mouseY - height / 2) / 30);
	pop();

	// balon
	for (let i = 0; i < balon.length; i++) {
		balon[i].show();
		balon[i].up();
		balon[i].checkEdge()
		if (balon[i].mouseHover()) {
			sound.play();
			balon.splice(i, 1);
		}
	}

	if (balon.length < 3) {
		for (let i = 0; i < total; i++) {
			balon.push(new Ballon());
		}
	}
}

function keyPressed() {
		if (key === 'z' || key === 'Z') {
			for (let i = 0; i < total; i++) {
				balon.push(new Ballon());
			}
	}
}