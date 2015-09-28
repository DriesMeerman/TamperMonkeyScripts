// ==UserScript==
// @name         wikipedia mobile rewrite
// @namespace    http://your.homepage/
// @version      0.1
// @description  this script is hacked together and might break on changes by wikipedia
//               however i was sick of not getting auto redirected to desktop site for wikipedia
// @author       You
// @match        https://*.m.wikipedia.org/*
// @grant        none
// ==/UserScript==

var url = window.location.href;
var url_fixed = url.search("m.wikipedia.org");
var new_url;

if (url_fixed != -1){
    new_url = "https://"+url.substring(url_fixed+2, url.length);
    rewriteUrl(new_url);
}else{
    //not m.wikipedia.org shouldn't ever happen
    alert('I need an adult'); 
}
function rewriteUrl(url_text){
    window.location.href = url_text;
}
