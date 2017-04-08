$(function(){

	//01 - Grab the template script
	var theTemplateScript = $('#show-template').html();

	//02 - Compile the template
	var theTemplate = Handlebars.compile(theTemplateScript);

	//03 - Define data object
	var placeHolder = $('.content-placeholder');

	//04 - Get Json data and pass it to HTML template
	$.get("js/data/members.json",function(data,status,xhr){
		$.each(data,function(index,element){
			//Generate HTML for each post
			var html = theTemplate(element);
			placeHolder.append(html);
		})
	});
});