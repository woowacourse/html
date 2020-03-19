export function insertBeforeEnd(className, template, data = null) {
  if (!data) {
    document.querySelector(className).insertAdjacentHTML("beforeend", template());
    return;
  }
  data.map(chunk => template(chunk)).forEach(node => {
    document.querySelector(className).insertAdjacentHTML("beforeend", node);
  })
}

export function stringToHtml(string) {
  return new DOMParser().parseFromString(string, "text/html").body.firstChild
}
