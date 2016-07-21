"use strict";

var authors = [
{
    "name": "SARA THOMAS",
    "pic": "sara.png",
    "note": "I wanted to make a surgery over 2 years, but I had only $3§k, when all surgeons asked $6, and by pricelaser I got the operation with best surgeon for $3k"
  },
  {
    "name": "RAYMOND MITCHELLE",
    "pic": "raymond.png",
    "note": "Duis mollis, est non commodo luctus, nisi porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam porttitor ligula."
  },
  {
    "name": "SANDRA MYRPHY",
    "pic": "sandra.png",
    "note": "Nulla vitae elit libero, a pharetra augue. Curabitur blandit tempus porttitor. Donec ullamcorper nulla non metus auctor fringilla."
  }
];
var tmpl = _.template($('#list-template').html());
var $listOfAuthors= $('#reviewers');

// $.ajax({
//  	url: 'reviewers.json',
//     dataType : 'json',
//     beforeSend: function () {
//         // $.fancybox.showLoading();
//     }
// }).done(function (reviewers) {
// 	reviewers.forEach(function(item) {
// 		authors.push(item); 	
// 	});

	$listOfAuthors.html(tmpl({ reviewers: authors }));
	
// }).fail(function (xhr, status, errorThrown) {
// 	alert("Извините, произошла ошибка. Пожалуйста, обновите страницу и попробуйте еще раз.");
// 	console.log("Error: " + errorThrown);
// 	console.log("Status: " + status);
// 	console.dir(xhr); 
// }).always(function (xhr, status) {
//     // $.fancybox.hideLoading();
// });

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJnZXREYXRhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgYXV0aG9ycyA9IFtcbntcbiAgICBcIm5hbWVcIjogXCJTQVJBIFRIT01BU1wiLFxuICAgIFwicGljXCI6IFwic2FyYS5wbmdcIixcbiAgICBcIm5vdGVcIjogXCJJIHdhbnRlZCB0byBtYWtlIGEgc3VyZ2VyeSBvdmVyIDIgeWVhcnMsIGJ1dCBJIGhhZCBvbmx5ICQzwqdrLCB3aGVuIGFsbCBzdXJnZW9ucyBhc2tlZCAkNiwgYW5kIGJ5IHByaWNlbGFzZXIgSSBnb3QgdGhlIG9wZXJhdGlvbiB3aXRoIGJlc3Qgc3VyZ2VvbiBmb3IgJDNrXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIlJBWU1PTkQgTUlUQ0hFTExFXCIsXG4gICAgXCJwaWNcIjogXCJyYXltb25kLnBuZ1wiLFxuICAgIFwibm90ZVwiOiBcIkR1aXMgbW9sbGlzLCBlc3Qgbm9uIGNvbW1vZG8gbHVjdHVzLCBuaXNpIHBvcnR0aXRvciBsaWd1bGEsIGVnZXQgbGFjaW5pYSBvZGlvIHNlbSBuZWMgZWxpdC4gQWVuZWFuIGV1IGxlbyBxdWFtLiBQZWxsZW50ZXNxdWUgb3JuYXJlIHNlbSBsYWNpbmlhIHF1YW0gcG9ydHRpdG9yIGxpZ3VsYS5cIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiU0FORFJBIE1ZUlBIWVwiLFxuICAgIFwicGljXCI6IFwic2FuZHJhLnBuZ1wiLFxuICAgIFwibm90ZVwiOiBcIk51bGxhIHZpdGFlIGVsaXQgbGliZXJvLCBhIHBoYXJldHJhIGF1Z3VlLiBDdXJhYml0dXIgYmxhbmRpdCB0ZW1wdXMgcG9ydHRpdG9yLiBEb25lYyB1bGxhbWNvcnBlciBudWxsYSBub24gbWV0dXMgYXVjdG9yIGZyaW5naWxsYS5cIlxuICB9XG5dO1xudmFyIHRtcGwgPSBfLnRlbXBsYXRlKCQoJyNsaXN0LXRlbXBsYXRlJykuaHRtbCgpKTtcbnZhciAkbGlzdE9mQXV0aG9ycz0gJCgnI3Jldmlld2VycycpO1xuXG4vLyAkLmFqYXgoe1xuLy8gIFx0dXJsOiAncmV2aWV3ZXJzLmpzb24nLFxuLy8gICAgIGRhdGFUeXBlIDogJ2pzb24nLFxuLy8gICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uICgpIHtcbi8vICAgICAgICAgLy8gJC5mYW5jeWJveC5zaG93TG9hZGluZygpO1xuLy8gICAgIH1cbi8vIH0pLmRvbmUoZnVuY3Rpb24gKHJldmlld2Vycykge1xuLy8gXHRyZXZpZXdlcnMuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4vLyBcdFx0YXV0aG9ycy5wdXNoKGl0ZW0pOyBcdFxuLy8gXHR9KTtcblxuXHQkbGlzdE9mQXV0aG9ycy5odG1sKHRtcGwoeyByZXZpZXdlcnM6IGF1dGhvcnMgfSkpO1xuXHRcbi8vIH0pLmZhaWwoZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvclRocm93bikge1xuLy8gXHRhbGVydChcItCY0LfQstC40L3QuNGC0LUsINC/0YDQvtC40LfQvtGI0LvQsCDQvtGI0LjQsdC60LAuINCf0L7QttCw0LvRg9C50YHRgtCwLCDQvtCx0L3QvtCy0LjRgtC1INGB0YLRgNCw0L3QuNGG0YMg0Lgg0L/QvtC/0YDQvtCx0YPQudGC0LUg0LXRidC1INGA0LDQty5cIik7XG4vLyBcdGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgZXJyb3JUaHJvd24pO1xuLy8gXHRjb25zb2xlLmxvZyhcIlN0YXR1czogXCIgKyBzdGF0dXMpO1xuLy8gXHRjb25zb2xlLmRpcih4aHIpOyBcbi8vIH0pLmFsd2F5cyhmdW5jdGlvbiAoeGhyLCBzdGF0dXMpIHtcbi8vICAgICAvLyAkLmZhbmN5Ym94LmhpZGVMb2FkaW5nKCk7XG4vLyB9KTtcbiJdLCJmaWxlIjoiZ2V0RGF0YS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
