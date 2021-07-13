class Padlet {
  constructor() {
    //Variables for the Padlet
    this.height = 20;
    this.width = 100;
    this.location =createVector((width / 2 - this.width / 2),height - 60);
    this.speed = {
      right: 5,
      left: -5,
    };
  }

  //Function to call it
  display() {
    fill(100, 100, 100);
    rect(this.location.x, this.location.y, this.width, this.height);
  }

  //Function to move
  move(direction) {
    this.location.x += this.speed[direction];
  }
}
