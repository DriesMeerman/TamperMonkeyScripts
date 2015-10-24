// ==UserScript==
// @name         imgur top remover
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       You
// @match        https://imgur.com/*
// @grant        none
// ==/UserScript==
function addJQuery(callback) {
  		var script = document.createElement("script");
    		script.setAttribute("src", "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js");
      		script.addEventListener('load', function() {
          		var script = document.createElement("script");
	      		script.textContent = "window.jQ=jQuery.noConflict(true);(" + callback.toString() + ")();";
	          	document.body.appendChild(script);
		}, false);
		document.body.appendChild(script);
	}

function removeAddBs(){
       $( document ).ready(function() {
              $('#cta-container-placeholder').remove();
       });
					   
					       
}
addJQuery(removeAddBs);
