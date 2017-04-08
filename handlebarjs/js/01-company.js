$(function(){
	//01 - Grab the template script
	var theTemplateScript = $('#member-template').html();

	//02 - Compile the template
	var theTemplate = Handlebars.compile(theTemplateScript);

	//03 - Define data object
	var context = {
		users: [
			{
				person: {
					firstName: 'Tu',
					lastName: 'Nguyen'
				},
				jobTitle: 'Frontend Developer',
				age: '28', 
				facebook: 'Tu Nguyen'
			},
			{
				person: {
					firstName: 'Dai',
					lastName: 'Lam'
				},
				jobTitle: 'Frontend Developer',
				age: '28', 
				facebook: 'Moc Lam'
			},
			{
				person: {
					firstName: 'Hai',
					lastName: 'Hoang'
				},
				jobTitle: 'Designer',
				age: '26', 
				facebook: 'Hoang Quoc Hai'
			}
		]
	};

	//04 - Custom Helper
	Handlebars.registerHelper('fullName', function(person) {
		return person.firstName + " " + person.lastName;
	});

	//05 - Pass our data to the template
	var theCompileHtml = theTemplate(context);

	//06 - Add the Compile HTML to the page
	$('.content-placeholder').html(theCompileHtml);
});
