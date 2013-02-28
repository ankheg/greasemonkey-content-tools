
// ==UserScript==
// @name           mixed_characters
// @namespace      mixed_characters
// @description    mixed_characters
// @include        *
// ==/UserScript==


(function() {

  var c = document.body;
  var str = c.innerHTML;
  
  str = str.replace(/([а-яА-Я]+[-]*[a-zA-Z0-9]+)/gi, '<span style="background-color: yellow;">&bull; </span> $1');
  
  c.innerHTML = str; 
  
})();
