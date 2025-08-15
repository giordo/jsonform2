document.getElementById("btn").onclick = function (ev) {  
  ev.preventDefault();
  const newID = generateGUID() + "-";
  
  //to-do prevent multiple click on openButton


  jsonConfig = initial_config;
  //document.getElementById("code").innerHTML = JSON.stringify( jsonConfig, null, 2);
  
  if (jsonConfig.configurable === true) {
    let current = jsonConfig.default;
    current.uid = newID;    

    if (jsonConfig.updated === true) {
      current = { ...jsonConfig.default, ...jsonConfig.current };
    }

    if(!document.getElementById('giordo-euitlombs')){
      console.log('not');
      var hiddenID = document.createElement("input");
      hiddenID.id = 'giordo-euitlombs';
      hiddenID.value = current.uid;
      document.body.appendChild(hiddenID);
    }
    
    var fieldbit = 0;

    /* build dimension fields */
    if (jsonConfig.width === true) {
      buildDimensionField(
        current.uid + "width",
        t("Width"),
        current.width,
        "config-product"
      );
      fieldbit = fieldbit + 1;
    }
    if (jsonConfig.height === true) {
      buildDimensionField(
        current.uid + "height",
        t("Height"),
        current.height,
        "config-product"
      );
      fieldbit = fieldbit + 2;
    }
    if (jsonConfig.depth === true) {
      buildDimensionField(
        current.uid + "depth",
        t("Depth"),
        current.depth,
        "config-product"
      );
      fieldbit = fieldbit + 4;
    }

    /* build factors field (to store value)*/
    buildFieldToStoreFactorValue(current.uid + "factor-unit", "code", 1);
    buildFieldToStoreFactorValue(current.uid + "factor-width", "code", current.width);
    buildFieldToStoreFactorValue(current.uid + "factor-height", "code", current.height);
    buildFieldToStoreFactorValue(current.uid * "factor-depth", "code", current.depth);
    buildFieldToStoreFactorValue(current.uid + "factor-square", "code", parseInt(current.width) * parseInt(current.height) / 1000000); 
    buildFieldToStoreFactorValue(current.uid + "factor-cube", "code", parseInt(current.width) * parseInt(current.height) * parseInt(current.depth) / 1000000000);
      
    /* build option field to use in components factor select */
    var sel = document.createElement("select");
    sel.appendChild(buildOptionOnSelectFactor("unit", t("Unit")));
    if (fieldbit == 1 || fieldbit > 2) {
      sel.appendChild(buildOptionOnSelectFactor("width", t("Width")));
    }
    if (fieldbit >= 2) {
      sel.appendChild(buildOptionOnSelectFactor("lengh", t("Length")));
    }
    if (fieldbit >= 3) {
      sel.appendChild(buildOptionOnSelectFactor("square", t("Square")));
    }
    if (fieldbit >= 4) {
      sel.appendChild(buildOptionOnSelectFactor("depth", t("Depth")));
    }
    if (fieldbit >= 5) {
      sel.appendChild(buildOptionOnSelectFactor("cube", t("Cube")));
    }
    

  } // end jsonConfig.configurable === true



function updateFactorFields(event){
  
   var uid = document.getElementById('giordo-euitlombs').value;

  var w = document.getElementById(uid + 'factor-width');
   var h = document.getElementById(uid + 'factor-height');
   //var d = document.getElementById(uid + 'factor-depth');
   var s = document.getElementById(uid + 'factor-square');
   var c = document.getElementById(uid + 'factor-cube');  
   console.log((parseInt(h.value) + parseInt(w.value)) + ' ' + h.value);
alert(w);
   s.value = 37; //(parseInt(w.value) * parseInt(h.value)) /1000000;
   //c.value = w.value * h.value * d.value /1000000000;  
}

  function buildFieldToStoreFactorValue(id, appendTo, value) {
    var field = document.createElement("input");
    field.id = prefix(id);
    field.setAttribute("type", "number"); //to-do hidden field
    field.setAttribute("disabled", "disabled");   
    field.dataset.factortype = id; 
    field.value = value;
    var parent = document.getElementById(appendTo);
    parent.appendChild(field);
  }

  function buildOptionOnSelectFactor(name, title) {
    var opt = document.createElement("option");
    opt.innerHTML = title;
    opt.name = name;
    return opt;
  }

  function buildDimensionField(id, label, value, appendTo) {
    // changedimension
    var labl = document.createElement("label");
    labl.setAttribute("for", prefix(id));
    labl.innerHTML = label;

    var field = document.createElement("input");
    field.id = prefix(id);
    field.setAttribute("type", "number");
    field.setAttribute("min", 0);
    field.setAttribute("step", 1);
    field.value = value;
    field.addEventListener("change", (event) => {      
        updateFactorFields(event);
    });

    var parent = document.getElementById(appendTo);
    parent.appendChild(labl);
    parent.appendChild(field);
  }
};
