import { stringToHtml } from "../util.js";
import { comment, likeButton, unlikeButton } from "../template/post.js";

function handleCommentInputDisplay(index) {
  const commentButton = document.querySelector(`.btn_comment_${index}`)
  const commentInputBox = document.querySelector(`.comment_${index}`);
  commentButton.addEventListener("click", function () {
    commentInputBox.style.display = commentInputBox.style.display !== "flex" ? "flex" : "none";
  })
}

function handleCommentInput(index) {
  const input = document.querySelector(`.comment_input_${index}`);
  const button = document.querySelector(`.comment_input_submit_${index}`);
  input.addEventListener("input", function (e) {
        e.target.value.trim().length > 0 ?
            button.removeAttribute("disabled")
            : button.setAttribute("disabled", "true");
      }
  )
}

function addComment(index) {
  const inputBox = document.querySelector(`.comment_${index}`);
  const input = document.querySelector(`.comment_input_${index}`);
  const button = document.querySelector(`.comment_input_submit_${index}`);
  const comments = document.querySelector(`.comments_${index}`)
  input.addEventListener("keydown", function (e) {
        if (e.code === "Enter" && input.value.trim().length > 0) {
          comments.insertBefore(stringToHtml(comment(input.value)), inputBox);
          inputBox.style.display = "none";
          input.value = "";
          button.setAttribute("disabled", "true");
        }
      }
  )
  button.addEventListener("click", function () {
    comments.insertBefore(stringToHtml(comment(input.value)), inputBox);
    inputBox.style.display = "none";
    input.value = "";
    button.setAttribute("disabled", "true");
  })
}

function handleLikeToggle(index) {
  document.querySelector(`.btn_${index}`).addEventListener("click",
      () => toggleLike(index)
  )
}

function toggleLike(index) {
  const like = document.querySelector(`.btn_${index}`);
  const likeCount = document.querySelector(`.like_count_${index}`);
  const currentLikeCount = likeCount.innerText;
  if (like.innerHTML === unlikeButton) {
    like.innerHTML = likeButton;
    likeCount.innerHTML = parseInt(currentLikeCount) - 1;
    return;
  }
  like.innerHTML = unlikeButton;
  likeCount.innerHTML = parseInt(currentLikeCount) + 1;
}

function toggleLikeWithDoubleClick(index) {
  const box = document.querySelector(`.post_img_${index}`);
  const like = document.querySelector(`.btn_${index}`);
  const likeCount = document.querySelector(`.like_count_${index}`);
  const heart = document.querySelector(`.like_heart_${index}`);
  box.addEventListener("dblclick", () => {
    heart.classList.add("pop");
    if (like.innerHTML !== unlikeButton) {
      likeCount.innerHTML = parseInt(likeCount.innerText) + 1;
    }
    like.innerHTML = unlikeButton;
    setTimeout(() => {
      heart.classList.remove("pop");
    }, 600);
  })
}

export function addPostEventListener(postData) {
  postData.forEach(({index}) => {
    handleLikeToggle(index);
    handleCommentInputDisplay(index);
    handleCommentInput(index);
    addComment(index)
    toggleLikeWithDoubleClick(index);
  });
}
