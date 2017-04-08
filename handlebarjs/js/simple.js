$(function(){
	//Grab the template script
	var theTemplateScript = $("#address-template").html();

	//Compile the template
	var theTemplate = Handlebars.compile(theTemplateScript);

	//Define our data object
	var context = {
		"city" : "Saigon",
		"street" : "Le Duc Tho",
		"number" : "12/220"
	}

	//Pass our data to template
	var theCompileHtml = theTemplate(context);

	$('.content-placeholder').html(theCompileHtml);
});