class Ballon {
  // Konstruksi Ballon
  constructor() {
    this.radius = random(90, 150);
    this.posisi = createVector(random(width), random(height, height + random(300, 700)));
    this.upStep = random(4, 6);
    this.red = random(100, 255);
    this.green = random(100, 255);
    this.blue = random(100, 255);
    this.tali = random(150, 250);
  }
  // end

  // tampilkan
  show() {
    push();
      // tali
      stroke(255);
      strokeWeight(2);
      line(this.posisi.x, this.posisi.y + this.radius / 2 + 10, this.posisi.x, this.posisi.y + this.tali);
    pop();

    push();
      // balon
      fill(this.red, this.green, this.blue);
      noStroke();
      ellipse(this.posisi.x, this.posisi.y, this.radius, this.radius + 10);
      // balloon tie
      ellipse(this.posisi.x, this.posisi.y + this.radius / 2 + 10, 10, 7);
    pop();
  }

  up() {
    this.posisi.y -= this.upStep;
  }

  checkEdge() {
    if (this.posisi.y < 0 + this.radius / 2 + 5) {
      this.posisi.y = 0 + this.radius / 2 + 5;
    }
  }

  mouseHover() {
    if (this.posisi.x + this.radius / 2 > mouseX && this.posisi.x - this.radius / 2 < mouseX) {
      if (this.posisi.y + this.radius / 2 > mouseY && this.posisi.y - this.radius / 2 < mouseY) {
        return true;
      }
    } else {
      return false;
    }
  }
}