// Ambil konfigurasi dari file JSON
fetch('config.json')
  .then(response => response.json())
  .then(config => {
    // Set website name, logo, favicon
    document.title = config.website.name;
    document.querySelector('link[rel="icon"]').href = config.website.favicon;
    
    // Set logo dan footer
    const logo = document.getElementById('logo');
    logo.src = config.website.logo;
    logo.alt = config.website.name;

    const footer = document.getElementById('footer');
    footer.innerHTML = `${config.website.footer.text} | 
      <a href="${config.website.footer.socialLinks[0].url}">Facebook</a> |
      <a href="${config.website.footer.socialLinks[1].url}">Twitter</a> |
      <a href="${config.website.footer.socialLinks[2].url}">Instagram</a>`;

    // Set navbar
    const navbar = document.getElementById('navbar');
    config.ui.navbar.items.forEach(item => {
      const navItem = document.createElement('li');
      navItem.innerHTML = `<a href="${item.url}">${item.label}</a>`;
      navbar.appendChild(navItem);
    });

    // Set theme colors
    document.body.style.backgroundColor = config.ui.themeColors.background;
    document.body.style.color = config.ui.themeColors.text;
    document.querySelector('.navbar').style.backgroundColor = config.ui.themeColors.primary;
    document.querySelector('.footer').style.backgroundColor = config.ui.themeColors.secondary;

    // Set font family and size
    document.body.style.fontFamily = config.ui.font.family;
    document.body.style.fontSize = config.ui.font.size;

    // Display blog posts
    const blogSection = document.getElementById('blog-posts');
    config.blog.posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.classList.add('blog-post');
      postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p><em>By ${post.author} on ${new Date(post.date).toLocaleDateString()}</em></p>
        <div>${post.content}</div>
        <p><strong>Tags:</strong> ${post.tags.join(', ')}</p>
      `;
      blogSection.appendChild(postElement);
    });

    // Display company profile info
    const companyProfile = document.getElementById('company-profile');
    companyProfile.innerHTML = `
      <h3>${config.companyProfile.name}</h3>
      <p><strong>Address:</strong> ${config.companyProfile.address}</p>
      <p><strong>Phone:</strong> ${config.companyProfile.phone}</p>
      <p><strong>Email:</strong> <a href="mailto:${config.companyProfile.email}">${config.companyProfile.email}</a></p>
      <p>${config.companyProfile.about}</p>
    `;
  })
  .catch(error => {
    console.error('Error loading config:', error);
  });
