$(document).ready(function () {
    $('.login-info-box').fadeOut();
    $('.login-show').addClass('show-log-panel');
});


$('.login-reg-panel input[type="radio"]').on('change', function () {
    if ($('#log-login-show').is(':checked')) {
        $('.register-info-box').fadeOut();
        $('.login-info-box').fadeIn();

        $('.form-panel').addClass('right-log');
        $('.register-show').addClass('show-log-panel');
        $('.login-show').removeClass('show-log-panel');

    }
    else if ($('#log-reg-show').is(':checked')) {
        $('.register-info-box').fadeIn();
        $('.login-info-box').fadeOut();

        $('.form-panel').removeClass('right-log');

        $('.login-show').addClass('show-log-panel');
        $('.register-show').removeClass('show-log-panel');
    }
});

/////////----Validation for user's email and password values----Here should be Ajax Call///////
$("button#login").click(function () {
    if ($.trim($('input#email').val()).length !== 0 && $.trim($('input#pwd').val()).length !== 0) {
        if ($('input#email').val("user@user.com") && $('input#pwd').val("user")) {
            alert('success!');
        }
    }
});

//////////----Validation for user's password and confirm password values----///////
$("button#register").click(function () {
    if ($.trim($('input#pwd1').val()).length !== 0 && $.trim($('input#pwd1a').val()).length !== 0) {
        if ($('input#pwd1').val() == $('input#pwd1a').val()) {
            alert('success!');
        }
    }
});


$('.openCarousel').click(function () {
    $('body').css('opacity', 0.9);
    $('#carouselFade').css('display', 'block');
});

$('.backToLogin').click(function () {
    $('body').css('opacity', 1);
    $('#carouselFade').css('display', 'none');
});