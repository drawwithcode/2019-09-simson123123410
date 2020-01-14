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
//

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200,55,133);
}

let value = 0;
function draw() {
  fill(value);
  rect(windowWidth/2, windowHeight/2, 500, 500);
  textFont('Helvetica');
   textAlign(CENTER);
   text('Shake the device to switch the color', width/2, height/5*4);


}
function deviceShaken() {
  value = value + 5;
  if (value > 255) {
    value = 0;
  }
}
