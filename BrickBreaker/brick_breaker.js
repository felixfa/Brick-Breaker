function setup() {
  canvas = createCanvas(600, 400);
  canvas.parent('game');

  //Variables
  score = 0;
  game_running = false;
  isClicked = false;
  lives=1;

  //Create Fields
  nameButton = createInput("Name");
  nameButton.position(10, height/2 + 60);
  submitButton = createButton("Eintragen");
  submitButton.position(180, height/2 + 60);
  nameButton.hide();
  submitButton.hide();

  //Create one Instance of the Object Ball
  ball_1 = new Ball();

  //Create one Instance of the Object Padlet
  padlet_1 = new Padlet();

  //Variable for Row of Bricks
  bricksPerRow = 10;
  brickWidth = width / bricksPerRow;
  numberOfRows = 3;

  //Create numberOfRows Rows of Bricks
  bricks = [];
  for (j = 0; j <= numberOfRows - 1; j++) {
    y = j * 50 + 10;
    //Create one row of Bricks
    for (i = 0; i < bricksPerRow; i++) {
      brick = new Brick(
        createVector(i * brickWidth, y),
        brickWidth,
        color(random(0, 255), random(0, 255), random(0, 255))
      );
      bricks.push(brick);
    }
  }

}

function draw() {
  background(220);
  
  //Padlet
  padlet_1.display();

  if (keyIsDown(LEFT_ARROW) & (padlet_1.location.x > 0)) {
    padlet_1.move("left");
  }
  if (keyIsDown(RIGHT_ARROW) & (padlet_1.location.x < width - padlet_1.width)) {
    padlet_1.move("right");
  }
  
    if (keyIsDown(UP_ARROW)) {
    game_running=true;
  }
  

  //Ball
  if (game_running && lives >0) {
    ball_1.display();
    ball_1.update();
    ball_1.bounceEdge();
    ball_1.bouncePadlet(padlet_1);
  }
  lives = ball_1.reachedLowerEdge(lives);

  
  //Bricks
  for (i = 0; i <= bricks.length - 1; i++) {
    bricks[i].display();
    if (ball_1.collidingBrick(bricks[i])) {
      ball_1.location.y += 3;
      ball_1.speed.y *= -1;
      bricks.splice(i, 1);
      score += 1;
    }
  }

  if (bricks.length == 0) lives = lives - 1;

  //Score
  textSize(20);
  textStyle(BOLD);
  fill("black");
  textAlign(LEFT);
  text("Score:", width - 100, height - 15);
  text(score, width - 30, height - 15);

  //Game Over Screen & Submit Score to Database
  if (!isClicked && lives==0) {

    textSize(30);
    textAlign(CENTER);
    text("Game Over!", width / 2, height / 2);
    textSize(15);
    textAlign(LEFT);
    text("Trage Dich in die Highscore Liste ein.", 10, height / 2 + 50);
    nameButton.show();
    submitButton.show();
    submitButton.mousePressed(submitScore);
  }
  
  if(isClicked) {
    submitButton.hide()
    nameButton.hide();
  }

  
}
