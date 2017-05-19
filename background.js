// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var onOff = 0;
// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {greeting: onOff}, function(response) {
      console.log(response.farewell);
      if (onOff < 2){
        onOff = 2;
      }
      else
      {
      onOff = 1;
      }

      console.log(onOff);
    });
  });

});