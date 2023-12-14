// Function to create file input and upload button
const createFileUploadSection = (category) => {
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.id = `file-input-${category}`;
  fileInput.multiple = true;

  const uploadButton = document.createElement("button");
  uploadButton.textContent = "Upload";
  uploadButton.id = `upload-button-${category}`;

  // Request the tab ID from the background script
  chrome.runtime.sendMessage({ action: "getTabId" }, (response) => {
    if (response && response.tabId) {
      const tabId = response.tabId;

      uploadButton.addEventListener("click", () => {
        const files = fileInput.files;
        const fileMetadata = Array.from(files).map((file) => ({
          tabId: tabId,
          name: file.name,
          size: file.size,
          type: file.type,
          lastModified: file.lastModified,
          category: category,
        }));

        chrome.runtime.sendMessage({
          action: "upload",
          fileMetadata: fileMetadata,
        });
      });
    }
  });

  document.body.append(fileInput, uploadButton);
};

// Create two file upload sections
createFileUploadSection("green");
createFileUploadSection("red");
