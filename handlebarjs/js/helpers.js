$(function(){
	//01 - Register a helper
	//---- Example fucntion helper for Capitalize Text in a string with a custom functions
	Handlebars.registerHelper('capitalize',function(str){
		str = str || '';
		return str.slice(0,1).toUpperCase() + str.slice(1);
	});

	//02- Grab the template script
	var theTemplateScript = $("#custom-helpers").html();

	//03- Compile the template
	var theTemplate = Handlebars.compile(theTemplateScript);

	//04- Call this template from an array of object
	var context = {
		animals: [
			{ 
				name: 'cow',
				noise: 'moose'
			},
			{
				name: 'dog',
				noise: 'gau gau'
			},
			{
				name: 'cat',
				noise: 'meo meo'
			}
		]
	}
	//05- Pass data to the template
	var theCompiledHtml =  theTemplate(context);
	$('.content-placeholder').html(theCompiledHtml);
	//06- Add the compiled html to the page
});