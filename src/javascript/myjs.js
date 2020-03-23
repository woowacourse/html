$(document).ready(() => {

    $('reply-content').hide();
})

$(document).ready(() => {
    $('.question-reply').click(() => {
        $('.reply-content').toggle("fast");
    })
});

