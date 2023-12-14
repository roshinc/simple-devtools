chrome.devtools.panels.create("My Extension", "", "panel.html", (panel) => {
  // Connection to background
  // const port = chrome.runtime.connect({ name: "devtools" });
  // port.postMessage({ tabId: chrome.devtools.inspectedWindow.tabId });
  // port.onMessage.addListener((msg) => {
  //   if (msg.fromTab === chrome.devtools.inspectedWindow.tabId) {
  //     // Forward the message to the panel
  //     chrome.runtime.sendMessage(msg);
  //   }
  // });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.tabId === chrome.devtools.inspectedWindow.tabId) {
    // Forward the message to the panel
    chrome.runtime.sendMessage(request);
  }
});
