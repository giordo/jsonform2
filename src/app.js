const appPrefix = "abc-";

window.addEventListener("DOMContentLoaded", () => {
  let content = document.getElementsByClassName("content")[0];
  //start provvisorio ...ogni prodotto avrà un button
  let btn = createElement(
    "button",
    p("btnOpenFormDialog"), content    
  );
  btn.innerText = "open";
  btn.setAttribute("id", generateGUID());
  btn.dataset.productconfig = JSON.stringify(initial_config);
  //end

  const btns = document.getElementsByClassName(p("btnOpenFormDialog"));
  for (const btn of btns) {
    btn.addEventListener(
      "click",
      (e) => {       
        let productConfig = JSON.parse(e.target.dataset.productconfig);
        if(productConfig.configurable === true){
          let divDimensions = createElement('fieldset', p('dimensions'), content);
          let selFactorMode = createElement('select', p('factor-mode'));
          if(productConfig.width === true){
            inputWidth = createInputElement('input', p('input-dimension input-width'), divDimensions, t('Width'));
          }
          if(productConfig.height === true){
            inputHeight = createInputElement('input', p('input-dimension input-height'), divDimensions, t('Height'));
          }
          if(productConfig.depth === true){
            inputDepth = createInputElement('input', p('input-dimension input-depth'), divDimensions, t('Depth'));
          }
        }

      },
      false
    );
  }

});
