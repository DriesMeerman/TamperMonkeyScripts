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

const url = window.location.href;
const url_fixed = url.search("m.wikipedia.org");
let new_url;

if (url_fixed != -1){
    new_url = "https://"+url.substring(url_fixed+2, url.length);
    window.location.href = new_url;
}
