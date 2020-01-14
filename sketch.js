// var marble;
// var wood;
//
// var xIncrease;
// var yIncrease;
//
// var xTransition = 0;
// var yTransition = 0;
//
// var xPosition;
// var yPosition;
//
// var ballSize = 40;
//
// var topBound;
// var bottomBound;
// var leftBound;
// var rightBound;
//
// var score = 0;
//
// function preload() {
//   marble = loadImage("./assets/marble.png");
//   wood = loadImage("./assets/wood.jpg");
// }
//
// //--------------------------------------------------------------------
//
// function setup() {
//   createCanvas(windowWidth, windowHeight);
// }
//
// //--------------------------------------------------------------------
//
// function draw() {
//
//   //create background
//
//   push();
//   noStroke();
//   translate(width / 2, height / 2);
//   imageMode(CENTER);
//   image(wood, 0, 0, width, height)
//
//   //define boundaries for the marble
//   topBound = -height / 2 + ballSize / 2;
//   bottomBound = height / 2 - ballSize / 2;
//   leftBound = -width / 2 + ballSize / 2;
//   rightBound = width / 2 - ballSize / 2;
//
//   //--------------------------------------
//
//   //define the ball movement based on the device rotation
//   var xIncrease = map(rotationY, -180, 180, -40, 40);
//   var yIncrease = map(rotationX, -180, 180, -30, 30);
//
//   xTransition += xIncrease;
//   yTransition += yIncrease;
//
//   //--------------------------------------
//   //define behaviour when hitting boundaries
//
//   if (xTransition < rightBound && xTransition > leftBound) {
//     xPosition = xTransition;
//   } else if (xTransition >= rightBound) {
//     xTransition = rightBound;
//   } else if (xTransition <= leftBound) {
//     xTransition = leftBound;
//   }
//
//   //--------------------------------------
//
//   //define behaviour when hitting boundaries
//   if (yTransition < bottomBound && yTransition > topBound) {
//     yPosition = yTransition;
//   } else if (yTransition >= bottomBound) {
//     yTransition = bottomBound;
//   } else if (yTransition <= topBound) {
//     yTransition = topBound;
//   }
//
//   //--------------------------------------
//
//   //falling animation
//
//   if ((xTransition > -10 && xTransition < 10) && (yTransition > -height / 3 - 10 && yTransition < -height / 3 + 10) && ballSize > 0) {
//     ballSize--;
//     xTransition = 0;
//     yTransition = -height / 3;
//   }
//
//
//   //add marble image
//   fill('white')
//   image(marble, xPosition, yPosition, ballSize, ballSize);
//   pop();
//
//
//
//   textFont('Helvetica');
//   textAlign(CENTER);
//   text('Try to tilt the device to keep the ball on the racket', width/2, height/5*4);
//
//   //reset ball（ When the ball is over the edge of the racket)
//   if (ballSize == 1) {
//     ballSize = 40;
//     xTransition = 0;
//     yTransition = 0;
//     score++;
//   }
//
// }

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200,55,133);
}

let value = 0;

function draw() {
  fill(value);
  rect(windowWidth/2, windowHeight/2, 500, 500);
  rectMode(CENTER);

  textFont('Helvetica');
  textAlign(CENTER);
  text('Try to shake the device to switch color', width/2, height/5*4);

}
function deviceShaken() {
  value = value + 5;
  if (value > 255) {
    value = 0;
  }
}
