var arrow = $('.arrow');
var btn = $('#arrow-btn');

$(window).scroll(function() {
    if($(window).scrollTop() > 100)
    {
        arrow.addClass('show');
    } else {
        arrow.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
});