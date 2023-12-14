chrome.runtime.onInstalled.addListener(() => {
  // This is where you can initialize anything when the extension is installed or updated.
});
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getTabId" && sender.tab) {
    sendResponse({ tabId: sender.tab.id });
  } else if (request.action === "upload" && sender.tab) {
    chrome.runtime.sendMessage({
      fileMetadata: request.fileMetadata,
      tabId: sender.tab.id,
    });
  }
  return true;
});
