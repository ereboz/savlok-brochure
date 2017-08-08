// javaboxer 8-7-17
// savlok-brochure
// make the 3 primary boxes above the fold the same height base on which box'z height is largest
// we should add a window resize function as well

$(document).ready(function(){
    
    var highestBox = 0;
    var thisBox = $('div[class$="wrapper"] .box.primary');
    thisBox.each(function(){
        if($(this).height() > highestBox){
            highestBox = $(this).height();
        }
    });
    thisBox.height(highestBox);
    
});

