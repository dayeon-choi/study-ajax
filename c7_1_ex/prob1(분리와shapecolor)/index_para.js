var shapecolor = document.getElementById("shapecolor");
var index = shapecolor.selectedIndex;
var shColor = shapeclolor[index].value;

window.onload = function () {
  var button = document.getElementById("previewButton");
  button.onclick = previewHandler;
};

function previewHandler() {
  var canvas = document.getElementById("tshirtCanvas");
  var context = canvas.getContext("2d");

  fillBackgroundColor(canvas, context);

  var selectObj = document.getElementById("shape");
  var index = selectObj.selectedIndex;
  var shape = selectObj[index].value;

  if (shape == "squares") {
    for (var squares = 0; squares < 20; squares++) {
      drawSquare(canvas, context);
    }
  } else if (shape == "circles") {
    for (var circles = 0; circles < 20; circles++) {
      drawCircle(canvas, context);
    }
  } else if (shape == "line") {
    for (var line = 0; line < 20; line++) {
      drawline(canvas, context);
    }
  } else if (shape == "bird") {
    for (var bird = 0; bird < 20; bird++) {
      drawBird(canvas, context);
    }
  } else if (shape == "outline") {
    for (var outline = 0; outline < 20; outline++) {
      drawOutline(canvas, context);
    }
  }
}

function drawSquare(canvas, context, shColor) {
  var w = Math.floor(Math.random() * 40);
  var x = math.floor(Math.random() * canvas.width);
  var y = Math.floor(Math.random() * canvas.height);

  context.fillStyle = shColor;
  context.fillStyle = getShapeColor();
  context.fillRect(x, y, w, w);
}

function drawCircle(canvas, context, shColor) {
  var w = Math.floor(Math.random() * 40);
  var x = math.floor(Math.random() * canvas.width);
  var y = Math.floor(Math.random() * canvas.height);

  context.fillStyle = shColor;
  context.fillStyle = getShapeColor();
  context.fillRect(x, y, w, w);
}

function drawLine(canvas, context, shColor) {
  var w = Math.floor(Math.random() * 40);
  var x = math.floor(Math.random() * canvas.width);
  var y = Math.floor(Math.random() * canvas.height);

  context.fillStyle = shColor;
  context.fillStyle = getShapeColor();
  context.fillRect(x, y, w, w);
}

function getShapeColor() {
  var selectObj = document.getElementById("shapeColor");
  var index = selectObj.selectedIndex;
  var bgColor = selectObj[index].value;

  return bgColor;
}

function drawBird(canvas, context) {
  var twitterBird = new Image();
  var mirim = new Image();
  twitterBird.src = "twitterBird.png";
  mirim.src = "mirim.png";
  twitterBird.onload = function () {
    context.drawImage(twitterBird, 20, 120, 70, 70);
    context.drawImage(mirim, canvas.width - 100, 20, 70, 70);
  };
}

function drawOutline(canvas, context) {
  context.lineWidth = 5;
  context.strokeStyle = "blue";
  context.strokeRect(2, 2, canvas.width - 4, canvas.height - 4);
}
