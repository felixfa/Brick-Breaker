class Brick {
  constructor(location, width, color) {
    this.location = location;
    this.width = width;
    this.height = 20;
    this.color = color;
  }

  display() {
    fill(this.color);
    rect(this.location.x, this.location.y, this.width, this.height);
  }
  
  
}
