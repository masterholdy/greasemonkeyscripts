// ==UserScript==
// @name         Sonarr Season Pass Cleaner
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://localhost:8989/seasonpass
// @grant        none
// @require http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==
var $ = null;

(function() {
    'use strict';
    window.onload = function() {
        if (window.jQuery) {
            $ = window.jQuery;
            main();
        } else {
            location.reload();
        }
    }
})();



function main() {
    var showContainer = $("#x-series>table>tbody>tr");
    showContainer.each((x) => {
        var showRow = showContainer[x];
        var showSeasonCol = $("td.seasons-cell>span", showRow);
        var showComplete = true;

        showSeasonCol.filter(showID => {
            var show = showSeasonCol[showID];
            var showStatus = $("span.label>span.season-status", show);
            showStatus.filter(statusID => {
                var status = showStatus[statusID];
                var total = status.innerText.split("/");
                var complete = total[0] == total[1];
                if (complete || status.title.contains("No aired episodes")) {
                    status.parentElement.parentElement.remove();
                } else {
                    showComplete = false;
                }
            });
        });
        if (showComplete) {
            showRow.remove();
        }
    });
}
