const BACKGROUND_COLOR = '#000000';
const LINE_COLOR = 'yellow';//'#FFFFFF';
const LINE_WIDTH = 15;

var currentX = 0;
var currentY = 0;
var previousX = 0;
var previousY = 0;

var canvas;
var context;



function prepareCanvas() {
	// console.log('Preparing Canvas');
	canvas = document.getElementById('my-canvas');
	context = canvas.getContext("2d");

	context.fillStyle = BACKGROUND_COLOR;
	context.fillRect(0,0, canvas.clientWidth, canvas.clientHeight);

	context.strokeStyle = LINE_COLOR;
	context.lineWidth = LINE_WIDTH;
	context.lineJoin = 'round';

	var isPainting = false;

	document.addEventListener('mousedown', function(event) {
		// console.log('mouse pressed');

		currentX = event.clientX - canvas.offsetLeft;
		currentY = event.clientY - canvas.offsetTop;

		isPainting=true;
	});

	


	document.addEventListener('mousemove', function(event) {
		
		if(isPainting)
		{
			previousX = currentX;
			currentX = event.clientX - canvas.offsetLeft;
			previousY = currentY;
			currentY = event.clientY - canvas.offsetTop;
			// console.log(currentX);

			draw();
		}
		
	});

	document.addEventListener('mouseup', function(event) {
		// console.log('mouse released');
		isPainting=false;
	});

	canvas.addEventListener('mouseleave', function(event) {
		// console.log('mouse left canvas');
		isPainting=false;
	});


	//Touch Events
	canvas.addEventListener('touchstart', function(event) {
		// console.log('Touchdown');
		currentX = event.touches[0].clientX - canvas.offsetLeft;
		currentY = event.touches[0].clientY - canvas.offsetTop;

		isPainting=true;

	});

	canvas.addEventListener('touchmove', function(event) {
		
		if(isPainting)
		{
			previousX = currentX;
			currentX = event.touches[0].clientX - canvas.offsetLeft;
			previousY = currentY;
			currentY = event.touches[0].clientY - canvas.offsetTop;
			// console.log(currentX);

			draw();
		}
		
	});

	canvas.addEventListener('touchend', function(event) {
		isPainting=false;
	});

	canvas.addEventListener('touchcancel', function(event) {
		isPainting=false;
	});


}

function clearCanvas() {
	currentX = 0;
	currentY = 0;
	previousX = 0;
	previousY = 0;

	// console.log('Preparing Canvas');
	context.fillRect(0,0, canvas.clientWidth, canvas.clientHeight);

}

function draw()
{
	context.beginPath();
	context.moveTo(previousX, previousY);
	context.lineTo(currentX, currentY);
	context.closePath();
	context.stroke();
}