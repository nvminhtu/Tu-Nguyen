$(function(){
	//01- Grab the template Script
	var theTemplateScript = $('#block-helpers').html();
	
	//02- Block Helper
	//02-1 -- Uppercase function
	Handlebars.registerHelper('uppercase',function(options){
		return options.fn(this).toUpperCase();
	});

	//02-2 -- Lowercase function
	Handlebars.registerHelper('lowercase',function(options){
		return options.fn(this).toLowerCase();
	});

	//03- Compile the template
	var theTemplate = Handlebars.compile(theTemplateScript);

	//Define our data object
	var context = {
		"code": "up up down down left right b a select start"
	};

	//04- Pass our data to the template
	var theCompiledHtml = theTemplate(context);
	$('.content-placeholder').html(theCompiledHtml);
});