class Ball {
  constructor() {
    //Variables for the Ball
    this.radius = 10;
    this.width = this.radius * 2;
    this.location = createVector(width / 2, height - 60);
    this.speed = createVector(4, -4);
  }

  //Function to display it
  display() {
    fill(255, 0, 0);
    circle(this.location.x, this.location.y - 2, this.width);
  }

  //Update the ball
  update() {
    this.location.add(this.speed);
  }

  //Bounce from the edge
  bounceEdge() {
    if (this.location.x + this.radius >= width) {
      this.speed.x *= -1;
    } else if (this.location.x - this.radius <= 0) {
      this.speed.x *= -1;
    } else if (this.location.y - this.radius <= 0) {
      this.speed.y *= -1;
    }
  }

  //Bounce from the Padlet
  bouncePadlet(padlet) {
    if (
      this.location.x + this.radius >= padlet.location.x &&
      this.location.x - this.radius <= padlet.location.x + padlet.width &&
      this.location.y + this.radius >= padlet.location.y
    ) {
      this.location.y -= 1;
      this.speed.y *= -1;

    }
  }

//Bounce from a brick
  collidingBrick(brick) {
    if (
      this.location.x + this.radius >= brick.location.x &&
      this.location.x - this.radius <= brick.location.x + brick.width &&
      this.location.y + this.radius >= brick.location.y &&
      this.location.y - this.radius <= brick.location.y + brick.height
    ) {
      return true;
    }
  }

// Ball reached the lower edge
  reachedLowerEdge(lives){
    if(this.location.y >= height){
      lives = 0;
    }
    return lives;
    
  }
  
}
