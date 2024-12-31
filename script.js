
fetch("config.json")
  .then((response) => response.json())
  .then((data) => {
    // Set site title
    document.title = data.siteSettings.title;

    // Set menu
    const menu = document.getElementById("menu");
    data.menus.forEach((item) => {
      const link = document.createElement("a");
      link.href = item.url;
      link.textContent = item.name;
      menu.appendChild(link);
    });

    // Set features dynamically
    const content = document.getElementById("content");
    content.innerHTML = `
      <h1>Welcome to ${data.siteSettings.title}</h1>
      <p>${data.siteSettings.description}</p>
    `;

    // Add animations
    if (data.animations.fadeIn) {
      content.classList.add("fade-in");
    }
  })
  .catch((error) => console.error("Error loading config.json:", error));

// Example animation
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#content").classList.add("fade-in");
});
