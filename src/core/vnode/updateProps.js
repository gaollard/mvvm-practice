function removeBooleanProp ($target, name) {
  $target.removeAttribute(name)
  $target[name] = false
}

export function removeProp ($target, name, value) {
  if (typeof value === 'boolean') {
    removeBooleanProp($target, name)
  } else {
    $target.removeAttribute(name)
  }
}

function setBooleanProp ($target, name, value) {
  if (value) {
    $target.setAttribute(name, value);
    $target[name] = true;    
  } else {
    $target[name] = false;
  }
}

export function setProp ($target, name, value) {
  if (typeof value === "boolean") {
    setBooleanProp($target, name, value);
  } else {
    $target.setAttribute(name, value);
  }
}

export function setProps($target, props) {
  if (props && typeof props === 'object') {
    Object.keys.forEach(name => {
      setProp($target, name, props[name])
    });
  }
}

export function updateProp($target, name, newVal, oldVal) {
  if (!newVal) {
    removeProp($target, name, oldVal);
  } else if (!oldVal || newVal !== oldVal) {
    setProp($target, name, newVal);
  }
}

export function updateProps($target, newProps, oldProps = {}) {
  const props = Object.assign({}, newProps, oldProps);
  Object.keys(props).forEach(name => {
      updateProp($target, name, newProps[name], oldProps[name]);
  });
}