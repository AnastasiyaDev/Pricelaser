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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJnZXREYXRhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgYXV0aG9ycyA9IFtdO1xudmFyIHRtcGwgPSBfLnRlbXBsYXRlKCQoJyNsaXN0LXRlbXBsYXRlJykuaHRtbCgpKTtcbnZhciAkbGlzdE9mQXV0aG9ycz0gJCgnI3Jldmlld2VycycpO1xuXG4kLmFqYXgoe1xuIFx0dXJsOiAncmV2aWV3ZXJzLmpzb24nLFxuICAgIGRhdGFUeXBlIDogJ2pzb24nLFxuICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gJC5mYW5jeWJveC5zaG93TG9hZGluZygpO1xuICAgIH1cbn0pLmRvbmUoZnVuY3Rpb24gKHJldmlld2Vycykge1xuXHRyZXZpZXdlcnMuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG5cdFx0YXV0aG9ycy5wdXNoKGl0ZW0pOyBcdFxuXHR9KTtcblxuXHQkbGlzdE9mQXV0aG9ycy5odG1sKHRtcGwoeyByZXZpZXdlcnM6IGF1dGhvcnMgfSkpO1xuXHRcbn0pLmZhaWwoZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvclRocm93bikge1xuXHRhbGVydChcItCY0LfQstC40L3QuNGC0LUsINC/0YDQvtC40LfQvtGI0LvQsCDQvtGI0LjQsdC60LAuINCf0L7QttCw0LvRg9C50YHRgtCwLCDQvtCx0L3QvtCy0LjRgtC1INGB0YLRgNCw0L3QuNGG0YMg0Lgg0L/QvtC/0YDQvtCx0YPQudGC0LUg0LXRidC1INGA0LDQty5cIik7XG5cdGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgZXJyb3JUaHJvd24pO1xuXHRjb25zb2xlLmxvZyhcIlN0YXR1czogXCIgKyBzdGF0dXMpO1xuXHRjb25zb2xlLmRpcih4aHIpOyBcbn0pLmFsd2F5cyhmdW5jdGlvbiAoeGhyLCBzdGF0dXMpIHtcbiAgICAvLyAkLmZhbmN5Ym94LmhpZGVMb2FkaW5nKCk7XG59KTtcbiJdLCJmaWxlIjoiZ2V0RGF0YS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
