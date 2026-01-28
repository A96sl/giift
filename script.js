document.getElementById("startButton").addEventListener("click", function() {
  window.location.href = "second.html";
});
// Start button
document.getElementById("startButton").addEventListener("click", function() {
  window.location.href = "second.html";
});

// Back button
const backButton = document.getElementById("backButton");
if (backButton) {
  backButton.addEventListener("click", function() {
    window.location.href = "index.html";
  });
}
