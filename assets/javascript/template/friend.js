import { friendsData } from "../data/friends.js";

export function friendTemplate({src, name, actual}) {
  return `
    <a href="${actual || "#"}" target="_blank" class="friend">
      <div class="friend_img">
        <img src="${src}" alt="friend_placeholder">
      </div>
      <div class="friend_name">${name}</div>
    </a>
`
}

export function loadFriends() {
  let friends = document.querySelector(".friends");
  friendsData.map(data => friendTemplate(data))
      .forEach(template => {
        friends.insertAdjacentHTML("beforeend", template);
      })
}
