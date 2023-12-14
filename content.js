const createTextBox = (id, category) => {
  const input = document.createElement("input");
  input.type = "text";
  input.id = id;

  // Request the tab ID from the background script
  chrome.runtime.sendMessage({ action: "getTabId" }, (response) => {
    if (response && response.tabId) {
      const tabId = response.tabId;

      input.addEventListener("input", () => {
        chrome.runtime.sendMessage({
          text: input.value,
          tabId: tabId,
          category: category,
          action: "input",
        });
      });
    }
  });

  document.body.prepend(input);
};

// Create two text boxes
createTextBox("my-extension-input-green", "green");
createTextBox("my-extension-input-red", "red");
