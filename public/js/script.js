"use strict";


$( document ).on( "mousemove", function( event ) {
  $( "#log" ).text( "pageX: " + event.pageX + ", pageY: " + event.pageY );
  var nowX = event.pageX;
  	  nowY = event.pageY;


});