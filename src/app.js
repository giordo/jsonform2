const appPrefix = "abc-";

window.addEventListener("DOMContentLoaded", () => {
  let content = document.getElementsByClassName("content")[0];
  //start provvisorio ...ogni prodotto avrà un button
  let btn = createElement(
    "button",
    p("btnOpenFormDialog"), content    
  );
  btn.innerText = "open";
  btn.dataset.productconfig = JSON.stringify(initial_config);
  //end

  const btns = document.getElementsByClassName(p("btnOpenFormDialog"));
  for (const btn of btns) {
    btn.addEventListener(
      "click",
      (e) => {       
        let productConfig = JSON.parse(e.target.dataset.productconfig);
        __log(productConfig);
        if(productConfig.configurable === true){
          let current = productConfig.default;
          //current.uid = generateGUID() + '-';    

          if (productConfig.updated === true) {
            current = { ...productConfig.default, ...productConfig.current };
          }


          let divDimensions = createElement('fieldset', p('dimensions'), content);
          legend = createElement('legend', 'legend', divDimensions);
          legend.innerText = t('Dimensions');

          let selFactorMode = createElement('select', p('factor-mode'));
          addOptionToSelect(t('Number'), p('number option'), selFactorMode); 

          if(productConfig.width === true){
            inputWidth = createInputElement('input', p('input-dimension input-width'), divDimensions, t('Width'));
            inputWidth.setAttribute('value', current.width);
            addOptionToSelect(t('Width'), 'width', p('width'), selFactorMode);            
          }
          if(productConfig.height === true){
            inputHeight = createInputElement('input', p('input-dimension input-height'), divDimensions, t('Height'));
            inputHeight.setAttribute('value', current.height);
            addOptionToSelect(t('Lenght'), 'lenght', p('lenght'), selFactorMode);
            if(productConfig.width === true){
              addOptionToSelect(t('Square'), p('square'), selFactorMode);
            }
          }
          if(productConfig.depth === true){
            inputDepth = createInputElement('input', p('input-dimension input-depth'), divDimensions, t('Depth'));
            inputDepth.setAttribute('value', current.depth);
            addOptionToSelect(t('Depth'), 'depth', p('depth'), selFactorMode);
            if(productConfig.width === true && productConfig.height === true){
              addOptionToSelect(t('Cube'), 'cube', selFactorMode);
            }
          }

          let divComponents = createElement('fieldset', p('dimensions'), content);
          legend = createElement('legend', p('legend'), divComponents);
          legend.innerText = t('Components');
          if(current.components){

          current.components.forEach(function (component) {
            console.log(component);
            addComponentElement(component, selFactorMode, divComponents);
          });  
          }
          let divAddComponent = createElement('div', p('add-component'), content);
          btnAddComponent = createElement('button', p('btn-add-component'), divAddComponent);
          btnAddComponent.innerText = t('Add Component');

          ////content.appendChild(selFactorMode); // provv
          //to-do inserire components
          //to-do inserire add-component          
          //to-do ricalcolo


        }

      },
      false
    );
  }

});
