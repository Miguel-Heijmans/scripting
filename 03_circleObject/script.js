// maak een variabele voor de canvas
const canvas = document.getElementById('canvas');

// leg een 2d-context over de canvas
const context = canvas.getContext('2d');

//maak de canvas schermvullend
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;

// hier kun je op de canvas tekenen
let cirkleObject = {}
cirkleObject.x = 200;
cirkleObject.y = 300;
cirkleObject.radius = 20;
cirkleObject.sAngle = 0;
cirkleObject.eAngle = Math.PI*2;
cirkleObject.color = "yellow";
cirkleObject.velocity_x = 2;
cirkleObject.velocity_y = 2;

cirkleObject.draw = function(){
  context.beginPath();
  context.arc(this.x, this.y, this.radius, this.sAngle, this.eAngle);
  context.closePath();
  context.stroke();
  context.fillStyle = this.color;
  context.fill()

  //Bounce Ball Off Left + Choose Color
  if(cirkleObject.x - cirkleObject.radius <= 0) {
    cirkleObject.velocity_x = -cirkleObject.velocity_x;

  }

  //Bounce Ball Off Right + Choose Color
  if(cirkleObject.x + cirkleObject.radius >= window.innerWidth) {
    cirkleObject.velocity_x = -cirkleObject.velocity_x;

  }

  //Bounce Ball Off Top + Choose Color
  if(cirkleObject.y - cirkleObject.radius <= 0) {
    cirkleObject.velocity_y = -cirkleObject.velocity_y;

  }

  //Bounce Ball Off Bottom + Choose Color
  if(cirkleObject.y + cirkleObject.radius >= window.innerHeight) {
    cirkleObject.velocity_y = -cirkleObject.velocity_y;

  }

}

function animate(){
  context.clearRect(0,0,width,height)
  cirkleObject.x += cirkleObject.velocity_x;
  cirkleObject.y += cirkleObject.velocity_y;
  cirkleObject.draw();
}

setInterval(animate,10);
