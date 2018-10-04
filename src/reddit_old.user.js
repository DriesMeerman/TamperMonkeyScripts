// ==UserScript==
// @name         Reddit old redirect
// @namespace    xyz.chrozera
// @version      1
// @description  reddit redesign sucks
// @author       Dries Meerman
// @run-at        document-start
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

 var newUrl = location.href.replace("https://www.", 'https://old.');
    window.location.replace(newUrl);
})();