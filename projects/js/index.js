
// Detect iOS Safari
var ua = window.navigator.userAgent;
var iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
var webkit = !!ua.match(/WebKit/i);
var iOSSafari = iOS && webkit && !ua.match(/CriOS/i);

var currentSlideIndex = 0;
var freezeRouteChange = false;


// Fade in
$(document).ready(function(){
$('#fade_in_page').fadeIn(2000);
});

$(document).ready(function(){
$('#fade_in_page1').fadeIn(2000);
});


