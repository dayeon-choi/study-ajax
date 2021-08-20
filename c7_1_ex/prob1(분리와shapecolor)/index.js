window.onload = function () {
  var button = document.getElementById("previewButton");
  button.onclick = previewHandler;
};

function previewHandler() {
  var canvas = document.getElementById("tshirtCanvas");
  var context = canvas.getContext("2d");

  fillBackgroundColor(canvas, context);

  if (shape == "squares") {
    for (var squares = 0; squares < 15; squares++) {
      drawSquare(canvas, context);
    }
  }
  if (shape == "circles") {
    for (var circles = 0; circles < 15; circles++) {
      drawCircle(canvas, context);
    }
  }
  if (shape == "lines") {
    for (var lines = 0; lines < 15; lines++) {
      drawLine(canvas, context);
    }
  }
  drawText(canvas, context);
}

// This is where we'll set the background color
function fillBackgroundColor(canvas, context) {
  var selectObj = document.getElementById("backgroundColor");
  var index = selectObj.selectedIndex;
  var bgColor = selectObj[index].value;

  context.fillStyle = bgColor;
  context.fillRect(0, 0, canvas.width, canvas.height);
}

// Draws a square at a random location
function drawSquare(canvas, context) {
  var selectObj = documnet.getElementById("shapeColor");
  var index = selectObj.selectedIndex;
  var color = selectObj[index].value;

  var x = Math.floor(Math.random() * canvas.width);
  var y = Math.floor(Math.random() * canvas.height);
  var x2 = Math.floor(Math.random() * canvas.width);
  var x2 = Math.floor(Math.random() * canvas.height);

  context.beginPath();
  context.moveTo(x, y);
  context.lineTo(x2, y2);

  context.lineWidth = 7;
  context.fillStyle = color;
  context.stroke();
}

function drawCircle(canvas, context) {
  var selectObj = documnet.getElementById("shapeColor");
  var index = selectObj.selectedIndex;
  var color = selectObj[index].value;

  var x = Math.floor(Math.random() * canvas.width);
  var y = Math.floor(Math.random() * canvas.height);
  var x2 = Math.floor(Math.random() * canvas.width);
  var x2 = Math.floor(Math.random() * canvas.height);

  context.beginPath();
  context.moveTo(x, y);
  context.lineTo(x2, y2);

  context.lineWidth = 7;
  context.fillStyle = color;
  context.stroke();
}

function drawLine(canvas, context) {
  var selectObj = documnet.getElementById("shapeColor");
  var index = selectObj.selectedIndex;
  var color = selectObj[index].value;

  var x = Math.floor(Math.random() * canvas.width);
  var y = Math.floor(Math.random() * canvas.height);
  var x2 = Math.floor(Math.random() * canvas.width);
  var x2 = Math.floor(Math.random() * canvas.height);

  context.beginPath();
  context.moveTo(x, y);
  context.lineTo(x2, y2);

  context.lineWidth = 7;
  context.strokeStyle = color;
  context.stroke();
}

function degreesToRadians(degrees) {
  return (degrees * Math.PI) / 180;
}
