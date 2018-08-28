function isEventProp (name) {
  return /^on/.test(name)
}

function extractEventName (name) {
  return name.slice(2).toLowerCase()
}

export function addPropsEvents ($target, props = {}) {
  const _keys = Object.keys(props)
  _keys.forEach(name => {
    if (isEventProp(name)) {
      $target.addEventListener(
        extractEventName(name),
        props[name]
      )
    }
  })
}

export function removeEventListener ($target) {

}

export function updateEventProps ($target, props = {}) {

}