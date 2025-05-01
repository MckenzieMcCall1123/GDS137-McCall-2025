// Declare my variables
// Global Variables
var img = document.getElementById("ric");
var p1score = 0;
var canvas;
var context;
var timer;
// 1000 ms or 1 second / FPS
var interval = 1000/60;
var player;
// Gravity
var gravity = 1; 
var vx = 1;
var vy = 1;
// Friction
var friction = .85;


	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	


	//Instantiate the Player
	player = new GameObject(25, canvas.height/2);
	player.width = 250;
	player.height = 40;
	player.x = 500;
	player.y = 750;
	player.color = "cyan";
	player.force = 1;

	ball = new GameObject();
	ball.vy = 1;
	ball.vx = 1;
	ball.width = 100;
	ball.color = "magenta";
	//Set the Animation Timer
	timer = setInterval(animate, interval);


function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	

	ball.vy *= .99;
	ball.vy += 2;

	context.save();
	context.strokeStyle = "#000000";
	context.beginPath();
	context.moveTo(ball.x, ball.y);
	context.lineTo(player.x, player.y);
	context.closePath();
	context.lineWidth = 2; 
	context.stroke();
	context.restore();
	
	// Puts score on screen
	context.font = "20px Georgia";
	context.fillText(`Score: ${p1score}`, 10, 50);
	context.fillstyle = "#000000";
	context.save();

	// Player 1
	if(left)
	{
		console.log("Moving left");
		player.vx -= player.force;
	}
	if(right)
	{
		console.log("Moving right");
		player.vx += player.force;
	}

	player.vx *= .9;
	player.x += player.vx;

	//Update the Screen
	player.drawRect();

	ball.drawCircle();
	ball.move();
	

	if(ball.x > canvas.width + -50)
		{
			ball.vx = -ball.vx;
			ball.color = randomColor();
		}
	if(ball.x < 0 + 50)
		{
			ball.vx = -ball.vx;
			ball.color = randomColor();
		}
	if(ball.y > canvas.height + -50 || ball.y < 0 + 50)
		{
			ball.vy = -ball.vy;
			ball.color = randomColor();
		}

// player canvas detection
	if(player.x > canvas.width - player.width /2)
		{
			player.vx = 0;
			player.x = canvas.width - player.width /2;
		}
	if(player.x < player.width /2)
		{
			player.vx = 0;
			player.x = player.width /2;
		}

	
		// Paddle section detection mechanics
	if(ball.hitTestObject(player))
		{
		ball.y = player.y - player.height /2 - ball.width /2;
		ball.vy = -35;
			 //ball hits top
			 if(ball.x > player.x + player.width/6)
			 {
				ball.vx = 5;
			 }
			 //ball hit bottom
			if (ball.x < player.x - player.width/6)
			 {
				ball.vx = -5;
			 }
			
			 
		}
}

function randomColor(){
	var r = Math.round(Math.random()*255)
	var b = Math.round(Math.random()*255)
	var g = Math.round(Math.random()*255)

	return `rgb(${r}, ${g}, ${b})`
}