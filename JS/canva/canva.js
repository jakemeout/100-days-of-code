document.addEventListener("DOMContentLoaded", (e) => {
  var canvas = document.getElementById("canvas");
  canvas.width = document.documentElement.clientWidth;
  canvas.height = document.documentElement.clientHeight;
  var ctx = canvas.getContext("2d");
  ctx.strokeStyle = "White";
  ctx.lineWidth = 1;
  var startX = 0;
  var startY = 0;
  var endX = 20;
  var endY = 20;
  var mouseX = 0;
  var mouseY = 0;
  
  canvas.addEventListener("mousemove", (e) => {
    mouseX = e.offsetX;
    mouseY = e.offsetY;
    drawLine();
    moveLine();
  });

 
  
  
  function drawLine(){
    ctx.beginPath(); // Start a new path
    ctx.moveTo(startX, startY); // Move the pen to (30, 50)
    ctx.lineTo(endX, endY); // Draw a line to (150, 100)
    ctx.stroke(); // Render the path
  }
  
  function moveLine() {
    if (startX > mouseX) {
        startX -= 5;
        endX -= 5;
    } else if(startX < mouseX){
        startX += 5;
        endX += 5;
    }else {
        startX = mouseX
        endX  = mouseX + 20
    }

    if (startY > mouseY) {
        startY -= 5;
        endY -= 5;
    } else if(startY < mouseY) {
        startY += 5;
        endY += 5
    } else {
        startY = mouseY
        endY = mouseY + 20
    }
    
    
    
    console.log(startX, startY);
}

  function loop() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ;
    ;
  }

});
