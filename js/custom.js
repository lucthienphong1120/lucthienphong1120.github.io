// preloader

$(window).load(function(){
    $('.preloader').delay(1000).fadeOut("slow");
});

// birthday

$('#year').text(new Date().getFullYear() - 2003);