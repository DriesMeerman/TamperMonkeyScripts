// ==UserScript==
// @name         New Userscript
// @namespace    dingen
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*.service-now.com/sp_config*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var button = '<button style="position: fixed; top: 10px; left: 10px" >X</button>';
    var thing = $(button);
    thing.click(onClick);

    $('body').append(thing);

    function onClick(){
        $('.glyphicon.glyphicon-remove').trigger('click');
    }
})();
