
function p(t){ //to-do
    return appPrefix + t;
}

function t(word_to_translate){ //to-do
    return word_to_translate;
}

function generateGUID() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
               .toString(16)
               .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
         s4() + '-' + s4() + s4() + s4();
}
console.log(generateGUID());

function createElement(name, classes, parent) {
  let element = document.createElement(name);

  element.className += classes;

  if (parent) {
    parent.appendChild(element);
  }

  return element;
}

function createInputElement(name, classes, parent, label) {
  let id = generateGUID;
  let lbl = createElement('label', classes, parent);
  lbl.setAttribute('for', id);
  lbl.innerHTML = label;
  let element = createElement(name, classes, parent);
  element.setAttribute('id', id);
  element.setAttribute('name', id);
  return element;
}
