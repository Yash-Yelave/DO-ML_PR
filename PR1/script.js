const messages = [
  "Pipeline successful: Artifacts deployed! 🚀",
  "DevOps automated: Build complete. ✅",
  "Cloud sync active: Version 2.0 live! ☁️",
  "GitHub Pages updated: Site is fresh. 🔥",
  "Continuous testing passed: Code verified! 🛠️"
];

function showMessage() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  const msgElement = document.getElementById("msg");
  msgElement.innerHTML = messages[randomIndex];
  msgElement.style.color = "#6366f1";
  msgElement.style.fontWeight = "bold";
}

