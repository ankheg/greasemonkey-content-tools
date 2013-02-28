
// ==UserScript==
// @name           mixed_characters
// @namespace      mixed_characters
// @description    Скрипт выделяет слова, в которых первые буквы кириллические, а дальше - латинские. Например вместо латинской "си" написана русская "эс". Такие ошибки не позволяют поисковым системам правильно индексировать страницы. Скрипт лучше включать на страницах со списком моделей товаров и, обнаружив ошибки, сразу же отключать.
// @include        *
// ==/UserScript==


(function() {

  var c = document.body;
  var str = c.innerHTML;
  
  str = str.replace(/([а-яА-Я]+[-]*[a-zA-Z0-9]+)/gi, '<span style="background-color: yellow;">&bull; </span> $1');
  
  c.innerHTML = str; 
  
})();
