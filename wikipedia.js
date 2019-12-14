// ==UserScript==
// @name         Wiki Antibanner
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*.wikipedia.org/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.onload = function() {
        main();
    }
})();

function main(){
    var id = "WMDE-Banner-Container"

    var banner = document.getElementById(id);
    banner.hidden = true
}
