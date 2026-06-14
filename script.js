fetch('links.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('container');
    data.forEach(section => {
      const h2 = document.createElement('h2');
      h2.textContent = section.category;
      container.appendChild(h2);
      const ul = document.createElement('ul');
      section.links.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.url;
        a.textContent = link.title;
        a.target = '_blank';
        li.appendChild(a);
        ul.appendChild(li);
      });
      container.appendChild(ul);
    });
  })
  .catch(error => {
    console.error('Error loading links:', error);
  });
