function rotateEvery(sec)
{
	var Greet1=new Array()



 
	Greet1[0] = 'Social Psychology';
	Greet1[1] = 'Social Cognition';
	Greet1[2] = 'Society of Mind';
	Greet1[3] = 'Neuroscience and Behavior';
	Greet1[4] = 'Behavioral Endocrinology';
	Greet1[5] = 'Evolution, Ecology and Behavior';
	Greet1[6] = 'Environmental Psychology';
	Greet1[7] = 'Animal Behavior';
	Greet1[8] = 'Evolution of Brain and Language';
	Greet1[9] = 'Mathematics: Making the Invisible Visible';
	Greet1[10] = 'Heidegger’s Being and Time';
	Greet1[11] = 'Model Thinking';
	Greet1[12] = 'Philosophy of Language';
	Greet1[13] = 'Theory of Meaning';
	Greet1[14] = 'Visual Thinking';
	Greet1[15] = 'Interactive Game Design';
	Greet1[16] = 'Formal Theory of Cities';
	Greet1[17] = 'Aircraft Systems Engineering';
	Greet1[18] = 'Biomedical Engineering';
	Greet1[19] = 'RFID supply chain management';
	Greet1[20] = 'Mobile UX';

	var which = Math.round(Math.random()*(Greet1.length - 1));
	document.getElementById('box').innerHTML = "<p>Inspired by: " + Greet1[which] + "</P>";
	setTimeout('rotateEvery('+5+')', sec*1000);
}