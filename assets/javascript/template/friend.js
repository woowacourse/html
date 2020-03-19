import { friendsData } from "../data/friends.js";
import { insertBeforeEnd } from "../util.js";

export function friendTemplate({src, name, actual}) {
  return `
    <a href="${actual || "#"}" target="_blank" class="friend">
      <div class="friend_img">
        <img src="${src || "./assets/image/friends/friend_placeholder.jpg"}" alt="friend image">
      </div>
      <div class="friend_name">${name}</div>
    </a>
`
}

export function loadFriends() {
  insertBeforeEnd(".friends", friendTemplate, friendsData);
}
