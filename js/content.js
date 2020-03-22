function content() {
    const content = $('#content').val();
    if (content) {
        $('#li-content').append(`<li>${content}</li>`)
        document.getElementById("content").value = "";
    }
}