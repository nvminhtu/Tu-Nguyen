$(function(){
	//Grab the template script
	var templateScript = $("#expression-template").html();

	//Compile the template
	var theTemplate = Handlebars.compile(templateScript);

	//Define our data object
	var context = {
		"description": {
			"escaped": "using {{}} brackets",
			"unescaped": "using {{}} will leave the context as it is:"
		},
		"example" : "<button>Hello World</button>"
	}

	//Pass our data to the template
	var theCompileHtml = theTemplate(context);

	//Add the Compile HTML to the page
	$('.content-placeholder').html(theCompileHtml);
});