// ==UserScript==
// @name         Codemirror rerouter
// @description  Reroutes to codemirror mirror without cors
// @author       Swat
// @match        https://krunker.io/editor.html
// @match        https://krunker.io/scripting.html
// @updateURL    https://github.com/SwatDoge/SOTTKCMR/raw/refs/heads/master/userscript.user.js
// @downloadURL  https://github.com/SwatDoge/SOTTKCMR/raw/refs/heads/master/userscript.user.js
// @grant        none
// @run-at       document-start
// ==/UserScript==

new MutationObserver(async (mutations, observer) => {
    mutations.forEach(el => el.addedNodes.forEach(node => node.src &&= node.src.replace("codemirror.net", "codemirror-mirror.swatdo.ge")));
}).observe(document, {
    childList: true,
    subtree: true,
})
