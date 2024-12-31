// Fetch JSON data and render the page dynamically
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    renderHeader(data.header);
    renderHeroSection(data.hero);
    renderFooter(data.footer);
  });

// Render Header
function renderHeader(headerData) {
  const header = document.getElementById('header');
  let html = `<a href="${headerData.logo.link}" class="logo">${headerData.logo.text}</a><nav><ul>`;
  headerData.navLinks.forEach(link => {
    html += `<li><a href="${link.link}">${link.text}</a></li>`;
  });
  html += `</ul></nav>`;
  header.innerHTML = html;
}

// Render Hero Section
function renderHeroSection(heroData) {
  const heroSection = document.getElementById('hero-section');
  let html = `
    <div class="hero-image">
      <img src="${heroData.image}" alt="Profile Image">
    </div>
    <div class="hero-content">
      <h1>${heroData.title}</h1>
      <h2>${heroData.name}</h2>
      <p>${heroData.description}</p>
      <div class="hero-buttons">`;
  heroData.buttons.forEach(button => {
    html += `<a href="${button.link}" class="btn-${button.style}">${button.text}</a>`;
  });
  html += `</div><div class="social-links">`;
  heroData.socialLinks.forEach(link => {
    html += `<a href="${link.link}" class="icon-${link.icon}"></a>`;
  });
  html += `</div></div>`;
  heroSection.innerHTML = html;
}

// Render Footer
function renderFooter(footerData) {
  const footer = document.getElementById('footer');
  footer.innerHTML = `<p>${footerData.text}</p>`;
}
