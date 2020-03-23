const inputBar = document.querySelector("#comment-input");
const rootDiv = document.querySelector("#comments");
const btn = document.querySelector("#submit");
const mainCommentCount = document.querySelector('#count');

function showComment(comment) {
    const inputValue = document.createElement('span');
    const countSpan = document.createElement('span');
    const commentList = document.createElement('div');

    commentList.className = "eachComment";
    inputValue.className = "inputValue";

    inputValue.innerText = comment;
    countSpan.innerHTML = 0;

    commentList.appendChild(inputValue);
    rootDiv.prepend(commentList);

    console.dir(rootDiv);
}

function pressBtn() {
    const currentVal = inputBar.value;

    if (!currentVal.length) {
        alert("댓글을 입력하세요.");
    } else {
        showComment(currentVal);
        mainCommentCount.innerHTML++;
        inputBar.value = '';
    }
}

inputBar.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        pressBtn();
    }
});

btn.onclick = pressBtn;
