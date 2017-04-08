$(function(){
	//01- Grab the template script
	var theTemplateScript = $("#context-template").html();

	//02- Compile the template
	var theTemplate = Handlebars.compile(theTemplateScript);

	//03- This is the default context, which is passed to the template
	var context = {
		people: [
			{firstName: 'Tu', lastName: 'Nguyen' },
			{firstName: 'Hobbie', lastName: 'Nguyen' },
			{firstName: 'Trang', lastName: 'Nguyen' },
			{firstName: 'Bo', lastName: 'Xi' },
			{firstName: 'Bi', lastName: 'Lu' }
		],
		table: [
			{rank: '1', score: '250'},
			{rank: '2', score: '200'},
			{rank: '3', score: '180'},
			{rank: '4', score: '140'}
		]
	};

	// Pass our data to the template
	var theCompiledHtml = theTemplate(context);

	$(document.body).append(theCompiledHtml);
});