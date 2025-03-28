document.querySelectorAll('.faq__question').forEach(item => {
    item.addEventListener('click', () => {
      const answer = item.nextElementSibling;
      const icon = item.querySelector('.faq__icon');
      answer.classList.toggle('active');
      icon.textContent = answer.classList.contains('active') ? '−' : '+';
    });
  });

  document.querySelectorAll('.mission__dec-header').forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      const icon = header.querySelector('.mission__dec-icon');
      
      content.classList.toggle('active');
      
      icon.textContent = content.classList.contains('active') ? '−' : '+';
    });
  });