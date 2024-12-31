// Ambil data dari JSON
fetch('data.json')
  .then(response => {
    if (!response.ok) throw new Error('Failed to fetch JSON');
    return response.json();
  })
  .then(data => {
    // Generate Menu
    const menu = document.getElementById('menu');
    data.menu.forEach(item => {
      const link = document.createElement('a');
      link.href = item.link;
      link.textContent = item.name;
      menu.appendChild(link);
    });

    // Generate Content
    const content = document.getElementById('content');
    Object.keys(data.sections).forEach(key => {
      const section = document.createElement('section');
      section.id = key;

      const title = document.createElement('h2');
      title.textContent = data.sections[key].title;
      section.appendChild(title);

      const paragraph = document.createElement('p');
      paragraph.textContent = data.sections[key].content;
      section.appendChild(paragraph);

      content.appendChild(section);
    });
  })
  .catch(error => console.error('Error loading JSON:', error));
