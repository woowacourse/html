function nightDayHandler(self) {
    var body = document.querySelector('body');
    var links = document.querySelectorAll('a');
    if (self.value === 'night') {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
        changeColor(links, 'white');
        self.value = 'day'
    } else {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
        changeColor(links, 'black');
        self.value = 'night'
    }
}

function changeColor(variables, color) {
    var i = 0;    
    while(i < variables.length) {
        variables[i].style.color = color;
        i = i + 1;
    }
}

function alertChanged(self) {
    var changeMessage = "입력창 글씨가 바뀌었습니다: ";
    alert(changeMessage + self.value);
}
