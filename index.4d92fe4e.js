!function(){var t={btnPlay:document.querySelector(".js-btn-play"),btnStop:document.querySelector(".js-btn-stop")};function n(){t.btnStop.classList.add("is-hidden")}t.btnPlay.addEventListener("click",(function(n){console.log("Click play"),t.btnPlay.classList.add("is-hidden"),t.btnStop.classList.remove("is-hidden")})),t.btnStop.addEventListener("click",(function(e){console.log("Click stop"),n(),t.btnPlay.classList.remove("is-hidden")})),n()}();
//# sourceMappingURL=index.4d92fe4e.js.map
