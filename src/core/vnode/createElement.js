import { updateProps } from './updateProps'
import { addPropsEvents } from './eventProps'

export function createElement (node) {
  if (typeof node === 'string') {
    return document.createTextNode(node)
  }

  const $element = document.createElement(node.type)
  updateProps($element, node.props)
  addPropsEvents($element, node.props)

  node.children.forEach(element => {
    $element.appendChild(createElement(element))
  })

  return $element
}