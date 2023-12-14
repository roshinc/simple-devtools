chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.fileMetadata) {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; // Clear previous content

    request.fileMetadata.forEach((file) => {
      let fileInfo = document.createElement("div");
      fileInfo.textContent = `Name: ${file.name}, Size: ${
        file.size
      } bytes, Type: ${file.type}, Last Modified: ${new Date(
        file.lastModified
      ).toLocaleString()}`;
      fileInfo.style.color = file.category === "green" ? "green" : "red";

      outputDiv.appendChild(fileInfo);
    });
  }
});

// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Example of dynamically adding an 'anUpload' section
  addUploadSection("Action Name", [{ key: "File Metadata", value: "Data" }]);
});

function addUploadSection(actionName, files) {
  const container = document.getElementById("uploads-container");

  const uploadSection = document.createElement("div");
  uploadSection.classList.add("anUpload");

  const header = document.createElement("h2");
  header.textContent = actionName;
  uploadSection.appendChild(header);

  files.forEach((file) => {
    const fileSection = document.createElement("div");
    fileSection.classList.add("file-section");

    const metadata = document.createElement("p");
    metadata.textContent = `${file.key}: ${file.value}`;
    fileSection.appendChild(metadata);

    // Add progress bar
    const progressBar = document.createElement("div");
    progressBar.classList.add("progress-bar");
    fileSection.appendChild(progressBar);

    uploadSection.appendChild(fileSection);
  });

  container.appendChild(uploadSection);
}
