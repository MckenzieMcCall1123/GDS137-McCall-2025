//Define Booleans for each key
var s = false;
var w = false;
var up = false;
var down = false;
var left = false;
var right = false;
//Add Event Listeners
document.addEventListener("keydown", press);
document.addEventListener("keyup", release);

//Event Functions
function press(e)
{
	//---This logs key codes into the browser's console.
	//console.log("Pressed" + e.keyCode);
	
	if(e.keyCode == 87)
	{
		w = true;
	}
	if(e.keyCode == 83)
	{
		s = true;
	}

	if(e.keyCode == 37)
	{
		left = true;
	}
	if(e.keyCode == 39)
	{
		right = true;
	}
}

function release(e)
{
	//---This logs key codes into the browser's console.
	//console.log("Released" + e.keyCode);
	if(e.keyCode == 87)
	{
		w = false;
	}
	if(e.keyCode == 83)
	{
		s = false;
	}

	if(e.keyCode == 37)
	{
		left = false;
	}
	if(e.keyCode == 39)
	{
		right = false;
	}
	
}
