const askHTMLString = '' +
    '<div id="questionListWrapper">' +
    '<span class="subTitle">질문 리스트</span>' +
    '<div style="margin-bottom: 20px"></div>' +
    '<div class="questionLine">질문을 남기면 이렇게 나와요.</div>' +
    '</div>' +
    '<div style="text-align: center">' +
    '<textarea id="questionInputBox" placeholder="HTML에게 궁금한 점을 남겨주세요!"></textarea>' +
    '<button id="questionBtn" onclick="onClick()">남기기</button></div>';

function onClick() {
    const question = document.getElementById("questionInputBox");
    const data = question.value;
    question.value = "";
    const questionListWrapper = document.getElementById("questionListWrapper");
    questionListWrapper.innerHTML += "<div class='questionLine'>" + data + "</div>";
}