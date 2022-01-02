var answer;
var score=0;
var attempts=0;

var backgroundImages = [];

function nextQuestion() {
	const n1 = Math.floor(Math.random() * 5);
	document.getElementById('n1').innerHTML = n1;

	const n2 = Math.round(Math.random() * 5);
	document.getElementById('n2').innerHTML = n2;

	answer = n1 + n2;
}

function checkAnswer() {
	
	attempts++;

	const prediction = predictImage();
	console.log(`Answer : ${answer} , Prediction : ${prediction}`);

	if(prediction == answer)
	{
		score++;
		backgroundImages.push(`url('images/background${score}.svg')`)
		
		if(score<=6){
			document.body.style.backgroundImage = backgroundImages;
			console.log(`Correct!    Score : ${score}`);
		}
		else
		{
			alert(`Congratulations LAWN is Full of Blossoms Now :)  Score: 7 out of ${attempts}`);
			score = 0;
			attempts = 0;
			backgroundImages = [];
			document.body.style.backgroundImage = backgroundImages;

		}
	}
	else
	{
		alert('Oops! Wrong answer, Tip: Write answers neatly');
		if (score!=0)
		{
			score--;
			setTimeout(function() {
				backgroundImages.pop();
				document.body.style.backgroundImage = backgroundImages;
			}, 1000);
		}
		console.log(`Incorrect!  Score : ${score}`);
	}

}