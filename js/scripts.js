/**
 * Created by mephisto on 6/16/17.
 */


$(document).ready(function () {

    myCellular = 'NzA2LTk5Mi05NTYy';
    myInbox = 'Y2hhZG1fQHlhaG9vLmNvbQ==';
    $('#cell').click(function () {

        $('.contact-box').html('<br>Phone: ' + atob(myCellular) + '<br><br> Email: ' + atob(myInbox));
        $('.contact-box').fadeIn('slow');
    });
    $('#mail').click(function () {
        $('.contact-box').html('<br>Phone: ' + atob(myCellular) + '<br><br> Email: ' + atob(myInbox));
        $('.contact-box').fadeIn();
    });
    $('#Projects').click(function () {
       $('#Nav-Bar').fadeOut();
        $('#About').fadeOut();
        $('#Contact').fadeOut();
        $('#Top').fadeOut();
        $('#Skills').fadeOut();
        $('#Links').fadeOut()
    });
    $('.cd-close').click(function () {
        setTimeout(function () {
            $('#Nav-Bar').fadeIn('slow');
            $('#About').fadeIn();
            $('#Contact').fadeIn();
            $('#Top').fadeIn();
            $('#Skills').fadeIn();
            $('#Links').fadeIn();
            $('html, body').animate({
                scrollTop: $("#Projects").offset().top
            }, 0);
        },2500);
    });

    $('#About-link').click(function () {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#About").offset().top
        }, 700);
    });

    $('#Top-link').click(function () {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#Top").offset().top
        }, 700);
    });
    $('#Projects-link').click(function () {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#Projects").offset().top
        }, 700);
    });
    $('#Contact-link').click(function () {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#Contact").offset().top
        }, 700);
    });

});