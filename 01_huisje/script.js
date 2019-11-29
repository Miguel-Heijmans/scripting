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
context.beginPath();
context.lineWidth = 5;
context.fillStyle = "#cccccc";
context.moveTo(200,500);
context.lineTo(200,300);
context.lineTo(600,400);
context.lineTo(600,600);
context.closePath();
context.stroke();
context.fill();

context.beginPath();
context.lineWidth = 5;
context.fillStyle = "#ff0000";
context.moveTo(200,300);
context.lineTo(300,100);
context.lineTo(700,200);
context.lineTo(600,400);
context.lineTo(200,300);
context.closePath();
context.stroke();
context.fill();

context.beginPath();
context.lineWidth = 5;
context.fillStyle = "#999999";
context.moveTo(600,600);
context.lineTo(600,400);
context.lineTo(800,300);
context.lineTo(800,500);
context.lineTo(600,600);
context.closePath();
context.stroke();
context.fill();

context.beginPath();
context.lineWidth = 5;
context.fillStyle = "#999999";
context.moveTo(600,400);
context.lineTo(700,200);
context.lineTo(800,300);
context.lineTo(600,400);
context.closePath();
context.stroke();
context.fill();
