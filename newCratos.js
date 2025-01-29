document.querySelectorAll('.accordion-header').forEach(header => {
      header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const icon = header.querySelector('.icon');

        // Toggle open/close
        content.classList.toggle('open');
        icon.textContent = content.classList.contains('open') ? '-' : '+';
      });
    });
    
// JavaScript for handling accordion and fullscreen display
document.querySelectorAll('.accordn-header').forEach((header, index) => {
  header.addEventListener('click', () => {
    const fullscreen = document.querySelector('.fullscreen');
    const fullscreenContent = document.querySelector('.fullscreen-content');

    // Get the content of the clicked accordion item
    const content = header.nextElementSibling.innerHTML;

    // Update the fullscreen content
    fullscreenContent.innerHTML = content;

    // Show the fullscreen container
    fullscreen.classList.add('active');
  });
});

// Close fullscreen content
document.querySelector('.cancel').addEventListener('click', () => {
  document.querySelector('.fullscreen').classList.remove('active');
});


//annonymous
document.querySelectorAll('.counter').forEach(counter => {
  const updateCounter = () => {
    const target = +counter.dataset.target;
    const current = +counter.innerText;
    const increment = target / 200;
    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      setTimeout(updateCounter, 10);
    }
  };
  updateCounter();
});
