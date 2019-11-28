export function getNodeFromString(htmlString) {
  const parser = new DOMParser();
  const parsedHtml = parser.parseFromString(htmlString, "text/html");
  return parsedHtml.body.firstChild;
}

export function cloneTemplateNode(id, selector) {
  return document
    .querySelector(id)
    .content.querySelector(selector)
    .cloneNode(true);
}
