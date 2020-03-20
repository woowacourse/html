import { postData } from "../data/posts.js";
import { insertBeforeEnd } from "../util.js";
import { addPostEventListener } from "../eventHandler/postEventHandler.js";

export function postTemplate(data) {
  const {
    index,
    authorSrc,
    authorName,
    authorLocation,
    likeThumbnail,
    likeName,
    likeCount,
    postSrc,
    postContent,
    createdAt
  } = data;
  return `
  <article class="post">
    <div class="post_header">
      <div class="author_img">
        <img src="${authorSrc}" alt="author image">
      </div>
      <div class="author_info">
        <div class="author_name">${authorName}</div>
        <div class="author_location">${authorLocation}</div>
      </div>
      <!-- TODO: button 작동하도록 변경-->
      <div class="more_btn">...</div>
    </div>
    <div class="post_img post_img_${index}">
      <img src="${postSrc}" alt="post image">
      ${heart(index)}
    </div>
    <div class="post_reaction">
      <div class="reaction_btns">
        <div class="btn btn_like btn_${index}">
          <svg aria-label="좋아요" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24">
            <path clip-rule="evenodd"
                d="M34.3 3.5C27.2 3.5 24 8.8 24 8.8s-3.2-5.3-10.3-5.3C6.4 3.5.5 9.9.5 17.8s6.1 12.4 12.2 17.8c9.2 8.2 9.8 8.9 11.3 8.9s2.1-.7 11.3-8.9c6.2-5.5 12.2-10 12.2-17.8 0-7.9-5.9-14.3-13.2-14.3zm-1 29.8c-5.4 4.8-8.3 7.5-9.3 8.1-1-.7-4.6-3.9-9.3-8.1-5.5-4.9-11.2-9-11.2-15.6 0-6.2 4.6-11.3 10.2-11.3 4.1 0 6.3 2 7.9 4.2 3.6 5.1 1.2 5.1 4.8 0 1.6-2.2 3.8-4.2 7.9-4.2 5.6 0 10.2 5.1 10.2 11.3 0 6.7-5.7 10.8-11.2 15.6z"
                fill-rule="evenodd"></path>
          </svg>
        </div>
        <div class="btn btn_comment btn_comment_${index}">
          <svg aria-label="댓글 달기" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24">
            <path clip-rule="evenodd"
                d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                fill-rule="evenodd"></path>
          </svg>
        </div>
        <div class="btn_bookmark"></div>
      </div>
    </div>
    <div class="post_likes">
      <div class="likes_thumbnail"><img src="${likeThumbnail}" alt="thumbnail of liker representative"></div>
      <div class="likes_info"><b>${likeName}</b> 님 <b>외 <span class="like_count_${index}">${likeCount}</span>명</b>이 좋아합니다.</div>
    </div>
    <div class="post_body">
      <div class="author_name">${authorName}</div>
      <p class="post_content">${postContent}</p>
    </div>
    <div class="comments comments_${index}">
      <div class="comment comment_input_box comment_${index}">
        <div class="author_name">woowa.crew</div>
        <input type="text" placeholder="댓글을 입력하세요" class="comment_input comment_input_${index}">  
        <button class="comment_input_submit comment_input_submit_${index}" disabled>게시</button>
      </div>
    </div>
    <div class="post_footer">
      <small class="created_at">${createdAt}</small>
    </div>
  </article>`
}

export const likeButton = `
    <svg aria-label="좋아요" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24">
      <path clip-rule="evenodd"
          d="M34.3 3.5C27.2 3.5 24 8.8 24 8.8s-3.2-5.3-10.3-5.3C6.4 3.5.5 9.9.5 17.8s6.1 12.4 12.2 17.8c9.2 8.2 9.8 8.9 11.3 8.9s2.1-.7 11.3-8.9c6.2-5.5 12.2-10 12.2-17.8 0-7.9-5.9-14.3-13.2-14.3zm-1 29.8c-5.4 4.8-8.3 7.5-9.3 8.1-1-.7-4.6-3.9-9.3-8.1-5.5-4.9-11.2-9-11.2-15.6 0-6.2 4.6-11.3 10.2-11.3 4.1 0 6.3 2 7.9 4.2 3.6 5.1 1.2 5.1 4.8 0 1.6-2.2 3.8-4.2 7.9-4.2 5.6 0 10.2 5.1 10.2 11.3 0 6.7-5.7 10.8-11.2 15.6z"
          fill-rule="evenodd"></path>
    </svg>
         
  `;

export const unlikeButton = `
    <svg aria-label="좋아요 취소" class="_8-yf5 " fill="#ed4956" height="24" viewBox="0 0 48 48" width="24">
      <path clip-rule="evenodd" d="M35.3 35.6c-9.2 8.2-9.8 8.9-11.3 8.9s-2.1-.7-11.3-8.9C6.5 30.1.5 25.6.5 17.8.5 9.9 6.4 3.5 13.7 3.5 20.8 3.5 24 8.8 24 8.8s3.2-5.3 10.3-5.3c7.3 0 13.2 6.4 13.2 14.3 0 7.8-6.1 12.3-12.2 17.8z" fill-rule="evenodd"></path>
    </svg>
  `;

export function heart(index) {
  return `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -28 512.00001 512" class="like_heart like_heart_${index}">
    <path d="m512 153.867188c0 43.292968-16.132812 82.941406-50.773438 124.734374-30.996093 37.398438-75.53125 75.355469-127.113281 119.308594-17.625 15.015625-37.597656 32.039063-58.320312 50.171875-5.429688 4.75-12.386719 7.386719-19.613281 7.429688h-.179688c-7.289062 0-14.316406-2.640625-19.792969-7.4375-20.683593-18.085938-40.625-35.089844-58.21875-50.085938l-.089843-.066406c-51.574219-43.957031-96.128907-81.921875-127.117188-119.320313-34.648438-41.792968-50.78125-81.441406-50.78125-124.734374 0-42.066407 14.425781-80.882813 40.617188-109.292969 26.507812-28.75 62.875-44.574219 102.414062-44.574219 29.558594 0 56.617188 9.335938 80.449219 27.761719 12.027343 9.304687 22.921875 20.679687 32.519531 33.964843l.179688-.238281c9.558593-13.183593 20.394531-24.480469 32.347656-33.726562 23.824218-18.425781 50.894531-27.761719 80.441406-27.761719 39.546875 0 75.914062 15.824219 102.414062 44.574219 26.191407 28.410156 40.617188 67.214843 40.617188 109.292969zm0 0" fill="#ff5e95"/>
    <path d="m512 153.867188c0 43.292968-16.132812 82.941406-50.773438 124.734374-30.996093 37.398438-75.53125 75.355469-127.113281 119.308594-17.625 15.015625-37.597656 32.039063-58.320312 50.171875-5.429688 4.75-12.386719 7.386719-19.613281 7.429688v-394.023438c9.558593-13.183593 20.394531-24.480469 32.347656-33.726562 23.824218-18.425781 50.894531-27.761719 80.441406-27.761719 39.546875 0 75.914062 15.824219 102.414062 44.574219 26.191407 28.410156 40.617188 67.214843 40.617188 109.292969zm0 0" fill="#ff3980"/>
  </svg>
`
}

export function comment(commentContent) {
  return `
    <div class="comment">
      <div class="author_name">woowa.crew</div>
      <div class="comment_content">${commentContent}</div>  
    </div>
  `
}


export function loadPosts() {
  insertBeforeEnd(".posts", postTemplate, postData)
  addPostEventListener(postData);
}
