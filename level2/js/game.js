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
	player = new GameObject();
	ball = new GameObject();

	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	//Move the Player to the right
	if(w && player.y > canvas.height/2 - 150)
	{
		console.log("Moving Up");
		player.y += -2;
	}
	if(s && player.y < canvas.height/2 + 500)
	{
		console.log("Moving Down");
		player.y += 2;
	}
	
	if(up && player.y > canvas.height/2 - 150)
	{
		console.log("Moving Up");
		player.y += -2;
	}
	if(down)
	{
		console.log("Moving Down");
		player.y += 2;
	}

	//Update the Screen
	player.drawRect1();
}

function randomColor(){
	var r = Math.round(Math.random()*255)
	var b = Math.round(Math.random()*255)
	var g = Math.round(Math.random()*255)

	return `rgb(${r}, ${g}, ${b})`
}