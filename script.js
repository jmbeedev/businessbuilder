// Initialize app and load configuration
document.addEventListener("DOMContentLoaded", function() {
  fetch("config.json")
    .then(response => response.json())
    .then(config => {
      loadConfig(config);
      setupEventListeners(config);
    })
    .catch(error => console.error("Error loading config:", error));
});

// Load configuration settings and apply them
function loadConfig(config) {
  // Apply color scheme
  document.body.style.backgroundColor = config.website.theme.color_scheme.background;
  document.querySelector("header").style.backgroundColor = config.website.theme.color_scheme.primary;
  document.querySelector("footer").style.backgroundColor = config.website.theme.color_scheme.primary;

  // Apply font
  document.body.style.fontFamily = config.website.theme.font;

  // Setup navigation menu
  const menu = document.getElementById("menu");
  config.menu.main.forEach(item => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = item.link;
    a.textContent = item.title;
    li.appendChild(a);
    menu.appendChild(li);
  });

  // Load pages
  const invitationContent = document.getElementById("invitation-content");
  config.pages.forEach(page => {
    const div = document.createElement("div");
    div.innerHTML = page.content;
    invitationContent.appendChild(div);
  });
}

// Set up event listeners for customization
function setupEventListeners(config) {
  // Color Picker
  const colorPrimary = document.getElementById("color-primary");
  const colorSecondary = document.getElementById("color-secondary");
  colorPrimary.addEventListener("input", function() {
    document.querySelector("header").style.backgroundColor = colorPrimary.value;
  });
  colorSecondary.addEventListener("input", function() {
    document.querySelector("footer").style.backgroundColor = colorSecondary.value;
  });

  // Font Selector
  const fontSelector = document.getElementById("font-selector");
  fontSelector.addEventListener("change", function() {
    document.body.style.fontFamily = fontSelector.value;
  });
}
