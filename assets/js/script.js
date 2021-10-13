'use strict'

$(document).ready(function(){
    //attached contact details
    $(window).scroll(function(){
        //navigation animation
        if (jQuery(window).scrollTop()> 65) {
            $(".fixed_contacts").addClass("attach");
        }else{
            $(".fixed_contacts").removeClass("attach");
        };
    });

    $("html").easeScroll();

    $("form").validate();
    
});
