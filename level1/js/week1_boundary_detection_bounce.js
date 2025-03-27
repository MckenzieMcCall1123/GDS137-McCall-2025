// JavaScript Document

var canvas;
var context;
var timer;
var interval = 1000/60;
var player;

	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	player = new Player();
	
	//------Declare the Player's speed on the x and y axis------
	player.vx = 5;
	player.vy = 5;
	//----------------------------------------------------
	
	timer = setInterval(animate, interval);


function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	//----Movement Using the Player's move() function----
	player.move();
	//---------------------------------------------------
	
	//--------------Bounce of Right----------------------
	if(player.x > canvas.width - player.width + -50)
	{
		player.vx = -player.vx;
		player.color = randomColor();
	}
	//--------------Bounce of Left-----------------------
	if(player.x < player.width/-2){
	
		player.vx = -player.vx;
		player.color = randomColor();
	}

	//------------
	if(player.y < player.height/-2){
	
		player.vy = -player.vy;
		player.color = randomColor();
	}

	if(player.y > canvas.height - player.height + -50)
		{
			player.vy = -player.vy;
			player.color = randomColor();
		}
	//---------------------------------------------------
	



	player.draw();
}

function randomColor(){
	var r = Math.round(Math.random()*255)
	var b = Math.round(Math.random()*255)
	var g = Math.round(Math.random()*255)

	return `rgb(${r}, ${g}, ${b})`
}