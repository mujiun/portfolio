// ===== Scroll to Top ==== 
$(function() {
    $("#return-to-top").on('click', function() {
        $("HTML, BODY").animate({
            scrollTop: 0
        }, 1000);
    });
});

// ===== Scroll to ID Smooth ==== 
$(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');
    
    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }
    
    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();
    
    // top position relative to the document
        var pos = $id.offset().top;
    
    // animated top scrolling
    $("HTML, BODY").animate({scrollTop: pos});
});

// Fade in
$(document).ready(function(){
    $('#fade_in_page').fadeIn(2000);
});


//reverse text color based on background color

//fade in on scroll
/*
$(document).ready(function() {
    $(window).scroll( function(){
        $('.fadeup').each( function(i){
            var top_of_element = $(this).offset().top;
            var top_of_window = $(window).scrollTop() + $(window).height();
            
            if( top_of_window > top_of_element + 100 ){
                $(this).animate({'opacity':'1','top':'-30px'},500);

            }
            
        }); 
    });
});
*/
