
// ==UserScript==
// @name         自动跳过爱奇艺广告（免费版）
// @namespace    iqiyi
// @version      1.0
// @description  在YouTube网页上自动跳过广告
// @author       God Zhuo
// @match        *://www.iqiyi.com/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  const SKIP_BUTTON_SELECTOR = '.skippable-after';
  const SKIP_BUTTON_SELECTOR1 = ".cupid-pause-max-close-btn";

  const CHECK_INTERVAL = 500;

  function skipAd() {
    const skipButton = document.querySelector(SKIP_BUTTON_SELECTOR);
    const skipButton1 = document.querySelector(SKIP_BUTTON_SELECTOR1);
    
    if (skipButton) {
      skipButton.click();
    }
    if(skipButton1){
      skipButton1.click();
    }
  }

  setInterval(skipAd, CHECK_INTERVAL);
})();
