document.getElementById("btn").onclick = function (ev) {
  ev.preventDefault();
  jsonConfig = initial_config;
  document.getElementById("code").innerHTML = JSON.stringify(
    jsonConfig,
    null,
    2
  );

  
  var dimension = {
    width: jsonConfig.default.width,
    height: jsonConfig.default.height,
    depth: jsonConfig.default.depth,
  };

  if (jsonConfig.configurable === true) {
    let current = jsonConfig.default;

    if(jsonConfig.updated === true){
        current = { ...jsonConfig.default, ...jsonConfig.current };        
    }
  
    /* build dimension fields */
    if (jsonConfig.width === true) {
      buildDimensionField("width", "width", current.width, "config-product");
    }
  } // end jsonConfig.configurable === true




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
      dimension[id] = event.target.value;      
      //rebuildFactors();
    });

    var parent = document.getElementById(appendTo);
    parent.appendChild(labl);
    parent.appendChild(field);
  }
};
