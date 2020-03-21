function setVisibie(id) {
    hiddenAllImage();
    document.getElementById(id).style.visibility = "visible";
}

function hiddenAllImage() {
    let elems = document.getElementsByClassName("image");
    for (const elem of elems) {
        elem.style.visibility = "hidden";
    }
}