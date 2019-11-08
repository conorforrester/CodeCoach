//navbar scroll w/ color change
$(function() {
    $(document).scroll(function(){
    var $nav = $("#mainNavbar");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});

//carousel slide interval
$(function(){
    $(".carousel").carousel( { interval: 100000});
});


