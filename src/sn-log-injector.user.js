// ==UserScript==
// @name         ServiceNow JSON Logger
// @namespace    chrozera.xyz
// @version      1.0
// @description  Add an JSON logger to the ServiceNow script page.
// @author       Dries Meerman
// @licence      MIT
// @match        *.service-now.com/sys.scripts.do*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/DriesMeerman/TamperMonkeyScripts/master/src/sn-log-injector.user.js
// @downloadURL  https://raw.githubusercontent.com/DriesMeerman/TamperMonkeyScripts/master/src/sn-log-injector.user.js
// ==/UserScript==

(() => {
     const logFunc = "var x = function(a){gs.info(JSON.stringify(a,0,4))};\n\n";
     const code = document.getElementById('runscript');
     code.innerHTML = logFunc + code.innerHTML;
})();
