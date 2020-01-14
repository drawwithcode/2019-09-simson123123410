var xIncrease;
var yIncrease;

var xTransition = 0;
var yTransition = 0;

var xPosition;
var yPosition;

var ballSize = 40;

var topBound;
var bottomBound;
var leftBound;
var rightBound;

//--------------------------------------------------------------------
 function setup() {
createCanvas(windowWidth, windowHeight);
  background(200,55,133);
}


function draw() {

  //create background



  //define boundaries for the ball
  topBound = -height / 2 + ballSize / 2;
  bottomBound = height / 2 - ballSize / 2;
  leftBound = -width / 2 + ballSize / 2;
  rightBound = width / 2 - ballSize / 2;

  //--------------------------------------

  //define the ball movement based on the device rotation
  var xIncrease = map(rotationY, -180, 180, -40, 40);
  var yIncrease = map(rotationX, -180, 180, -30, 30);

  xTransition += xIncrease;
  yTransition += yIncrease;

  //--------------------------------------
  //define behaviour when hitting boundaries

  if (xTransition < rightBound && xTransition > leftBound) {
    xPosition = xTransition;
  } else if (xTransition >= rightBound) {
    xTransition = rightBound;
  } else if (xTransition <= leftBound) {
    xTransition = leftBound;
  }

  //--------------------------------------

  //define behaviour when hitting boundaries
  if (yTransition < bottomBound && yTransition > topBound) {
    yPosition = yTransition;
  } else if (yTransition >= bottomBound) {
    yTransition = bottomBound;
  } else if (yTransition <= topBound) {
    yTransition = topBound;
  }

  //--------------------------------------



// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   background(200,55,133);
// }
//

// function deviceShaken() {
//   value = value + 5;
//   if (value > 255) {
//     value = 0;
//   }
// }


// let value = 0;
// function draw() {
//   fill(value);
//   rect(windowWidth/2, windowHeight/2, 50, 50);
//   textFont('Helvetica');
//    textAlign(CENTER);
//    text('Shaking the device to switch the color', width/2, height/5*4);
//
//
// }
//
