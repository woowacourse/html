function show_text() {
    var image_display = document.getElementById('introducing-image');
    var text_display = document.getElementById('introducing-text');

    if (image_display.style.display == "none") {
        image_display.style.display = "block";
        text_display.style.display = "none";
    } else {
        image_display.style.display = "none";
        text_display.style.display = "block";
    }
}

function go_mission() {
    alert("띠링-");
}