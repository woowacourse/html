import { insertBeforeEnd } from "../util.js";

export function headerTemplate() {
  return `
    <nav class="header_logo">
      <img src="assets/image/logo_full_dark.png" alt="logo">
      <div class="header_title">우아한테코그램</div>
    </nav>
  `
}

export function loadHeader() {
  insertBeforeEnd(".header", headerTemplate);
}
