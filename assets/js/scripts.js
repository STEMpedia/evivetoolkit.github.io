$('.subscribe form').submit(function(e) {
    e.preventDefault();
    var postdata = $('.subscribe form').serialize();
    $.ajax({
        type: 'POST',
        url: 'assets/subscribe.php',
        data: postdata,
        dataType: 'json',
        success: function(json) {
            if(json.valid == 0) {
                $('.success-message').hide();
                $('.error-message').hide();
                $('.error-message').html(json.message);
                $('.error-message').fadeIn('fast', function(){
                    $('.subscribe form').addClass('animated shake').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                        $(this).removeClass('animated shake');
                    });
                });
            }
            else {
                $('.error-message').hide();
                $('.success-message').hide();
                $('.subscribe form').hide();
                $('.success-message').html(json.message);
                $('.success-message').fadeIn('fast', function(){
                    $('.top-content').backstretch("resize");
                });
            }
        }
    });
});