document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer minimalista pre-configurado para emular bibliotecas como AOS
  // garantindo performance (0 CLS) e sem as lentidões de libs pesadas no First Contentful Paint.
  
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.05
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-animate');
        // Para parar de observar após animar uma vez:
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('[data-aos]').forEach(element => {
    observer.observe(element);
  });
});
