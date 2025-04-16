// Animações de barra de progresso
window.onload = function() {
  const skills = document.querySelectorAll('.skill-progress');
  skills.forEach((skill, index) => {
    setTimeout(() => {
      skill.style.width = skill.classList.contains('js-progress') ? '80%' :
                          skill.classList.contains('html-css-progress') ? '90%' :
                          '70%';
    }, 500);
  });
};

// Animação de rolagem suave para as seções
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});
