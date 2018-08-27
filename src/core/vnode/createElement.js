export function createElement (node) {
  if (typeof node === 'string') {
    // 文本节点
    return document.createTextNode(node)
  }
  const $element = document.createElement(node.type)
  console.log(node)
  console.log(node.children)
  node.children.forEach(element => {
    $element.appendChild(createElement(element))
  });
  return $element
}