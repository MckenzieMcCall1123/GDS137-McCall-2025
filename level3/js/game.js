//Declare my variables
var p1score = 0;
var p2score = 0;
var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;
var player2;
// Player wins
var p1Wins = 0;
var p2Wins = 0;

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	


	//Instantiate the Player
	player = new GameObject(25, canvas.height/2);
	player.width = 25;
	player.height = 150;

	player2 = new GameObject(25, canvas.height/2);
	player2.width = 25;
	player2.height = 150;
	player2.x = 1000;
	player2.y = 400;
	player2.color = "blue";

	ball = new GameObject();
	ball.vy = 0;
	ball.vx = 10;
	ball.width = 50;
	//Set the Animation Timer
	timer = setInterval(animate, interval);


function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	

	context.save();
	context.strokeStyle = "#00ff00";
	context.beginPath();
	context.moveTo(500, 0);
	context.lineTo(500, 1000);
	context.closePath();
	context.lineWidth = 10; 
	context.stroke();
	context.restore();
	
	context.font = "20px Georgia";
	context.fillText(`Score: ${p1score}`, 10, 50);
	context.fillstyle = "#000000";

	context.font = "20px Georgia";
	context.fillText(`Score: ${p2score}`, 940, 50);
	context.fillstyle = "#000000";
	
	context.save();

	// Player 1
	if(w && player.y > canvas.height/2 - 325)
	{
		console.log("Moving Up");
		player.y += -5;
	}
	if(s && player.y < canvas.height/2 + 325)
	{
		console.log("Moving Down");
		player.y += 5;
	}

	// Player 2
	if(up && player2.y > canvas.height/2 - 325)
	{
		console.log("Moving Up");
		player2.y += -5;
	}
	if(down && player2.y < canvas.height/2 + 325)
	{
		console.log("Moving Down");
		player2.y += 5;
	}

	//Update the Screen
	player.drawRect();
	player2.drawRect();

	ball.drawCircle();
	ball.move();
	

	if(ball.x > canvas.width + -50)
		{
			ball.x = 500;
			ball.y = 500;
			ball.vx = -ball.vx;
			ball.color = randomColor();
			p1score++;
		}
	
	if(ball.x < 0 + 50)
		{
			ball.x = 500;
			ball.y = 500;
			ball.vx = -ball.vx;
			ball.color = randomColor();
			p2score++;
		}


	if(ball.y > canvas.height + -50 || ball.y < 0 + 50)
		{
			ball.vy = -ball.vy;
			ball.color = randomColor();
		}


	
		// Paddle section detection mechanics
	if(ball.hitTestObject(player))
		{
		ball.x = player.x + player.width /2 + ball.width /2
			 //ball hits top
			 if(ball.y > player.y + player.height/6)
			 {
				ball.vy = 5;
			 }
			 //ball hit bottom
			 else if (ball.y < player.y - player.height/6)
			 {
				ball.vy = -5;
			 }
			 //ball hits middle
			 else
			 {
				ball.vy = 0;
			 }
			 ball.vx = -ball.vx;
		}

		if(ball.hitTestObject(player2))
			{
			ball.x = player2.x - player2.width /2 - ball.width /2
				 //ball hits top
				 if(ball.y > player2.y + player2.height/6)
				 {
					ball.vy = 5;
				 }
				 //ball hit bottom
				 else if (ball.y < player2.y - player2.height/6)
				 {
					ball.vy = -5;
				 }
				 //ball hits middle
				 else
				 {
					ball.vy = -0;
				 }
				 ball.vx = -ball.vx;
			}

	player2.drawRect();
	
}

function randomColor(){
	var r = Math.round(Math.random()*255)
	var b = Math.round(Math.random()*255)
	var g = Math.round(Math.random()*255)

	return `rgb(${r}, ${g}, ${b})`
}