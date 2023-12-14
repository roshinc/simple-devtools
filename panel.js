chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const outputDiv = document.getElementById("output");
  let span = document.createElement("span");
  span.textContent = request.text;

  // Set the color based on the category
  if (request.category === "green") {
    span.style.color = "green";
  } else if (request.category === "red") {
    span.style.color = "red";
  }

  outputDiv.appendChild(span);
  outputDiv.appendChild(document.createElement("br")); // New line after each input
});
