// javaboxer 8-7-17
// savlok-brochure

// websites using the savlok-brochure have a bootstrap .container wrapper. We need to replace the parent container
// with .container-fluid to accomodate full width for the brochure topic page.

$(document).ready(function(){
    
    var loc = window.location.href.toLowerCase();
    var pageWrapper = "";
    
    if (loc.indexOf('savlok-brochure') > -1) {
        pageWrapper = $(".topic-page");
        $(pageWrapper).parent().removeClass("container");
        $(pageWrapper).parent().addClass("container-fluid");
    }
    
});


// make the 3 primary boxes above the fold the same height base on which box'z height is largest
// we should add a window resize function as well

$(window).load(function() {
    
    var highestBox = 0;
    var thisBox = $('div[class$="wrapper"] .box.primary');
    thisBox.each(function(){
        if($(this).height() > highestBox){
            highestBox = $(this).height();
        }
    });
    thisBox.height(highestBox);
    
});