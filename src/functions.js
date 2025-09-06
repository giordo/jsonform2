
function p(s){ //to-do
  ret = '';
  s.replace(/\s{2,}/g, ' ');
  s.split(' ').forEach(function (t) {
    ret += appPrefix + t + ' ';
  });  
  return ret;
}

function t(word_to_translate){ //to-do
    return word_to_translate;
}

function __log(log){
  console.log(log);
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
  let id = generateGUID();
  let lbl = createElement('label', classes, parent);
  lbl.setAttribute('for', id);
  lbl.innerHTML = label;
  let element = createElement(name, classes, parent);
  element.setAttribute('id', id);
  element.setAttribute('name', id);
  return element;
}

function addOptionToSelect(title, value, classes, select){
  opt = createElement('option', classes);
  opt.innerText = title;
  opt.setAttribute('value', value);
  select.appendChild(opt);
  return opt;
}

function addComponentElement(data, selFactor, divComponents){
  let componentDiv = createElement('div', p('component'));
  componentDiv.setAttribute('id', data.uid);  
  componentTitle = createElement('input', p('component-title'));
  componentTitleID = generateGUID();
  componentTitleLabel = createElement('label', 'label-component-title');
  componentTitleLabel.setAttribute('for', componentTitleID);
  componentTitleLabel.innerHTML = t('Component Title');
  componentTitle.setAttribute('name', componentTitleID);
  componentTitle.setAttribute('id', componentTitleID);
  componentTitle.setAttribute('value', data.title);
  componentDiv.appendChild(componentTitleLabel);
  componentDiv.appendChild(componentTitle);
  


  componentFactormodeID = generateGUID();
  componentFactormodeLabel = createElement('label', 'label-component-factormode');
  componentFactormodeLabel.setAttribute('for', componentFactormodeID);
  componentFactormodeLabel.innerHTML = t('Facor');
  componentDiv.appendChild(componentFactormodeLabel);
  selFactor.setAttribute('id', componentFactormodeID);
  selFactor.setAttribute('name', componentFactormodeID);  
  __log(selFactor.querySelector('option'));
  componentDiv.appendChild(selFactor);
  

  componentPriceID = generateGUID();
  componentPriceLabel = createElement('label', 'label-component-title');
  componentPriceLabel.setAttribute('for', componentPriceID);
  componentPriceLabel.innerHTML = t('Price');
  componentPrice = createElement('input', p('component-price'));
  componentPrice.setAttribute('type', 'number');
  componentTitle.setAttribute('name', componentPriceID);
  componentTitle.setAttribute('id', componentPriceID);
  componentDiv.appendChild(componentPriceLabel);
  componentDiv.appendChild(componentPrice);


  
  divComponents.appendChild(componentDiv);

}