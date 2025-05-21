//Declare my variables

var canvas;
var context;
var timer;
var interval;
var player;
var lookDirect = true;


	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

	player = new GameObject({x:100, y:canvas.height/2-100});
	player.width = 150;
	player.height = 125;

	platform0 = new GameObject();
		platform0.width = 125;
		platform0.height = 1200;
		platform0.x = 800;
		platform0.y = 950;
		platform0.color = "#66ff33";
		
	
	platform1 = new GameObject();
		platform1.width = 125;
		platform1.height = 300;
		platform1.x = 500;
		platform1.y = 550;
		platform1.color = "#ffff00";
		
	platform2 = new GameObject();
		platform2.width = 1000;
		platform2.x = platform0.width/2;
		platform2.color = "#66ff33";
		platform2.y = platform0.y- 200;
		platform2.color = "#66ff33";

	attack = new GameObject();
		attack.width = 50;
		attack.height = 50;
		attack.x = 200;
		attack.color = "#0000ff";
		attack.y = 500;
		
	
	goal = new GameObject({width:24, height:50, x:20, y:platform0.y-100, color:"#00ffff"});
	

	var fX = .85;
	var fY = .97;
	
	var gravity = 1;
	

	interval = 1000/60;
	timer = setInterval(animate, interval);

function animate()
{
	
	context.clearRect(0,0,canvas.width, canvas.height);	

	if(w && player.canJump && player.vy ==0)
	{
		player.canJump = false;
		player.vy += player.jumpHeight;
	}

	if(a)
	{
		player.vx += -player.ax * player.force;
		lookDirect = true;
		player.dir = -1;
	}
	if(d)
	{
		player.vx += player.ax * player.force;
		lookDirect = false;
		player.dir = 1;
	}
	if(space)
	{
		attack.x = player.x;
		attack.y = player.y - 15;
		attack.vx = 5*player.dir;
	}
	attack.move();
	

	player.vx *= fX;
	player.vy *= fY;
	
	player.vy += gravity;
	
	player.x += Math.round(player.vx);
	player.y += Math.round(player.vy);
	
	platform1.x += platform1.vx;



	while(platform0.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform0.hitTestPoint(player.bottomLeft()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform0.hitTestPoint(player.bottomRight()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform0.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform0.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform0.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}
	while(platform2.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}
	while(platform2.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform2.hitTestPoint(player.bottomLeft()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform2.hitTestPoint(player.bottomRight()) && player.vy >=0)
	{
		player.y++;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform2.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform2.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform1.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}
	while(platform1.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform1.hitTestPoint(player.bottomLeft()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform1.hitTestPoint(player.bottomRight()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	if(platform1.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.y--;
		player.vy = -10;
	}
	while(platform1.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	if(platform1.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.y--;
		player.vy = -10;
	}
	while(platform1.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}


	if(player.hitTestObject(goal))
	{
		goal.y = 10000;
	}
	
	


	
	context.drawImage(scratchpost, platform1.x - platform1.width/2, platform1.y - platform1.height/2, platform1.width, 
		platform1.height);

	context.drawImage(fire, attack.x - attack.width/2, attack.y - attack.height/2, attack.width, 
		attack.height)

	
	

	platform0.drawRect();
	platform2.drawRect();
	
	
	//Show hit points
	player.drawDebug();
	goal.drawCircle();
	if(lookDirect == true){
		context.drawImage(catSwap, player.x - player.width/2, player.y - player.height/2, player.width, player.height);
	}
	if(lookDirect == false){
		context.drawImage(cat, player.x - player.width/2, player.y - player.height/2, player.width, player.height);
	}

	if(lookDirect == true && space == true){
		context.drawImage(catAttack2, player.x - player.width/2, player.y - player.height/2, player.width, player.height);
	}
	if(lookDirect == false && space == true){
		context.drawImage(catAttack, player.x - player.width/2, player.y - player.height/2, player.width, player.height);
	}
}

