//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player
	player = new GameObject(25, canvas.height/2);
	player.width = 25;
	player.height = 150;

	ball = new GameObject();
	ball.vy = 10;
	ball.vx = 10;
	//Set the Animation Timer
	timer = setInterval(animate, interval);


function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	if(w && player.y > canvas.height/2 - 325)
	{
		console.log("Moving Up");
		player.y += -2;
	}
	if(s && player.y < canvas.height/2 + 325)
	{
		console.log("Moving Down");
		player.y += 2;
	}

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


	
	if(ball.hitTestObject(player))
	{
		ball.x = player.x + player.width/2 + ball.width/2;
		ball.vx = -ball.vx;
		
	}
	
}

function randomColor(){
	var r = Math.round(Math.random()*255)
	var b = Math.round(Math.random()*255)
	var g = Math.round(Math.random()*255)

	return `rgb(${r}, ${g}, ${b})`
}