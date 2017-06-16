/**
 * Created by mephisto on 6/16/17.
 */


$(document).ready(function () {



    $('#cell').hover(function () {
        myCellular = 'NzA2LTk5Mi05NTYy';
        $('.contact-box').html(atob(myCellular));
        setTimeout(function () {
            $('.contact-box').html('');
        },5000)
    });
    $('#mail').hover(function () {
        myInbox = 'Y2hhZG1fQHlhaG9vLmNvbQ==';
        $('.contact-box').html(atob(myInbox));
        setTimeout(function () {
            $('.contact-box').html('');
        },5000)
    });

});