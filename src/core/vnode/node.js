/**
 * virtual dom abstract
 * @param { String } type 元素类型
 * @param { Object } props
 * @param { Arrary } children
 * For Exmaple: 
 */

export function vnode (type, props, ...children) {
  return { type, props, children }
}