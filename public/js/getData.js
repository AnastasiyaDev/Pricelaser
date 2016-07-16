"use strict";

var authors = [];
var tmpl = _.template($('#list-template').html());
var $listOfAuthors= $('#reviewers');

$.ajax({
 	url: 'reviewers.json',
    dataType : 'json',
    beforeSend: function () {
        // $.fancybox.showLoading();
    }
}).done(function (reviewers) {
	reviewers.forEach(function(item) {
		authors.push(item); 	
	});

	$listOfAuthors.html(tmpl({ reviewers: authors }));
	
}).fail(function (xhr, status, errorThrown) {
	alert("Извините, произошла ошибка. Пожалуйста, обновите страницу и попробуйте еще раз.");
	console.log("Error: " + errorThrown);
	console.log("Status: " + status);
	console.dir(xhr); 
}).always(function (xhr, status) {
    // $.fancybox.hideLoading();
});
