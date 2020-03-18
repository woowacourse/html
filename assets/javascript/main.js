import { loadFriends } from "./template/friend.js";
import { loadHeader } from "./template/header.js";
import { loadPosts } from "./template/post.js";

window.onload = () => {
  loadHeader();
  loadFriends();
  loadPosts();
};
