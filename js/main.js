// alert($);
//when the page loads

function askQuestions() {

	var firstName = prompt('what is your first name?');
	var lastName = prompt('what is your last name?');

	var fullName = firstName + ' ' + lastName;
	console.log('User is called ' + fullName);

	var age = prompt('How old are you?');
	age = parseInt(age);

	if (age >= 18) {
		console.log('User is an adult');
	} else if (age >= 13){
		console.log('User is a tennager');
	} else {
			console.log('User is a child');
	}

	var faveColour = prompt('What is your favourite colour?');

	faveColour = faveColour.toLowerCase();

	if (faveColour == 'red' || 
		faveColour == 'green' || 
		faveColour == 'blue' ||
		faveColour == 'yellow') {
		$('h1').css('color', faveColour);

	}

	/* 
		If the users first name is 'General' and the last name is NOT 'Assembly', then greet the general!

	*/
	if (firstName == 'General' && lastName != 'Assembly') {
		console.log('Greetings, General!');
	}

}


//when the page loads
	$(function() {


//when the user clicks the iamge, ask the questions
$('img').on('click', askQuestions);

		//when the user clicks a heading
		$('h3').on('click', function() {

			//hide the next element
			// $(this).next().hide();

				//toggle the next elemtent
				$(this).next().slideToggle(200);

	});
});


