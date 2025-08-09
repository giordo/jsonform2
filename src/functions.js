
function prefix(t){ //to-do
    var prefix = '';
    return prefix + t;
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